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
    return this.result;
};

Game.prototype.logic = function(playerOneChoice, playerTwoChoice) {
    if (playerOneChoice === playerTwoChoice) {
        this.result = this.RESULTS.DRAW;
    } else {
        switch (playerOneChoice) {
            case this.CHOICE.ROCK:
                this.playerOneRockWin(playerTwoChoice);
                break;
            case this.CHOICE.PAPER:
                this.playerOnePaperWin(playerTwoChoice);
                break;
        }
    }
};

Game.prototype.playerOneRockWin = function(playerTwoChoice) {
    if (playerTwoChoice === this.CHOICE.PAPER) {
        this.result = this.RESULTS.PLAYERTWOWINS;
    } else {
        this.result = this.RESULTS.PLAYERONEWINS;
    }
};

Game.prototype.playerOnePaperWin = function(playerTwoChoice) {
    if (playerTwoChoice === this.CHOICE.SCISSORS) {
        this.result = this.RESULTS.PLAYERTWOWINS;
    } else {
        this.result = this.RESULTS.PLAYERONEWINS;
    }
};
