
describe('BizTrip E2E Tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
        cy.contains('Welcome to biztrips').should('be.visible')
    })

    it('E2E-01: should add a trip to wishlist', () => {
        cy.get('.card-text').first()
            .invoke('text')
            .as('tripTitle')

        cy.get('.btn-outline').first().click()

        cy.get('@tripTitle').then((tripTitle) => {
            cy.contains('.card-text', tripTitle).should('exist')
        })
    })

    it('E2E-02: should delete a trip from wishlist', () => {
        cy.get('.card-product').first().within(() => {
            cy.get('.btn-outline').click()
        })

        cy.wait(1000)

        cy.get('.card-text').first()
            .invoke('text')
            .as('tripTitle')

        cy.get('.btn-outline-danger').filter(':visible').first()
            .should('be.visible')
            .click()

        cy.wait(1000)
        cy.contains('Wishlist is empty', { timeout: 10000 }).should('be.visible')
    })

    it('E2E-03: should clear all trips from wishlist', () => {
        cy.get('.card-product').first().within(() => {
            cy.get('.btn-outline').click()
        })
        cy.wait(1000)

        cy.get('.card-product').eq(1).within(() => {
            cy.get('.btn-outline').click()
        })
        cy.wait(1000)

        cy.get('.card-product').eq(2).within(() => {
            cy.get('.btn-outline').click()
        })
        cy.wait(1000)

        cy.get('.media', { timeout: 10000 }).should('have.length.at.least', 1)

        cy.contains('empty wishlist')
            .should('be.visible')
            .should('not.be.disabled')
            .click()

        cy.wait(1000)
        cy.contains('Wishlist is empty', { timeout: 10000 }).should('be.visible')
    })

    it('E2E-04: should filter trips by month', () => {
        cy.get('.card-product').then($cards => {
            const count = $cards.length
            cy.wrap(count).as('initialCount')
        })

        cy.get('select#month').select('2')
        cy.wait(1000)

        cy.get('.card-product', { timeout: 10000 }).should(($cards) => {
            expect($cards).to.have.length(1)
            expect($cards.find('.card-text').text()).to.include('San Francisco World Trade Center')
        })

        cy.get('select#month').select('6')
        cy.wait(1000)

        cy.get('.card-product', { timeout: 10000 }).should(($cards) => {
            expect($cards).to.have.length(1)
            expect($cards.find('.card-text').text()).to.include('Santa Clara Halley')
        })

        cy.get('select#month').select('')
        cy.wait(1000)

        cy.get('@initialCount').then(initialCount => {
            cy.get('.card-product', { timeout: 10000 }).should('have.length', initialCount)
        })
    })
})