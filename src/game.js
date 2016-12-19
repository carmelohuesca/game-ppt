var moduleGame = (function() {
    'use strict';
    
    /**
     * @class Game
     * @description Representa el juego de Piedra-Papel-Tijera.
     * @constructor
     * @param {string} playerOne - Nombre del jugador 1.
     * @param {string} playerTwo - Nombre del jugador 2.
     */
    var Game = function(playerOne, playerTwo) {
        this.playerOne = playerOne;
        this.playerTwo = playerTwo;
        this.init();
    };
    /**
     * @method init
     * @memberOf Game
     * @description Método que inicializa las rondas.
     */
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

    /**
     * Método que se ejecuta en cada ronda.
     * @method round
     * @memberOf Game
     * @param  {string} playerOneChoice Elección del jugador 1.
     * @param  {string} playerTwoChoice Elección del jugador 2.
     * @return {string}                 Resultado de la ronda.
     */
    Game.prototype.round = function(playerOneChoice, playerTwoChoice) {
        this.logic(playerOneChoice, playerTwoChoice);
        this.rounds++;
        return this.result;
    };

    /**
     * Método que se encarga de ejecutar la lógica. 
     * @method logic
     * @memberOf Game
     * @param  {string} playerOneChoice Elección del jugador 1.
     * @param  {string} playerTwoChoice Elección del jugador 2.
     */
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

    /**
     * @method playerOneRockChoice
     * @memberOf Game
     * @description Lógica cuando el jugador 1 elige Piedra.
     * @param  {string} playerTwoChoice Elección del jugador 2.
     */
    Game.prototype.playerOneRockChoice = function(playerTwoChoice) {
        this.playerOneWins(playerTwoChoice !== this.CHOICE.PAPER);
    };

    /**
     * method playerOnePaperChoice
     * memberOf Game
     * @description Lógica cuando el jugador 1 elige Papel.
     * @param  {string} playerTwoChoice Elección del jugador 2.
     */
    Game.prototype.playerOnePaperChoice = function(playerTwoChoice) {
        this.playerOneWins(playerTwoChoice !== this.CHOICE.SCISSORS);
    };

    /**
     * method playerOneScissorsChoice
     * memberOf Game
     * @description Lógica cuando el jugador 1 elige Tijeras.
     * @param  {string} playerTwoChoice Elección del jugador 2.
     */
    Game.prototype.playerOneScissorsChoice = function(playerTwoChoice) {
        this.playerOneWins(playerTwoChoice !== this.CHOICE.ROCK);
    };

    /**
     * @description Método que resuelve la lógica para que gane el jugador 1.
     * method playerOneWins
     * memberOf Game
     * @param  {boolean} isPlayerOneWinnerChoice Lógica booleana que para que gane el jugador 1.
     */
    Game.prototype.playerOneWins = function(isPlayerOneWinnerChoice) {
        this.playerTwoWins(!isPlayerOneWinnerChoice);
    };

    /**
     * @description Método que resuelve la lógica para que gane el jugador 2.
     * method playerTwoWins
     * memberOf Game
     * @param  {boolean} isPlayerTwoWinnerChoice Lógica booleana que para que gane el jugador 2.
     */
    Game.prototype.playerTwoWins = function(isPlayerTwoWinnerChoice) {
        this.result = (isPlayerTwoWinnerChoice) ? this.RESULTS.PLAYERTWOWINS : this.RESULTS.PLAYERONEWINS;
    };

    return {
        Game: Game
    };
}());
