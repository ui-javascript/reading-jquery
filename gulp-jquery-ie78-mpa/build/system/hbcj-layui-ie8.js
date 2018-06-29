const systemFolder = '_hbcj-layui-ie8'
exports.dev = {
    devDir: './src',
    assetsDir: './src/assets',

    imagesDir: `./src/${systemFolder}/images`,
    pagesDir: `./src/${systemFolder}`,
    scriptsDir: `./src/${systemFolder}/js`,
    copyHTMLExclude: [
        `!./src/${systemFolder}/**/*.{html,inc,md}`,
        `!./src/${systemFolder}/{js,images}/**`
    ],
    spriteDevDir: './src/assets/images/sprite',
    fontSpiderDir: './static/fonts/hyzhj',

    // 离线目录
    pwaDir: './templates'
}

