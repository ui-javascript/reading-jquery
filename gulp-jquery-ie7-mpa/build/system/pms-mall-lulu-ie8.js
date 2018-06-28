const systemFolder = '_pms-mall-lulu-ie8'
exports.dev = {
    devDir: './src',
    assetsDir: './src/assets',

    imagesDir: `./src/${systemFolder}/static/images`,
    pagesDir: `./src/${systemFolder}`,
    scriptsDir: `./src/${systemFolder}/static/js`,
    copyHTMLExclude: [
        `!./src/${systemFolder}/**/*.{html,inc,md}`,
        `!./src/${systemFolder}/static/**`
    ],
    spriteDevDir: './src/assets/images/sprite',
    fontSpiderDir: './static/fonts/hyzhj',

    // 离线目录
    pwaDir: './templates'
}

