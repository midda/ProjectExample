// Gruntfile.js

// our wrapper function (required by grunt and its plugins)
// all configuration goes inside this function
module.exports = function(grunt) {

    // load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns from our NPM file
    require('load-grunt-tasks')(grunt);

    // load grunt tasks
    grunt.loadTasks('grunt');

    // measures the time each task takes
    require('time-grunt')(grunt);

    // grunt custom tasks
    grunt.task.registerTask('serve', [
        'bower-install-simple:update',
        'concat:all',
        'compass:clean',
        'compass:dev',
        'autoprefixer:all',
        'connect:prod',
        'watch'
    ]);
    grunt.registerTask('build', function(target) {

        if (target === 'prod') {
            grunt.task.run([
                'bower-install-simple:update',
                'concat:all',
                'compass:clean',
                'compass:prod',
                'autoprefixer:all',
                'copy:dist',
                'uglify:min',
                'imagemin'
            ]);
        } else {
            grunt.task.run([
                'bower-install-simple:update',
                'concat:all',
                'compass:clean',
                'compass:dev',
                'autoprefixer:all'
            ]);
        }
    });
};