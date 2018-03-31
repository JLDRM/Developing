"use strict";

var Router = function () {
	var ruta_actual = "usuarios";
	var observable = null;
	var actualLoc = '';

	function init(ruta) {
		actualLoc = "" + window.location;
		return cambiar_a_ruta(ruta_actual);
	}

	function cambiar_a_ruta(ruta) {

		switch (ruta) {
			case "usuarios":
				observable = ModUsuarios.show();
				break;
			case "pedidos":
				observable = ModPedidos.show();
				break;
			default:
				observable = ModUsuarios.show();
				break;
		}

		ruta_actual = ruta;
		_changeURL(ruta_actual);

		return observable;
	}

	function _changeURL(ruta) {
		history.pushState({}, 'ruta:' + ruta, actualLoc + ruta);
	}

	return {
		init: init,
		change: cambiar_a_ruta
	};
}();
//# sourceMappingURL=mod_rutas.js.map
