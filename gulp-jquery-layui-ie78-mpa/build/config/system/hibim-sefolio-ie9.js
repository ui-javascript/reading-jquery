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
    spriteOutputDir: './src/assets/css/theme/hibim',
    fontSpiderDir: './static/fonts/hyzhj',

    stylesName: 'hibim',
    stylesDir: './src/assets/css/theme/hibim',
    stylesWatchFiles: [
        `./src/assets/css/components/**/*.less`,
        `./src/assets/css/theme/hibim/**/*.less`
    ],

    libsName: 'zhuang',
    libsDevMods: 'ajax,scroll',
    libsDevDir: './src/assets/libs/zhuang/src'
}
