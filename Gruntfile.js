module.exports = function(grunt) {
 
    grunt.initConfig({
 
        // Our JSHint options
        jshint: {
        	options: {
            	reporter: require('jshint-stylish')
        	},
        	// Files to lint
            all: ['js/*.js', 'js/controllers/*.js', 'js/models/*.js', 'js/templates/*.js', 'js/views/*.js'] 
        },

		// Our concat options
		concat: {
	        options: {
	        	// Seperates scripts.
	            separator: ';'
	        },
	        dist: {
	        	// Set sources to concatenate.
	            src: [
	            	// Modernizr
	            	'js/_vendor/modernizr-2.6.2.min.js',
	            	// jQuery
	            	'js/_vendor/jquery-1.11.0.min.js',
	            	// Backbone
	            	'js/_vendor/underscore.min.js', 'js/_vendor/backbone.min.js', 
	            	// Bootstrap
	            	'js/_vendor/bootstrap.min.js',
	            	// App
	            	'js/app.js',
	            	'js/app-router.js',
	            	'js/plugins.js',
	            	// Controllers
	            	'js/controllers/home.js',
	            	// Models	            	
	            	'js/models/global.js',
	            	// Templates
	            	// Views
	            	// Include file to start app
	            	'js/ignite.js',
	            ], 
	            // Set output file for concatenated code.
	            dest: 'js/script.js' 
	        }
	    },

	    // Our uglify options
	    uglify: {
	        js: {
	            files: {
	            	// Save over the newly created script
	                'js/script.js': ['js/script.js'] 
	            }
	        }
	    },

	    // Our cssmin options
		cssmin: {
			combine: {
				files: {
				  'css/styles.css': ['css/main.css', 'css/normalize.css']
				}
			}
		},

		// Our less options
		less: {
		    production: {
		        files: {
		            "css/main.css": "css/main.less"
		        }
		    }
		},

		// Our watch options
		watch: {
		    files: "css/**/*.less",
		    tasks: ["less"]
		}			  

    });

    // Load our tasks
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
 
    // Default tasks to run
    grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'cssmin', 'less']);

    // Development tasks.
	grunt.registerTask('dev', ['jshint', 'less', 'cssmin']);
	// Production tasks.
	grunt.registerTask('prod', ['jshint', 'concat', 'uglify', 'less', 'cssmin']);    
}