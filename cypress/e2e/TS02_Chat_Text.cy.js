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

describe('TS_02: Send text message', () => {
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

    it('CHA_01: Send text with 1 character length', () => {
        searchObj.openConversationByName(account.name_receive);
        chatInputObj.enterValueWhenOnChatAndSendMessage(textContent.char_one);
        chatMessageObj.verifyLastTextMessageContentIsCorrect(textContent.char_one);
        chatMessageObj.verifyMessageStatusSentIsDisplay();
    });

    it('CHA_02: Send text with 497 characters length', () => {
        searchObj.openConversationByName(account.name_receive);
        chatInputObj.enterValueWhenOnChatAndSendMessage(textContent.char_497);
        chatMessageObj.verifyLastTextMessageContentIsCorrect(textContent.char_497);
        chatMessageObj.verifyMessageStatusSentIsDisplay();
    });

    it('CHA_03: Send text with 499 characters length and slipt into 2 messages', () => {
        searchObj.openConversationByName(account.name_receive);
        chatInputObj.enterValueWhenOnChatAndSendMessage(textContent.char_499);
        chatMessageObj.verifyLastTextMessageContentIsCorrect(textContent.expected_char_499);
        chatMessageObj.verifyMessageStatusSentIsDisplay();
    });
});
