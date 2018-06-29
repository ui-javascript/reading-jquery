const systemFolder = '_hbcj-layui-ie8'
exports.dev = {

    imagesDir: `./src/${systemFolder}/static/images`,
    pagesDir: `./src/${systemFolder}`,
    scriptsDir: `./src/${systemFolder}/static/js`,
    copyHTMLExclude: [
        `!./src/${systemFolder}/**/*.{html,inc,md}`,
        `!./src/${systemFolder}/static/**`
    ],
    spriteDevDir: `./src/${systemFolder}/static/images/sprite`,
    spriteOutputDir: './src/assets/css/theme/natural',
    fontSpiderDir: './static/fonts/hyzhj',

    libsName: 'zhuang',
    libsDevMods: 'ajax,scroll,slider',
    libsDevDir: './src/assets/libs/zhuang/src',

    // 离线目录
    pwaDir: './templates'
}

