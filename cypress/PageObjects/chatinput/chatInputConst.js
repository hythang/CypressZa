/// <reference types = "cypress"/>
/// <reference types = "cypress-xpath"/>

class chatInputConst {
    txtChatInputContent() {
        return cy.get("#richInput", {timeout: 10000});
    }

    btnSendMessage() {
        return cy.get("[data-translate-inner='STR_SEND']");
    }

    iconPriority() {
        return cy.get("[data-translate-title='STR_PRIORITY_MSG']");
    }

    optionImportantMsg() {
        return cy.get("[data-id='div_IMPT_IMPT']");
    }

    optionUrgentMsg() {
        return cy.get("[data-id='div_IMPT_Urgent']");
    }

    labelImportantOnChatInput() {
        return cy.get("[data-translate-inner='STR_IMPORTANT']");
    }

    labelUrgentOnChatInput() {
        return cy.get("[data-translate-inner='STR_URGENT']");
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
        return cy.get(".mention-popover__item", {timeout:10000});
    }

    itemResultWhenSearchByUtilities(index) {
        return cy.xpath("(//div[@id='chat-box-command']//img)[" + index + "]");
    }

    quoteBannerReply() {
        return cy.get(".quote-banner.rel");
    }
}

export default chatInputConst;