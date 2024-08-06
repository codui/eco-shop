// gulpfile.mjs
import gulp from 'gulp';
import rename from 'gulp-rename';
import cleanCSS from 'gulp-clean-css';
import gulpSass from 'gulp-sass';
import * as scss from 'sass';
const sass = gulpSass(scss);
import sourcemaps from 'gulp-sourcemaps';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import babel from 'gulp-babel';
import uglify from 'gulp-uglify';
import concat from 'gulp-concat';
import imagemin from 'gulp-imagemin';
import webp from 'gulp-webp';
import webpHtml from 'gulp-webp-html-nosvg';
import { deleteAsync } from 'del';
import htmlmin from 'gulp-htmlmin';
import size from 'gulp-size';
import newer from 'gulp-newer';
import browserSync from 'browser-sync';
browserSync.create();
import replace from 'gulp-replace';
import { makeConvert } from './src/lib-ttf-to-woff/font-ttf-woff.js';
import dotenv from 'dotenv';

dotenv.config();

// Paths to files
const paths = {
    fonts: {
        src: 'src/fonts/*.ttf',
        dest: 'dist/fonts'
    },
    html: {
        src: 'src/*.html',
        dest: 'dist'
    },
    styles: {
        src: 'src/scss/**/*.scss',
        dest: 'dist/css/'
    },
    scripts: {
        src: 'src/scripts/**/*.js',
        dest: 'dist/scripts/'
    },
    images: {
        src: 'src/images/**',
        dest: 'dist/images'
    }
};

async function clean() {
    return deleteAsync(['dist/*']);
}

async function ttfToWoff() {
    return makeConvert();
}

function fontsTask(done) {
    return gulp.src(paths.fonts.src)
        .pipe(gulp.dest(paths.fonts.dest))
        .on('end', done);
}

function imgTask() {
    return gulp.src(paths.images.src, { encoding: false })
        .pipe(newer(paths.images.dest))
        .pipe(webp())
        .pipe(gulp.src(paths.images.src, { encoding: false }))
        .pipe(newer(paths.images.dest))
        .pipe(imagemin({ progressive: true }))
        .pipe(size({ showFiles: true }))
        .pipe(gulp.dest(paths.images.dest));
}

function htmTask() {
    return gulp.src(paths.html.src)
        .pipe(webpHtml())
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(size({ showFiles: true }))
        .pipe(gulp.dest(paths.html.dest))
        .pipe(browserSync.stream());
}

function styles() {
    return gulp.src(paths.styles.src)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([autoprefixer()]))
        .pipe(cleanCSS())
        .pipe(rename({ basename: 'main', suffix: '.min' }))
        .pipe(sourcemaps.write('.'))
        .pipe(size({ showFiles: true }))
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(browserSync.stream());
}

function scripts() {
    return gulp.src(paths.scripts.src)
        .pipe(sourcemaps.init())
        .pipe(babel({ presets: ['@babel/env'] }))
        // Uncomment the next two lines if you want to minify and concatenate scripts
        // .pipe(uglify())
        // .pipe(concat('main.js'))
        .pipe(replace('process.env.TELEGRAM_CHAT_ID', JSON.stringify(process.env.TELEGRAM_CHAT_ID)))
        .pipe(replace('process.env.TELEGRAM_TOKEN', JSON.stringify(process.env.TELEGRAM_TOKEN)))
        .pipe(sourcemaps.write('.'))
        .pipe(size({ showFiles: true }))
        .pipe(gulp.dest(paths.scripts.dest))
        .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: "./dist",
        },
        // open: false // Uncomment this line when deploying on Vercel!
    });
    gulp.watch(paths.html.src, htmTask);
    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.scripts.src, scripts);
    gulp.watch(paths.images.src, imgTask);
    gulp.watch(paths.fonts.src, fontsTask);
    gulp.watch(paths.html.dest).on('change', browserSync.reload);
}

export { clean, fontsTask, ttfToWoff, styles, scripts, imgTask, htmTask, watch };

const build = gulp.series(clean, fontsTask, ttfToWoff, imgTask, htmTask, gulp.parallel(styles, scripts, imgTask, watch));
const production = gulp.series(clean, fontsTask, ttfToWoff, htmTask, gulp.parallel(styles, scripts, imgTask));

export { production, build };
export default build;
