{/* <reference type="cypress"/> */} // that not a cy.js file use this links
/// <reference types="cypress-xpath" />

describe('Test Contact Us for via  Automation  Test Store', () =>{

    //vist automation webpage and goto contact page
    it('should be able to submit a successful submission via contact us form', () =>{
        //vsit the home page
        cy.visit("https://www.automationteststore.com/")

        //clickthe button contact us
        // selectors, css selectors, x-path selectors, cypress-xpath, dynamic selector
        // cy.get('.info_links_footer > :nth-child(5) > a').click() //cypress normal selector
        // cy.get("a[href$='contact']").click()  //dynamic selector,
        // cy.xpath("//a[contains(@href, 'contact')]").click();   //xpathselector

        //getname of button with promise , text is j query
        cy.get("a[href$='contact").click().then(function (buttonText) {
            console.log("You are click the button name is:",  buttonText.text());
        })

        //fill conductus from page 
        //fillfisrtname
        cy.get('#ContactUsFrm_first_name').type('kaayFirstname')

        //fillemail
        cy.get('#ContactUsFrm_email').type('sakthivel@gmail.com')
        
        //fillcomment
        cy.get('#ContactUsFrm_enquiry').type('testing comment button section')

        //clickresut button
        // cy.get('.col-md-1 > .btn').click()

        //click submit button
        cy.get('.col-md-6 > .btn').click()

        //assortion and verify the message
        cy.get('.mb40 > :nth-child(3)').should('have.text','Your enquiry has been successfully sent to the store owner!')
        // cy.get('.mb40 > :nth-child(3)').should('have.text','Your enquiry has been successfully sent to the store owner!2')

        //log comment testing

        cy.log('Testig log')
    })

    //visit or open the home page of the automation store
    // it('should be able to submit a successful submission via contact us form', () =>{
    //     cy.visit("https://www.automationteststore.com/")
    // })
})