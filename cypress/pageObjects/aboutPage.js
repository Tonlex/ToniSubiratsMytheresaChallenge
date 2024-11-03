class AboutPage {
  visit() {
    cy.visit('/')
  }

  checkNoConsoleErrors() {
    cy.on('window:before:load', (win) => {
      cy.spy(win.console, 'error').as('consoleError');
    });

    cy.get('@consoleError').should('not.be.called');
  }
}

export default new AboutPage();
