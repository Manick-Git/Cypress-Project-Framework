import '@cypress/xpath';

export class homePage{

constructor(){

    this.MyAccountLink = '//span[normalize-space()="My Account"]';
    this.RegisterLink = '//a[normalize-space()="Register"]';
}

openURL(){

    cy.visit('/')
}

navigatetoRegistration(){

    cy.xpath(this.MyAccountLink).click({ force: true });
    cy.xpath(this.RegisterLink).click();

}

}