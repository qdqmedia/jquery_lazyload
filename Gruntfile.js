module.exports = function(grunt) {
    "use strict";

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        watch: {
            files: ["*.js", "!*.min.js"],
            tasks: ["test"],
        },
        jshint: {
            files: ["*.js", "!*.min.js"],
            options: {
                jshintrc: ".jshintrc"
            }
        },
        connect: {
            all: {
                options:{
                    port: 8080,
                    hostname: "localhost",
                    keepalive : true
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-connect");

    grunt.registerTask("test", ["jshint"]);
    grunt.registerTask("default", ["test"]);
    grunt.registerTask("server", ["connect"]);

};
