/*
 * It's a directive that keeps the text area's scroll locked down at the bottom
 */


// scroll.directive.js
(function () {
    'use strict';

    angular
        .module('app')
        .directive('scrollBottom', scrollBottom);

    scrollBottom.$inject = [];

    function scrollBottom() {

        return function (scope, elem, attr) {
            scope.$watch(function () {
                    return elem[0].value;
                },
                function (e) {
                    elem[0].scrollTop = elem[0].scrollHeight;
                });

        };

    }




})();