// ////////////////////////////////////////////////
//
// EDIT CONFIG OBJECT BELOW !!!
// 
// jsConcatFiles => list of javascript files (in order) to concatenate
// buildFilesFoldersRemove => list of files to remove when running final build
// // /////////////////////////////////////////////

var config = {
	jsConcatFiles: [
		'./app/js/acs-ad.js'
	],
	tweenmaxBundle: [
		'./app/js/CSSPlugin.min.js',
		'./app/js/EasePack.min.js',
		'./app/js/TweenLite.min.js',
		'./app/js/TimelineMax.min.js'
	],
	buildFilesFoldersRemove:[
		'build/scss/', 
		'build/js/!(*.min.js)',
		'build/bower.json',
		'build/bower_components/',
		'build/maps/'
	]
};


// ////////////////////////////////////////////////
// Required taskes
// gulp build
// bulp build:serve
// // /////////////////////////////////////////////

var gulp 			= require('gulp'),
	sass 			= require('gulp-sass'),
	sourcemaps 		= require('gulp-sourcemaps'),
	autoprefixer 	= require('gulp-autoprefixer'),
	browserSync 	= require('browser-sync'),
	reload 			= browserSync.reload,
	concat 			= require('gulp-concat'),
	uglify 			= require('gulp-uglify'),
	rename 			= require('gulp-rename'),
	del 			= require('del'),
	imagemin 		= require('gulp-imagemin')
;


// ////////////////////////////////////////////////
// Log Errors
// // /////////////////////////////////////////////

function errorlog(err){
	console.log(err.message);
	this.emit('end');
}


// ////////////////////////////////////////////////
// Scripts Tasks
// ///////////////////////////////////////////////


gulp.task('scripts', function() {
  return gulp.src(config.jsConcatFiles)
	.pipe(sourcemaps.init())
		.pipe(concat('temp.js'))
		.pipe(uglify())
		.on('error', errorlog)
		.pipe(rename('acs-ad.min.js'))		
    .pipe(sourcemaps.write('../maps'))
    .pipe(gulp.dest('./app/js/'))
    .pipe(reload({stream:true}));
});


// ////////////////////////////////////////////////
// Bundle Library Scripts Tasks
// ///////////////////////////////////////////////


gulp.task('lib-scripts', function() {
  return gulp.src(config.tweenmaxBundle)
	.pipe(sourcemaps.init())
		.pipe(concat('lib-bundle.js'))
		.pipe(uglify())
		.on('error', errorlog)
		.pipe(rename('lib-bundle.min.js'))		
    .pipe(sourcemaps.write('../maps'))
    .pipe(gulp.dest('./app/js/'))
    .pipe(reload({stream:true}));
});


// ////////////////////////////////////////////////
// Image Compression
// ///////////////////////////////////////////////

gulp.task('image-min', function() {
	gulp.src('app/media/img/*')
		.pipe(imagemin({
			progressive: true,
			optimizationLevel: 4
		}))	
		.pipe(gulp.dest('app/media/img'))
		.pipe(reload({stream:true}));
});


// ////////////////////////////////////////////////
// Styles Tasks
// ///////////////////////////////////////////////

gulp.task('styles', function() {
	gulp.src('app/scss/style.scss')
		.pipe(sourcemaps.init())
			.pipe(sass({outputStyle: 'compressed'}))
			.on('error', errorlog)
			.pipe(autoprefixer({
	            browsers: ['last 3 versions'],
	            cascade: false
	        }))	
		.pipe(sourcemaps.write('../maps'))
		.pipe(gulp.dest('app/css'))
		.pipe(reload({stream:true}));
});


// ////////////////////////////////////////////////
// HTML Tasks
// // /////////////////////////////////////////////

gulp.task('html', function(){
    gulp.src('app/**/*.html')
    .pipe(reload({stream:true}));
});


// ////////////////////////////////////////////////
// Browser-Sync Tasks
// // /////////////////////////////////////////////

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./app/"
        }
    });
});

// task to run build server for testing final app
gulp.task('build:serve', function() {
    browserSync({
        server: {
            baseDir: "./build/"
        }
    });
});


// ////////////////////////////////////////////////
// Build Tasks
// // /////////////////////////////////////////////

// clean out all files and folders from build folder
gulp.task('build:cleanfolder', function (cb) {
	del([
		'build/**'
	], cb);
});

// task to create build directory of all files
gulp.task('build:copy', ['build:cleanfolder'], function(){
    return gulp.src('app/**/*/')
    .pipe(gulp.dest('build/'));
});

// task to removed unwanted build files
// list all files and directories here that you don't want included
gulp.task('build:remove', ['build:copy'], function (cb) {
	del(config.buildFilesFoldersRemove, cb);
});

gulp.task('build', ['build:copy', 'build:remove']);


// ////////////////////////////////////////////////
// Watch Tasks
// // /////////////////////////////////////////////

gulp.task ('watch', function(){
	gulp.watch('app/scss/**/*.scss', ['styles']);
	gulp.watch('app/js/**/*.js', ['scripts']);
  	gulp.watch('app/**/*.html', ['html']);
});


gulp.task('default', ['scripts', 'lib-scripts', 'image-min' ,'styles', 'html', 'browser-sync', 'watch']);
