'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    jasmine = require('gulp-jasmine-browser');



var paths = {
    libs: 'node_modules/angular/angular.min.js',
    scripts: 'src/**/*.js',
    tests: ['src/**/*.js', 'test/**/*-spec.js'],
    views: 'src/views/*.html'
};

