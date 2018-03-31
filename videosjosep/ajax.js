var url = "http://www.mocky.io/v2/5a3d11bc310000551eb593c0";
var request = new XMLHttpRequest();

// Opcionalmente, indicar el formato de la respuesta.
// request.responseType = "application/json";
request.open("GET", url);
request.onload = function () {
	console.log(request);
    if (request.status == 200) {
        actualizarIU(request.responseText);
    }
};

request.send(null);