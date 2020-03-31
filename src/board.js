const GO_POSITION = 0
const JAIL_POSITION = 9
const INCOME_TAX_POSITION = 15
const INCOME_TAX_PERCENTAGE = 10
const LUXURY_TAX_POSITION = 35
const LUXURY_TAX_VALUE = 75

class Board {
    static get GO_POSITION() { return GO_POSITION }
    static get JAIL_POSITION() { return JAIL_POSITION }
    static get INCOME_TAX_POSITION() { return INCOME_TAX_POSITION }
    static get INCOME_TAX_PERCENTAGE() { return INCOME_TAX_PERCENTAGE }
    static get LUXURY_TAX_POSITION() { return LUXURY_TAX_POSITION }
    static get LUXURY_TAX_VALUE() { return LUXURY_TAX_VALUE }
}

module.exports = Board;