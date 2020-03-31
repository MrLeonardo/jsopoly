const expect = require('chai').expect;

const Player = require('../src/player');

describe('Player Tests', () => {
        it('Player on beginning location (numbered 0), rolls 7, ends up on location 7', () => {
            player = new Player('Horse')
            expect(player.position).to.equals(0)
            player.advance(7)
            expect(player.position).to.equals(7)
        })

        it('Player on location numbered 39, rolls 6, ends up on location 5', () => {
            player = new Player('Horse')
            player.advance(39)
            expect(player.position).to.equals(39)
            player.advance(6)
            expect(player.position).to.equals(5)
        })       
});