var gulp = require('gulp');
var browserSync = require('browser-sync');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');

//Browser-sync
gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: './'
		},
		notify: false
	});
});

// HTML
gulp.task('html', function() {
	return gulp
	src('index.html')
	pipe(plumber())
	pipe(browserSync.reload({stream: true}))
});

//Styles
gulp.task('style', function(){
	return gulp
	src('style.css')
	pipe(plumber())
	pipe(browserSync.reload({stream: true}))
});

// Scripts
gulp.task('js', function() {
	return gulp
	src('main.js')
	pipe(plumber())
	pipe(browserSync.reload({stream: true}))
});

//Build
gulp.task('build', [
	'html',
	'style',
	'js'
]);

// Watch
gulp.task('watch', function(){
	watch('index.html', function(event, cb) {
		gulp.start('html');
	});
	watch('style.css', function(event, cb) {
		gulp.start('style');
	});
	watch('main.js', function(event, cb) {
		gulp.start('js');
	});;
});

// Default task
gulp.task('default',['build', 'browser-sync', 'watch']);