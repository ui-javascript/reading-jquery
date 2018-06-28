// 严格模式
'use strict';

const config = require('./build/config')

// 导入模块
const gulp = require('gulp')

// gulp-run-sequence -> run-sequence
// 控制task中的串行和并行
const runSequence = require('run-sequence')

// 引入所有任务
// https://www.gulpjs.com.cn/docs/recipes/split-tasks-across-multiple-files/
const requireDir = require('require-dir')


requireDir('./build/tasks/common/')
requireDir('./build/tasks/server/')
requireDir('./build/tasks')


console.log('配置文件 -> ' + JSON.stringify(config))

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
        // 清理旧CSS
        'cleanCSS',
        // 编译less
        'compileLess',
        // 监听
        'watchCSS'
    )
});

// 发布
gulp.task('03-build-dist', function () {
    runSequence(
        // 1.清理旧文件
        ['cleanDev', 'cleanDist'],
        // 2. 拷贝资源
        ['copyHTMLLeft', 'optimizeImages', 'copyCss'],
        // 3.文件编译
        ['distHTML', 'distLess', 'distJS'],
        // 'zip',
        'distSync'
    );
});

// 离线方案
// 暂时只考虑用在博客文章上
gulp.task('04-build-pwa', function () {
    runSequence(
        // 1.清理旧文件
        ['cleanDev', 'cleanDist'],
        // 2. 拷贝资源
        ['copyHTMLLeft', 'optimizeImages', 'copyCss'],
        // 3.文件编译
        ['distHTML', 'distLess', 'distJS'],
        // 4.PWA workbox注册
        'generateServiceWorker',
        // 'zip',
        'PWASync'
    )
});

// 清理生成文件
gulp.task('05-clean-dist', function () {
    runSequence(
        ['cleanDev', 'cleanDist']
    );
});

// 雪碧图
gulp.task('06-make-sprite', function () {
    runSequence('makeSprite');
});

// 图片优化
gulp.task('07-images-optimize', function () {
    runSequence('optimizeImages');
});

// 字体子集化
gulp.task('08-font-spider', function () {
    runSequence('fontSpider');
});
