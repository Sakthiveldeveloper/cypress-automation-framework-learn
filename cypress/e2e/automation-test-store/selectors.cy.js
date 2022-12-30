// <reference types="cypress" />

describe ('Examples in selector', () =>{
    it('Examples of Differend kind of selectors  used in the webdriveUI', () => {
        //by tag name 
        cy.get('input')

        //By attribute name and value
        cy.get("input[name='first_name']")

        //by id
        cy.get('#conatct_me');

        //By class
        cy.get('.feedback-input')

        //By multiple classes
        cy.get("[name = 'email'][placegholder='Email Address']")

        //Byxpath
        cy.xpath("//input[@name='first_name']")
    })
})