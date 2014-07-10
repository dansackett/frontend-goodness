// Define Gulp Objects
var gulp            = require('gulp');
var minifycss       = require('gulp-minify-css');
var sass            = require('gulp-sass');
var watch           = require('gulp-watch');
var rimraf          = require('gulp-rimraf');
var concat          = require('gulp-concat');
var browserify      = require('gulp-browserify');
var autoprefixer    = require('gulp-autoprefixer');

// Compile SASS
gulp.task('compile-sass', function () {
    return gulp.src('src/sass/*.scss')
    .pipe(sass({onError: function(e) { console.log(e); } }))
    .pipe(autoprefixer("last 2 versions", "> 1%", "ie 8"))
    .pipe(gulp.dest('public/css'));
});

// Minify CSS
gulp.task('minify-css', function () {
    return gulp.src('public/css/*.css')
        .pipe(minifycss())
        .pipe(gulp.dest('public/css'));
});

// Browserify
gulp.task('browserify', function () {
  return gulp.src('src/coffee/main.coffee', { read: false })
    .pipe(browserify({
        transform: ['coffeeify'],
        extensions: ['.coffee']
    }))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('public/js'));
})

// Clean JS
gulp.task('clean-js', function() {
  return gulp.src('public/js/*.js', { read: false }).pipe(rimraf());
});

// Create watcher for all tasks
gulp.task('watch-files', function () {
    watch({glob: 'src/coffee/*.coffee'}, function (files) {
        gulp.start('clean-js');
        gulp.start('browserify');
    });

    watch({glob: 'src/sass/*.scss'}, function (files) {
        gulp.start('compile-sass');
        gulp.start('minify-css');
    });
});
