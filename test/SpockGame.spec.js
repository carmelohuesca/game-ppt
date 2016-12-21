describe('Especificaciones SpockGame:', function() {

    var game;
    var PLAYERONE = 'juan';
    var PLAYERTWO = 'jose';
    var ROCK, PAPER, SCISSORS, LIZARD, SPOCK;
    var DRAW, PLAYERONEWINS, PLAYERTWOWINS;

    beforeEach(function() {
        game = new moduleGame.SpockGame(PLAYERONE, PLAYERTWO);
        ROCK = game.CHOICE.ROCK;
        PAPER = game.CHOICE.PAPER;
        SCISSORS = game.CHOICE.SCISSORS;
        LIZARD = game.CHOICE.LIZARD;
        SPOCK = game.CHOICE.SPOCK;
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

    it('el juego tiene cinco opciones inicialmente (piedra, papel, tijera, lagarto, spock)', function() {
        expect(ROCK).toBe('piedra');
        expect(PAPER).toBe('papel');
        expect(SCISSORS).toBe('tijeras');
        expect(LIZARD).toBe('lagarto');
        expect(SPOCK).toBe('spock');
    });

    describe('Empatan cuando:', function() {
        it('los dos jugadores eligen la misma opción', function() {
            expect(game.round(ROCK, ROCK)).toBe(DRAW);
            expect(game.round(PAPER, PAPER)).toBe(DRAW);
            expect(game.round(SCISSORS, SCISSORS)).toBe(DRAW);
            expect(game.round(LIZARD, LIZARD)).toBe(DRAW);
            expect(game.round(SPOCK, SPOCK)).toBe(DRAW);
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

        it('el jugador 1 elige "piedra" y el jugador 2 elige "lagarto"', function() {
            expect(game.round(ROCK, LIZARD)).toBe(PLAYERONEWINS);
        });

        it('el jugador 1 elige "papel" y el jugador 2 elige "spock"', function() {
            expect(game.round(PAPER, SPOCK)).toBe(PLAYERONEWINS);
        });

        it('el jugador 1 elige "tijeras" y el jugador 2 elige "lagarto"', function() {
            expect(game.round(SCISSORS, LIZARD)).toBe(PLAYERONEWINS);
        });

        it('el jugador 1 elige "lagarto" y el jugador 2 elige "spock"', function() {
            expect(game.round(LIZARD, SPOCK)).toBe(PLAYERONEWINS);
        });

        it('el jugador 1 elige "lagarto" y el jugador 2 elige "papel"', function() {
            expect(game.round(LIZARD, PAPER)).toBe(PLAYERONEWINS);
        });

        it('el jugador 1 elige "spock" y el jugador 2 elige "piedra"', function() {
            expect(game.round(SPOCK, ROCK)).toBe(PLAYERONEWINS);
        });

        it('el jugador 1 elige "spock" y el jugador 2 elige "tijeras"', function() {
            expect(game.round(SPOCK, SCISSORS)).toBe(PLAYERONEWINS);
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

        it('el jugador 1 elige "piedra" y el jugador 2 elige "spock"', function() {
            expect(game.round(ROCK, SPOCK)).toBe(PLAYERTWOWINS);
        });

        it('el jugador 1 elige "papel" y el jugador 2 elige "lagarto"', function() {
            expect(game.round(PAPER, LIZARD)).toBe(PLAYERTWOWINS);
        });

        it('el jugador 1 elige "tijeras" y el jugador 2 elige "spock"', function() {
            expect(game.round(SCISSORS, SPOCK)).toBe(PLAYERTWOWINS);
        });

        it('el jugador 1 elige "lagarto" y el jugador 2 elige "piedra"', function() {
            expect(game.round(LIZARD, ROCK)).toBe(PLAYERTWOWINS);
        });

        it('el jugador 1 elige "lagarto" y el jugador 2 elige "tijeras"', function() {
            expect(game.round(LIZARD, SCISSORS)).toBe(PLAYERTWOWINS);
        });

        it('el jugador 1 elige "spock" y el jugador 2 elige "papel"', function() {
            expect(game.round(SPOCK, PAPER)).toBe(PLAYERTWOWINS);
        });

        it('el jugador 1 elige "spock" y el jugador 2 elige "lagarto"', function() {
            expect(game.round(SPOCK, LIZARD)).toBe(PLAYERTWOWINS);
        });

    });

});
