module.exports = function(grunt) {
    grunt.config('autoprefixer', {
        all: {
            src: 'src/global/styles/css/styles.css',
            dest: 'src/global/styles/css/styles.css'
        }
    });
};