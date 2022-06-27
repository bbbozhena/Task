
const { watch } = require("gulp");
var gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));


gulp.task("sass", function () {
  return (
    gulp
      .src("style.scss")
      .pipe(sass())
      .on("error", sass.logError)
      .pipe(gulp.dest("styles"))
  );
});

gulp.task('styles', function(){
  return  gulp.src('./style.scss')
  .pipe(gulp.dest('./sass'));  
});

watch('./style.scss', function(){
  gulp.start('styles');
});





