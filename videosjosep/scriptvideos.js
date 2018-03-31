//Array Videos:
var videos =['video1.mov','video2.mov','video3.mov','video4.mov'];

//Variables Globales
var butn = document.getElementById('butn');
var input = document.getElementById('inpt');
var contenedorVids = document.getElementById('contenedorVids');

//var cadenavideos =
 
function pintarvideos (arrv){
	var cadena = ""
	for (var i = 0; i < arrv.length; i++) {
		cadena+= '<div class="trucados" id="div'+i+'"><p>'+[i]+'</p><video controls src="' + arrv[i] + '"id="'+i+'"width="400px" height="350px"></video></div>';
	}
	
	return cadena;
}

//Ejecutamos pintarvideos dentro del Contenedor de Videos:

contenedorVids.insertAdjacentHTML('beforeend', pintarvideos(videos));


//Function to Star/Stop the video:

function playValue(){
	var	a = input.value;
	
	if (a >= 4) {
		alert("Debes poner el Nº de un Video");

		} else { 

		trippy();
		
		}
	}

//Creamos la funcion que apaga todos los diferentes a input.value y arranca el input.value:

function trippy(){
	var a = input.value;
	
	for (var i = 0; i < 4; i++) {
		if ([i]!=a) {
		 	document.getElementById([i]).pause();
		 	document.getElementById('div'+i).setAttribute('class', 'trucados');
		 } else {
		 	document.getElementById(a).play();
		 	document.getElementById('div'+i).setAttribute('class', 'truca2');
		 } ;

	}
}

//Insertamos evento a button:

butn.onclick = playValue;





