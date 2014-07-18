/**
 * Define Gulp Objects
 */
var gulp            = require('gulp'),
    autoprefixer    = require('gulp-autoprefixer'),
    coffee          = require('gulp-coffee'),
    concat          = require('gulp-concat'),
    files           = require('main-bower-files'),
    filter          = require('gulp-filter'),
    flatten         = require('gulp-flatten'),
    include         = require('gulp-include'),
    minifyCss       = require('gulp-minify-css'),
    ngAnnotate      = require('gulp-ng-annotate'),
    ngClassify      = require('gulp-ng-classify'),
    plumber         = require('gulp-plumber'),
    sass            = require('gulp-sass'),
    uglify          = require('gulp-uglify'),
    watch           = require('gulp-watch');

// ----------------------------------------------------------------------------

/**
 * Define Configuration object
 */
var config = {
    dest: {
        js: 'public/js',
        css: 'public/css',
        fonts: 'public/fonts'
    },
    src: {
        sass: [
            'src/css/*.scss',
            'src/css/**/*.scss'
        ],
        coffee: {
            base: 'src/coffee/app.coffee',
            all: [
                'src/coffee/*.coffee',
                'src/coffee/**/*.coffee'
            ]
        }
    },
    additional: [
    ]
};

// ----------------------------------------------------------------------------

/**
 * Compile SASS into CSS
 */
gulp.task('compile-css', function () {
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
gulp.task('compile-js', function () {
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
 * Create Watch Scripts
 */
gulp.task('default', function () {
    var jsFilter        = filter('*.js');
    var cssFilter       = filter('*.css');
    var fontFilter      = filter(['*.eot', '*.woff', '*.svg', '*.ttf']);
    var bower_files     = files().concat(config.additional);

    watch({glob: config.src.coffee.all}, ['compile-js']);
    watch({glob: config.src.sass}, ['compile-css']);

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
