module.exports = function(grunt) {
    grunt.config('connect', {
        options: {
            port: 9090,
            hostname: '127.0.0.1',
            livereload: 35729
        },
        prod: {
            options: {
                open: true,
                base: 'src',
            }
        },
        dist: {
            options: {
                port: 9095,
                base: 'dist',
                keepalive: true,
                open: true
            }
        }
    });
};