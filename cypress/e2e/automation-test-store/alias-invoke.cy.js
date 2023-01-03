/// <reference types ="cypress" />

//each
describe('Alias and invoke', () => {
    it("Validate specific hair care product", () => {
        //visit the web page
        cy.visit("https://www.automationteststore.com/")
        //click the hair care header
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
        //goto the all productname
       cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('productThumbnail')
         //Now we can only use productThumbbail not full code
        cy.get('@productThumbnail').its('length').should('be.gt', 5)
        cy.get('@productThumbnail').should('include', 'Seaweed Conditioner')
    })

    it.only('validate Product thumbails',() =>{
        cy.visit("https://www.automationteststore.com/")
        // cy.get('form').find('input').should('not.have.class', 'disabled')
        cy.get('.thumbnail').as('productThumbnail')  //set alias
        cy.get('@productThumbnail').should('have.length', 16)
        cy.get('@productThumbnail').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart');
    })
})