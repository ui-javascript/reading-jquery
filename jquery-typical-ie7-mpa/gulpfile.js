// 严格模式
'use strict';

// 导入模块

// var path = require('path'),
//     fs = require('fs');

var gulp = require('gulp'),

    concat = require('gulp-concat-dir'), // 管合并，可以合并同一目录下的所有文件，好处是可以减少网络请求
    plumber = require('gulp-plumber'),   //错误处理提示插件
    notify = require('gulp-notify'),
    zip = require('gulp-zip'),  // 压缩文件
    rename = require('gulp-rename'),
    replace = require('gulp-replace'),
    resolvePath = require("gulp-resolve-path"),
    babel = require('gulp-babel'),
    babel = require('gulp-babel'),
    sourcemaps = require('gulp-sourcemaps'),
    md5 = require('gulp-md5-assets'),

    // gulp-run-sequence -> run-sequence
    runSequence = require('run-sequence'), // 控制task中的串行和并行

    uglify = require('gulp-uglify'),

    less = require('gulp-less'),
    sass = require('gulp-sass'),
    bourbon = require("bourbon").includePaths,
    neat = require("bourbon-neat").includePaths,

    cleanCss = require('gulp-clean-css'),
    autoprefixer = require('gulp-autoprefixer'),

    minifyHtml = require('gulp-minify-html'),

    imagemin = require('gulp-imagemin'), // 压缩图片
    imageminJpegRecompress = require('imagemin-jpeg-recompress'),
    imageminOptipng = require('imagemin-optipng'),
    pngquant = require('imagemin-pngquant'),
    spritesmith = require('gulp.spritesmith'),

    cache = require('gulp-cache'),
    fileInclude = require('gulp-file-include'),
    clean = require('gulp-clean'), // 用来删除文件

    browserSync = require('browser-sync').create(),
    reload = browserSync.reload,

    stripDebug = require('gulp-strip-debug'),

    // pwa
    workbox = require('workbox-build');

// 路径
var PATH_DEV = "./src";
var PATH_VIEWS = "./src/views";
var PATH_ASSETS = "./static";

var PATHS = {
    html: PATH_VIEWS + "/**/*.html",
    htmlFolder: PATH_VIEWS,
    htmlDevFolder: PATH_VIEWS,
    scss: PATH_DEV + "/scss/**/*.scss",
    scssDevFolder: PATH_DEV + "/scss",
    less: PATH_DEV + "/less/**/*.less",
    lessDevOutput: PATH_DEV + "/less/theme/**/_output.less",
    lessDevThemeFolder: PATH_DEV + "/less/theme",
    lessDevFolder: PATH_DEV + "/less",
    scripts: PATH_DEV + "/scripts/**/*.js",
    scriptsDevFolder: PATH_DEV + "/scripts",

    images: PATH_ASSETS + '/images/**/*.{png,jpg,jpeg,ico,gif,svg}',
    imagesFolder: PATH_ASSETS + "/images",
    sprite: PATH_ASSETS + '/images/_sprite/!(sprite.png|*.css)',
    plusFolder: PATH_ASSETS + "/plus",
    fontsFolder: PATH_ASSETS + "/fonts",
    mockFolder: PATH_ASSETS + "/mock"
};


// less编译
gulp.task('compileLess', function (cb) {
    // 注意，只解析_output.less
    return gulp.src("./src/assets/css/theme/**/_output.less")
        .pipe(plumber({errorHandler: notify.onError('Error:<%=error.message%>')}))
        .pipe(less())
        .pipe(autoprefixer())
        // .pipe(concat({ext: '.css'})) //合并
        .pipe(cleanCss({compatibility: 'ie7', inline: ['remote'], rebase: false}))
        // .pipe(sourcemaps.write())
        // .pipe(gulp.dest(PATHS.lessDevThemeFolder))
        .pipe(gulp.dest('./static/css/theme'))

    cb(err);
});

// 缩编JS
gulp.task('compileJS', function () {
    return gulp.src("./src/assets/js/**/*.js")
        .pipe(plumber()) // 错误提示
        // .pipe(concat({ext: '.js'})) //合并同一目录下的所有文件
        .pipe(babel())
        .pipe(gulp.dest('./static/js'))
});

