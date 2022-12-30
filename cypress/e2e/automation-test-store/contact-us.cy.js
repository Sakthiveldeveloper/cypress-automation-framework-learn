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
        cy.get("a[href$='contact']").click()  //dynamic selector,
        // cy.xpath("//a[contains(@href, 'contact')]").click();   //xpathselector

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
    })

    //visit or open the home page of the automation store
    // it('should be able to submit a successful submission via contact us form', () =>{
    //     cy.visit("https://www.automationteststore.com/")
    // })
})