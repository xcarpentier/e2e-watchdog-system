const TIMEOUT = 120000

describe('App', () => {
  before(async () => {
    await device.launchApp({
      permissions: { location: 'always', notifications: 'YES' },
    })
  })

  it('should show login screen', async () => {
    await waitFor(element(by.label('Login screen')))
      .toBeVisible()
      .withTimeout(TIMEOUT)
  })

  it('should fill email', async () => {
    const emailField = element(by.label('Fill your email')).atIndex(0)
    await expect(emailField).toBeVisible()
    await emailField.tap()
    await emailField.typeText('xcapetir@gmail.com')
  })

  it('should fill password', async () => {
    const passwordField = element(by.label('Fill your password')).atIndex(0)
    await expect(passwordField).toBeVisible()
    await passwordField.tap()
    await passwordField.typeText('CwzLKz2EjM9u')
  })

  it('should submit sign in form', async () => {
    const signInButton = element(by.label('Submit to sign in'))
    await expect(signInButton).toBeVisible()
    await signInButton.tap()
  })

  it('should display map', async () => {
    await waitFor(element(by.label('This is the WATCHDOG map')))
      .toBeVisible()
      .withTimeout(TIMEOUT)
  })
})
