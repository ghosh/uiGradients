/*
|--------------------------------------------------------------------------
| uiGradients Gruntfile
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
    cachebreaker: {
        dev: {
            options: {
                match: ['assets/scripts/site.js', 'assets/styles/site.css'],
                replacement: 'time'
            },
            files: {
                src: ['build/index.html']
            }
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
          cacheLocation: 'source/styles/.sass-cache'
        },

        files: {
          'build/assets/styles/site.css': 'source/styles/inbox.scss'
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
          'build/assets/styles/site.css': 'source/styles/inbox.scss'
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
        src: 'build/assets/styles/site.css',
        dest: 'build/assets/styles/site.css'
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
        src: 'build/assets/styles/site.css',
        dest: 'build/assets/styles/site.css'
      }

    },


    // -------------------------------------------------------
    // Concatinate Javascript
    // -------------------------------------------------------
    concat: {

      options: {
        separator: ';',
        nonull: true,
        sourceMap: false
      },

      dist: {

        src: [
          'source/scripts/vendor/jquery.js',
          'source/scripts/vendor/*.js',
          'source/scripts/utils/*.js',
          'source/scripts/modules/*.js',
          'source/scripts/inbox.js'
        ],
        dest: 'build/assets/scripts/site.js'
      }

    },

    // -------------------------------------------------------
    // Minify Javascript
    // -------------------------------------------------------
    uglify: {

      options: {
        mangle: false,
        banner: '<%= banner %>'
      },

      files: {
        src: 'build/assets/scripts/site.js',
        dest: 'build/assets/scripts/site.js'
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
    clean: ["build/assets/styles/site.css.map", "build/assets/scripts/site.js.map", "assets/styles/.sass-cache"],


    // -------------------------------------------------------
    // Watch - Runs tasks against changed watched files
    // -------------------------------------------------------
    watch: {

      options: {
        livereload: true,
        spawn: false
      },

      styles: {
        files: ['source/styles/**/*.scss'],
        tasks: ['sass:dev', 'autoprefixer', 'notify:styles']
      },

      scripts: {
        files: ['source/scripts/**/*.js'],
        tasks: ['concat', 'notify:scripts']
      },

      markup: {
        files: ['build/index.html'],
        tasks: ['notify:markup']
      }

    },


    // -------------------------------------------------------
    // Copy - Copy the gradient.json to build folder
    // -------------------------------------------------------
    copy: {
      main: {
        files: [{
          expand: true,
          flatten: true,
          src: 'gradients.json',
          dest: 'build/',
          filter: 'isFile'
        }],
      },
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
    },

    // -------------------------------------------------------
    // JS Beautifier - Pretty Formats gradients.json file
    // -------------------------------------------------------
    "jsbeautifier": {
      files: ["gradients.json"],
      options: {
          js: {
              braceStyle: "expand",
          }
      }
    },

    // -------------------------------------------------------
    // GH Pages - Deploys code to github
    // -------------------------------------------------------
    'gh-pages': {
      options: {
        base: 'build',
        dotfiles: true
      },
      src: ['**']
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
    'copy',
    'sass:dev',
    'autoprefixer',
    'concat',
    'watch'
  ]);

  grunt.registerTask('build', 'Readys files for deployment', [
    'copy',
    'sass:build',
    'autoprefixer',
    'cssmin',
    'concat',
    'uglify',
    'clean',
    'jsonlint:gradients',
    'jsbeautifier',
    'cachebreaker',
    'notify:build'
  ]);

  grunt.registerTask('lint', 'Json Lints the gradients file', [
    'jsonlint',
  ]);

  grunt.registerTask('deploy', 'Deploys the site to github', [
    'gh-pages',
  ]);

};
