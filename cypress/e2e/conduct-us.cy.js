
describe('Test Contact Us form via webdriveri', () => {

    //challence 1
    //open the conduct from page and automatically full fill the name and all other filed in the that form and reset and submit  button
    it('Should be able to submit a successful submission via contact us form',() =>{
        //open the conduct us from webpagess
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')

        //fill the  firstname 
        cy.get('[name="first_name"]').type('KaayTest First name')

        //fill the lastname
        cy.get('[name="last_name"]').type('KaayTest last name')
        
        //fil the email
        cy.get('[name="email"]').type('sakthiveltest@gmail.com')

        //fill the comments
        cy.get('textarea.feedback-input').type('Kaay comment section')

        //click the submit button
        cy.get('[type="submit"]').click()

        //click the Reset button
        // cy.get('[type="reset"]').click();

    })




//open the home page of modela web and click the  contact click
    // it('Should be able to submit a successful submission via contact us form', () => {

    //     //just visit the webpage 
    //     cy.visit('http://www.webdriveruniversity.com/')

    //     //just contact-us  button click
    //     cy.get('#contact-us > .thumbnail > .section-title').click()
        
    // })

})


// just go to the web

// it('Should be able to submit a successful submission via contact us form', () => {
//     cy.visit('http://www.webdriveruniversity.com/')
// })