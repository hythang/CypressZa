import chatInputFunc from "../PageObjects/chatinput/chatInputFunc";
import chatMessageFunc from "../PageObjects/chatmessage/chatMessageFunc";
import loginFunc from "../PageObjects/login/loginFunc";
import searchFunc from "../PageObjects/search/searchFunc";

let content, account;
beforeEach(() => {
    cy.fixture("account").then((item) => {
        account = item;
    });
});

describe('TS_05: Send Emoji message', () => {
    const loginObj = new loginFunc();
    const searchObj = new searchFunc();
    const chatInputObj = new chatInputFunc();
    const chatMessageObj = new chatMessageFunc();

    beforeEach(() => {
        cy.fixture("message").then((item) => {
            content = item.message_utilities;
        });
        loginObj.navigateToBrowserAndLoginWithPhone(account.phone_send, account.pass);
    });

    afterEach(() => {
        cy.screenshot();
        Cypress.session.clearAllSavedSessions();
    });

    it('Send emoji successfully from Tab emoji', () => {
        searchObj.openConversationByName(account.name_receive);
        chatInputObj.clickOnChatInputStickerIcon();
        chatInputObj.clickOnChatInputEmojiTab();
        chatInputObj.clickOnResultEmojiOnEmojiTab();
        chatInputObj.clickOnChatInputSendButton();
        chatMessageObj.verifyLastEmojiMessageContentIsDisplay();
        chatMessageObj.verifyMessageStatusSentIsDisplay();
    });

    it('Send valid emoticon successfully', () => {
        searchObj.openConversationByName(account.name_receive);
        chatInputObj.enterValueWhenOnChatAndSendMessage(content.valid_emoticon);
        chatMessageObj.verifyLastEmojiMessageContentIsDisplay();
        chatMessageObj.verifyMessageStatusSentIsDisplay();
    });

    it('Send invalid emoticon successfully', () => {
        searchObj.openConversationByName(account.name_receive);
        chatInputObj.enterValueWhenOnChatAndSendMessage(content.invalid_emoticon);
        chatMessageObj.verifyLastTextMessageContentIsCorrect(content.invalid_emoticon);
        chatMessageObj.verifyMessageStatusSentIsDisplay();
    });
});
