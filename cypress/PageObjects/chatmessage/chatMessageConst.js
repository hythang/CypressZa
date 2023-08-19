/// <reference types = "cypress"/>

class chatMessageConst {
    messageStatusSent() {
        return cy.get("[data-translate-inner='STR_SENT']");
    }

    lastTextMessage() {
        return cy.get("[data-id='div_LastSentMsg_Text'] .text");
    }
}

export default chatMessageConst;
