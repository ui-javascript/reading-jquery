const config = require('../../config/index')
const gulp = require('gulp')

// 用来删除文件
const clean = require('gulp-clean')

// 清理文件夹
gulp.task('cleanDev', function () {
    return gulp.src([
            './static/js/*',
            './static/css/*',
            './static/images/*',
            './templates/*',
            './sw.js'],
        {read: false})
        .pipe(clean())
})

// 清除原来的css
gulp.task('cleanCSS', function () {
    return gulp.src([
            './static/css/*'
        ],
        {read: false})
        .pipe(clean())
})

gulp.task('cleanDist', function () {
    return gulp.src([
        './dist.zip',
        `${config.prod.distDir}/*`
        ],
        {read: false})
        .pipe(clean())
})

