var ModUsuarios=(function (argument){
	//var _usuarios=[];

	function renderUsuario (){
		$.get('./modulos/mod_usuarios/usuarios.hbs', function(cuerpo_plantilla){
			template=Handlebars.compile(cuerpo_plantilla);
			$('#app').empty().append(template(Store.getUsuarios()));
			Utils.loadmenus();
		},'html');
	};

	function obtenerUsuario () {
		$.get('/bbDatosUsuario', function(data) {
			let listado_usuarios = data;
			listado_usuarios.filter(condiciones_login);
		};
	});
		
	};



	return{
		show:renderUsuario
	}

})();