const expect = require('chai').expect;

const Board = require('../src/board');
const Player = require('../src/player');

describe('Player Tests', () => {

    //As a player, I can take a turn so that I can move around the board.
    it('Player on beginning location (numbered 0), rolls 7, ends up on location 7', () => {
        player = new Player('Horse')
        expect(player.position).to.equals(0)
        player.advance(7)
        expect(player.position).to.equals(7)
    })
    it('Player on location numbered 39, rolls 6, ends up on location 5', () => {
        player = new Player('Horse', 39)
        expect(player.position).to.equals(39)
        player.advance(6)
        expect(player.position).to.equals(5)
    })

    //As a player, when I land on go I get $200 as my salary for staying in the game.
    it('During a turn a Player lands on Go and their balance increases by $200.', () => {
        player = new Player('Horse')
        player.advance(40)
        expect(player.position).to.equals(Board.GO_POSITION)
        expect(player.balance).to.equals(200)
    })
    it('During a turn a Player lands on some "normal" location and their balance does not change.', () => {
        player = new Player('Horse', 0, 100)
        player.advance(5)
        expect(player.balance).to.equals(100)
    })

    //As a player, I receive $200 when I pass over Go.
    it('Player starts before Go near the end of the Board, rolls enough to pass Go. The Player\'s balance increases by $200.', () => {
        player = new Player('Horse', 38, 100)
        player.advance(5)
        expect(player.balance).to.equals(300)
    })
    it('Player starts on Go, takes a turn where the Player does not additionally land on or pass over Go. Their balance remains unchanged.', () => {
        player = new Player('Horse')
        player.advance(5)
        expect(player.balance).to.equals(0)
    })
    it('Player passes go twice during a turn. Their balance increases by $200 each time for a total change of $400.', () => {
        player = new Player('Horse')
        player.advance(40)
        player.advance(40)
        expect(player.position).to.equals(Board.GO_POSITION)
        expect(player.balance).to.equals(400)
    })

    //As a Player, when I land on Go To Jail during a turn I move directly to Just Visiting.
    it('Player starts before Go To Jail, lands on Go To Jail, ends up on Just Visiting and their balance is unchanged.', () => {
        player = new Player('Horse')
        player.advance(Board.JAIL_POSITION)
        expect(player.position).to.equals(Board.JAIL_POSITION)
        expect(player.isInJail).to.be.false
        expect(player.balance).to.equals(0)
    })
    it('Player starts before Go To Jail, rolls enough to pass over Go To Jail but not enough to land on or pass over go. Their balance is unchanged and they end up where the should based on what they rolled.', () => {
        player = new Player('Horse')
        player.advance(Board.JAIL_POSITION+5)
        expect(player.isInJail).to.be.false
        expect(player.balance).to.equals(0)
    })

    //As a Player, landing on Income Tax forces me to pay the smaller of 10% of my total worth or $200.
    it('During a turn, a Player with an initial total worth of $1800 lands on Income Tax. The balance decreases by $180.', () => {
        player = new Player('Horse', 0, 1800)
        player.advance(Board.INCOME_TAX_POSITION)
        expect(player.position).to.equals(Board.INCOME_TAX_POSITION)
        expect(player.balance).to.equals(1800-180)
    })
    it('During a turn, a Player with an initial total worth of $2200 lands on Income Tax. The balance decreases by $200.', () => {
        player = new Player('Horse', 0, 2200)
        player.advance(Board.INCOME_TAX_POSITION)
        expect(player.position).to.equals(Board.INCOME_TAX_POSITION)
        expect(player.balance).to.equals(2200-200)
    })
    it('During a turn, a Player with an initial total worth of $0 lands on Income Tax. The balance decreases by $0.', () => {
        player = new Player('Horse')
        player.advance(Board.INCOME_TAX_POSITION)
        expect(player.position).to.equals(Board.INCOME_TAX_POSITION)
        expect(player.balance).to.equals(0)
    })
    it('During a turn, a Player with an initial total worth of $2000 lands on Income Tax. The balance decreases by $200.', () => {
        player = new Player('Horse', 0, 2000)
        player.advance(Board.INCOME_TAX_POSITION)
        expect(player.position).to.equals(Board.INCOME_TAX_POSITION)
        expect(player.balance).to.equals(2000-200)
    })
    it('During a turn, a Player passes over Income Tax. Nothing happens.', () => {
        player = new Player('Horse', 0, 1800)
        player.advance(Board.INCOME_TAX_POSITION+1)
        expect(player.balance).to.equals(1800)
    })

    //As a Player, when I land on Luxury Tax, I pay $75.
    it('Player takes a turn and lands on Luxury tax. Their balance decreases by $75.', () => {
        player = new Player('Horse', 0, 1000)
        player.advance(Board.LUXURY_TAX_POSITION)
        expect(player.position).to.equals(Board.LUXURY_TAX_POSITION)
        expect(player.balance).to.equals(1000-Board.LUXURY_TAX_VALUE)
    })
    it('Player passes Luxury Tax during a turn. Their balance is unchanged.', () => {
        player = new Player('Horse', 0, 1000)
        player.advance(Board.LUXURY_TAX_POSITION+1)
        expect(player.balance).to.equals(1000)
    })
});