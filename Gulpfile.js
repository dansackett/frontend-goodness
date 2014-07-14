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
    sass:   ['src/css/*.scss', 'src/css/**/*.scss'],
    coffee: ['src/coffee/*.coffee', 'src/coffee/**/*.coffee'],
    js:     'public/js/*.js'
};

// Compile SASS
gulp.task('compile-sass', function () {
    return gulp.src(src.sass)
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
gulp.task('browserify', function () {
  return gulp.src(src.coffee, { read: false })
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
    watch({glob: src.coffee}, function (files) {
        gulp.start('clean-js');
        gulp.start('browserify');
    });

    watch({glob: src.sass}, function (files) {
        gulp.start('compile-sass');
    });
});
