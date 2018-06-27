const config = require('../../config/index')
const gulp = require('gulp')
const plumber = require('gulp-plumber')
const fileInclude = require('gulp-file-include')

// 编译compileHTML
gulp.task('compileHTML', function () {
    return gulp.src(`${config.dev.devDir}/pages/**/*.html`)
        .pipe(plumber())
        .pipe(fileInclude({
            prefix: '@@',
            basepath: '@file'
        }))
        // .pipe(gulp.dest(PATHS.htmlDevFolder))
        .pipe(gulp.dest(`${config.common.templatesDir}`))
})