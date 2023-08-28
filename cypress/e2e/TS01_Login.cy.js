import loginFunc from "../PageObjects/login/loginFunc";

describe('TS_01: Login with phone number', () => {
    const loginObj = new loginFunc();
    let rightData, wrongData;

    beforeEach(() => {
        // Get data from login.json
        cy.fixture("login").then((item) => {
            rightData = item.data_simple;
            wrongData = item.data_fail;
        });
    })

    afterEach(() => {
        cy.screenshot();
    });

    it('LI_01: Login successfully with right account', () => {
        loginObj.navigateToLoginPage();
        loginObj.verifyLoginPageIsDisplay();
        loginObj.clickOnLoginWithPhoneNumberTab();
        loginObj.selectHeadOfPhoneNumber();
        loginObj.enterPhoneNumer(rightData.phone_send);
        loginObj.enterPassword(rightData.pass);
        loginObj.clickOnLoginButton();
        loginObj.verifyMainPageIsDisplay();
        Cypress.session.clearAllSavedSessions(); // clear session to be enable to start next test case
    });

    it('LI_02: Login unsuccessfully with wrong account', () => {
        loginObj.navigateToLoginPage();
        loginObj.verifyLoginPageIsDisplay();
        loginObj.clickOnLoginWithPhoneNumberTab();
        loginObj.selectHeadOfPhoneNumber();
        loginObj.enterPhoneNumer(wrongData.phone_send);
        loginObj.enterPassword(wrongData.pass);
        loginObj.clickOnLoginButton();
        loginObj.verifyTextLoginFail(wrongData.error_message);
        Cypress.session.clearAllSavedSessions();
    });
});
