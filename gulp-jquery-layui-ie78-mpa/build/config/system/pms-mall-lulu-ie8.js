const systemFolder = '_pms-mall-lulu-ie8'
exports.dev = {
    imagesDir: `./src/${systemFolder}/static/images`,
    pagesDir: `./src/${systemFolder}`,
    scriptsDir: `./src/${systemFolder}/static/js`,
    copyHTMLExclude: [
        `!./src/${systemFolder}/**/*.{html,inc,md}`,
        `!./src/${systemFolder}/static/**`
    ],
    spriteDevDir: `./src/${systemFolder}/static/images/sprite`,
    spriteOutputDir: './src/assets/css/theme/mumuy',
    fontSpiderDir: './static/fonts/hyzhj',

    stylesName: 'mumuy',
    stylesDir: './src/assets/css/theme/mumuy',
    stylesWatchFiles: [
        `./src/assets/css/components/**/*.less`,
        `./src/assets/css/theme/mumuy/**/*.less`
    ],

    libsName: 'mumuy',
    libsDevMods: '*',
    libsDevDir: './src/assets/libs/mumuy'
}

