onmessage = function (event) {
	var op = event.data.op;
	var numbers = event.data.numbers;
	var result=0;
	var opersign={1:'+',2:'-',3:'*',4:'/'};

	switch (op) {
		case 1:
		case 2:
		case 3:
		case 4:
		result=numbers.filter(x=>!isNaN(x)).reduce((accumulator, currentValue) => {
			console.log(accumulator);
			return eval("accumulator" + opersign[op]+ "currentValue");

		},numbers[0]);
		break;
		default:
		break;
	}

	console.log("Result:",result);

	postMessage(result);
}