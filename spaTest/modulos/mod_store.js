var Store=(function(){
	
	var _usuarios=[
	{vid:1,name:'Paco',email:'paco@gmail.com'},
	{vid:2,name:'Fran',email:'fran@gmail.com'},
	{vid:3,name:'Ciscu',email:'ciscu@gmail.com'}
	];
	
	var _pedidos=[
	{pid:1,comprador:{name:'Paco'}},
	{pid:2,comprador:{name:'Fran'}},
	{pid:3,comprador:{name:'Ciscu'}},
	{pid:4,comprador:{name:'Paco'}},
	{pid:5,comprador:{name:'Fran'}},
	{pid:6,comprador:{name:'Ciscu'}},
	{pid:7,comprador:{name:'Paco'}},
	{pid:8,comprador:{name:'Fran'}},
	{pid:9,comprador:{name:'Ciscu'}},
	{pid:10,comprador:{name:'Paco'}},
	{pid:11,comprador:{name:'Fran'}},
	{pid:12,comprador:{name:'Ciscu'}},
	{pid:13,comprador:{name:'Paco'}},
	{pid:14,comprador:{name:'Fran'}},
	{pid:15,comprador:{name:'Ciscu'}},
	{pid:16,comprador:{name:'Paco'}},
	{pid:17,comprador:{name:'Fran'}},
	{pid:18,comprador:{name:'Ciscu'}}
	];

	function getUsuarios() {
		return _usuarios;
	};

	function getPedidos() {
		return _pedidos;
	};

	return {
		
		getUsuarios:getUsuarios,
		getPedidos:getPedidos
	}

})();