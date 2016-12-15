var Game = function (playerOne, playerTwo){
	this.playerOne = playerOne;
	this.playerTwo = playerTwo;
	this.init();
};

Game.prototype.init = function(){
	this.rounds = 0;
};
