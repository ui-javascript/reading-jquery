const systemFolder = '_hibim-sefolio-ie9'
exports.dev = {

    imagesDir: `./src/${systemFolder}/images`,
    pagesDir: `./src/${systemFolder}`,
    scriptsDir: `./src/${systemFolder}/js`,
    copyHTMLExclude: [
        `!./src/${systemFolder}/**/*.{html,inc,md}`,
        `!./src/${systemFolder}/{js,images}/**`
    ],
    spriteDevDir: `./src/${systemFolder}/images/sprite`,
    spriteOutputDir: './src/assets/css/theme/natural',
    fontSpiderDir: './static/fonts/hyzhj',

    libsName: 'zhuang',
    libsDevMods: 'ajax,scroll',
    libsDevDir: './src/assets/libs/zhuang/src',

    // 离线目录
    pwaDir: './templates'
}
