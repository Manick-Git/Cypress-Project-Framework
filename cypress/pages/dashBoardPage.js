import '@cypress/xpath';

export class dashBoardPage{

weblocators={

    search_input: '.form-control.input-lg',
    click_search: '.btn.btn-default.btn-lg',
    MacBook: 'img[title="MacBook"]',
    MacBook_Air: 'img[title="MacBook Air"]',
    MacBook_Pro: 'img[title="MacBook Pro"]',
    addtocart: 'Add to Cart',
    successMessage: '.alert.alert-success.alert-dismissible'
}

searchProduct(productName){

    cy.get(this.weblocators.search_input).type(productName)
    cy.get(this.weblocators.click_search).click()
}

addToCart(){

    cy.contains(this.weblocators.addtocart).first().click()
}

verifySuccessMessage(){
    return cy.get(this.weblocators.successMessage)
}

}