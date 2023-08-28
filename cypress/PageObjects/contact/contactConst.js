/// <reference types = "cypress"/>
/// <reference types = "cypress-xpath"/>

class contactConst {
    txtSearchContactField() {
        return cy.get("[data-id='txt_CT_Search']");
    }

    itemSearchResult(value) {
        return cy.contains(".create-group__item__name", value);
    }

    checkBoxIncludePhone() {
        return cy.get(".z-checkbox.z-checkbox.transparentMouseEvent.checkbox-title");
    }

    txtIncludePhone() {
        return cy.get(".create-group__snd-with-num-container");
    }

    btnSend() {
        return cy.get("[data-translate-inner='STR_SEND_CONTACT']");
    }
}

export default contactConst;
