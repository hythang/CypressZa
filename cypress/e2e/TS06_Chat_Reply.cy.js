import chatInputFunc from "../PageObjects/chatinput/chatInputFunc";
import chatMessageFunc from "../PageObjects/chatmessage/chatMessageFunc";
import loginFunc from "../PageObjects/login/loginFunc";
import searchFunc from "../PageObjects/search/searchFunc";

let textContent, account;
beforeEach(() => {
    cy.fixture("account").then((item) => {
        account = item;
    });
});

describe('TS_06: Reply message', () => {
    const loginObj = new loginFunc();
    const searchObj = new searchFunc();
    const chatInputObj = new chatInputFunc();
    const chatMessageObj = new chatMessageFunc();

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

    it('CHA_15: Reply text message successfully', () => {
        searchObj.openConversationByName(account.name_receive);
        chatInputObj.enterValueWhenOnChatAndSendMessage(textContent.normal_text);
        chatMessageObj.rightClickOnLastMessage();
        chatMessageObj.clickOnReplyContext();
        chatInputObj.verifyQuoteBannerReplyIsDisplay();
        chatInputObj.enterValueWhenOnChatAndSendMessage(textContent.reply_text);
        chatMessageObj.verifyLastTextMessageContentIsCorrect(textContent.reply_text);
        chatMessageObj.verifyMessageStatusSentIsDisplay();
    });
});
