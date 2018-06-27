const config = require('../../config/index')
const gulp = require('gulp')
const plumber = require('gulp-plumber')
const notify = require('gulp-notify')
const less = require('gulp-less')
const autoprefixer = require('gulp-autoprefixer')
const cleanCSS = require('gulp-clean-css')

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

