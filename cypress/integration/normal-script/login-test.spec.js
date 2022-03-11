const login = 'testuser@iptiq.com'
const password = 'test1234'
let random = (Math.random() + 1).toString(36).substring(7)


describe('Login test', function() {
    it('Success login', ()=>{
      cy.visit('/')  
      cy.get(':nth-child(1) > .form-control').type(login)
      cy.get(':nth-child(2) > .form-control').type(password)
      cy.get('.btn').click()
      cy.url().should('contains', '/')
      cy.contains('New Post').click()
      //cy.visit('/editor')
      cy.get(':nth-child(1) > .form-control').type(random)
      cy.get(':nth-child(2) > .form-control').type('This article is about test')
      cy.get(':nth-child(3) > .form-control').type('Writing something here bla bla bla')
      cy.get(':nth-child(4) > .form-control').type('#test tag')
      cy.get('.btn').click()
      cy.url().should('contains', `/article/${random}`)
      cy.get('.form-control').type('My comment is welcomed here')
      cy.get('.card-footer > .btn').click()
    })
})