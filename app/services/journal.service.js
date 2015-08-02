/*
 * todo: add some comments here
 */


// journalLogger.service.js
(function () {
    'use strict';


    angular
        .module('app')
        .service('journal', journal);

    function journal() {

        this.content='game starting';
        this.addToJournal = function (log) {
            this.content = this.content + '\n࿈-࿈-࿈-࿈-࿈-࿈-࿈-࿈-࿈-࿈-࿈-࿈-࿈-࿈-࿈-࿈-࿈-࿈-࿈-࿈-࿈-࿈-࿈-࿈-࿈-࿈-࿈-࿈-࿈-࿈\n' + log;

        };
    }
})();

