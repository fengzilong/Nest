const gulp = require('gulp')
const serve = require('gulp-serve')
const nunjucks = require('gulp-nunjucks')
const escape = require('gulp-html-escape');
const replace = require('gulp-replace');

gulp.task('serve', serve({
	root: ['./public'],
	hostname: '127.0.0.1',
	port: 3030
}));

gulp.task('partial:escape', function () {
	return gulp.src('site/partials/**/*.html')
		.pipe(escape({}))
		.pipe(replace(/\{/g, '\\{'))
		.pipe(replace(/\}/g, '\\}'))
		.pipe(gulp.dest('site/partials-escape'))
})

gulp.task('html', [ 'partial:escape' ], function () {
	return gulp.src('site/*.html')
		.pipe(nunjucks.compile({
			time: Date.now(),
			title: 'Nest',
		}))
		.pipe(gulp.dest('public'))
})

gulp.task('site:css', function () {
	return gulp.src([
			'site/site.css',
			'site/reset.css',
			'site/example.css'
		])
		.pipe(gulp.dest('public'))
})

gulp.task('site:js', function () {
	return gulp.src('site/**/*.js')
		.pipe(gulp.dest('public'))
})

gulp.task('nest:css', function () {
	return gulp.src('dist/nest.css')
		.pipe(gulp.dest('public'))
})

gulp.task('nest:js', function () {
	return gulp.src('dist/nest.js')
		.pipe(gulp.dest('public'))
})

gulp.task('watch', function () {
	gulp.watch('./site/**/*.html', ['html'])
	gulp.watch('./site/**/*.css', ['site:css'])
	gulp.watch('./site/**/*.js', ['site:js'])
	gulp.watch('./dist/**/*.css', ['nest:css'])
	gulp.watch('./dist/**/*.js', ['nest:js'])
})

gulp.task('site:dist', ['html', 'site:css', 'site:js', 'nest:css', 'nest:js'])
gulp.task('site:dev', ['serve', 'site:dist', 'watch'])
gulp.task('default', ['site:dev'])
