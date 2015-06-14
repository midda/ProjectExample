module.exports = function(grunt) {
    grunt.config('compass', {
        dev: {
            options: {
                sassDir: ['src/global/styles/scss'],
                cssDir: ['src/global/styles/css'],
                environment: 'development',
                force: true
            }
        },
        prod: {
            options: {
                sassDir: ['src/global/styles/scss'],
                cssDir: ['src/global/styles/css'],
                environment: 'production',
                force: true
            }
        },
        clean: {
            options: {
                clean: true
            }
        }
    });
};