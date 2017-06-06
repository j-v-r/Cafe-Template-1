'use strict';
var gulp = require('gulp');
var image = require('gulp-image');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');

gulp.task('compressImages', () => {
		gulp.src('./prod/*')
		.pipe(image({
			mozjpeg: false,
			jpegoptim: false,
			pngquant: true,
			optipng: false,
			zopflipng: true,
			jpegRecompress: true,
			gifsicle: true,
			svgo: true
		}))
		.pipe(gulp.dest('./imgs/'));
});

gulp.task('processCss', () => {
	return gulp.src(['css/application.css'])
		.pipe(cleanCSS())
		.pipe(concat('prod.min.css'))
		.pipe(gulp.dest('./dist'));
});