import tabMessageConst from "./tabMessageConst";

class tabMessageFunc {
    constructor() {
        this.tabMessageFunc = new tabMessageConst();
    }

    rightClickOnConversationByName(convName) {
        return this.tabMessageFunc.conversationThreadByName(convName).rightclick();
    }

    clickOnDeleteConversation() {
        return this.tabMessageFunc.btnDeleteThreadChat().click();
    }

    clickOnConfirmAlertDelete() {
        return this.tabMessageFunc.alertDelete().click();
    }

    verifyThatConversationThreadByNameIsDisappear(convName) {
        return this.tabMessageFunc.conversationThreadByName(convName).should('not.exist');
    }

    deleteConversationOnMessageTab(convName) {
        this.rightClickOnConversationByName(convName);
        this.clickOnDeleteConversation();
        this.clickOnConfirmAlertDelete();
        this.verifyThatConversationThreadByNameIsDisappear(convName);
    }
}

export default tabMessageFunc;
