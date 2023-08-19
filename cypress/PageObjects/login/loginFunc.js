import loginConst from "./loginConst";

class loginFunc {
    constructor() {
        this.loginFunc = new loginConst();
    }

    navigateToLoginPage() {
        cy.visitPage();
    }

    clickOnLoginWithPhoneNumberTab() {
        this.loginFunc.tabLoginWithPhoneNumber().click();
        return this;
    }

    selectHeadOfPhoneNumber() {
        this.loginFunc.btnSelectFlag().click();
        this.loginFunc.btnAfgFlag().click();
        return this;
    }

    enterPhoneNumer(phoneNum) {
        this.loginFunc.txtPhoneNumer().type(phoneNum);
        return this;
    }

    enterPassword(pass) {
        this.loginFunc.txtPass().type(pass);
        return this;
    }

    clickOnLoginButton() {
        this.loginFunc.btnLogin().click();
        return this;
    }

    verifyLoginPageIsDisplay() {
        this.loginFunc.tabLoginWithPhoneNumber().should('be.visible');
        return this;
    }

    verifyMainPageIsDisplay() {
        this.loginFunc.mainPage().should('be.visible');
        return this;
    }

    verifyTextLoginFail(text) {
        this.loginFunc.txtErrorMessage().should('contain.text', text);
        return this;
    }

    navigateToBrowserAndLoginWithPhone(phoneNum, pass) {
        this.navigateToLoginPage();
        this.verifyLoginPageIsDisplay();
        this.clickOnLoginWithPhoneNumberTab();
        this.selectHeadOfPhoneNumber();
        this.enterPhoneNumer(phoneNum);
        this.enterPassword(pass);
        this.clickOnLoginButton();
        this.verifyMainPageIsDisplay();
    }
}

export default loginFunc;
