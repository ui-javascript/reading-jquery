// 包装函数
module.exports = function(grunt) {

    // 任务配置，所有插件的配置信息
    grunt.initConfig({

        // 获取 package.json 的信息
        pkg: grunt.file.readJSON('package.json'),

        // uglify插件的配置信息
        uglify: {
        	options: {
        		stripBanners: true,
                banner: '/*! / <$=pkg.name%>-<%=pkg.version%>/js <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        	},
            build: {
                src: 'src/*.js',
                dest: 'build/<%=pkg.name%>-<%=pkg.version%>.js.min.js'
            }
        },

        // uglify插件的配置信息
        jshint: {
            build: ['Gruntfile.js','src/*.js'],
            options: {
            	jshintrc: '.jshintrc'
            }
        },

        watch: {
            build: {
                files: ['src/*.js', 'src/*.css'],
                tasks: ['jshint', 'uglify'],
                options: { spawn: false}
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // 告诉grunt当我们终端输入grunt时需要做些什么(注意先后顺序)
    grunt.registerTask('default', ['jshint', 'uglify','watch']);
};