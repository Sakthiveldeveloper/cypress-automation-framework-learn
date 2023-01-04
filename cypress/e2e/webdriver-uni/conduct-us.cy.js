
describe('Test Contact Us form via webdriveri', () => {

    //challence 1
    //open the conduct from page and automatically full fill the name and all other filed in the that form and reset and submit  button
    it('Should be able to submit a successful submission via contact us form',() =>{
        //open the conduct us from webpagess
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        
        //document
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')

        //title
        cy.title().should('include', 'WebDriver | Contact Us')

        //url
        cy.url().should('include', 'contactus');
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

        //assortion and verify the message
        cy.get('h1').should('have.text', 'Thank You for your Message!');
        // cy.get('h1').should('have.text', 'Thank You for your Message22!');

    })

    //challence 2 (negative scenario)
    //not able to submit the conduct-us from because of missing the filed
    it('Should be not able to submit a successful submission via contact us form',() =>{
        //open the conduct us from webpagess
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')

        //fill the  firstname 
        cy.get('[name="first_name"]').type('KaayTest First name')

        //fill the lastname
        // cy.get('[name="last_name"]').type('KaayTest last name')

        //fill the comments
        cy.get('textarea.feedback-input').type('Kaay comment section')

        //click the submit button
        cy.get('[type="submit"]').click()

        //click the Reset button
        // cy.get('[type="reset"]').click();

        // Error: all fields are required
        // Error: Invalid email address

        //contains
        cy.get('body').contains('Error: all fields are required')
        // cy.get('body').contains('Error: all fields are required2')

    })

    //only test the idivitual test use {only} 
    // it.only('Test Particulare test only', ()=>{
    //     cy.visit('http://www.google.com/')
    // })
    //and also {skip} method help to skip particlar test or it block



//open the home page of modela web and click the  contact click
    // it('Should be able to submit a successful submission via contact us form', () => {

    //     //just visit the webpage 
    //     cy.visit('http://www.webdriveruniversity.com/')

    //     //just contact-us  button click
    //     cy.get('#contact-us > .thumbnail > .section-title').click()
        
    // })

    //handle multiple  tabs
     it.only('Handle multupkle tabs via Jquery method',() =>{
        //open the conduct us from webpagess
        cy.visit('http://www.webdriveruniversity.com')
        //click contactus button
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
        //document
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')

        //title
        cy.title().should('include', 'WebDriver | Contact Us')

        //url
        cy.url().should('include', 'contactus');
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

        //assortion and verify the message
        cy.get('h1').should('have.text', 'Thank You for your Message!');
        // cy.get('h1').should('have.text', 'Thank You for your Message22!');

    })

})


// just go to the web

// it('Should be able to submit a successful submission via contact us form', () => {
//     cy.visit('http://www.webdriveruniversity.com/')
// })