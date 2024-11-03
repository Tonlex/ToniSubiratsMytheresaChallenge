class LoginPage {
  visit() {
    cy.visit('/login')
  }

  enterUsername(username) {
    cy.get('input[name="username"]').type(username);
  }

  enterPassword(password) {
    cy.get('input[name="password"]').type(password);
  }

  submit() {
    cy.get('#loginForm').submit();
  }

  login(username, password) {
    this.enterUsername(username);
    this.enterPassword(password);
    this.submit();
  }
}

export default new LoginPage();
