const config = require('../../config')
const gulp = require('gulp')

gulp.task('copyHTMLLeft', function () {
    console.log(...config.dev.copyHTMLExclude)

    return gulp.src([
        `${config.dev.pagesDir}/**/*.*`,
        // `!${config.dev.pagesDir}/**/*.html`,
        // `!${config.dev.pagesDir}/**/*.inc`,
        // `!${config.dev.pagesDir}/**/*.md`,
        ...config.dev.copyHTMLExclude
        ])
        .pipe(gulp.dest(`${config.common.templatesDir}`))
})

// 搬运图片
gulp.task('copyGlobalImages', function () {
    // 搬运图片
    return gulp.src([
        `${config.dev.assetsDir}/images/**/*.*`
        ])
        .pipe(gulp.dest(`${config.common.staticDir}/images`))
})
gulp.task('copyImages', function () {
    // 搬运图片
    return gulp.src([
        `${config.dev.imagesDir}/**/*.*`
        ])
        .pipe(gulp.dest(`${config.common.staticDir}/images`))
})

// @deprecated 搬运非预处理(less)的静态样式(css)
gulp.task('copyCss', function () {
    return gulp.src([
        `${config.dev.assetsDir}/css/**/*.css`
        ])
        .pipe(gulp.dest(`${config.common.staticDir}/css`))
})