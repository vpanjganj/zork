/*
 * A player class
 */


// player.service.js
(function () {
    'use strict';


    angular
        .module('app')
        .factory('player', player);


    player.$inject = ['house', 'journal'];


    function player(house,journal) {


        //constructor
        var player = function (name, startingLocation) {
            var self = this;

            //player properties
            self.name = name;
            self.currentLocation = startingLocation;// current location of the player, value is Room obj
            //properties that may get handy in the future
            //this.items = [] some sort of inventory
            //

        };


        //player methods

        //moving to next room with direction given
        player.prototype.move = function (direction) {
            var found = this.currentLocation.exits.filter(function (el) {
                if (el.direction === direction[0])
                    return el;
            });

            if (!found[0]) {
                throw new Error("There is no door way in the direction you're heading")
            }

            this.currentLocation = house.getRoomByName(found[0].leadsTo);
            journal.addToJournal('You entered ' + this.currentLocation.name);
        };



        //look function, it takes the parameters and makes sure it has to look 'at' something
        //then it will check whether that 'something' is registered
        player.prototype.look = function (parameters) {


            //Let's make sure it's an 'at'
            if (parameters.shift() !== 'at') {
                throw new Error("There is problem with your command")
            }

            //Let's see what we want to look at, every thing after that can be parameters
            var object = parameters.shift()


            //We check whether look at something is registered. 'look.room' or 'look.object (for the future)'
            if (typeof player.prototype.look[object] != 'function') {

                throw new Error("Your command is unknown");
            }
            this.look[object](parameters,this);
        };


        //Look at room, which is basically puting the room desc inside the journal
        player.prototype.look.room = function (parameters,player) {
            journal.addToJournal(player.currentLocation.getDescription());
        };


        //Parsing the command splitting the input
        player.prototype.takeCommand = function (commandString) {
            try {


                var parameters = commandString.split(/[ ,]+/);

                var command = parameters.shift();

                //is there any function registered with starter word?
                if (typeof player.prototype[command] != 'function') {


                    throw new Error("Your command is unknown");
                }

                //take the first word as command and send the rest as parameters
                this[command](parameters);




            } catch (err) {
                journal.addToJournal(err);

               // throw new Error(err) // My test case check for error, so I haven't removed it

            }
        };


        return player;
    }
})();



