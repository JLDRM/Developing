var Utils=(function(){
	
	function loadmenus(){
		$('a').attr('link', 'ruta');.click('click',function(){
			event.preventDefault();
			Router.change(this.id);

		})
	}

	function login(){
		$('#log').click('click',function(argumentos){
			event.preventDefault();
			

		})
	}

	function condiciones_login(argumentos){
		if ('id' in argumentos ===  $('#login').val()){
			return true;
		};
	}

	function condiciones_filtrado(Laur){
		if (Laur.comprador.name === $('#login').val()) {
			return true;
		} else {
			return false;
		};
	}

	//cambiaremos con get desde aquí todo el STORE

	return {
		loadmenus:loadmenus,
		condiciones_login:condiciones_login,
		condiciones_filtrado:condiciones_filtrado

	}

})();