class Player {

    name = ""
    position = 0
    rounds = 0

	constructor(name, beginning_location = 0) {
        this.name = name
        this.position = beginning_location
        this.rounds = 0
    }

    advance(positions) {
		this.position = (this.position + positions) % 40
    }
    
    play_turn() {
        this.rounds += 1
	}
}

module.exports = Player;