/*
 * Door object. each room can have many doors and each door can lead to another room
 */


// door.service.js
(function () {
    'use strict';


    angular
        .module('app')
        .factory('door', door);


    door.$inject = [];


    function door() {

        //constructor
        var door = function (direction,roomName) {
            var self = this;
            //door properties
            self.leadsTo = roomName;// door points to another room, where you'll end up
            self.direction = direction;// it has a direction, which is flexible, you can even have an exit way to the roof

            //properties that may get handy in the future
            //this.locked = a boolean
            //this.key = can be a reference to an item. it can be checked against player's inventory

        };

        return door;
    }
})();



