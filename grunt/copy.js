module.exports = function(grunt) {
    grunt.config('copy', {
        dist: {
            files: [ {
                expand: true,
                cwd: 'src/',
                src: ['index.html'],
                dest: 'dist/'
            }, {
                expand: true,
                cwd: 'src/',
                src: [
                        'global/styles/css/**', 
                        'global/scripts/**', 
                        'global/fonts/**', 
                        'global/img/**', 
                        'pages/**'
                    ],
                dest: 'dist/'
            }, ],
        },
    });
};