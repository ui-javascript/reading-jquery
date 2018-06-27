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
    pagesDir: './src/pages',
    spriteDevDir: './src/assets/images/sprite'
}

// 产品
exports.prod = {
    distDir: './dist'
}