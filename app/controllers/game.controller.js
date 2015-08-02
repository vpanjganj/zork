/*
 * todo: add some comments here
 */


// game.controller.js
(function () {
'use strict';

angular
    .module('app')
    .controller('game', game);

game.$inject = [ 'player', '$scope'];

function game(player,scope) {
    var self = this;
    scope.test = 'hi';
    self.player = new player();

    show();

    function show() {



    }


}
})();