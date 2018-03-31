var ModPedidos=(function (argument){
	//var lista_usuarios=[];

	function renderPedidos (argument){
		
		$.get('./modulos/mod_pedidos/pedidos.hbs', function(cuerpo_plantilla) {
			template=Handlebars.compile(cuerpo_plantilla);
			
			Store.getPedidos();
			
			//Utils.condiciones_filtrado(_pedidos);

			$('#app').empty().append(template(lista_pedidos));
			
			Utils.loadmenus();

		},'html');
	};

	/*function _generateVisual(){
		lista_pedidos=[
		{pid:1,comprador:{name:'Paco'}},
		{pid:2,comprador:{name:'Fran'}},
		{pid:3,comprador:{name:'Ciscu'}}
		];
	};*/


	return{
		show:renderPedidos
	}

})();