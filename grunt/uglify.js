module.exports = function(grunt) {
    grunt.config('uglify', {
        options: {
            banner: '/* <%= grunt.template.today("dd-mm-yyyy") %> */ \n\n',
            preserveComments: false,
            compress: {
                drop_console: true,
            }
        },
        min: {
            src: 'dist/global/scripts/global.js',
            dest: 'dist/global/scripts/global.js',
        }
    });
};