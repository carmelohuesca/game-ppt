/**
 * @namespace moduleGame
 * @description modulo del juego Piedra-Papel-Tijera
 * @return {object}  Objeto con la clase del juego
 */
var moduleGame = (function() {
    'use strict';

    /**
     * @class moduleGame.Game
     * @memberOf moduleGame
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
     * method init
     * memberOf Game
     * @description Método que inicializa las rondas.
     */
    Game.prototype.init = function() {
        this.CHOICE = Object.freeze({
            ROCK: 'piedra',
            PAPER: 'papel',
            SCISSORS: 'tijeras'
        });
        this.RESULTS = Object.freeze({
            DRAW: 'empate',
            PLAYERONEWINS: 'gana el jugador ' + this.playerOne,
            PLAYERTWOWINS: 'gana el jugador ' + this.playerTwo
        });
        this.resetRound();
    };

    /**
     * method resetRound
     * memberOf Game
     * @description Método para reiniciar las rondas.
     */
    Game.prototype.resetRound = function() {
        this.rounds = 0;
    };

    /**
     * method changeRound
     * memberOf Game
     * @description Método que se va a ejecutar cuando se cambie de ronda.
     */
    Game.prototype.changeRound = function() {
        this.rounds++;
    };

    /**
     * method round
     * memberOf Game
     * @description Método que se ejecuta en cada ronda.
     * @param  {string} playerOneChoice Elección del jugador 1.
     * @param  {string} playerTwoChoice Elección del jugador 2.
     * @return {string}                 Resultado de la ronda.
     */
    Game.prototype.round = function(playerOneChoice, playerTwoChoice) {
        this.changeRound();
        return this.logic(playerOneChoice, playerTwoChoice);
    };

    /**
     * method logic
     * memberOf Game
     * @description Método que se encarga de ejecutar la lógica.
     * @param  {string} playerOneChoice Elección del jugador 1.
     * @param  {string} playerTwoChoice Elección del jugador 2.
     * @return {string}                 Resultado de la ronda.
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
        return this.result;
    };

    /**
     * method playerOneRockChoice
     * memberOf Game
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
     * method playerOneWins
     * memberOf Game
     * @description Método que resuelve la lógica para que gane el jugador 1.
     * @param  {boolean} isPlayerOneWinnerChoice Lógica booleana que para que gane el jugador 1.
     */
    Game.prototype.playerOneWins = function(isPlayerOneWinnerChoice) {
        this.playerTwoWins(!isPlayerOneWinnerChoice);
    };

    /**
     * method playerTwoWins
     * memberOf Game
     * @description Método que resuelve la lógica para que gane el jugador 2.
     * @param  {boolean} isPlayerTwoWinnerChoice Lógica booleana que para que gane el jugador 2.
     */
    Game.prototype.playerTwoWins = function(isPlayerTwoWinnerChoice) {
        this.result = (isPlayerTwoWinnerChoice) ? this.RESULTS.PLAYERTWOWINS : this.RESULTS.PLAYERONEWINS;
    };

    return {
        Game: Game
    };
}());
