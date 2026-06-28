export class registerPage{

weblocators={

    firstName:'#input-firstname',
    lastName:'#input-lastname',
    eMail:'#input-email',
    telephone:'#input-telephone',
    password:'#input-password',
    passwordConfirm:'#input-confirm',
    policycheckbox:'input[type="checkbox"]',
    continue:'.btn.btn-primary'
}

enterFirstName(FName){
    cy.get(this.weblocators.firstName).type(FName)
}

enterLastName(LName){

    cy.get(this.weblocators.lastName).type(LName)
}

enterEmail(emailAddress){
    cy.get(this.weblocators.eMail).type(emailAddress)
}

enterTelephone(phoneNo){
    cy.get(this.weblocators.telephone).type(phoneNo)
}

enterPassword(password){
    cy.get(this.weblocators.password).type(password)
    cy.get(this.weblocators.passwordConfirm).type(password)    
}

selectCheckbox(){
    cy.get(this.weblocators.policycheckbox).check()
}
clickContinue(){
    cy.get(this.weblocators.continue).click()
}

}