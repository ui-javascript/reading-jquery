// 雪碧图
const config = require('../config/index')
const gulp = require('gulp')
const spritesmith = require('gulp.spritesmith')


// 此功能是单一的并不与其他功能串联
gulp.task('makeSprite', function () {
    return gulp.src(`${config.dev.spriteDevDir}/!(_sprite.png|*.css|*.less)`)
        .pipe(spritesmith({
            imgName: `images/sprite/_sprite.png`,
            cssName: `css/components/base/sprite.less`
        }))
        .pipe(gulp.dest(`${config.dev.assetsDir}`));
});