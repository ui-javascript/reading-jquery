const config = require('../../config/index')
const gulp = require('gulp')
const plumber = require('gulp-plumber')
const babel = require('gulp-babel')


// 缩编JS
gulp.task('compileJS', function () {
    return gulp.src(`${config.dev.assetsDir}/js/**/*.js`)
        .pipe(plumber()) // 错误提示
        // .pipe(concat({ext: '.js'})) //合并同一目录下的所有文件
        .pipe(babel())
        .pipe(gulp.dest(`${config.common.staticDir}/js`))
});