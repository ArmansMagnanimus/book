var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('helo', function(){
	console.log('A ver');
});
gulp.task('browserSync', function() {
	browserSync.init({
		server: {
			baseDir: '../book'
		},
	})
})
gulp.task('watch',['browserSync'], function(){
	gulp.watch('*.html', browserSync.reload);
	gulp.watch('css/*.css', browserSync.reload)
});