// 编译compileHTML
gulp.task('compileHTML', function () {
    return gulp.src('./src/pages/**/*.html')
        .pipe(plumber())
        .pipe(fileInclude({
            prefix: '@@',
            basepath: '@file'
        }))
        // .pipe(gulp.dest(PATHS.htmlDevFolder))
        .pipe(gulp.dest('./templates'))
});


// 浏览器同步刷新
// http://www.browsersync.cn/docs/gulp/
gulp.task('devSync', function () {
    var distBaseRoot = ".";
    browserSync.init({
        port: 8888,
        ui: {
            port: 3005
        },
        directory: true,
        browser: "chrome",
        server: {
            baseDir: ['./templates'],
            routes: {
                '/static': './static'
            }
        },
        // startPath: "index.html"
    });

    // 文件监听
    // fileInclude + browserSync https://www.cnblogs.com/yjzhu/archive/2017/02/27/6474854.html
    gulp.watch('./src/pages/**/*.html', ['compileHTML']).on('change', reload);
    gulp.watch('./src/assets/js/**/*.js', ['compileJS']).on('change', reload);
    gulp.watch('./src/assets/css/**/*.less', ['compileLess']).on('change', reload);

});

// 默认任务
gulp.task('default', function () {
    runSequence('01-build-dev');
});
gulp.task('01-build-dev', function () {
    runSequence(
        // 1.清理旧文件
        ['cleanDev', 'cleanDist'],
        // 2.拷贝资源
        ['copyHTMLLeft', 'copyImages', 'copyCss'],
        // 3.文件编译
        ['compileHTML', 'compileLess', 'compileJS'],
        // 4.开启浏览器同步
        ['devSync']
    );
});

// =====================================
// =====================================


// CSS监听
gulp.task('watchCSS', function () {
    gulp.watch(PATHS.less, ['compileLess']);
    gulp.watch(PATHS.scss, ['compileSass']);
});

// 仅作CSS缩编等工作
gulp.task('02-css-job', function () {
    runSequence(
        ['cleanDev', 'cleanDist'],
        ['compileSass', 'compileLess'],
        'watchCSS'
    )
});


// ====================================
// ====================================

// 雪碧图
// 此功能是单一的并不与其他功能串联
gulp.task('makeSprite', function () {
    return gulp.src(PATHS.sprite)
        .pipe(spritesmith({
            imgName: 'ico.png',
            cssName: 'sprite.less'
        }))
        .pipe(gulp.dest(PATHS.lessDevThemeFolder + '/natural'));
});


// =====================================
// =====================================

// 清理文件夹
gulp.task('cleanDev', function () {
    return gulp.src([
            './static/js/*',
            './static/css/*',
            './static/images/*',
            './templates/*',
            './sw.js'],
        {read: false})
        .pipe(clean())
});
gulp.task('cleanDist', function () {
    return gulp.src(['./dist/*'],
        {read: false})
        .pipe(clean())
});


// 图片压缩
gulp.task('optimizeImages', function () {
    var jpgmin = imageminJpegRecompress({
            accurate: true,//高精度模式
            quality: "high",//图像质量:low, medium, high and veryhigh;
            method: "smallfry",//网格优化:mpe, ssim, ms-ssim and smallfry;
            min: 70,//最低质量
            loops: 0,//循环尝试次数, 默认为6;
            progressive: false,//基线优化
            subsample: "default"//子采样:default, disable;
        }),
        pngmin = imageminOptipng({
            optimizationLevel: 7
        });

    return
        gulp.src(PATHS.images)
        // gulp.src('./static/images/**/*.*')
        .pipe(plumber())
        // .pipe(imagemin({
        //     optimizationLevel: 5, //默认：3  取值范围：0-7（优化等级）
        //     progressive: true, // 无损压缩jpg图片
        //     interlaced: true, // 隔行扫描gif进行渲染
        //     multipass: true, //多次优化svg直到完全优化
        //     use: [pngquant()] // 使用 pngquant 深度压缩 png 图片
        // }))
        .pipe(cache(imagemin({
            // progressive: true, // 无损压缩JPG图片
            svgoPlugins: [{removeViewBox: false}], // 不移除svg的viewbox属性
            use: [pngquant()] // 使用pngquant插件进行深度压缩
        })))
        // .pipe(imagemin({
        //     use: [jpgmin, pngmin]
        // }))
        .pipe(gulp.dest(PATHS.imagesFolder))
    // .pipe(md5(10, './**/*.{css,js,html,json}'))
    // .pipe(browserSync.reload({stream:true}))
});

