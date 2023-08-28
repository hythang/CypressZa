/// <reference types = "cypress"/>
/// <reference types = "cypress-xpath"/>

class chatInputConst {
    txtChatInputContent() {
        return cy.get("#richInput", {timeout: 10000});
    }

    btnSendMessage() {
        return cy.get("[data-translate-inner='STR_SEND']");
    }

    iconSticker() {
        return cy.get("[data-translate-title='STR_SEND_STICKER']");
    }

    gifTab() {
        return cy.contains("div-b14", "GIF");
    }

    emojiTab() {
        return cy.contains("div-b14", "EMOJI");
    }

    iconNameCard() {
        return cy.get("[data-translate-title='STR_SEND_CONTACT']");
    }

    inputSearchStickerBox() {
        return cy.get("[data-translate-placeholder='STR_SEARCH_STICKER']");
    }

    inputSearchGifBox() {
        return cy.get("[data-translate-placeholder='STR_SEARCH_GIF']");
    }

    resultItemOnStickerTab(index) {
        return cy.xpath("//div[contains(@class,'sticker-zone-search')][" + index + "]");
    }

    resultItemOnGifTab(index) {
        return cy.xpath("(//div[@data-id='div_GIFMenu_RecentItem'])[" + index + "]");
    }

    resultItemOnEmojiTab(index) {
        return cy.xpath("(//div[contains(@class,'item-emoji')])[" + index + "]");
    }

    iconChatInputMention() {
        return cy.get("[icon='chatbar-mention']");
    }

    mentionPopover() {
        return cy.get(".mention-popover__item", {timeout:6000});
    }

    itemResultWhenSearchByUtilities(index) {
        return cy.xpath("(//div[@id='chat-box-command']//img)[" + index + "]");
    }
}

export default chatInputConst;