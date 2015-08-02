/*
 * todo: add some comments here
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

            //room properties
            this.name = name;
            this.initialDescription = description;// initial description of the room
            this.exits = [];// a collection of doors as exit doors, each linking to another room.

            //properties that may get handy in the future
            //this.items = [] a collection of items in the room;
        };


        //room methods

        //Adding a new exit door to the room. each unique direction can have only one door out
        room.prototype.adddoor = function (door) {
            var self = this;

            // todo: put the validation here and throw exception
            var found = self.exits.some(function (el) {
                return el.direction === door.direction;
            });

            if (found) {
                throw "";
            }

            self.exits.push(door);
        }


        //returns the description + detail of doors
        //in the future it may also give detail of the available items in the room
        room.prototype.getDescription = function () {
            var self = this;

            var description = self.initialDescription;


            description ='\n࿈-࿈-࿈-࿈-࿈-࿈-࿈-࿈-࿈-࿈-࿈-࿈-࿈-࿈-࿈-࿈-࿈-࿈-࿈-࿈-࿈-࿈-࿈-࿈-࿈-࿈-࿈-࿈-࿈-࿈\n'+ description + '\n';
            description=description+'I can see something in the dark:';

            self.exits.forEach(function (door) {
                description = description + '\n';
                description = description + 'It seems like a door in the '+door.direction;
            });


            return description;

        }


        return room;
    }
})();



