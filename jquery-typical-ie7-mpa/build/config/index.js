/*
 * 配置
 */

// 公共配置
exports.common = {
    staticDir: './static',
    templatesDir: './templates',
}

// 开发
exports.dev = {
    devDir: './src',
    assetsDir: './src/assets',

    // 静态页位置修改此处
    pagesDir: './src/pages',
    // pagesDir: './src/zjzj',
    spriteDevDir: './src/assets/images/sprite',

    // 要转化字体所在的位置
    fontSpiderDir: './static/fonts/hyzhj'
}

// 产品
exports.prod = {
    distDir: './dist'
}