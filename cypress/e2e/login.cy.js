import LoginPage from '../pageObjects/loginPage';

describe('Login Functionality Check', () => {
  it('Should log in successfully with valid credentials', () => {
    LoginPage.visit();
    LoginPage.login(Cypress.env('username'), Cypress.env('password'));
    cy.url().should('not.include', 'login'); // Replace with actual dashboard URL
  });
});
