/*
 * It's the game's world. it builds the house and layouts the rooms and exits
 */


// house.service.js
(function () {
    'use strict';


    angular
        .module('app')
        .service('house', house);

    house.$inject = ['room', 'door', 'journal'];


    function house(room, door, journal) {

        this.rooms = [];


        this.addRoom = function (room) {
            var found = this.rooms.some(function (el) {
                return el.name === room.name;
            });

            if (found) {
                throw new Error("You can't add two rooms with the same name")

            }

            this.rooms.push(room);
        };


        //Takes a name and loads the relevent room. That's why we can't built more than one room with the same name
        //It can be replaced by ID
        this.getRoomByName = function (name) {

            var found = this.rooms.filter(function (el) {
                if (el.name === name)
                    return el;
            });

            if (!found[0]) {
                throw new Error("Couldn't find the room with the given name")
            }

            return found[0];

        };


        //generates the world/house
        this.initialize = function () {
            try {
                var roomA = new room('Room A', 'This is room A description');
                var roomB = new room('Room B', 'This is room B description');
                var roomC = new room('Room C', 'This is room C description');

                roomA.addDoor(new door('north', 'Room B'));
                roomB.addDoor(new door('south', 'Room A'));
                roomB.addDoor(new door('north', 'Room C'));
                roomC.addDoor(new door('south', 'Room B'));


                this.addRoom(roomA);
                this.addRoom(roomB);
                this.addRoom(roomC);


            } catch (err) {
                journal.addToJournal(err)
            }
            journal.addToJournal('and the game begins...')
        };
    }
})();

