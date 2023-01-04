
/// <reference types="cypress" />

//templete of test
describe( "Handle js alerts ", () =>{
    //write test's here
    //test 1
    it('confirm js alert contains crct text',()=>{
        //write cypress codes here
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})

        cy.get('#button1').click()

        //manually handle text of alert
        cy.on('window:alert', (str) => {
            expect(str).to.equal('I am an alert box!')
        })
    })
    
    //test2
    it('validate the confirm js alert is click ok button',()=>{
        //write cypress codes here
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})

        cy.get('#button4').click()

        //manually handle text of alert
        cy.on('window:alert', (str) => {
            return true;
        })

        cy.get('#confirm-alert-text').contains('You pressed OK! ')
    })
    
    //challenge 
    it.only('validate the confirm js alert is click cancel button',()=>{
        //write cypress codes here
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})

        cy.get('#button4').click()

        //manually handle text of alert
        cy.on('window:confirm', (str) => {
            return false;
        })

        cy.get('#confirm-alert-text').contains('You pressed Cancel!')
    })
    //stub
    it.only('validate the confirm js alert using  is a stub',()=>{
        //write cypress codes here
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})

        const stub = cy.stub()
        cy.on('window:confirm', (stub))
        cy.get('#button4').click().then(()=>{
            expect(stub.getCall(0)).to.be.calledWith('Press a button!')
        }).then(()=>{
            return true;
        }).then(()=>{
            cy.get('#confirm-alert-text').contains('You pressed OK!')
        })
    })
})