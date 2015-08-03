(function () {
    'use strict';

    angular
        .module('app')
        .run(runBlock);

    runBlock.$inject = ['house'];

    function runBlock(house) {
        house.initialize();

    }


})();