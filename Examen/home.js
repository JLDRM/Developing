
$("#busqueda").on('keyup', function(){
        if (temporizador>=0){
          clearTimeout(temporizador)
        }

        var texto_a_buscar = $(this).val();
        $("li").html(texto_a_buscar);
        reiniciarTempo;


    }).keyup();


var temporizador = -1;



$("button").click(function(event) {
	$.getJSON('http://www.mocky.io/v2/5a54ae822d00005f235b1cd2', {}, function(json, textStatus) {
	var lista_articulos;
	lista_articulos=json;
	
		
});

});

function filtrarArticulos(){
  let array_a_retornar =[];
  array_a_retornar=lista_articulos.filter((llibre)=>{

return 
  return
    (llibre.titulo &&
    llibre.titulo.indexOf(texto_a_buscar)>=0||
    llibre.autor &&
    llibre.autor.indexOF(texto_a_buscar)>0);

})
