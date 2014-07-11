// Define Gulp Objects
var gulp            = require('gulp');
var sass            = require('gulp-sass');
var watch           = require('gulp-watch');
var rimraf          = require('gulp-rimraf');
var concat          = require('gulp-concat');
var browserify      = require('gulp-browserify');
var autoprefixer    = require('gulp-autoprefixer');

// Assign Destinations
dest = {
    css: 'public/css',
    js: 'public/js',
};

// Assign Sources
src = {
    sass: 'src/sass/*.scss',
    all_coffee: 'src/coffee/*.coffee',
    main_coffee: 'src/coffee/main.coffee',
    js: 'public/js/*.js'
};

// Compile SASS
gulp.task('compile-sass', function () {
    return gulp.src(src.sass)
    .pipe(sass({
        onError: function(e) {
            console.log(e);
        },
        style: 'compressed'
    }))
    .pipe(autoprefixer("> 1%"))
    .pipe(gulp.dest(dest.css));
});

// Browserify
gulp.task('browserify', function () {
  return gulp.src(src.main_coffee, { read: false })
    .pipe(browserify({
        transform: ['coffeeify'],
        extensions: ['.coffee']
    }))
    .pipe(concat('main.js'))
    .pipe(gulp.dest(dest.js));
})

// Clean JS
gulp.task('clean-js', function() {
  return gulp.src(src.js, { read: false }).pipe(rimraf());
});

// Create watcher for all tasks
gulp.task('watch', function () {
    watch({glob: src.all_coffee}, function (files) {
        gulp.start('clean-js');
        gulp.start('browserify');
    });

    watch({glob: src.sass}, function (files) {
        gulp.start('compile-sass');
    });
});
