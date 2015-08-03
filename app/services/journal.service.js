/*
 * The journal keeps track of the events
 */


// journal.service.js
(function () {
    'use strict';


    angular
        .module('app')
        .service('journal', journal);



    journal.$inject = [];



    function journal() {

        this.content="Generating the game...";

        this.addToJournal = function (log) {
            //each event will get separated
            this.content = this.content + '\n------------------------------------\n\n' + log;

        };
    }
})();

