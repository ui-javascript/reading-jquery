const config = require('../../config/index')
const gulp = require('gulp')
const plumber = require('gulp-plumber')
const notify = require('gulp-notify')
const less = require('gulp-less')
const autoprefixer = require('gulp-autoprefixer')
const cleanCSS = require('gulp-clean-css')
const md5 = require('gulp-md5-assets')
const resolvePath = require("gulp-resolve-path")
const sourcemaps = require('gulp-sourcemaps')

// CSS监听
gulp.task('watchCSS', function () {
    gulp.watch(`${config.dev.assetsDir}/css/**/*.less`, ['compileLess']);
});

// less编译
gulp.task('compileLess', function (cb) {
    // 注意，只解析_output.less
    return gulp.src(`${config.dev.assetsDir}/css/theme/**/_output.less`)
        .pipe(plumber({errorHandler: notify.onError('Error:<%=error.message%>')}))
        .pipe(less())
        .pipe(autoprefixer())
        // .pipe(concat({ext: '.css'})) //合并
        .pipe(cleanCSS({compatibility: 'ie7', inline: ['remote'], rebase: false}))
        // .pipe(sourcemaps.write())
        // .pipe(gulp.dest(PATHS.lessDevThemeFolder))
        .pipe(gulp.dest(`${config.common.staticDir}/css/theme`))

    // cb(err)
})

// less编译
gulp.task('distLess', function () {
    // 注意，只解析_output.less这样的单文件
    return gulp.src(`${config.dev.assetsDir}/css/theme/**/_output.less`)
        .pipe(plumber({errorHandler: notify.onError('Error:<%=error.message%>')}))
        .pipe(less())
        .pipe(autoprefixer())
        // .pipe(concat({ext: '.css'})) //合并
        .pipe(cleanCSS({compatibility: 'ie7'}))
        .pipe(gulp.dest(`${config.common.staticDir}/css/theme`))
        .pipe(md5(10, `${config.common.templatesDir}/**/*.html`));
});


