var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');

var vendors = {
    css: [
        'bootstrap/dist/css/bootstrap.css'
    ].map(addBowerPath),
    js: [
        'angular/angular.js'
    ].map(addBowerPath)
};

var src = {
    html: ['src/index.html'],
    css: [
        'style'
    ].map(addSrcPath('css')),
    js: [
        'todo-list'
    ].map(addSrcPath('js'))
};

gulp.task('html', function() {
    return gulp.src(src.html)
        .pipe(gulp.dest('public'));
});

gulp.task('css', function() {
    return gulp.src(vendors.css.concat(src.css))
        .pipe(concat('app.css'))
        .pipe(gulp.dest('public'))
        .pipe(browserSync.stream());
});

gulp.task('js', function() {
    return gulp.src(vendors.js.concat(src.js))
        .pipe(concat('app.js'))
        .pipe(gulp.dest('public'));
});

gulp.task('js-watch', ['js'], browserSync.reload);

gulp.task('serve', ['default'], function() {
    browserSync.init({
        server: "./public"
    });

    gulp.watch(src.css, ['css']);
    gulp.watch(src.js, ['js-watch']);
    gulp.watch(src.html, ['html']);
    gulp.watch("public/index.html").on('change', browserSync.reload);
});


gulp.task('default', ['html', 'css', 'js']);

function addBowerPath(path) {
    return './bower_components/' + path;
}

function addSrcPath(ext) {
    return function(path) {
        return './src/' + ext + '/' + path + '.' + ext;
    }
}