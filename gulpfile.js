const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();

// Функція для компіляції Sass в CSS
function styles() {
    return gulp.src('src/scss/**/*.scss') // Вхідні файли Sass
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS()) // Мінімізує CSS
        .pipe(gulp.dest('dist/css')) // Вихідна папка для CSS
        .pipe(browserSync.stream()); // Оновлює браузер
}

// Функція для обробки JavaScript
function scripts() {
    return gulp.src('src/js/**/*.js') // Вхідні файли JavaScript
        .pipe(concat('main.js')) // Об'єднує всі файли в один
        .pipe(uglify()) // Мінімізує JavaScript
        .pipe(gulp.dest('dist/js')) // Вихідна папка для JavaScript
        .pipe(browserSync.stream()); // Оновлює браузер
}

// Функція для запуску BrowserSync та спостереження за змінами
function serve() {
    browserSync.init({
        server: {
            baseDir: './' // Основна директорія для сервера
        }
    });

    gulp.watch('src/scss/**/*.scss', styles); // Спостерігаємо за змінами в Sass
    gulp.watch('src/js/**/*.js', scripts); // Спостерігаємо за змінами в JavaScript
    gulp.watch('*.html').on('change', browserSync.reload); // Перезавантаження при зміні HTML
}

// Експортуємо таски
exports.styles = styles;
exports.scripts = scripts;
exports.serve = serve;
exports.default = gulp.series(gulp.parallel(styles, scripts), serve);
