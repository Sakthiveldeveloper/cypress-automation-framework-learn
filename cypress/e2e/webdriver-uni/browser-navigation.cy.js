
/// <reference types="cypress" />

//templete of test
describe( "Validate webdriveruni homepage links", () =>{
    //write test's here
    //test 1
    it.only('Confirm links redirect to the correctPage',()=>{
        cy.visit('http://www.webdriveruniversity.com')
        //click contactus button
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
        cy.url().should('include', 'contactus')

        cy.go('back')
        cy.reload()
        // cy.reload(true)


        cy.go('forward')
        cy.url().should('include', 'contactus')

        cy.go('back')
        cy.get('#login-portal').invoke('removeAttr', 'target').click({force:true})
        cy.url().should('include', 'Login-Portal')


        cy.go('back')
        cy.get('#to-do-list').invoke('removeAttr', 'target').click({force:true})
        cy.url().should('include', 'To-Do-List')

        cy.go('back')
        

    })
    
    //test2
    it('name of the test',()=>{
        //write cypress codes here
    })
})