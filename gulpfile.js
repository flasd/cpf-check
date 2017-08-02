const babel = require('gulp-babel');
const browserSync = require('browser-sync').create();
const flow = require('gulp-flowtype');
const fs = require('fs');
const gulp = require('gulp');
const hash = require('gulp-hash-filename');
const plumber = require('gulp-plumber');
const PrettyError = require('pretty-error');
const rename = require('gulp-rename');
const runSequece = require('run-sequence');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');

const babelOptions = JSON.parse(fs.readFileSync('./.babelrc', 'utf8'));
const env = process.env.NODE_ENV;
const pe = new PrettyError();

const hashOptions = {
    format: '{name}.{hash:8}{ext}'
};

function errorHandler(error) {
    // eslint-disable-next-line no-console
    console.log(pe.render(error));
}

const plumberOptions = {
    // eslint-disable-next-line object-shorthand
    errorHandler: errorHandler,
};

function production(done) {

    gulp.src('src/index.js')
        .pipe(plumber(plumberOptions))
        .pipe(sourcemaps.init())
        .pipe(babel(babelOptions))
        .pipe(rename('cpf.js'))
        .pipe(hash(hashOptions))
        .pipe(gulp.dest('./dist'))
        .pipe(uglify())
        .pipe(hash(hashOptions))
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist'))
        .on('end', () => done());
}

function development(done) {
    setTimeout(() => {
        gulp.src('src/index.js')
            .pipe(plumber(plumberOptions))
            .pipe(sourcemaps.init())
            .pipe(babel(babelOptions))
            .pipe(sourcemaps.write('.'))
            .pipe(browserSync.stream())
            .pipe(gulp.dest('./dist/'))
            .on('end', () => done());
    }, 1);
}

function typecheck(done) {
    gulp.src('./src/index.js')
        .pipe(plumber(plumberOptions))
        .pipe(flow({
            beep: true,
            abort: true,
        }))
        .on('end', () => done());
}

function watch(done) {
    gulp.watch(['src/index.js'], ['development']);

    browserSync.init({
        server: './dist',
    });

    gulp.src('./src/index.html')
        .pipe(gulp.dest('./dist/'));

    done();
}

function initialize() {
    if (env === 'production') {
        runSequece(['typecheck', 'production']);
        return;
    }

    runSequece(['watch', 'development']);
}

gulp.task('watch', watch);
gulp.task('development', development);
gulp.task('production', production);
gulp.task('typecheck', typecheck);
gulp.task('default', initialize);
