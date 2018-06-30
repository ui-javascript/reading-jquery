/*
 * 配置
 */

// 公共配置
exports.common = {
    // 固定
    staticDir: './static',
    templatesDir: './templates',
}

// 开发环境
exports.dev = {
    // 固定
    devDir: './src',
    assetsDir: './src/assets',

    // 样式库
    stylesName: 'natural',
    stylesDir: './src/assets/css/theme/natural',
    stylesWatchFiles: [
        `./src/assets/css/components/**/*.less`,
        `./src/assets/css/theme/natural/**/*.less`
    ],

    // 脚本库
    libsName: 'natural',
    libsDevDir: './src/assets/libs',
    libsDevMods: 'browser',  // '{ajax,scroll}' 没空格
    libsOutputDir: './static/vendor/libs',

    // 视图文件
    // 项目脚本与图片
    pagesName: '_default',
    pagesDir: './src/pages',
    copyHTMLExclude: [
        `!./src/pages/**/*.{html,md,inc}`,
        `!./src/pages/static/**`
    ],
    imagesDir: './src/pages/static/images',
    scriptsDir: './src/pages/static/js',


    // 雪碧图
    spriteDevDir: './src/pages/images/sprite',
    spriteOutputDir: './src/assets/css/theme/natural',

    // 字体子集化
    fontSpiderDir: './static/fonts/hyzhj',

    // 离线
    pwaDir: './templates'
}

// 产品
exports.prod = {
    // 打包文件夹
    distDir: './dist',

    // 需打包文件
    zipFiles: [
        './**/*.*',
        '!{node_modules,build,doc,src}/**/*.*',
        '!{dist.zip,gulpfile.js,package.json,package-lock.json,README.md,.babelrc}'
    ]
}

// 根据不同系统配置文件进行覆盖
// 此处修改
// 默认配置
// var details = require('./system/default')
// H5宣传页
// var details = require('./system/hibim')
// var details = require('./system/designStudio')
// var details = require('./system/win10Blog')
// var details = require('./system/corner')
var details = require('./system/natural')

// 后台管理系统
// var details = require('./system/hbcj')
// 商城
// var details = require('./system/pmsMall')

// 配置覆盖
Object.assign(exports.common, details.common)
Object.assign(exports.dev, details.dev)
Object.assign(exports.prod, details.prod)