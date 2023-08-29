import chatInputConst from "./chatInputConst";

class chatInputFunc {
    constructor() {
        this.chatInputFunc = new chatInputConst();
    }

    generateRandomUtilities(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    enterValueWhenOnChatInput(msg) {
        this.chatInputFunc.txtChatInputContent().type(msg);
    }

    enterValueWhenOnChatAndSendMessage(msg) {
        this.chatInputFunc.txtChatInputContent().type(msg + "{enter}");
    }

    clickOnChatInputSendButton() {
        this.chatInputFunc.btnSendMessage().click();
    }

    clickOnChatInputStickerIcon() {
        this.chatInputFunc.iconSticker().click();
    }

    clickOnChatInputGifTab() {
        this.chatInputFunc.gifTab().click();
    }

    clickOnChatInputEmojiTab() {
        this.chatInputFunc.emojiTab().click();
    }

    enterValueOnSearchStickerBox(value) {
        this.chatInputFunc.inputSearchStickerBox().type(value);
    }

    enterValueOnSearchGifBox(value) {
        this.chatInputFunc.inputSearchGifBox().type(value);
    }

    clickOnResultStickerOnStickerTab() {
        let index = this.generateRandomUtilities(1, 3);
        this.chatInputFunc.resultItemOnStickerTab(index).should('be.visible').click();
    }

    clickOnResultGifOnGifTab() {
        let index = this.generateRandomUtilities(1, 3);
        this.chatInputFunc.resultItemOnGifTab(index).should('be.visible').click();
    }

    clickOnResultEmojiOnEmojiTab() {
        let index = this.generateRandomUtilities(1, 5);
        this.chatInputFunc.resultItemOnEmojiTab(index).should('be.visible').click();
    }

    searchStickerAndGifByUtilities(msgType, msg) {
        let value = "@" + msgType;
        this.chatInputFunc.txtChatInputContent().type(value);
        this.chatInputFunc.mentionPopover().click();
        this.enterValueWhenOnChatInput(msg);
    }

    clickOnUtilitiesIconsearchStickerAndGif(msgType, msg) {
        this.chatInputFunc.iconChatInputMention().click();
        this.chatInputFunc.txtChatInputContent().type(msgType);
        this.chatInputFunc.mentionPopover().click();
        this.enterValueWhenOnChatInput(msg);
    }

    clickOnResultItemWhenSearchByUtilities() {
        let index = this.generateRandomUtilities(1, 3);
        this.chatInputFunc.itemResultWhenSearchByUtilities(index).should('be.visible').click();
    }

    verifyQuoteBannerReplyIsDisplay() {
        this.chatInputFunc.quoteBannerReply().should('be.visible');
    }
}
 
export default chatInputFunc;
