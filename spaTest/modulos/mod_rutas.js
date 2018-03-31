var Router = (function(){
	var ruta_actual= 'usuarios'
	
	function init(){
		cabiar_a_ruta (ruta_actual);
	};

	function cabiar_a_ruta(ruta){
		ruta_actual=ruta;
		switch(ruta_actual) {
			
			case "usuarios":
			ModUsuarios.show();

			break;
			
			case "pedidos":
			ModPedidos.show();

			break;
		}
	};

	return {
		init:init,
		change:cabiar_a_ruta
	};

})();