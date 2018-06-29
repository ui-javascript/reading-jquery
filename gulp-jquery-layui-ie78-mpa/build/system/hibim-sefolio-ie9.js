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
    spriteOutputDir: `./src/${systemFolder}/images/sprite`,
    fontSpiderDir: './static/fonts/hyzhj',

    // 离线目录
    pwaDir: './templates'
}
