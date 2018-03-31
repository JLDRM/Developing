var ModUsuarios=(function (argument) {
	var lista_usuarios;

	function renderUsuario (argument) {
		return Rx.Observable.fromPromise(
			$.get('./dist/templates/mod_usuarios/usuarios.hbs','html')
			.done(function (cuerpo_plantilla) {
				var template=Handlebars.compile(cuerpo_plantilla);
				$('#app').empty().append(template(Store.getUsuarios()));
			})
			.then(d=>{return true;})
		);

	}

	return{
		show:renderUsuario
	};
})();