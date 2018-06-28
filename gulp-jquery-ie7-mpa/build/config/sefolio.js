exports.dev = {
    devDir: './src',
    assetsDir: './src/assets',

    pagesDir: './src/sefolio',
    scriptsDir: './src/sefolio/js',
    copyHTMLExclude: [
        `!./src/sefolio/**/*.{html,inc,md}`,
        `!./src/sefolio/js/**`
    ],
    spriteDevDir: './src/assets/images/sprite',
    fontSpiderDir: './static/fonts/hyzhj',

    // 离线目录
    pwaDir: './templates'
}
