/*
 * Room object
 */


// room.service.js
(function () {
    'use strict';


    angular
        .module('app')
        .factory('room', room);


    room.$inject = [];


    function room() {

        //constructor
        var room = function (name, description) {
            var self = this;
            //room properties
            self.name = name;
            self.initialDescription = description;// initial description of the room
            self.exits= new Array();// a collection of doors as exit doors, each linking to another room.

            //properties that may get handy in the future
            //this.items = [] a collection of items in the room;
        };


        //room methods

        //Adding a new exit door to the room. each unique direction can have only one door out
        room.prototype.addDoor = function (door) {


            // doors should be distinguished by their directions, so we can't let many doors assigned to 'one direction' lol
            // north , bottom , top , corner , it's very flexible
            var found = this.exits.some(function (el) {
                return el.direction === door.direction;
            });

            if (found) {
                throw new Error("You can't put two exit doors in one direction")
            }

            this.exits.push(door);
        }


        //returns the description + detail of doors
        //in the future it may also give detail of the available items in the room
        room.prototype.getDescription = function () {

            var description = this.initialDescription;


            description = description + '\n';
            description=description+'I can see something in the dark:';

            this.exits.forEach(function (door) {
                description = description + '\n';
                description = description + 'It seems like a door in the '+door.direction;
            });


            return description;

        }


        return room;
    }
})();



