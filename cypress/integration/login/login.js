import { Given, And, When, Then } from "cypress-cucumber-preprocessor/steps";
const login = 'testuser@iptiq.com'
const password = 'test1234'
let randomValue = (Math.random() + 1).toString(36).substring(7)


Given('A user opens the login page', () => {
    cy.visit('/')
})
When('A user enter a username {string}', login => {
    cy.get(':nth-child(1) > .form-control').type(login)
})
And('A user enter a password {string}', password => {
    cy.get(':nth-child(2) > .form-control').type(password)
})
And('A user clicks on the login button', () => {
    cy.get('.btn').click()
})
Then ('A user will be logged in', () => {
    cy.url().should('contains', '/')
})
And ('A user clicks New Post', () => {
    cy.contains('New Post').click()
})
Then ('A user enter an article title {string}', randomValue => {
    cy.get(':nth-child(1) > .form-control').type(randomValue)
})
And ('A user write what this article is about "Article demo"', () => {
    cy.get(':nth-child(2) > .form-control').type('This article is about test')
})
And ('A user write Markdown "this is demo"', () => {
    cy.get(':nth-child(3) > .form-control').type('Writing something here bla bla bla')
})
And ('A user write a tag "#this is a tag"', () => {
    cy.get(':nth-child(4) > .form-control').type('#test tag')
})
And ('A user clicks on post button', () => {
    cy.get('.btn').click()
})
Then ('A user write down a comment', () => {
    cy.get('.form-control').type('My comment is welcomed here')
})
And ('A user click on post button', () => {
    cy.get('.card-footer > .btn').click()
})