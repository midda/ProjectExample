module.exports = function(grunt) {
    grunt.config('watch', {
        options: {
            dateFormat: function(time) {
                grunt.log.writeln('The watch finished in ' + time + 'ms at ' + (new Date()).toString());
                grunt.log.writeln('Waiting for more changes...');
            },
            livereload: '<%= connect.options.livereload %>'
        },
        js: {
            files: ['<%= jshint.src %>'],
            tasks: ['concat:all', 'newer:jshint']
        },
        css: {
            files: [
                '<%= compass.dev.options.sassDir %>/**/*',
                'src/global/components/**/*.scss',
                'src/global/third-party-plugins/**/*.scss'
            ],
            tasks: ['compass:dev', 'autoprefixer:all']
        },
        html: {
            files: ['src/pages/*.html', 'src/pages/*.jsp', 'src/_index.html']
        },
        img: {
            files: [
                'src/global/img/*.{png,jpg,jpeg,gif,webp,svg}',
                'src/global/third-party-components/**/*.{png,jpg,jpeg,gif,webp,svg}'
            ]
        }
    });
};