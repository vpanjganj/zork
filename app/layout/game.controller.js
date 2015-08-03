


// game.controller.js
(function () {
'use strict';

angular
    .module('app')
    .controller('gameController', gameController);

    gameController.$inject = [ 'player', '$scope','journal','house'];

function gameController(player,scope,journal,house) {
    var game = this;



    game.journal = journal;

    game.player = new player('Tom',house.getRoomByName('Room A'));




}
})();