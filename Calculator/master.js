w1 = new Worker('slave.js');

document.getElementById('calc').onclick=function (e) {
	var operacion=parseInt(document.getElementById('op').value);
	var numbervals=(document.getElementById('numbers').value.split(',').map(x=>{console.log(x);return parseInt(x.trim());}).filter(x=>!isNaN(x)));
	console.log("Inputs:",operacion, numbervals);

	var message = {op:operacion,numbers:numbervals};
	w1.postMessage(message);
	w1.onmessage=function (evnt){
		document.getElementById('result').innerHTML=evnt.data;
	}
}

