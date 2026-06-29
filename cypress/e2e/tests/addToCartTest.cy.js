import { registerPage } from "../../pages/registerPage"
import { homePage } from "../../pages/homePage"
import registerData from "../../fixtures/registerdata.json" with { type: "json" }
import { dashBoardPage } from "../../pages/dashBoardPage"
import testData from "../../fixtures/testData.json" with { type: "json" }

const registerObj = new registerPage()
const homeobj = new homePage()
const dashBoardobj = new dashBoardPage()


describe ('test automation',() => {

before('login', () => {
    cy.login(testData.login.username, testData.login.password)

})

it('add to cart flow', ()=>{
    dashBoardobj.searchProduct(testData.product.productName)
    dashBoardobj.addToCart()
    dashBoardobj.verifySuccessMessage().should('contain', testData.message.successMessage)

})

})