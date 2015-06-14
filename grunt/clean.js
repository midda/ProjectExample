module.exports = function(grunt) {
    grunt.config('clean', {
        dist: {
            src: ["dist/global", "dist/pages", "dist/_index.html"]
        }
    });
};