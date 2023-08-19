import searchConst from "./searchConst";

class searchFunc {
    constructor() {
        this.searchFunc = new searchConst();
    }

    setValueOnContactSearch(convName) {
        this.searchFunc.txtContactSearch().type(convName);
    }

    clickOnContactSearchResultByLabel(convName) {
        this.searchFunc.conversationSearchResultByTitle(convName).click();
    }

    openConversationByName(convName) {
        this.setValueOnContactSearch(convName);
        this.clickOnContactSearchResultByLabel(convName);
    }
}

export default searchFunc;
