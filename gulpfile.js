
require('gulp-cli')();


var gulp = require ('gulp');

var sass = require ('gulp-sass');

gulp.task('sass', function(){
    return gulp.src ('style.scss')
      .pipe(sass()) 
      .pipe(gulp.dest('style.css'))
  });
