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

    // 视图文件
    pagesDir: './src/pages',

    // 前端库
    libsName: 'natural',
    libsDevDir: './src/assets/libs',
    libsDevMods: 'browser',  // 'ajax,scroll' 若指定没空格
    libsOutputDir: './static/vendor/libs',

    // 项目脚本与图片
    scriptsDir: './src/pages/js',
    stylesName: 'natural',
    stylesDir: './src/assets/css/theme/natural',
    stylesWatchFiles: [
        `./src/assets/css/components/**/*.less`,
        `./src/assets/css/theme/natural/**/*.less`
    ],
    imagesDir: './src/pages/images',

    // 搬运要剔除的文件
    copyHTMLExclude: [
        `!./src/pages/**/*.{html,md,inc}`,
        `!./src/pages/{js,images}/**`
    ],
    
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
    distDir: './dist'
}

// 根据不同系统配置文件进行覆盖
// 此处修改
// 默认配置
// var details = require('./system/default')
// H5宣传页
// var details = require('./system/hibim-sefolio-ie9')
// 后台管理系统
// var details = require('./system/hbcj-layui-ie8')
// 商城
var details = require('./system/pms-mall-lulu-ie8')

// 配置覆盖
Object.assign(exports.common, details.common)
Object.assign(exports.dev, details.dev)
Object.assign(exports.prod, details.prod)