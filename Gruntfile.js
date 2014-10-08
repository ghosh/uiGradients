/*
|--------------------------------------------------------------------------
| uiGradients Grunftfile
|--------------------------------------------------------------------------
|
| @author Indrashish Ghosh @_ighosh
|
*/

'use strict';

module.exports = function(grunt) {

  grunt.initConfig ({

    // -------------------------------------------------------
    // Meta - Reads Data from the package.json
    // -------------------------------------------------------
    pkg: grunt.file.readJSON('package.json'),


    // -------------------------------------------------------
    // Banner - Dynamically appended to CSS/JS files
    // -------------------------------------------------------
    banner: '/*\n' +
            '|--------------------------------------------------------------------------\n' +
            '| <%= pkg.name %>\n' +
            '|--------------------------------------------------------------------------\n' +
            '| Version <%= pkg.version %>\n' +
            '| <%= pkg.homepage %>\n' +
            '| \n' +
            '| Copyright (c) <%= grunt.template.today("yyyy") %> - <%= pkg.author.name %>\n' +
            '| <%= pkg.author.url %>\n' +
            '| \n' +
            '*/\n',



    // -------------------------------------------------------
    // Cache Busting - Dynamically busts cache
    // -------------------------------------------------------
    cacheBust: {

      options: {
        encoding: 'utf8',
        algorithm: 'md5',
        length: 16
      },

      assets: {
          files: [{
              src: ['index.html']
          }]
      }

    },

    // -------------------------------------------------------
    // Sass - Compiles Scss and Sass files
    // -------------------------------------------------------
    sass: {

      dev: {

        options: {
          style: 'expanded',
          lineNumbers: true,
          trace: true,
          cacheLocation: 'assets/styles/.sass-cache'
        },

        files: {
          'site.css': 'assets/styles/inbox.scss'
        }

      },

      build: {

        options: {
          sourcemap: false,
          style: 'nested',
          lineNumbers: false,
          noCache: true
        },

        files: {
          'site.css': 'assets/styles/inbox.scss'
        }

      }

    },


    // ------------------------------------------------------------
    // Autoprefixer - Runs the compiled css through autoprefixer
    // ------------------------------------------------------------
    autoprefixer: {

      options: {
        browsers: [
          'last 2 version',
          'safari 6',
          'ie 9',
          'opera 12.1',
          'ios 6',
          'android 4'
        ]
      },

      files: {
        src: 'site.css',
        dest: 'site.css'
      }

    },

    // -------------------------------------------------------
    // Minification - Runs tasks against changed watched files
    // -------------------------------------------------------
    cssmin: {

      options: {
        banner: '<%= banner %>'
      },

      files: {
        src: 'site.css',
        dest: 'site.css'
      }

    },


    // -------------------------------------------------------
    // Concatinate Jvascript
    // -------------------------------------------------------
    concat: {

      options: {
        separator: ';',
        nonull: true,
        sourceMap: true
      },

      dist: {

        src: [
          'assets/scripts/vendor/jquery.js',
          'assets/scripts/vendor/*.js',
          'assets/scripts/modules/*.js',
          'assets/scripts/inbox.js'
        ],
        dest: 'site.js'
      }

    },

    // -------------------------------------------------------
    // Minify Jvascript
    // -------------------------------------------------------
    uglify: {

      options: {
        mangle: false,
        banner: '<%= banner %>'
      },

      files: {
        src: 'site.js',
        dest: 'site.js'
      }

    },


    // -------------------------------------------------------
    // JSON Lint - Lint the gradients.json file
    // -------------------------------------------------------
    jsonlint: {
      gradients: {
        src: [ 'gradients.json' ]
      }
    },


    // -------------------------------------------------------
    // Clean - Remove source maps
    // -------------------------------------------------------
    clean: ["site.css.map", "site.js.map", "assets/styles/.sass-cache"],


    // -------------------------------------------------------
    // Watch - Runs tasks against changed watched files
    // -------------------------------------------------------
    watch: {

      options: {
        livereload: true,
        spawn: false
      },

      styles: {
        files: ['assets/styles/**/*.scss'],
        tasks: ['sass:dev', 'autoprefixer', 'notify:styles']
      },

      scripts: {
        files: ['assets/scripts/**/*.js'],
        tasks: ['concat', 'notify:scripts']
      },

      markup: {
        files: ['index.html'],
        tasks: ['notify:markup']
      }

    },


    // -------------------------------------------------------
    // Notify - Relevant bits of notifications
    // -------------------------------------------------------
    notify: {

      watch: {
        options: {
          title: 'Dev server ready',
          message: 'Watching for changes',
        }
      },

      build: {
        options: {
          title: 'Build Ready \\m/',
          message: 'Go ahead and deploy like a rockstar',
        }
      },

      markup: {
        options: {
          title: 'Oh yeah!',
          message: 'Markup generated',
        }
      },

      styles: {
        options: {
          title: 'Styles Injected',
          message: 'Sass succesfully compiled',
        }
      },

      scripts: {
        options: {
          title: 'Yo Dawg!',
          message: 'Your scripts be injected',
        }
      }
    }


  });



  // -------------------------------------------------------
  // AUTOMATICALY LOAD GRUNT PLUGINS
  // -------------------------------------------------------
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);


  // -------------------------------------------------------
  // REGISTERING TASKS
  // -------------------------------------------------------
  grunt.registerTask('dev', 'Boots up the development environment', [
    'sass:dev',
    'autoprefixer',
    'concat',
    'watch'
  ]);

  grunt.registerTask('build', 'Readys files for deployment', [
    'sass:build',
    'autoprefixer',
    'cssmin',
    'concat',
    'uglify',
    'clean',
    'jsonlint:gradients',
    'notify:build'
  ]);

};
