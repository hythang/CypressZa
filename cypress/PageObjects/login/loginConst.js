/// <reference types = "cypress"/>
/// <reference types = "cypress-xpath"/> 

class loginConst {
    tabLoginWithPhoneNumber() {
        return cy.xpath("//div[@class='tabs animated fadeIn']//li[2]", {timeout:6000});
    }

    btnSelectFlag() {
        return cy.get(".select-flag");
    }

    btnAfgFlag() {
        return cy.get("[alt='Afghanistan']");
    }

    txtPhoneNumer() {
        return cy.get("#input-phone");
    }

    txtPass() {
        return cy.get("input[type='password']");
    }

    btnLogin() {
        return cy.get(".block.btn.btn--m.first");
    }

    mainPage() {
        return cy.get(".nav__tabs__zalo", {timeout: 10000});
    }

    txtErrorMessage() {
        return cy.get(".error");
    }
}

export default loginConst;
