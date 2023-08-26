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

describe('TS_04: Send GIF message', () => {
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

    it('Send GIF successfully from Tab GIF', () => {
        searchObj.openConversationByName(account.name_receive);
        chatInputObj.clickOnChatInputStickerIcon();
        chatInputObj.clickOnChatInputGifTab();
        chatInputObj.enterValueOnSearchGifBox(content.gif_search);
        chatInputObj.clickOnResultGifOnGifTab();
        chatMessageObj.verifyLastGifMessageContentIsDisplay();
        chatMessageObj.verifyMessageStatusSentIsDisplay();
    });

    it('Send GIF successfully by @GIF on Chat input', () => {
        searchObj.openConversationByName(account.name_receive);
        chatInputObj.searchStickerAndGifByUtilities("GIF", content.gif_search);
        chatInputObj.clickOnResultItemWhenSearchByUtilities();
        chatMessageObj.verifyLastGifMessageContentIsDisplay();
        chatMessageObj.verifyMessageStatusSentIsDisplay();
    });

    it('Send GIF successfully by click @ on Chat input', () => {
        searchObj.openConversationByName(account.name_receive);
        chatInputObj.clickOnUtilitiesIconsearchStickerAndGif("GIF", content.gif_search);
        chatInputObj.clickOnResultItemWhenSearchByUtilities();
        chatMessageObj.verifyLastGifMessageContentIsDisplay();
        chatMessageObj.verifyMessageStatusSentIsDisplay();
    });
});
