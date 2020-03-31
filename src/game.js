class Game {

    constructor(players) {
        if (players.length < 2 || players.length > 8)
            throw new TypeError("players must be between 2 and 8");
        this.players = players.sort(() => Math.random() - 0.5);
        this.rounds = 0
    }

    play(turns) {
        Array(turns).fill().forEach(() => this.play_turn());
    }

    play_turn() {
        this.rounds += 1
        players.forEach(player => player.play_turn());
    }

    shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }
}

module.exports = Game;