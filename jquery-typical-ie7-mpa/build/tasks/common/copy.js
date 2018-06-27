const gulp = require('gulp')

gulp.task('copyHTMLLeft', function () {
    return gulp.src([
        './src/pages/**/*.*',
        '!./src/pages/**/*.html',
        '!./src/pages/**/*.inc',
        '!./src/pages/**/*.md'
        ])
        .pipe(gulp.dest('./templates'))
})

// 搬运图片
gulp.task('copyImages', function () {
    // return gulp.src([PATHS.htmlFolder + '/**/*.*',
    //     '!' + PATHS.html, '!./**/*.inc'])
    //     .pipe(gulp.dest('./templates'))

    // 搬运图片
    return gulp.src([
        './src/assets/images/**/*.*'
    ])
        .pipe(gulp.dest('./static/images'))
})

// 搬运静态样式
gulp.task('copyCss', function () {
    // return gulp.src([PATHS.htmlFolder + '/**/*.*',
    //     '!' + PATHS.html, '!./**/*.inc'])
    //     .pipe(gulp.dest('./templates'))

    // 搬运图片
    return gulp.src([
        './src/assets/css/**/*.css'
    ])
        .pipe(gulp.dest('./static/css'))
})