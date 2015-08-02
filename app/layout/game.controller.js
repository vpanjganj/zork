/*
 * todo: add some comments here
 */


// game.controller.js
(function () {
'use strict';

angular
    .module('app')
    .controller('gameController', gameController);

    gameController.$inject = [ 'player', '$scope','journal'];

function gameController(player,scope,journal) {
    var self = this;
    scope.journal = journal;

    self.player = new player();
    function show() {


        self.player.takeCommand('move up');

    }
    show();




}
})();