// 缩编JS
gulp.task('distJS', function () {
    return gulp.src(PATHS.scripts)
        .pipe(plumber()) // 错误提示
        // .pipe(concat({ext: '.js'})) //合并同一目录下的所有文件
        .pipe(stripDebug())
        .pipe(babel())
        .pipe(uglify())
        .pipe(gulp.dest('./static/scripts'))
        .pipe(md5(10, './templates/**/*.html'));

});

// 缩编HTML
gulp.task('distHTML', function () {
    return gulp.src(PATHS.html)
        .pipe(plumber())
        .pipe(minifyHtml())
        .pipe(fileInclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('./templates'))
    // .pipe(md5(10));
});

// 搬运一些未正确归类的文件
gulp.task('distCopy', function () {
    return gulp.src([PATHS.htmlFolder + '/**/*.*',
        '!' + PATHS.html, '!./**/*.inc'])
        .pipe(gulp.dest('./templates'))
});
gulp.task('copyHTMLLeft', function () {
    return gulp.src([
        './src/pages/**/*.*',
        '!./src/pages/**/*.html',
        '!./src/pages/**/*.inc',
        '!./src/pages/**/*.md'
        ])
        .pipe(gulp.dest('./templates'))
});

gulp.task('copyImages', function () {
    // return gulp.src([PATHS.htmlFolder + '/**/*.*',
    //     '!' + PATHS.html, '!./**/*.inc'])
    //     .pipe(gulp.dest('./templates'))

    // 搬运图片
    return gulp.src([
        './src/assets/images/**/*.*'
    ])
        .pipe(gulp.dest('./static/images'))
});
gulp.task('copyCss', function () {
    // return gulp.src([PATHS.htmlFolder + '/**/*.*',
    //     '!' + PATHS.html, '!./**/*.inc'])
    //     .pipe(gulp.dest('./templates'))

    // 搬运图片
    return gulp.src([
        './src/assets/css/**/*.css'
    ])
        .pipe(gulp.dest('./static/css'))
});


