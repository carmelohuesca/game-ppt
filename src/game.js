var Game = function(playerOne, playerTwo) {
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.init();
};

Game.prototype.init = function() {
    this.rounds = 0;
    this.SOURCE = {
        ROCK: 'piedra',
        PAPER: 'papel',
        SCISSORS: 'tijeras'
    };
    this.RESULTS = {
        DRAW: 'empate'
    };
};

Game.prototype.round = function(playerOneChoice, playerTwoChoice) {
	if(playerOneChoice === playerTwoChoice){
		this.result  = this.RESULTS.DRAW;
	}
	return this.result;
};
