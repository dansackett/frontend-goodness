/**
 * Define Gulp Objects
 */
var gulp            = require('gulp'),
    autoprefixer    = require('gulp-autoprefixer'),
    coffee          = require('gulp-coffee'),
    concat          = require('gulp-concat'),
    files           = require('main-bower-files'),
    filter          = require('gulp-filter'),
    fs              = require('fs'),
    flatten         = require('gulp-flatten'),
    include         = require('gulp-include'),
    minifyCss       = require('gulp-minify-css'),
    ngAnnotate      = require('gulp-ng-annotate'),
    ngClassify      = require('gulp-ng-classify'),
    plumber         = require('gulp-plumber'),
    sass            = require('gulp-sass'),
    uglify          = require('gulp-uglify'),
    watch           = require('gulp-watch'),
    yaml            = require('js-yaml');

// ----------------------------------------------------------------------------

/**
 * Define Configuration object
 */
var config = yaml.load(fs.readFileSync('gulp_config.yaml', 'utf-8'));

// ----------------------------------------------------------------------------

/**
 * Compile SASS into CSS
 */
gulp.task('Generate Styles', function () {
    gulp.src(config.src.sass)
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer("> 1%"))
        .pipe(gulp.dest(config.dest.css))
        .pipe(minifyCss())
        .pipe(gulp.dest(config.dest.css));
});

// ----------------------------------------------------------------------------

/**
 * Compile CoffeeScript and Angular Code into JS
 */
gulp.task('Generate Scripts', function () {
    gulp.src(config.src.coffee.base)
        .pipe(plumber())
        .pipe(include())
        .pipe(ngClassify())
        .pipe(coffee({bare: true}))
        .pipe(ngAnnotate())
        .pipe(gulp.dest(config.dest.js));
});

// ----------------------------------------------------------------------------

/**
 * Compile Bower files
 */
gulp.task('Compress Bower Files', function () {
    var jsFilter        = filter('*.js'),
        cssFilter       = filter('*.css'),
        fontFilter      = filter(['*.eot', '*.woff', '*.svg', '*.ttf']),
        bower_files     = files();

    // If you have additional files defined, add them in
    if (config.additional) {
        var bower_files = files().concat(config.additional);
    }

    gulp.src(bower_files)
        // Combine all JS Files
        .pipe(jsFilter)
        .pipe(uglify())
        .pipe(concat('dependencies.min.js'))
        .pipe(gulp.dest(config.dest.js))
        .pipe(jsFilter.restore())

        // Combine all CSS files
        .pipe(cssFilter)
        .pipe(minifyCss())
        .pipe(concat('dependencies.min.css'))
        .pipe(gulp.dest(config.dest.css))
        .pipe(cssFilter.restore())

        // Flatten fonts
        .pipe(fontFilter)
        .pipe(flatten())
        .pipe(gulp.dest(config.dest.fonts));
});

// ----------------------------------------------------------------------------

/**
 * Create Watch Scripts
 */
gulp.task('Create Watch Scripts', function () {
    watch({glob: config.src.coffee.all, emitOnGlob: false}, ['Generate Scripts']);
    watch({glob: config.src.sass, emitOnGlob: false}, ['Generate Styles']);
});

// ----------------------------------------------------------------------------

/**
 * Default task
 */
gulp.task('default', [
    'Generate Scripts',
    'Generate Styles',
    'Compress Bower Files',
    'Create Watch Scripts'
]);
