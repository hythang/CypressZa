import chatInputConst from "./chatInputConst";

class chatInputFunc {
    constructor() {
        this.chatInputFunc = new chatInputConst();
    }

    enterValueWhenOnChatAndSendMessage(msg) {
        this.chatInputFunc.txtChatInputContent().type(msg + "{enter}");
    }

    verifyChatInputIsDisplay() {
        this.chatInputFunc.txtChatInputContent().should('be.visible');
    }
}
 
export default chatInputFunc;
