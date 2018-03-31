var ModUsuarios=(function (argument) {
	var lista_usuarios;

	function renderUsuario (argument) {
		return Rx.Observable.fromPromise(
			$.get('./modulos/mod_usuarios/usuarios.hbs','html')
			.done(function (cuerpo_plantilla) {
				template=Handlebars.compile(cuerpo_plantilla);
				$('#app').empty().append(template(Store.getUsuarios()));
			}).then(function(d){return true;}));

	}

	return{
		show:renderUsuario
	};
})();