/// <reference types = "cypress"/>
/// <reference types = "cypress-xpath"/>

class chatMessageConst {
    messageStatusSent() {
        return cy.get("[data-translate-inner='STR_SENT']");
    }

    lastTextMessage() {
        return cy.get("[data-id='div_LastSentMsg_Text'] .text", {timeout:10000});
    }

    lastStickerMessage() {
        return cy.xpath("(//div[contains(@class,'sticker-message') and not(contains(@class, '__st'))])[last()]");
    }

    lastGifMessage() {
        return cy.get("[data-id='div_LastSentMsg_GIF']");
    }

    lastEmojiMessage() {
        return cy.xpath("//div[contains(@class,'last-msg has-status')]//*[contains(@id,'mtc')]/span");
    }

    lastMessage() {
        return cy.get("[data-id='div_LastSentMsg_Text']");
    }

    contextReply() {
        return cy.get("[data-id='div_CX_Reply']", {timeout:10000});
    }
}

export default chatMessageConst;
