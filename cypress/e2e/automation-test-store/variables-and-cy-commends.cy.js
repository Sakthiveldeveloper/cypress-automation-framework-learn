// / <reference types ="cypress />

const { fn } = require("check-more-types")

//variable
describe('Verifying variables, cypress  commends and Jquery commands', ()=>{

    //variable vs recommended comments working
    it("Navigating tp specific product page",()=>{
        cy.visit("https://www.automationteststore.com/")

        //following fail
        const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup")
        // const makeupLink = cy.get('[href="https://automationteststore.com/index.php?rt=product/category&path=36"]')
        const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare")
        // const skincareLink = cy.get('[href="https://automationteststore.com/index.php?rt=product/category&path=43"]')
        makeupLink.click();
        skincareLink.click({ multiple: true, force: true});

        //follwing pass
        // const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup")
        // makeupLink.click();
        // const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare")
        // skincareLink.click({ multiple: true, force: true});

        //recommended Approch
        //because we dont know the ordwr of execution so 
        cy.get("a[href*='product/category&path=']").contains("Makeup").click({ multiple: true, force: true})
        cy.get("a[href*='product/category&path=']").contains("Skincare").click({ multiple: true, force: true})

    })

    //varibale in promise working
    it("Navigating tp specific product page",()=>{
        cy.visit("https://www.automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains("Makeup").click()

        // / follwig fail
        // const header = cy.get('h1 .maintext');
        // cy.log(header)

        //use promise
        cy.get('h1 .maintext').then(($headerText) => {
            const headerText = $headerText.text()
            cy.log(("Found text: " + headerText))
            expect(headerText).is.eq("Makeup")
        })

    })

    //closure
    it.only("validate the property of the Contact Us page",()=>{
        cy.visit("https://automationteststore.com/index.php?rt=content/contact")
        //uses cypress commend abd chainig
        cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name')

        //Jquery Approach 
        cy.contains('#ContactUsFrm', 'Contact Us Form').then(text =>{
            const firstNameText = text.find('#field_11').text()
            expect(firstNameText).to.contain('First name')
        //Embedded commands closure
            cy.get('#field_11').then(fnText =>{
                cy.log(fnText.text())
                cy.log(fnText)
            })
        })
    })
})