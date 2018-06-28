const config = require('../../config')
const gulp = require('gulp')

gulp.task('copyHTMLLeft', function () {
    return gulp.src([
        `${config.dev.pagesDir}/**/*.*`,
        `!${config.dev.pagesDir}/**/*.html`,
        `!${config.dev.pagesDir}/**/*.inc`,
        `!${config.dev.pagesDir}/**/*.md`
        ])
        .pipe(gulp.dest(`${config.common.templatesDir}`))
})

// 搬运图片
gulp.task('copyImages', function () {
    // 搬运图片
    return gulp.src([
        `${config.dev.assetsDir}/images/**/*.*`
        ])
        .pipe(gulp.dest(`${config.common.staticDir}/images`))
})

// 搬运静态样式
gulp.task('copyCss', function () {
    return gulp.src([
        `${config.dev.assetsDir}/css/**/*.css`
        ])
        .pipe(gulp.dest(`${config.common.staticDir}/css`))
})