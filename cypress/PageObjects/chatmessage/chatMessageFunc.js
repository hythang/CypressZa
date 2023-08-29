import chatMessageConst from "./chatMessageConst";

class chatMessageFunc {
    constructor() {
        this.chatMessageFunc = new chatMessageConst();
    }

    verifyMessageStatusSentIsDisplay() {
        return this.chatMessageFunc.messageStatusSent().should('be.visible');
    }

    verifyLastTextMessageContentIsCorrect(expectedText) {
        return this.chatMessageFunc.lastTextMessage().contains(expectedText);
    }

    verifyImportantMessageLabelIsDisplayOnMessage() {
        return this.chatMessageFunc.labelImportantOnMessage().should('be.visible');
    }

    verifyUrgentMessageLabelIsDisplayOnMessage() {
        return this.chatMessageFunc.labelUrgentOnMessage().should('be.visible');
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

    rightClickOnLastMessage() {
        return this.chatMessageFunc.lastMessage().rightclick().rightclick();
    }

    clickOnReplyContext() {
        return this.chatMessageFunc.contextReply().click();
    }
}

export default chatMessageFunc;
