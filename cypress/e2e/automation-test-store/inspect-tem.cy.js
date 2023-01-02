/// <reference types="cypress" />


describe('Inspect Automation test Store items Using chain of commands', () => {
    it('click on the First item using item header', () => {
        //vsit the home page
        cy.visit("https://www.automationteststore.com/")

        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click()
    })

    it('click on the First item using item text', () => {
        //vsit the home page
        cy.visit("https://www.automationteststore.com/")
        //click with header name 
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click()
    })

    it.only('CLik first item using index', ()=>{
        cy.visit("https://www.automationteststore.com/");

        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click();
    } )
})