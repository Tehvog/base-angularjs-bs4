var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');

gulp.task('build', function() {
    gulp.src(['src/**/module.js', 'src/**/*.js'])
        .pipe(concat('app.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest('.'));
});

gulp.task('watch', ['build'], function() {
    gulp.watch('src/**/*.js', ['build']);
});
