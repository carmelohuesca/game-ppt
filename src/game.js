var Game = function(playerOne, playerTwo) {
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.init();
};

Game.prototype.init = function() {
    this.rounds = 0;
    this.CHOICE = {
        ROCK: 'piedra',
        PAPER: 'papel',
        SCISSORS: 'tijeras'
    };
    this.RESULTS = {
        DRAW: 'empate',
        PLAYERONEWINS: 'gana el jugador ' + this.playerOne,
        PLAYERTWOWINS: 'gana el jugador ' + this.playerTwo
    };
};

Game.prototype.round = function(playerOneChoice, playerTwoChoice) {
    this.logic(playerOneChoice, playerTwoChoice);
    this.rounds++;
    return this.result;
};

Game.prototype.logic = function(playerOneChoice, playerTwoChoice) {
    if (playerOneChoice === playerTwoChoice) {
        this.result = this.RESULTS.DRAW;
    } else {
        switch (playerOneChoice) {
            case this.CHOICE.ROCK:
                this.playerOneRockChoice(playerTwoChoice);
                break;
            case this.CHOICE.PAPER:
                this.playerOnePaperChoice(playerTwoChoice);
                break;
            case this.CHOICE.SCISSORS:
                this.playerOneScissorsChoice(playerTwoChoice);
                break;
        }
    }
};

Game.prototype.playerOneRockChoice = function(playerTwoChoice) {
    this.playerTwoWins(playerTwoChoice === this.CHOICE.PAPER);
};

Game.prototype.playerOnePaperChoice = function(playerTwoChoice) {
    this.playerTwoWins(playerTwoChoice === this.CHOICE.SCISSORS);
};

Game.prototype.playerOneScissorsChoice = function(playerTwoChoice) {
    this.playerTwoWins(playerTwoChoice === this.CHOICE.ROCK);
};

Game.prototype.playerOneWins = function(isPlayerOneWinnerChoice){
    this.playerTwoWins(!isPlayerOneWinnerChoice);
};
Game.prototype.playerTwoWins = function(isPlayerTwoWinnerChoice) {
    this.result = (isPlayerTwoWinnerChoice) ? this.RESULTS.PLAYERTWOWINS : this.RESULTS.PLAYERONEWINS;
};
