const config = require('../../config/index')
const gulp = require('gulp')
const plumber = require('gulp-plumber')
const fileInclude = require('gulp-file-include')
const minifyHtml = require('gulp-minify-html')
const md5 = require('gulp-md5-assets')

// 编译compileHTML
gulp.task('compileHTML', function () {
    return gulp.src(`${config.dev.pagesDir}/**/*.html`)
        .pipe(plumber())
        .pipe(fileInclude({
            prefix: '@@',
            basepath: '@file'
        }))
        // .pipe(gulp.dest(PATHS.htmlDevFolder))
        .pipe(gulp.dest(`${config.common.templatesDir}`))
})

// 缩编HTML
gulp.task('distHTML', function () {
    return gulp.src(`${config.dev.pagesDir}/**/*.html`)
        .pipe(plumber())
        .pipe(fileInclude({
            prefix: '@@',
            basepath: '@file'
        }))
        // 压缩一波
        .pipe(minifyHtml())
        .pipe(gulp.dest(`${config.common.templatesDir}`))
        .pipe(md5(10))
});