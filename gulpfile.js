// include gulp
var gulp = require('gulp'); 

// include plug-ins
var jshint = require('gulp-jshint');

const babel = require('gulp-babel');

const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const runSequence = require('run-sequence');

var clean = require('gulp-clean');

var inlinesource = require('gulp-inline-source');

var smoosher = require('gulp-smoosher');

// JS hint task
gulp.task('jshint', function() {
  gulp.src('./src/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});


gulp.task('transpile', () => {
    return gulp.src('src/main.jsx')
        .pipe(babel({
            presets: ['react']
        }))
    //Was passed into babel function
      
        .pipe(gulp.dest('target'));
});

gulp.task('compressimages', () => {
    return gulp.src('src/images/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('target/images'));
});

gulp.task('copyimages', function() {
    gulp.src('src/images/*')
        .pipe(gulp.dest('target/images'));
});

gulp.task('copystyles', function() {
    gulp.src('src/styles/*')
        .pipe(gulp.dest('target/styles'));
});

gulp.task('copyindex', function() {
    gulp.src('src/index.html')
        .pipe(gulp.dest('target'));
});

gulp.task('default', function (callback) {
    runSequence(
        'clean',
        'jshint',
        // 'compressimages',
        'copyimages',
        'copystyles',
        'copyindex',
        'transpile',
        'inlinesource',
        'inlinecss',
        function (error) {
            if (error) {
                console.log(error.message);
            } else {
                console.log('COMPILE FINISHED SUCCESSFULLY');
            }
            callback(error);
        });
});

gulp.task('inlinecss', function() {
    return gulp.src('./target/index.html')
        .pipe(smoosher())
        .pipe(gulp.dest('./target'));
});

gulp.task('clean', function () {
    return gulp.src('target/*', {read: false})
        .pipe(clean());
});


gulp.task('inlinesource', function () {
    return gulp.src('./target/index.html')
        .pipe(inlinesource())
        .pipe(gulp.dest('./target'));
});