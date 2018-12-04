const TIMEOUT = 120000

describe('App', () => {
  before(async () => {
    await device.launchApp({
      permissions: { location: 'always', notifications: 'YES' },
    })
  })

  it('0 should show login screen', async () => {
    await waitFor(element(by.label('Login screen')))
      .toBeVisible()
      .withTimeout(TIMEOUT)
  })

  it('1 should fill email', async () => {
    const emailField = element(by.label('Fill your email')).atIndex(0)
    await expect(emailField).toBeVisible()
    await emailField.replaceText('xcapetir@gmail.com')
  })

  it('2 should fill password', async () => {
    const passwordField = element(by.label('Fill your password')).atIndex(0)
    await passwordField.replaceText('CwzLKz2EjM9u')
  })

  it('3 should submit sign in form', async () => {
    const signInButton = element(by.label('Submit to sign in'))
    await expect(signInButton).toExist()
    await signInButton.tap()
  })

  it('4 should display map', async () => {
    await waitFor(element(by.label('This is the WATCHDOG map')))
      .toBeVisible()
      .withTimeout(TIMEOUT)
  })

  it('5 should tap to open menu', async () => {
    const drawerIcon = element(by.label('Tap to open the menu'))
    await expect(drawerIcon).toBeVisible()
    await drawerIcon.tap()
  })

  it('6 should show menu', async () => {
    await waitFor(element(by.label('Menu opened')))
      .toBeVisible()
      .withTimeout(TIMEOUT)
  })

  it('7 should show go to my account', async () => {
    const goToMyAccount = element(by.label('Go to my account'))
    await expect(goToMyAccount).toBeVisible()
    await goToMyAccount.tap()
  })

  it('8 should log out', async () => {
    const logMeOut = element(by.label('Log me out'))
    await waitFor(logMeOut)
      .toBeVisible()
      .withTimeout(TIMEOUT)
    await logMeOut.tap()
  })

  it('9 should show login screen after logout', async () => {
    await waitFor(element(by.label('Login screen')))
      .toBeVisible()
      .withTimeout(TIMEOUT)
  })
})
