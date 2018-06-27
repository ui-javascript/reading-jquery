// 严格模式
'use strict';

const config = require('./build/config')

// 导入模块
// var path = require('path'),
//     fs = require('fs');

var gulp = require('gulp'),

    concat = require('gulp-concat-dir'), // 管合并，可以合并同一目录下的所有文件，好处是可以减少网络请求

    rename = require('gulp-rename'),
    replace = require('gulp-replace'),
    resolvePath = require("gulp-resolve-path"),
    babel = require('gulp-babel'),
    sourcemaps = require('gulp-sourcemaps'),
    md5 = require('gulp-md5-assets'),

    // gulp-run-sequence -> run-sequence
    // 控制task中的串行和并行
    runSequence = require('run-sequence')



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
        // 2.拷贝资源
        ['copyHTMLLeft', 'optimizeImages', 'copyCss'],
        // 3.文件编译
        ['compileHTML', 'compileLess', 'compileJS'],
        // 4.开启浏览器同步
        'devSync'
    );
});

gulp.task('02-css-job', function () {
    runSequence(
        'cleanCSS',
        'compileLess',
        'watchCSS'
    )
});

// 发布
gulp.task('03-build-jsp', function () {
    runSequence(
        ['cleanDev', 'cleanDist'],
        ['copyHTMLLeft', 'distHTML', 'distLess', 'distJS', 'optimizeImages', 'copyCss'],
        // 'zip',
        'distSync'
    );
});

// 发布
gulp.task('04-clean-dist', function () {
    runSequence(
        ['cleanDev', 'cleanDist']
    );
});


// 离线方案
// gulp.task('04-build-pwa', function () {
//     runSequence(['cleanDev', 'cleanDist'],
//         ['distCopy', 'distHTML', 'distLess', 'distJS'],
//         'generateServiceWorker',
//         // 'cleanDev',
//         'PWASync',
//         // 'zip'
//     )
// });


