const del = require('del');
const gulp = require('gulp');
const loadPlugins = require('gulp-load-plugins');
const uglify = require('gulp-uglify');
const gulpIf = require('gulp-if');

// Load all of our Gulp plugins
const $ = loadPlugins();

// Clean up
gulp.task('clean', (done) => {
	del.sync(['./dist', './dist.zip']);
	done();
});

// Lint
gulp.task('lint', (done) => {
	done();

	return gulp.src('./src/index.js')
		.pipe($.plumber())
		.pipe($.eslint())
		.pipe($.eslint.format())
		.pipe($.eslint.failOnError());
});

// Build
gulp.task('build', gulp.series('lint', 'clean', (done) => {
	done();

	return gulp.src('./src/**/*')
		.pipe($.babel()) // this will also handle react transformations
		.pipe(gulpIf('*.js', uglify()))
		.pipe(gulp.dest('./dist'));
}));
