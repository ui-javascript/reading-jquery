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
    spriteOutputDir: `./src/${systemFolder}/static/images/sprite`,
    fontSpiderDir: './static/fonts/hyzhj',

    // 离线目录
    pwaDir: './templates'
}

