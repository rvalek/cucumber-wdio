class LoginPage {
  open() {
    browser.url("/login/index.php");
  }

  get inputUsername() {
    return $("input#username");
  }

  get inputPassword() {
    return $("input#password");
  }

  get errorMessage() {
    const errorMessage = $("span.error");
    errorMessage.waitForDisplayed();
    return errorMessage.getText();
  }

  login({ username, password }) {
    this.inputUsername.setValue(username);
    this.inputPassword.setValue(`${password}\n`); // same as password + "\n"
  }
}

module.exports = new LoginPage();
