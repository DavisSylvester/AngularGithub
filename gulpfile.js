var gulp = require('gulp');
var config = require('./gulpconfig.js');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var webserver = require('gulp-webserver');
var inject = require('gulp-inject');

gulp.task('less', function(){
   var LESSFILES = config.Files.MAIN_LESS_FILE;
   var CUSTOM_LESS = config.Files.CUSTOM_LESS;
   
   return gulp.src([LESSFILES, CUSTOM_LESS])
            .pipe(sourcemaps.init())
            .pipe(less())
            .pipe(autoprefixer({
                browsers: ['last 2 versions']
            }))
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest(config.Files.MAIN_CSS_DIR));

   
});

gulp.task('customAngularJS', function () {
    
    var sources = gulp.src(config.Files.ALL_CUSTOM_ANGULAR_JS, {read: false});
    var target = gulp.src(config.Files.INDEX_HTML);

    return target.pipe(inject(sources, {name: 'angular', relative: true}))
            .pipe(gulp.dest(config.Files.APP_ROOT));


});

gulp.task('watch', function () {
    gulp.watch(config.Files.ALL_LESS_FILES, ['less']);
    gulp.watch(config.Files.ALL_CUSTOM_ANGULAR_JS, ['customAngularJS']);
});

gulp.task('webServerDev', function () {
    gulp.src(['./'])
            .pipe(webserver({
                livereload: {
                    enable: true
                },
                path: '/',
                directoryListing: false,
                open: true,
                host: 'localhost',
                https: false,
                port: 3108
                //fallback: '/app/index.html'
//                middleware: 
            }));
});

gulp.task('default', ['webServerDev', 'watch', 'less', 'customAngularJS']);