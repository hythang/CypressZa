/// <reference types = "cypress"/>

class searchConst {
    txtContactSearch() {
        return cy.get("#contact-search-input");
    }

    conversationSearchResultByTitle(convName) {
        return cy.contains(".txt-highlight", convName);
    }
}

export default searchConst;
