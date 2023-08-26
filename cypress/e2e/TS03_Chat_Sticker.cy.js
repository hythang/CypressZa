import chatInputFunc from "../PageObjects/chatinput/chatInputFunc";
import chatMessageFunc from "../PageObjects/chatmessage/chatMessageFunc";
import loginFunc from "../PageObjects/login/loginFunc";
import searchFunc from "../PageObjects/search/searchFunc";
import tabMessageFunc from "../PageObjects/tabmessage/tabMessageFunc";

let content, account;
beforeEach(() => {
    cy.fixture("account").then((item) => {
        account = item;
    });
});

describe('TS_03: Send sticker message', () => {
    const loginObj = new loginFunc();
    const searchObj = new searchFunc();
    const chatInputObj = new chatInputFunc();
    const chatMessageObj = new chatMessageFunc();
    const tabMessageObj = new tabMessageFunc();

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

    it('Send sticker successfully from Tab sticker', () => {
        searchObj.openConversationByName(account.name_receive);
        chatInputObj.clickOnChatInputStickerIcon();
        chatInputObj.enterValueOnSearchStickerBox(content.sticker_search);
        chatInputObj.clickOnResultStickerOnStickerTab();
        chatMessageObj.verifyLastStickerMessageContentIsDisplay();
        chatMessageObj.verifyMessageStatusSentIsDisplay();
    });

    it('Send sticker successfully by @STICKER on Chat input', () => {
        searchObj.openConversationByName(account.name_receive);
        chatInputObj.searchStickerAndGifByUtilities("STICKER", content.sticker_search);
        chatInputObj.clickOnResultItemWhenSearchByUtilities();
        chatMessageObj.verifyLastStickerMessageContentIsDisplay();
        chatMessageObj.verifyMessageStatusSentIsDisplay();
    });

    it('Send sticker successfully by click @ on Chat input', () => {
        searchObj.openConversationByName(account.name_receive);
        chatInputObj.clickOnUtilitiesIconsearchStickerAndGif("STICKER", content.sticker_search);
        chatInputObj.clickOnResultItemWhenSearchByUtilities();
        chatMessageObj.verifyLastStickerMessageContentIsDisplay();
        chatMessageObj.verifyMessageStatusSentIsDisplay();
    });
});
