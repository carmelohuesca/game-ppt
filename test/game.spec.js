describe('Especificaciones Game:', function() {

    var game;

    beforeEach(function() {
        game = new Game('juan', 'jose');
    });


    it('el juego se inicia con dos jugadores', function() {
        expect(game).toBeDefined();
        expect(game.playerOne).toBe('juan');
        expect(game.playerTwo).toBe('jose');
        expect(game.rounds).toBe(0);
    });

    // it('el juego tiene tres opciones inicialmente (piedra, papel, tijera)', function() {

    // });

    // describe('Empatan cuando:', function() {

    //   it('los dos jugadores eligen la misma opción', function() {

    //   });

    // });

    // describe('Gana el jugador 1 cuando:', function() {

    //   it('el jugador 1 elige "piedra" y el jugador 2 elige "tijeras"', function() {

    //   });

    //   it('el jugador 1 elige "papel" y el jugador 2 elige "piedra"', function() {

    //   });

    //   it('el jugador 1 elige "tijeras" y el jugador 2 elige "papel"', function() {

    //   });

    // });

    // describe('Gana el jugador 2 cuando:', function() {

    //   it('el jugador 1 elige "piedra" y el jugador 2 elige "papel"', function() {

    //   });

    //   it('el jugador 1 elige "papel" y el jugador 2 elige "tijeras"', function() {

    //   });

    //   it('el jugador 1 elige "tijeras" y el jugador 2 elige "piedra"', function() {

    //   });

    // });

});
