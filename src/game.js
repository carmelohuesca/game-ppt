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
                    this.rockChoice(playerTwoChoice);
                    break;
                case this.CHOICE.PAPER:
                    this.paperChoice(playerTwoChoice);
                    break;
                case this.CHOICE.SCISSORS:
                    this.scissorsChoice(playerTwoChoice);
                    break;
            }
        }
        return this.result;
    };

    /**
     * method rockChoice
     * memberOf Game
     * @description Lógica cuando el jugador 1 elige Piedra.
     * @param  {string} choice Elección del jugador.
     */
    Game.prototype.rockChoice = function(choice) {
        this.shouldWinWhen(choice !== this.CHOICE.PAPER);
    };

    /**
     * method paperChoice
     * memberOf Game
     * @description Lógica cuando el jugador 1 elige Papel.
     * @param  {string} choice Elección del jugador.
     */
    Game.prototype.paperChoice = function(choice) {
        this.shouldWinWhen(choice !== this.CHOICE.SCISSORS);
    };

    /**
     * method scissorsChoice
     * memberOf Game
     * @description Lógica cuando el jugador 1 elige Tijeras.
     * @param  {string} choice Elección del jugador.
     */
    Game.prototype.scissorsChoice = function(choice) {
        this.shouldWinWhen(choice !== this.CHOICE.ROCK);
    };

    /**
     * method shouldWinWhen
     * memberOf Game
     * @description Método que resuelve la lógica para que gane el jugador 1.
     * @param  {boolean} isPlayerOneWinnerChoice Lógica booleana que para que gane el jugador 1.
     */
    Game.prototype.shouldWinWhen = function(isPlayerOneWinnerChoice) {
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


    /**
     * @class moduleGame.SpockGame
     * @memberOf moduleGame
     * @augments moduleGame.Game
     * @description Representa el juego de Piedra-Papel-Tijera-Lagarto-Spock.
     * @constructor
     * @param {string} playerOne - Nombre del jugador 1.
     * @param {string} playerTwo - Nombre del jugador 2.
     */
    var SpockGame = function(playerOne, playerTwo) {
        Game.call(this, playerOne, playerTwo);
    };
    SpockGame.prototype = Object.create(Game.prototype);
    SpockGame.prototype.constructor = SpockGame;


    /**
     * method init
     * memberOf SpockGame
     * @description Método que inicializa las rondas.
     */
    SpockGame.prototype.init = function() {
        this.CHOICE = Object.freeze({
            ROCK: 'piedra',
            PAPER: 'papel',
            SCISSORS: 'tijeras',
            LIZARD: 'lagarto',
            SPOCK: 'spock'
        });
        this.RESULTS = Object.freeze({
            DRAW: 'empate',
            PLAYERONEWINS: 'gana el jugador ' + this.playerOne,
            PLAYERTWOWINS: 'gana el jugador ' + this.playerTwo
        });
        this.resetRound();
    };

    /**
     * method logic
     * memberOf SpockGame
     * @description Método que se encarga de ejecutar la lógica.
     * @param  {string} playerOneChoice Elección del jugador 1.
     * @param  {string} playerTwoChoice Elección del jugador 2.
     * @return {string}                 Resultado de la ronda.
     */
    SpockGame.prototype.logic = function(playerOneChoice, playerTwoChoice) {
        if (playerOneChoice === playerTwoChoice) {
            this.result = this.RESULTS.DRAW;
        } else {
            switch (playerOneChoice) {
                case this.CHOICE.ROCK:
                    this.rockChoice(playerTwoChoice);
                    break;
                case this.CHOICE.PAPER:
                    this.paperChoice(playerTwoChoice);
                    break;
                case this.CHOICE.SCISSORS:
                    this.scissorsChoice(playerTwoChoice);
                    break;
                case this.CHOICE.LIZARD:
                    this.lizardChoice(playerTwoChoice);
                    break;
                case this.CHOICE.SPOCK:
                    this.spockChoice(playerTwoChoice);
                    break;
            }
        }
        return this.result;
    };



    /**
     * method rockChoice
     * memberOf SpockGame
     * @description Lógica cuando el jugador 1 elige Piedra.
     * @param  {string} choice Elección del jugador.
     */
    SpockGame.prototype.rockChoice = function(choice) {
        this.shouldWinWhen(this.isDistinctOf(choice, 'PAPER', 'SPOCK'));
    };

    /**
     * method paperChoice
     * memberOf SpockGame
     * @description Lógica cuando el jugador 1 elige Papel.
     * @param  {string} choice Elección del jugador.
     */
    SpockGame.prototype.paperChoice = function(choice) {
        this.shouldWinWhen(this.isDistinctOf(choice, 'SCISSORS', 'LIZARD'));
    };

    /**
     * method scissorsChoice
     * memberOf SpockGame
     * @description Lógica cuando el jugador 1 elige Tijeras.
     * @param  {string} choice Elección del jugador.
     */
    SpockGame.prototype.scissorsChoice = function(choice) {
        this.shouldWinWhen(this.isDistinctOf(choice, 'ROCK', 'SPOCK'));
    };


    /**
     * method lizardChoice
     * memberOf SpockGame
     * @description Lógica cuando el jugador 1 elige Lagarto.
     * @param  {string} choice Elección del jugador.
     */
    SpockGame.prototype.lizardChoice = function(choice) {
        this.shouldWinWhen(this.isDistinctOf(choice, 'ROCK', 'SCISSORS'));
    };

    /**
     * method spockChoice
     * memberOf SpockGame
     * @description Lógica cuando el jugador 1 elige Spock.
     * @param  {string} choice Elección del jugador.
     */
    SpockGame.prototype.spockChoice = function(choice) {
        this.shouldWinWhen(this.isDistinctOf(choice, 'PAPER', 'LIZARD'));
    };

    /**
     * method isDistinctOf
     * memberOf SpockGame
     * @description La elección es distinta de las dos siguientes.
     * @param  {string}  choice       eleccion del jugador.
     * @param  {string}  firstChoice  nombre de la elección primera simplificada.
     * @param  {string}  secondChoice nombre de la elección primera simplificada.
     * @return {Boolean}              Resultado de la elección
     */
    SpockGame.prototype.isDistinctOf = function(choice, firstChoice, secondChoice) {
        return (choice !== this.CHOICE[firstChoice] && choice !== this.CHOICE[secondChoice]);
    };


    return {
        Game: Game,
        SpockGame: SpockGame
    };
}());
