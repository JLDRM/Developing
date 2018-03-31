let texto="Hola mundo";
console.log("ES6",texto);

function function_name() {
return [1, 6, 7, 4, 8, 0]; //here we are storing variables in an array and returning the array
}
var q, w, e, r, t, y;
//Here we are using ES6's array destructuring feature to assign the returned values to variables.
//Here we are ignoring 2 and 4 array indexes
[q, w, , r, , y] = function_name();
alert(y);//y is 0

 function myFunction(x = 1, y = 2, z = 3){ console.log(x, y, z); // Output "6 7 3"
} myFunction(6,7);

function myFunction(x = 1, y = 2, z = 3 + 5) {
console.log(x, y, z); // Output "6 7 8" 
}
myFunction(6,7);

 //args variable is an array holding the passed function arguments
 function function_one(...args)
 {
 	console.log(args);
 	console.log(args.length); }
 	function_one(1, 4); function_one(1, 4, 7); function_one(1, 4, 7, 0);
 	function function_two(a, b, ...args) {
 		console.log(args);
 		console.log(args.length); }
//"args" holds only 7 and 9
function_two(1, 5, 7, 9);
