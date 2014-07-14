// Define Gulp Objects
var gulp            = require('gulp'),
    sass            = require('gulp-sass'),
    watch           = require('gulp-watch'),
    rimraf          = require('gulp-rimraf'),
    concat          = require('gulp-concat'),
    browserify      = require('gulp-browserify'),
    autoprefixer    = require('gulp-autoprefixer'),
    minifycss       = require('gulp-minify-css');

// Assign Destinations
dest = {
    css:    'public/css',
    js:     'public/js',
};

// Assign Sources
src = {
    sass:           ['src/css/*.scss', 'src/css/**/*.scss'],
    main_coffee:    ['src/coffee/main.coffee'],
    coffee:         ['src/coffee/*.coffee', 'src/coffee/**/*.coffee']
};

// Compile SASS
gulp.task('compile-css', function () {
    gulp.src(src.sass)
    .pipe(sass({
        onError: function(e) {
            console.log(e);
        },
        style: 'expanded'
    }))
    .pipe(autoprefixer("> 1%"))
    .pipe(gulp.dest(dest.css))
    .pipe(minifycss())
    .pipe(gulp.dest(dest.css));
});

// Browserify
gulp.task('compile-js', function () {
  rimraf(dest.js);

  gulp.src(src.main_coffee, { read: false })
    .pipe(browserify({
        transform: ['coffeeify'],
        extensions: ['.coffee']
    }))
    .pipe(concat('main.js'))
    .pipe(gulp.dest(dest.js));
})

// Create watcher for all tasks
gulp.task('watch', function () {
    watch({glob: src.coffee}, ['compile-js']);
    watch({glob: src.sass}, ['compile-css']);
});
