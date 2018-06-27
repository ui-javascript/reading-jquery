// 严格模式
'use strict';

const config = require('./build/config')

// 导入模块
// var path = require('path'),
//     fs = require('fs');

var gulp = require('gulp'),

    concat = require('gulp-concat-dir'), // 管合并，可以合并同一目录下的所有文件，好处是可以减少网络请求
    plumber = require('gulp-plumber'),   //错误处理提示插件
    notify = require('gulp-notify'),
    zip = require('gulp-zip'),  // 压缩文件
    rename = require('gulp-rename'),
    replace = require('gulp-replace'),
    resolvePath = require("gulp-resolve-path"),
    babel = require('gulp-babel'),
    sourcemaps = require('gulp-sourcemaps'),
    md5 = require('gulp-md5-assets'),

    // gulp-run-sequence -> run-sequence
    runSequence = require('run-sequence'), // 控制task中的串行和并行

    uglify = require('gulp-uglify'),

    less = require('gulp-less'),
    sass = require('gulp-sass'),
    bourbon = require("bourbon").includePaths,
    neat = require("bourbon-neat").includePaths,

    cleanCss = require('gulp-clean-css'),
    autoprefixer = require('gulp-autoprefixer'),

    minifyHtml = require('gulp-minify-html'),



    cache = require('gulp-cache'),
    fileInclude = require('gulp-file-include'),
    clean = require('gulp-clean'), // 用来删除文件

    browserSync = require('browser-sync').create(),
    reload = browserSync.reload,

    stripDebug = require('gulp-strip-debug'),

    // pwa
    workbox = require('workbox-build');

// 路径
var PATH_DEV = "./src";
var PATH_VIEWS = "./src/views";
var PATH_ASSETS = "./static";

var PATHS = {
    html: PATH_VIEWS + "/**/*.html",
    htmlFolder: PATH_VIEWS,
    htmlDevFolder: PATH_VIEWS,
    scss: PATH_DEV + "/scss/**/*.scss",
    scssDevFolder: PATH_DEV + "/scss",
    less: PATH_DEV + "/less/**/*.less",
    lessDevOutput: PATH_DEV + "/less/theme/**/_output.less",
    lessDevThemeFolder: PATH_DEV + "/less/theme",
    lessDevFolder: PATH_DEV + "/less",
    scripts: PATH_DEV + "/scripts/**/*.js",
    scriptsDevFolder: PATH_DEV + "/scripts",

    images: PATH_ASSETS + '/images/**/*.{png,jpg,jpeg,ico,gif,svg}',
    imagesFolder: PATH_ASSETS + "/images",
    sprite: PATH_ASSETS + '/images/_sprite/!(sprite.png|*.css)',
    plusFolder: PATH_ASSETS + "/plus",
    fontsFolder: PATH_ASSETS + "/fonts",
    mockFolder: PATH_ASSETS + "/mock"
};

const requireDir = require('require-dir')

// 引入所有任务
// https://www.gulpjs.com.cn/docs/recipes/split-tasks-across-multiple-files/
requireDir('./build/tasks/common/')
requireDir('./build/tasks/server/')
requireDir('./build/tasks')


// 默认任务
gulp.task('default', function () {
    runSequence('01-build-dev');
});
gulp.task('01-build-dev', function () {

    runSequence(
        // 1.清理旧文件
        ['cleanDev', 'cleanDist'],
        // // 2.拷贝资源
        // ['copyHTMLLeft', 'optimizeImages', 'copyCss'],
        // // 3.文件编译
        // ['compileHTML', 'compileLess', 'compileJS'],
        // // 4.开启浏览器同步
        // ['devSync']
    );
});

// =====================================
// =====================================


// CSS监听
gulp.task('watchCSS', function () {
    gulp.watch(`${config.dev.assetsDir}/css/**/*.less`, ['compileLess']);
});

// 仅作CSS缩编等工作
gulp.task('02-css-job', function () {
    runSequence(
        ['cleanDev', 'cleanDist'],
        ['compileLess'],
        'watchCSS'
    )
});


// ====================================
// ====================================



// =====================================
// =====================================


// 缩编JS
gulp.task('distJS', function () {
    return gulp.src(PATHS.scripts)
        .pipe(plumber()) // 错误提示
        // .pipe(concat({ext: '.js'})) //合并同一目录下的所有文件
        .pipe(stripDebug())
        .pipe(babel())
        .pipe(uglify())
        .pipe(gulp.dest('./static/scripts'))
        .pipe(md5(10, './templates/**/*.html'));

});

// 缩编HTML
gulp.task('distHTML', function () {
    return gulp.src(PATHS.html)
        .pipe(plumber())
        .pipe(minifyHtml())
        .pipe(fileInclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('./templates'))
    // .pipe(md5(10));
});




// scss编译
gulp.task('distSass', function (cb) { // cb是传入的回调函数

    return gulp.src(PATHS.scss)
        .pipe(sass({
            sourcemaps: true,
            includePaths: [bourbon, neat]
        }).on('error', sass.logError))
        // .pipe(concat({ext: '.css'}))
        // .pipe(rename('all.min.css'))
        .pipe(cleanCss({compatibility: 'ie7'}))
        .pipe(autoprefixer({
            // browsers: ['> 1%', 'not ie <= 8']
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./static/scss'))
        .pipe(md5(10, './templates/**/*.html'));

    cb(err)
});


// less编译
gulp.task('distLess', function () {
    return gulp.src(PATHS.lessDevOutput) // 注意，只解析_output.less这样的单文件
        .pipe(plumber({errorHandler: notify.onError('Error:<%=error.message%>')}))
        .pipe(less())
        .pipe(autoprefixer())
        // .pipe(concat({ext: '.css'})) //合并
        .pipe(cleanCss({compatibility: 'ie7'}))
        .pipe(gulp.dest('./static/css/theme'))
        .pipe(md5(10, './templates/**/*.html'));

});

// 发布
gulp.task('03-build-jsp', function () {
    runSequence(['cleanDev', 'cleanDist'],
        // 'optimizeImages',
        ['distCopy', 'distHTML', 'distLess', 'distSass', 'distJS'],
        'distSync',
        // 'zip'
    );
});


// =====================================
// =====================================




// 离线方案
gulp.task('04-build-pwa', function () {
    runSequence(['cleanDev', 'cleanDist'],
        ['distCopy', 'distHTML', 'distLess', 'distSass', 'distJS'],
        'generateServiceWorker',
        // 'cleanDev',
        'PWASync',
        // 'zip'
    )
});


