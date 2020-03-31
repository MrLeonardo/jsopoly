const Board = require('../src/board');

class Player {

  constructor(name, beginning_location = 0, balance = 0) {
    this.name = name
    this.position = beginning_location
    this.rounds = 0
    this.isInJail = false
    this.balance = balance
  }

  advance(positions) {
    var lastPosition = this.position
    this.position = (this.position + positions) % 40

    if (this.position == Board.GO_POSITION || this.position < lastPosition) {
      this.balance += 200;
    }
    else if (this.position == Board.JAIL_POSITION) {
      this.isInJail = false;    
    }
    else if (this.position == Board.INCOME_TAX_POSITION) {
      var discountValue = (this.balance * Board.INCOME_TAX_PERCENTAGE) / 100; 
      this.balance -= discountValue < 200 ? discountValue : 200
    }
    else if (this.position == Board.LUXURY_TAX_POSITION) {
      this.balance -= Board.LUXURY_TAX_VALUE
    }
  }

  play_turn() {
    this.rounds += 1
  }
}

module.exports = Player;