/*
 * todo: add some comments here
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

            //door properties
            this.leadsTo = roomName;// door points to another room, where you'll end up
            this.direction = direction;// it has a direction, which is flexible, you can even have an exit way to the roof

            //properties that may get handy in the future
            //this.locked = a boolean
            //this.key = can be a reference to an item. it can be checked against player's inventory

        };






        return door;
    }
})();



