describe('Home page flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Should show the home page', () => {
    cy.get('.home-logo')
    .get('#searchBar')
    .get('.search-button');
  });

  it('Should be able to search for a city', () => {
    cy.intercept('GET', 'https://api.tomorrow.io/v4/weather/realtime?units=imperial&location=san%20diego&apikey=Sa3qGyFGh6o5EHPy2gEMa660EaXhtG9B', { fixture: 'weather.json' })

    .get('#searchBar').type('San Diego')
    .get('.search-button').click()
    .url().should('contain', '/city/san%20diego');
  });

  it('Should give an error if it can\'t find the user\'s search', () => {
    cy.intercept('GET', 'https://api.tomorrow.io/v4/weather/realtime?units=imperial&location=qwertyuiop&apikey=Sa3qGyFGh6o5EHPy2gEMa660EaXhtG9B', {
      statusCode: 500,
      body: {
        message: 'Request Timed Out'
      }
    })
    
    .get('#searchBar').type('qwertyuiop')
    .get('.search-button').click()
    .get('.error-text').should('contain', 'qwertyuiop');
  });
});