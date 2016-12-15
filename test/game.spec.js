describe('Especificaciones Game:', function() {

    var game;
    var PLAYERONE = 'juan';
    var PLAYERTWO = 'jose';

    beforeEach(function() {
        game = new Game(PLAYERONE, PLAYERTWO);
    });

    it('el juego se inicia con dos jugadores', function() {
        expect(game).toBeDefined();
        expect(game.playerOne).toBe(PLAYERONE);
        expect(game.playerTwo).toBe(PLAYERTWO);
        expect(game.rounds).toBe(0);
    });

    it('el juego tiene tres opciones inicialmente (piedra, papel, tijera)', function() {
        expect(game.CHOICE.ROCK).toBe('piedra');
        expect(game.CHOICE.PAPER).toBe('papel');
        expect(game.CHOICE.SCISSORS).toBe('tijeras');
    });

    describe('Empatan cuando:', function() {

        it('los dos jugadores eligen la misma opción', function() {
            expect(game.round(game.CHOICE.ROCK, game.CHOICE.ROCK)).toBe(game.RESULTS.DRAW);
            expect(game.round(game.CHOICE.PAPER, game.CHOICE.PAPER)).toBe(game.RESULTS.DRAW);
            expect(game.round(game.CHOICE.SCISSORS, game.CHOICE.SCISSORS)).toBe(game.RESULTS.DRAW);
        });

    });

    describe('Gana el jugador 1 cuando:', function() {

        it('el jugador 1 elige "piedra" y el jugador 2 elige "tijeras"', function() {
            expect(game.round(game.CHOICE.ROCK, game.CHOICE.SCISSORS)).toBe(game.RESULTS.PLAYERONEWINS);
        });

        it('el jugador 1 elige "papel" y el jugador 2 elige "piedra"', function() {
            expect(game.round(game.CHOICE.PAPER, game.CHOICE.ROCK)).toBe(game.RESULTS.PLAYERONEWINS);
        });

        // it('el jugador 1 elige "tijeras" y el jugador 2 elige "papel"', function() {

        // });

    });

    // describe('Gana el jugador 2 cuando:', function() {

    //   it('el jugador 1 elige "piedra" y el jugador 2 elige "papel"', function() {

    //   });

    //   it('el jugador 1 elige "papel" y el jugador 2 elige "tijeras"', function() {

    //   });

    //   it('el jugador 1 elige "tijeras" y el jugador 2 elige "piedra"', function() {

    //   });

    // });

});
