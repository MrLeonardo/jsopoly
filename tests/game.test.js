const expect = require('chai').expect;

const Game = require('../src/game');
const Player = require('../src/player');

describe('Game Tests', () => {

    // As a game, I execute 20 rounds so that I can complete a game.
    it('Create a game with two players named Horse and Car', () => {
        players = []
        players.push(new Player('Horse'))
        players.push(new Player('Car'))
        game = new Game(players)
        expect(game.class).to.equals(Game.class)
    })
    it('Try to create a game with < 2 players. When attempting to play the game, it will fail', () => {
        players = []
        players.push(new Player('Horse'))
        expect(() => new Game(players)).to.throw()
    })
    it('Try to create a game with > 8 players. When attempting to play the game, it will fail', () => {
        players = []
        Array(10).fill().forEach((_, i) => players.push(new Player("Horse_#" + i)))
        expect(() => new Game(players)).to.throw()
    })
    it('Create a game with two players named Horse and Car. Within creating 100 games, both orders [Horse, Car] and [Car, Horse] occur', () => {
        horse = new Player('Horse')
        car = new Player('Car')
        players = [horse, car]

        horse_car_case = false
        car_horse_case = false

        Array(100).fill().forEach(() => {
            game = new Game(players)
            horse_car_case |= JSON.stringify(game.players) == JSON.stringify([horse, car])
            car_horse_case |= JSON.stringify(game.players) == JSON.stringify([car, horse])
        });

        expect(Boolean(horse_car_case)).to.be.true
        expect(Boolean(car_horse_case)).to.be.true
    })

    // As a game, I can have between 2 and 8 players with an initial random ordering.
    it('Create a game and play, verify that the total rounds was 20 and that each player played 20 rounds', () => {
        players = [
            new Player('Horse'),
            new Player('Car')
        ]

        game = new Game(players)
        game.play(20)
        expect(game.rounds).to.equal(20)

        players.forEach((player) => expect(player.rounds).to.equal(20));
    })
    it('Create a game and play, verify that in every round the order of the players remained the same', () => {
        players = [
            new Player('Horse'),
            new Player('Car')
        ]

        game = new Game(players)
        game_players = game.players

        Array(20).fill().forEach(() => {
            game.play(1)
            expect(game.players).to.equals(game_players)
        })
    })
});