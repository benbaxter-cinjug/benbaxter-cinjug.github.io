var gulp = require('gulp');
var del = require('del');

gulp.task('default', function() {
  // place code for your default task here
  console.log("Hello World!");
})
.task('my-task', function() {
  // place code for your default task here
  console.log("Mine, mine, mine, mine!");
})

.task('mv:www', function() {
	gulp.src('src/**/*')
	  .pipe(gulp.dest('www/'));

	 gulp.src('bower_components/**/*')
	  .pipe(gulp.dest('www/bower_components/'));
})

.task('clean:www', function () {
  del(['www/**', '!www']);
})


.task('build', ['clean:www', 'mv:www'])
;