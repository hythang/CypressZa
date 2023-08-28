import contactConst from "./contactConst";

class contactFunc {
    constructor() {
        this.contactFunc = new contactConst();
    }

    enterValueOnSearchFieldToSendNameCard(value) {
        this.contactFunc.txtSearchContactField().type(value);
        this.contactFunc.itemSearchResult(value).click();
    }

    checkBoxValueToSendContactWithPhone(value) {
        var checkCurrentState;
        this.contactFunc.checkBoxIncludePhone().then((btn) => {
            if (btn.hasClass("--active")) {
                cy.log('The name card already included phone number')
                checkCurrentState = true;
            } else {
                checkCurrentState = false;
            }
            cy.log(checkCurrentState)
            if (value != checkCurrentState) {
                this.contactFunc.txtIncludePhone().click();
            }
        });
    }

    clickOnSendButton() {
        this.contactFunc.btnSend().click();
    }
}

export default contactFunc;
