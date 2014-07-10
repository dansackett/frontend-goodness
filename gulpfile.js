// Define Gulp Objects
var gulp        = require('gulp');
var minifycss   = require('gulp-minify-css');
var coffee      = require('gulp-coffee');
var sass        = require('gulp-sass');
var watch       = require('gulp-watch');

// Compile CoffeeScript
gulp.task('compile-coffee', function () {
    gulp.src('src/coffee/*.coffee')
    .pipe(coffee())
    .pipe(gulp.dest('public/js'));
});

// Compile SASS
gulp.task('compile-sass', function () {
    gulp.src('src/sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('public/css'));
});

// Minify CSS
gulp.task('minify-css', function () {
    gulp.src('public/css/*.css')
    .pipe(minifycss())
    .pipe(gulp.dest('public/css'));
});

// Create watcher for all tasks
gulp.task('watch-files', function () {
    watch({glob: 'src/coffee/*.coffee'}, function (files) {
        gulp.start('compile-coffee');
    });

    watch({glob: 'src/sass/*.scss'}, function (files) {
        gulp.start('compile-sass');
        gulp.start('minify-css');
    });
});
