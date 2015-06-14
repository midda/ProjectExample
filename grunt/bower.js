module.exports = function(grunt) {
    grunt.config('bower-install-simple', {
        update: {
            options: {
                color: true,
                directory: "src/global/bower_components",
                update: true,
                interactive: true,
            },
        }
    });
};