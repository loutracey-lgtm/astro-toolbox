describe('Basic specs', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Links every "book a class" button to the booking page', () => {
    cy.get('a.btn').each(($a) => {
      cy.wrap($a).should('have.attr', 'href', 'https://vidabook.com/loutracey.yoga')
    })
  })

  it('Links to Instagram', () => {
    cy.get('a.ig').should('have.attr', 'href', 'https://www.instagram.com/loutracey.yoga/')
  })
})
