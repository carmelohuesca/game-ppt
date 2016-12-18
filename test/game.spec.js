describe('Especificaciones Game:', function() {

    var game;
    var PLAYERONE = 'juan';
    var PLAYERTWO = 'jose';
    var ROCK, PAPER, SCISSORS; 
    var DRAW,PLAYERONEWINS, PLAYERTWOWINS;
    
    beforeEach(function() {
        game = new Game(PLAYERONE, PLAYERTWO);
        ROCK = game.CHOICE.ROCK;
        PAPER = game.CHOICE.PAPER;
        SCISSORS = game.CHOICE.SCISSORS;
        DRAW = game.RESULTS.DRAW;
        PLAYERONEWINS = game.RESULTS.PLAYERONEWINS;
        PLAYERTWOWINS = game.RESULTS.PLAYERTWOWINS;
    });

    it('el juego se inicia con dos jugadores', function() {
        expect(game).toBeDefined();
        expect(game.playerOne).toBe(PLAYERONE);
        expect(game.playerTwo).toBe(PLAYERTWO);
        expect(game.rounds).toBe(0);
    });

    it('se incrementa el número de ronda en cada de tirada', function() {
        expect(game.rounds).toBe(0);
        expect(game.round(ROCK, ROCK)).toBe(DRAW);
        expect(game.rounds).toBe(1);
    });

    it('el juego tiene tres opciones inicialmente (piedra, papel, tijera)', function() {
        expect(ROCK).toBe('piedra');
        expect(PAPER).toBe('papel');
        expect(SCISSORS).toBe('tijeras');
    });

    describe('Empatan cuando:', function() {
        it('los dos jugadores eligen la misma opción', function() {
            expect(game.round(ROCK, ROCK)).toBe(DRAW);
            expect(game.round(PAPER, PAPER)).toBe(DRAW);
            expect(game.round(SCISSORS, SCISSORS)).toBe(DRAW);
        });
    });

    describe('Gana el jugador 1 cuando:', function() {
        it('el jugador 1 elige "piedra" y el jugador 2 elige "tijeras"', function() {
            expect(game.round(ROCK, SCISSORS)).toBe(PLAYERONEWINS);
        });

        it('el jugador 1 elige "papel" y el jugador 2 elige "piedra"', function() {
            expect(game.round(PAPER, ROCK)).toBe(PLAYERONEWINS);
        });

        it('el jugador 1 elige "tijeras" y el jugador 2 elige "papel"', function() {
            expect(game.round(SCISSORS, PAPER)).toBe(PLAYERONEWINS);
        });
    });

    describe('Gana el jugador 2 cuando:', function() {
        it('el jugador 1 elige "piedra" y el jugador 2 elige "papel"', function() {
            expect(game.round(ROCK, PAPER)).toBe(PLAYERTWOWINS);
        });

        it('el jugador 1 elige "papel" y el jugador 2 elige "tijeras"', function() {
            expect(game.round(PAPER, SCISSORS)).toBe(PLAYERTWOWINS);
        });

        it('el jugador 1 elige "tijeras" y el jugador 2 elige "piedra"', function() {
            expect(game.round(SCISSORS, ROCK)).toBe(PLAYERTWOWINS);
        });
    });

});
