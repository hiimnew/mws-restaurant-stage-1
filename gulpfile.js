const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const imageResize = require('gulp-image-resize');


gulp.task('resize', function() {
  gulp.src('img/src/*')
    .pipe(imageResize({
      width: 400,
      height: 600,
      crop: true,
      upscale: false

    }).on('error', function(e) {
      console.log(e);
    }))
  .pipe(gulp.dest('img/resized_img'));
});

gulp.task('compress',function() {
  gulp.src('img/resized_img/*')
    .pipe(imagemin([
      imagemin.jpegtran({progressive: true})
    ]))
    .pipe(gulp.dest('img/compressed'));
});

gulp.task('compress_large', function() {
  gulp.src('img/src/*')
  .pipe(imagemin([
    imagemin.jpegtran({progressive: true})
  ]))
    .pipe(gulp.dest('img/compressed_large'))
});

