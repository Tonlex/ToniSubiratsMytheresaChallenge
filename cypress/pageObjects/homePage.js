class HomePage {
  visit() {
    cy.visit('/')
  }

  checkAllLinksStatus() {
    cy.get('a').each((link) => {
      const href = link.prop('href');
      if (href) {
        cy.request(href).then((response) => {
          expect(response.status).to.be.oneOf([200, 301, 302]);
        });
      }
    });
  }
}

export default new HomePage();