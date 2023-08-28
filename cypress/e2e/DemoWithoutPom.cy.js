/// <reference types = "cypress"/>

describe ('Log in Zalo successfully', () => {
    before (() => {
        cy.visit('https://id.zalo.me/account?continue=https%3A%2F%2Fchat.zalo.me%2F');
        cy.intercept('https://id.zalo.me/account/authen/qr/waiting-scan', req => req.destroy());
    })
    it ('Click on "Log in with phone" tab', () => {
        cy.xpath("//div[@class='tabs animated fadeIn']//li[2]").click();
        cy.get(".select-flag").click();
        cy.get("[alt='Afghanistan']").click();
        cy.get("#input-phone").type(93719800034);
        cy.get("input[type='password']").type("tdt123");
        cy.get(".block.btn.btn--m.first").click();
        cy.get(".nav__tabs__zalo", {timeout:10000}).should('be.visible');
    });
})
