describe('Bad Path flow testing', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/#/qwertyuiop');
  });

  it('Should give the user an error and way to go home on a bad path', () => {
    cy.get('.bad-path-text').should('contain', 'Oops! Something went wrong.')
    .get('.bad-path-button').click()
    .url().should('not.contain', '/qwertyuiop');
  });
});