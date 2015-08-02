/*
 * todo: add some comments here
 */


// house.service.js
(function () {
    'use strict';


    angular
        .module('app')
        .service('house', house);

    house.$inject = [];



    function house() {

        this.rooms=[];


        this.addRoom = function (room) {
            var found = this.rooms.some(function (el) {
                return el.name === room.name;
            });

            if (found) {
                throw new Error("You can't add two rooms with the same name")
            }

            this.rooms.push(room);
        };


        //todo: some comments here
        this.getRoomByName = function (name) {

            var found = this.rooms.filter(function (el) {
                 if(el.name === name)
                 return el;
            });

            if (!found[0]) {
                throw new Error("Couldn't find the room with the given name")
            }

            return found[0];

        };
    }
})();

