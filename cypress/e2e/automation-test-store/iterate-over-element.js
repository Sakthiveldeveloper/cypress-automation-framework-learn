/// <reference types ="cypress" />

//each
describe('Iterate over the element', () => {
    it("log information of Hair care product", () => {
        cy.visit("https://www.automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

        //show index names
        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            cy.log("Index: " + index + " : " + $el.text())
        })
    })

    it("Add discreption of specific product", () => {
        cy.visit("https://www.automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()


        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            if ($el.text().includes('Curls to straight Shampoo')) {
                // cy.wrap($el).click()
                cy.wrap($el).click()
            }
        })
    })
})