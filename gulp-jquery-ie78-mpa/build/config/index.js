/*
 * 配置
 */

// 公共配置
exports.common = {
    staticDir: './static',
    templatesDir: './templates',
}

// 开发环境
exports.dev = {
    devDir: './src',
    assetsDir: './src/assets',
    pagesDir: './src/pages',
    scriptsDir: './src/assets/js',
    imagesDir: './src/assets/images',

    copyHTMLExclude: [
        `!./src/pages/**/*.{html,inc}`
    ],
    spriteDevDir: './src/assets/images/sprite',
    spriteOutputDir: './src/assets/images/sprite',
    fontSpiderDir: './static/fonts/hyzhj',

    pwaDir: './templates'
}

// 产品
exports.prod = {
    distDir: './dist'
}

// 根据不同系统配置文件进行覆盖
// 此处修改
// 默认配置
var details = require('../system/default')
// H5宣传页
// var details = require('../system/hibim-sefolio-ie9')
// 后台管理系统
// var details = require('../system/hbcj-layui-ie8')
// 商城
// var details = require('../system/pms-mall-lulu-ie8')

// 配置覆盖
Object.assign(exports.common, details.common)
Object.assign(exports.dev, details.dev)
Object.assign(exports.prod, details.prod)