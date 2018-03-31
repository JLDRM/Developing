'use strict';

var ModPedidos = function (argument) {
	var _lista_pedidos;

	function renderPedido(argument) {
		return Rx.Observable.fromPromise($.get('./dist/templates/mod_pedidos/pedidos.hbs', 'html').done(function (cuerpo_plantilla) {
			var template = Handlebars.compile(cuerpo_plantilla);
			_generateVM();
			$('#app').empty().append(template(_lista_pedidos));
		}).then(function (d) {
			return true;
		}));
	}

	function _generateVM() {
		_lista_pedidos = [];
		var _usuarios = Store.getUsuarios();
		console.log('pedidos:', Store.getPedidos());
		Store.getPedidos().forEach(function (ped, index) {
			var newPed = Object.assign({}, ped);
			newPed.comprador = _usuarios.find(function (user) {
				return ped.comprador == user.uid;
			});
			_lista_pedidos.push(newPed);
		});
	}

	return {
		show: renderPedido
	};
}();
//# sourceMappingURL=mod_pedidos.js.map
