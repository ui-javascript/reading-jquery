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
    spriteOutputDir: './src/assets/css/theme/zhuang',
    fontSpiderDir: './static/fonts/hyzhj',

    stylesName: 'zhuang',
    stylesDir: './src/assets/css/theme/zhuang',
    stylesWatchFiles: [
        `./src/assets/css/components/**/*.less`,
        `./src/assets/css/theme/zhuang/**/*.less`
    ],

    libsName: 'zhuang',
    libsDevMods: 'ajax,scroll,slider',
    libsDevDir: './src/assets/libs/zhuang/src',
}

