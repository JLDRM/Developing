module.exports = function(grunt) { 
	// CONFIGURAR GRUNT
	grunt.initConfig({ 
		pkg: grunt.file.readJSON('package.json'), 
		jshint: { 
			options: { esversion: 6, reporter: require('jshint-stylish') },
			build: ['Gruntfile.js', 'src/**/*.js'] 
		},
		babel: {
			options: {
				sourceMap: true,
				presets: ['env']
			},
			dist: {
				files: [{
					"expand": true,
					"cwd": "src",
					"src": ["**/*.js"],
					"dest": "src-compiled/",
					"ext": ".js"
				}]
			}
		},

		copy: {
			main: {
				expand: true,
				cwd: 'src/modulos',
				src: '**/*.hbs',
				dest: 'dist/templates',
			},
		},

		uglify: { 
			options: {
				sourceMap : true
			},
			build: { files: 
				{ 
					'dist/app.min.js': ['src-compiled/modulos/**/*.js','src-compiled/modulos/*.js','src-compiled/*.js'],
					'dist/vendor.out.js':'vendor/*.js'
				} 
			} 
		} ,
		obfuscator: {
			options: {
				debugProtection: true,
				debugProtectionInterval: true
			},
			task1: {
				files: {
					'dist/js/app.min.of.js': ['dist/js/app.min.js']
				}
			}
		},

		less: { build: { files: { 'dist/css/style.css': 'src/css/*.less' } } },
		cssmin: {
			options: {
				mangle: {
					minify: true
				},
				banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
			},
			build: {
				files: {
					'dist/css/style.min.css': 'dist/css/*.css'
				}
			}
		},
		watch: {
			stylesheets: {
				files: ['src/**/*.css', 'src/**/*.less'],
				tasks: ['less', 'cssmin']
			},
			scripts: {
				files: 'src/**/*.js',
				tasks: ['jshint', 'uglify']
			}
		}

	});

	//Carga de pluggins GRUNT
	grunt.loadNpmTasks('grunt-contrib-jshint'); 
	grunt.loadNpmTasks('grunt-contrib-uglify'); 
	grunt.loadNpmTasks('grunt-contrib-less'); 
	grunt.loadNpmTasks('grunt-contrib-cssmin'); 
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-obfuscator');
	grunt.loadNpmTasks('grunt-babel');
	grunt.loadNpmTasks('grunt-contrib-copy');

	//Tareas por defecto
	grunt.registerTask('default', ['jshint','babel', 'uglify', 'less', 'cssmin','copy']); 

	// Desarrollo
	grunt.registerTask('dev', ['jshint:dev', 'uglify:dev', 'cssmin:dev', 'less:dev']);
	// Produccion
	grunt.registerTask('production', ['jshint:production', 'uglify:production', 'cssmin:production', 'less:production']);


};
