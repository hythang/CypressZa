import chatInputFunc from "../PageObjects/chatinput/chatInputFunc";
import chatMessageFunc from "../PageObjects/chatmessage/chatMessageFunc";
import contactFunc from "../PageObjects/contact/contactFunc";
import loginFunc from "../PageObjects/login/loginFunc";
import searchFunc from "../PageObjects/search/searchFunc";

let textContent, account;
beforeEach(() => {
    cy.fixture("account").then((item) => {
        account = item;
    });
});

describe('TS_06: Send name card', () => {
    const loginObj = new loginFunc();
    const searchObj = new searchFunc();
    const chatInputObj = new chatInputFunc();
    const chatMessageObj = new chatMessageFunc();
    const contactObj = new contactFunc();

    beforeEach(() => {
        cy.fixture("message").then((item) => {
            textContent = item.message_text;
        });
        loginObj.navigateToBrowserAndLoginWithPhone(account.phone_send, account.pass);
    });

    afterEach(() => {
        cy.screenshot();
        Cypress.session.clearAllSavedSessions();
    });

    it('Send name card without phone number', () => {
        searchObj.openConversationByName(account.name_register);
        chatInputObj.clickOnChatInputNameCardIcon()
        contactObj.enterValueOnSearchFieldToSendNameCard(account.name_receive);
        contactObj.checkBoxValueToSendContactWithPhone(false);
        contactObj.clickOnSendButton();
        chatMessageObj.verifyNameCardTextMessageButtonIsDisplay();
        chatMessageObj.verifyMessageStatusSentIsDisplay();
    });

    it('Send name card with phone number', () => {
        searchObj.openConversationByName(account.name_register);
        chatInputObj.clickOnChatInputNameCardIcon()
        contactObj.enterValueOnSearchFieldToSendNameCard(account.name_receive);
        contactObj.checkBoxValueToSendContactWithPhone(true);
        contactObj.clickOnSendButton();
        chatMessageObj.verifyNameCardPhoneNumberIsDisplay(account.phone_receive);
        chatMessageObj.verifyNameCardTextMessageButtonIsDisplay();
        chatMessageObj.verifyMessageStatusSentIsDisplay();
    });
});
