describe('City Weather Page user flow', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.tomorrow.io/v4/weather/realtime?units=imperial&location=san%20diego&apikey=Sa3qGyFGh6o5EHPy2gEMa660EaXhtG9B', { fixture: 'weather.json' })
    .visit('http://localhost:3000')
    .get('#searchBar').type('san diego')
    .get('.search-button').click();
  });

  it('Should show the weather data', () => {
    cy.get('.temp').should('contain', '77°F')
    .get('.weather-type').should('contain', 'Cloudy')

    .get('.precip-chance').should('contain', 'Chance for Precipitation')
    .get('.precip-chance > span').should('contain', '0%')

    .get('.humidity').should('contain', 'Humidity')
    .get('.humidity > span').should('contain', '35%')

    .get('.uv-index').should('contain', 'UV Index')
    .get('.stay-shady').should('contain', '5');
  });

  it('Should give the user a way to go back to the home page', () => {
    cy.get('img').click()
    .url().should('not.contain', '/city/')
  });
});