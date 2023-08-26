import chatMessageConst from "./chatMessageConst";

class chatMessageFunc {
    constructor() {
        this.chatMessageFunc = new chatMessageConst();
    }

    verifyMessageStatusSentIsDisplay() {
        return this.chatMessageFunc.messageStatusSent().should('be.visible');
    }

    verifyLastTextMessageContentIsCorrect(expectedText) {
        return this.chatMessageFunc.lastTextMessage().should('be.visible').contains(expectedText);
    }

    verifyLastStickerMessageContentIsDisplay() {
        return this.chatMessageFunc.lastStickerMessage().should('be.visible');
    }

    verifyLastGifMessageContentIsDisplay() {
        return this.chatMessageFunc.lastGifMessage().should('be.visible');
    }

    verifyLastEmojiMessageContentIsDisplay() {
        return this.chatMessageFunc.lastEmojiMessage().should('be.visible');
    }
}

export default chatMessageFunc;
