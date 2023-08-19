/// <reference types = "cypress"/>

class tabMessageConst {
    conversationThreadByName(convName) {
        return cy.contains(".truncate", convName);
    }

    btnDeleteThreadChat() {
        return cy.get(".--DANGER.md.zmenu-item > .flx-1.truncate");
    }

    alertDelete() {
        return cy.contains(".truncate", "Xóa");
    }
}

export default tabMessageConst;
