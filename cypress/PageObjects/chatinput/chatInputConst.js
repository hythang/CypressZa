/// <reference types = "cypress"/>

class chatInputConst {
    txtChatInputContent() {
        return cy.get("#richInput", {timeout: 10000});
    }
}

export default chatInputConst;