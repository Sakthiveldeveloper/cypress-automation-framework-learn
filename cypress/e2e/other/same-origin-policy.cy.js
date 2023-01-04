/// <reference types="cypress" />

//templete of test
describe("Cypress  web sequrity", () => {
    //write test's here
    //test 1
    it('validate visiting two different domains', () => {
        //write cypress codes here
        cy.visit('http://www.webdriveruniversity.com/')
        cy.visit('https://automationteststore.com/')
    })

    //test2
    it.only('validate visiting two different domains', () => {
        //write cypress codes here
        cy.visit('https://www.google.com/')
        cy.visit('https://www.yahoo.com/')
    })

    it('validate visiting two different domains', () => {
        //write cypress codes here
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#automation-test-store').invoke('removeAttr', 'target').click()
    })

    // cy.origin('https://www.acme.com', { args: { hits } }, ({ hits }) => {
    //     // Inside callback baseUrl is https://www.acme.com
    //     cy.visit('/history/founder')
    //     // Commands are executed in secondary origin
    //     cy.get('h1').contains('About our Founder, Marvin Acme')
    //     // Passed in values are accessed via callback args
    //     cy.get('#hitcounter').contains(hits)
    // })
})