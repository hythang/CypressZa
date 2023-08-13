describe ('Log in Zalo', () => {
    before (() => {
        cy.visit('https://id.zalo.me/account?continue=https%3A%2F%2Fchat.zalo.me%2F');
        cy.intercept('https://id.zalo.me/account/authen/qr/waiting-scan', req => req.destroy());
    })
    it ('Click on "Log in with phone" tab', () => {
        cy.xpath("//div[@class='tabs animated fadeIn']//li[2]").click()
    })
})