// scss编译
gulp.task('distSass', function (cb) { // cb是传入的回调函数

    return gulp.src(PATHS.scss)
        .pipe(sass({
            sourcemaps: true,
            includePaths: [bourbon, neat]
        }).on('error', sass.logError))
        // .pipe(concat({ext: '.css'}))
        // .pipe(rename('all.min.css'))
        .pipe(cleanCss({compatibility: 'ie7'}))
        .pipe(autoprefixer({
            // browsers: ['> 1%', 'not ie <= 8']
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./static/scss'))
        .pipe(md5(10, './templates/**/*.html'));

    cb(err)
});


// less编译
gulp.task('distLess', function () {
    return gulp.src(PATHS.lessDevOutput) // 注意，只解析_output.less这样的单文件
        .pipe(plumber({errorHandler: notify.onError('Error:<%=error.message%>')}))
        .pipe(less())
        .pipe(autoprefixer())
        // .pipe(concat({ext: '.css'})) //合并
        .pipe(cleanCss({compatibility: 'ie7'}))
        .pipe(gulp.dest('./static/css/theme'))
        .pipe(md5(10, './templates/**/*.html'));

});


// 压缩
gulp.task('zip', function () {

    return gulp.src(['./**/*.*',
        '.babelrc',
        // 排除以下文件
        '!{node_modules,cmd,src,config}/**/*.*',
        '!dist.zip',
        // '!{gulpfile.js,package.json,package-lock.json,README.md,.babelrc}'
        ])
        .pipe(plumber())
        .pipe(zip('dist.zip'))
        .pipe(gulp.dest('./'))
});

gulp.task('distSync', function () {
    var distBaseRoot = ".";
    browserSync.init({
        // proxy: "deva.dev",
        port: 8080, //
        ui: false,
        directory: true,
        notify: false,
        codeSync: false, // 不要发送任何文件改变事件给浏览器
        logSnippet: false,
        logFileChanges: false,
        logConnections: false,
        ghostMode: false,
        server: {
            baseDir: distBaseRoot + '/templates',
            index: "index.html",
            routes: {
                "/css": distBaseRoot + "/static/css",
                "/scss": distBaseRoot + "/static/scss",
                "/scripts": distBaseRoot + '/static/scripts',

                "/images": distBaseRoot + '/static/images',
                "/plus": distBaseRoot + '/static/plus',
                "/mock": distBaseRoot + '/static/mock',
                "/fonts": distBaseRoot + '/static/fonts'
            }
        },
        // startPath: "index.html"
    });
});


// 发布
gulp.task('03-build-jsp', function () {
    runSequence(['cleanDev', 'cleanDist'],
        // 'optimizeImages',
        ['distCopy', 'distHTML', 'distLess', 'distSass', 'distJS'],
        'distSync',
        // 'zip'
    );
});


// =====================================
// =====================================

gulp.task('PWASync', function () {
    var distBaseRoot = ".";

    browserSync.init({
        // @FIXME 代理不知道怎么配置
        // proxy: "http://192.168.1.250",
        // serveStatic: ['./templates'],

        server: {
            baseDir: distBaseRoot + '/templates',
            index: "index.html",
            routes: {
                "/css": distBaseRoot + "/static/css",
                "/scss": distBaseRoot + "/static/scss",
                "/scripts": distBaseRoot + '/static/scripts',

                "/images": distBaseRoot + '/static/images',
                "/plus": distBaseRoot + '/static/plus',
                "/mock": distBaseRoot + '/static/mock',
                "/fonts": distBaseRoot + '/static/fonts'
            }
        },
        port: 8033, // 端口注意
        ui: false,
        directory: true,
        notify: false,
        codeSync: false, // 不要发送任何文件改变事件给浏览器
        logSnippet: false,
        logFileChanges: false,
        logConnections: false,
        ghostMode: false
    });
});


// 配置 service worker
gulp.task('generateServiceWorker', () => {
    return workbox
        .generateSW({
            cacheId: 'gulp-pwa-mpa', // 设置前缀
            globDirectory: './templates',
            globPatterns: ['**/*.{html,js,css,png.jpg}'],
            globIgnores: ['sw.js'],

            // 输出到根目录
            swDest: `./templates/sw.js`,
            clientsClaim: true,
            skipWaiting: true,
            runtimeCaching: [
                {
                    urlPattern: /.*\.js/,
                    handler: 'networkFirst', // 网络优先
                },
                {
                    urlPattern: /.*\.css/,
                    handler: 'staleWhileRevalidate', // 缓存优先同时后台更新
                    options: {
                        plugins: [
                            {
                                cacheableResponse: {
                                    statuses: [0, 200]
                                }
                            }
                        ]
                    }
                },
                {
                    urlPattern: /.*\.(?:png|jpg|jpeg|svg|gif)/,
                    handler: 'cacheFirst', // 缓存优先
                    options: {
                        plugins: [
                            {
                                expiration: {
                                    maxAgeSeconds: 24 * 60 * 60, // 最长缓存时间,
                                    maxEntries: 50, // 最大缓存图片数量
                                }
                            }
                        ]
                    },

                },
                {
                    urlPattern: /.*\.html/,
                    handler: 'networkFirst',
                }
            ]
        })
        .then(() => {
            console.info('Service worker generation completed.');
        })
        .catch(error => {
            console.warn('Service worker generation failed: ' + error);
        });
});

// 离线方案
gulp.task('04-build-pwa', function () {
    runSequence(['cleanDev', 'cleanDist'],
        ['distCopy', 'distHTML', 'distLess', 'distSass', 'distJS'],
        'generateServiceWorker',
        // 'cleanDev',
        'PWASync',
        // 'zip'
    )
});


