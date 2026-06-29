import '@cypress/xpath';

export class homePage{

constructor(){

    this.MyAccountLink = '//span[normalize-space()="My Account"]';
    this.RegisterLink = '//a[normalize-space()="Register"]';
    this.LoginLink = '//a[normalize-space()="Login"]';
}

openURL(){

    cy.visit('/')
}

navigatetoRegistration(){

    cy.xpath(this.MyAccountLink).click({ force: true });
    cy.xpath(this.RegisterLink).click();

}

navigatetoLogin(){

    cy.xpath(this.MyAccountLink).click({ force: true });
    cy.xpath(this.LoginLink).click();

}

}