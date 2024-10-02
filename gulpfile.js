
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

// Таск для HTML
gulp.task('html', function() {
    return gulp.src('./app/html/index.html')
        .pipe(gulp.dest('./dist'))
        .pipe(browserSync.stream());
});

// Таск для SCSS
gulp.task('scss', function() {
    return gulp.src('./app/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.stream());
});

// Таск для JS
gulp.task('js', function() {
    return gulp.src('./app/js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
        .pipe(browserSync.stream());
});

// Таск для зображень
gulp.task('images', function() {
    return gulp.src('./app/img//*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img'))
        .pipe(browserSync.stream());
});

// Запуск BrowserSync
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: './dist'
        }
    });

    gulp.watch('app/html/*.html', gulp.series('html'));
    gulp.watch('app/scss/**/*.scss', gulp.series('scss'));
    gulp.watch('app/js/**/*.js', gulp.series('js'));
    gulp.watch('app/img/**/*', gulp.series('images'));
});


gulp.task('default', gulp.parallel('serve', 'html', 'scss', 'js', 'images' ));
