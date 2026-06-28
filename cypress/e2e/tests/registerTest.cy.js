import { registerPage } from "../../pages/registerPage"
import { homePage } from "../../pages/homePage"
import registerData from "../../fixtures/registerdata.json" with { type: "json" }

const registerObj = new registerPage()
const homeobj = new homePage()

describe ('test automation',() => {

it('register flow', ()=>{

homeobj.openURL()
homeobj.navigatetoRegistration()
registerObj.enterFirstName(registerData.firstName)
registerObj.enterLastName(registerData.lastName)
registerObj.enterEmail(registerData.email)
registerObj.enterTelephone(registerData.telehone)
registerObj.enterPassword(registerData.password)
registerObj.selectCheckbox()
registerObj.clickContinue()


})

})