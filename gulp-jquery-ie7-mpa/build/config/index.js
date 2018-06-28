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

    // 修改此处
    // pagesDir: './src/pages',
    pagesDir: './src/sefolio',
    scriptsDir: './src/assets/js',

    spriteDevDir: './src/assets/images/sprite',

    // 修改要子集化的字体所在的位置
    fontSpiderDir: './static/fonts/hyzhj'
}

// 产品
exports.prod = {
    distDir: './dist'
}