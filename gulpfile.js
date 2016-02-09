
var gulp=require('gulp');
var sassdoc = require('sassdoc');
var sass = require('gulp-sass');
var concat=require('gulp-concat');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');

gulp.task('default',function(){
    console.log('echo sass md components...');
});

gulp.task('sassdoc', function () {
    return gulp.src('stylesheets/**/*.scss')
        .pipe(sassdoc());

});

gulp.task('dist', function () {
    compileSass();
});

gulp.task('minify',function(){
    concatStream('./dist/md.components.css','md.components.min.css')
        .pipe(minify())
        .pipe(gulp.dest('./dist'));
});

function compileSass(){
    gulp.src('./src/md.components.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist'));
}

function concatStream(src,name){
    return gulp.src(src)
        .pipe(concat(name))

}