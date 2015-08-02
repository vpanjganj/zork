/*
 * todo: add some comments here
 */


// player.service.js
(function () {
    'use strict';


    angular
        .module('app')
        .factory('player', player);


    player.$inject = [];


    function player() {

        //constructor
        var player = function (name,startingLocation) {

            //player properties
            this.name = name;
            this.currentLocation = startingLocation;// current location of the player, value should be a Room obj

            //properties that may get handy in the future
            //this.items = [] some sort of inventory
            //

        };


        //player methods

        //moving to next room with direction given
        player.prototype.move = function (direction) {
            var self = this;

            //self.currentLocation = currentLocation.door.getNextRoom();

        }





        return player;
    }
})();



