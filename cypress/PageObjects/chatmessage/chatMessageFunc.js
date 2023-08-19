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
}

export default chatMessageFunc;
