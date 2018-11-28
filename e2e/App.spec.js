const TIMEOUT = 120000

describe('App', () => {
  it('should display login', async () => {
    await waitFor(element(by.label('Login screen')))
      .toBeVisible()
      .withTimeout(TIMEOUT)

    const emailField = element(by.label('Fill your email')).atIndex(0)
    await expect(emailField).toBeVisible()
    await emailField.tap()
    await emailField.typeText('xcapetir@gmail.com')

    const passwordField = element(by.label('Fill your password')).atIndex(0)
    await expect(passwordField).toBeVisible()
    await passwordField.tap()
    await passwordField.typeText('CwzLKz2EjM9u')

    const signInButton = element(by.label('Submit to sign in'))
    await expect(signInButton).toBeVisible()
    await signInButton.tap()
  })

  // it('should display map', async () => {
  //   await waitFor(element(by.label('This is the WATCHDOG map')))
  //     .toBeVisible()
  //     .withTimeout(TIMEOUT)
  // })
})
