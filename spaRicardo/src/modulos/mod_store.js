var Store=(function (argument) {
	var _usuarios=[
		{uid:1,name:"Rosa",mail:"ros@r.cat"},
		{uid:2,name:"Pedro",mail:"pet@r.cat"},
		{uid:3,name:"Luisa",mail:"ly@r.cat"}
	];
	
	var _pedidos=[
		{pid:1,comprador:2},
		{pid:2,comprador:1},
		{pid:3,comprador:1}
	];

	function getUsuarios () {
		return _usuarios;
	}

	function getPedidos () {
		return _pedidos;
	}

	return{
		getUsuarios:getUsuarios,
		getPedidos:getPedidos
	};
})();