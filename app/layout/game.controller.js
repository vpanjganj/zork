/*
 * todo: add some comments here
 */


// game.controller.js
(function () {
'use strict';

angular
    .module('app')
    .controller('gameController', gameController);

    gameController.$inject = [ 'player', '$scope'];

function gameController(player,scope) {
    var self = this;
    scope.test = 'hi';
    self.player = new player();

    show();

    function show() {



    }


}
})();