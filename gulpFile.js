'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    concat = require('gulp-concat'),
    jasmine = require('gulp-jasmine-browser');



var paths = {
    libs: 'node_modules/angular/angular.min.js',
    scripts: ['app/*.js','app/services/*.js','app/controllers/*.js'],
    testDependencies: ['node_modules/angular/angular.min.js','node_modules/angular-mocks/angular-mocks.js','node_modules/angular-resource/angular-resource.js','app/**/*.js','test/**/*-spec.js'],
    views: 'app/views/*.html'
};

gulp.task('jasmine', function () {
    return gulp.src(paths.testDependencies).pipe(watch(paths.testDependencies))
        .pipe(jasmine.specRunner()).pipe(watch(paths.testDependencies))
        .pipe(jasmine.server({port: 8888}));
});

gulp.task('views', function () {
    return gulp.src(paths.views).pipe(gulp.dest('built/'));
});


gulp.task('scripts', function () {
    return gulp.src(paths.scripts).pipe(concat('app.js')).pipe(gulp.dest('built/js'));
});

gulp.task('libs', function () {
    return gulp.src(paths.libs).pipe(concat('libs.js')).pipe(gulp.dest('built/js'));

});


gulp.task('default', ['scripts', 'views',   'libs']);

gulp.task('watch', function () {


    gulp.watch([paths.scripts, paths.views], ['default']);

});