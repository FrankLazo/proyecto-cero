// HTML
import htmlmin from 'gulp-htmlmin'

// CSS
import postcss from 'gulp-postcss'
import cssnano from 'cssnano'
import autoprefixer from 'autoprefixer'

// JavaScript
import gulp from 'gulp'
import babel from 'gulp-babel'
import terser from 'gulp-terser'

// Pug
import pug from 'gulp-pug'

// Sass
import sass from 'gulp-sass'

// Common
import concat from 'gulp-concat'

// Clean CSS
import clean from 'gulp-purgecss'

// Cache Bust
import cacheBust from 'gulp-cache-bust'

// Optimización imágenes
import imagemin from 'gulp-imagemin'

// Browser sync
import { init as server, stream, reload } from 'browser-sync'

// Plumber
import plumber from 'gulp-plumber'

// Variables/Constantes
const production = false
const cssPlugins = [
    cssnano(),
    autoprefixer()
]

// Tasks
gulp.task('html-min', () => {
    return gulp
        .src('./src/*.html')
        .pipe(plumber())
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments:     true
        }))
        .pipe(cacheBust({
            type: 'timestamp'
        }))
        .pipe(gulp.dest('./dist'))
})

gulp.task('styles', () => {
    return gulp
        .src('./src/css/*.css')
        .pipe(plumber())
        .pipe(concat('styles-min.css'))
        .pipe(postcss(cssPlugins))
        .pipe(gulp.dest('./dist/css'))
        .pipe(stream())
    })
    
gulp.task('babel', () => {
    return gulp
        .src('./src/js/*.js')
        .pipe(plumber())
        .pipe(concat('scripts-min.js'))
        .pipe(babel())
        .pipe(terser())
        .pipe(gulp.dest('./dist/js'))
})

gulp.task('views', () => {
    return gulp
        .src('./src/views/pages/*.pug')
        .pipe(plumber())
        .pipe(pug({
            pretty: production ? false : true
        }))
        .pipe(cacheBust({
            type: 'timestamp'
        }))
        .pipe(gulp.dest('./dist'))
})

gulp.task('sass', () => {
    return gulp
        .src('./src/sass/styles.sass')
        .pipe(plumber())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('./dist/css'))
        .pipe(stream())
})

gulp.task('clean', () => {
    return gulp
        .src('./dist/css/styles.css')
        .pipe(plumber())
        .pipe(clean({
            content: ['./dist/*.html']
        }))
        .pipe(gulp.dest('./dist/css'))
})

gulp.task('imgmin', () => {
    return gulp
        .src('./src/images/*')
        .pipe(plumber())
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.mozjpeg({quality: 30, progressive: true}),
            imagemin.optipng({optimizationLevel: 1})
        ]))
        .pipe(gulp.dest('./dist/images'))
})

gulp.task('default', () => {
    server({
        server: './dist'
    })
    gulp.watch('./src/*.html', gulp.series('html-min')).on('change', reload)
    gulp.watch('./src/css/*.css', gulp.series('styles'))
    gulp.watch('./src/views/**/*.pug', gulp.series('views')).on('change', reload)
    gulp.watch('./src/sass/**/*.sass', gulp.series('sass'))
    gulp.watch('./src/js/*.js', gulp.series('babel')).on('change', reload)
})