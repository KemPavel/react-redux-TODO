'use strict';

const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const babelify = require('babelify');
const del = require('del');


gulp.task('html', function() {
  return gulp.src('app/index.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('styles', function() {
  return gulp.src('app/styles/**/*')
    .pipe(gulp.dest('dist/styles'));
});

gulp.task('clean', function() {
  return del(['dist']);
});

gulp.task('scripts', function () {
  return browserify({entries: './app/scripts/app.js', debug: true})
    .transform('babelify', {presets: ['es2015', 'react']})
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('dist/scripts/'));
});

gulp.task('build', gulp.series('clean', gulp.parallel('html', 'styles', 'scripts')));

gulp.task('watch', function() {
  gulp.watch('./app/scripts/**/*', gulp.series('scripts'));
  gulp.watch('./app/styles/**/*', gulp.series('styles'));
  gulp.watch('./app/*.html', gulp.series('html'));
});

gulp.task('default',gulp.series('build', 'watch'));



