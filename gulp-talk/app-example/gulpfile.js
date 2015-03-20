var gulp = require('gulp');
var del = require('del');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var htmlreplace = require('gulp-html-replace');
var gulpSequence = require('gulp-sequence');


gulp.task('default', function() {
  // place code for your default task here
  console.log("Hello World!");
})
.task('my-task', function() {
  // place code for your default task here
  console.log("Mine, mine, mine, mine!");
})

.task('mv', gulpSequence('mv:bower:www'))

.task('mv:bower:www', function() {
	  gulp.src('bower_components/**/*.css')
	  	.pipe(gulp.dest('www/bower_components/'));
})

.task('clean:www', function () {
  del.sync(['www/**']);
})


.task('js', gulpSequence('minify:js', 'minify:js-lib'))

.task('minify:js-lib', function() {

		gulp.src(
			['bower_components/hammerjs/hammer.min.js', 
		     'bower_components/angular/angular.min.js', 
		     'bower_components/angular-animate/angular-animate.min.js', 
		     'bower_components/angular-aria/angular-aria.min.js', 
		     'bower_components/angular-material/angular-material.min.js', 
			 'bower_components/angular-ui-router/release/angular-ui-router.min.js', 
		     'bower_components/angular-resource/angular-resource.min.js']
			)
		    .pipe(uglify())
		    .pipe(concat("lib.min.js"))
		    .pipe(gulp.dest("www/js/"));
})

.task('minify:js', function() {
	gulp.src('src/js/**/*.js')
	    // This will minify and rename to *.min.js
	    .pipe(uglify())
	    //this line is replaced with the concat afterwards
	    //.pipe(rename({ extname: '.min.js' }))
	    .pipe(concat("all.min.js"))
	    .pipe(gulp.dest("www/js/"));
})

.task('html', ['html:partials', 'html:index'])

.task('html:index', function() {

	gulp.src('src/index.html')    
        .pipe(htmlreplace({
        	'js' : 'js/all.min.js',
        	'lib-scripts' : 'js/lib.min.js'
        }))
        .pipe(gulp.dest('www/'));
})

.task('html:partials', function() {
	gulp.src(['src/partials/*.html', '!src/index.html'])
	  .pipe(gulp.dest('www/partials/'));
})

.task('css', function() {

	return gulp.src('src/**/*.css')
	  .pipe(gulp.dest('www/'));
})


.task('build', gulpSequence('clean:www', 'js', 'html', 'css', 'mv'))
;