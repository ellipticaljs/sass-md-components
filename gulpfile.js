
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
    compileSass('md.components.scss');
    compileSass('md.grid.scss');
    compileSass('md.forms.scss');
    compileSass('md.semantic.scss');
});

gulp.task('minify',function(){
    minifyComponents();
    minifyGrid();
    minifyForms();
    minifySemantic();
});

function compileSass(src){
    gulp.src('./src/' + src)
        .pipe(sass())
        .pipe(gulp.dest('./dist'));
}

function minifyComponents(){
    concatStream('./dist/md.components.css','md.components.min.css')
        .pipe(minify())
        .pipe(gulp.dest('./dist'));
}

function minifyGrid(){
    concatStream('./dist/md.grid.css','md.grid.min.css')
        .pipe(minify())
        .pipe(gulp.dest('./dist'));
}

function minifyForms(){
  concatStream('./dist/md.forms.css','md.forms.min.css')
    .pipe(minify())
    .pipe(gulp.dest('./dist'));
}

function minifySemantic(){
  concatStream('./dist/md.semantic.css','md.semantic.min.css')
    .pipe(minify())
    .pipe(gulp.dest('./dist'));
}

function concatStream(src,name){
    return gulp.src(src)
        .pipe(concat(name))

}