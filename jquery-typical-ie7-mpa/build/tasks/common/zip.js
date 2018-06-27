const config = require('../../config/index')
const gulp = require('gulp')
const plumber = require('gulp-plumber')
const zip = require('gulp-zip')

// 压缩
gulp.task('zip', function () {

    return gulp.src(['./**/*.*',
        '.babelrc',
        // 排除以下文件
        '!{node_modules,cmd,src,config}/**/*.*',
        '!dist.zip',
        // '!{gulpfile.js,package.json,package-lock.json,README.md,.babelrc}'
    ])
        .pipe(plumber())
        .pipe(zip('dist.zip'))
        .pipe(gulp.dest('./'))
});
