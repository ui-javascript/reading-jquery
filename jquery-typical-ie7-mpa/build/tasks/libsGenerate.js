/**
 * 前端插件库生成
 */

// 管合并，可以合并同一目录下的所有文件，好处是可以减少网络请求
const concat = require('gulp-concat-dir')
const rename = require('gulp-rename')
const replace = require('gulp-replace')