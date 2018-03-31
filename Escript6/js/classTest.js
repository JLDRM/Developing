class Student{//constructor of the class 
	constructor(name, age) {//"this" points to the current object
	this.name = name;
	this._age = age; 

}
//member function
getName() {
	return this.name;
};
setName(name) { 
	this.name = name;
};
set age(value) { 
	this._age = value;
};
get age() {
	return this._age;
}; 

};

//Definimos la herencia con extends:
class Person extends Student{ 

	constructor(name, age, citizen) {
	//this points to the person class
	this.citizen = citizen;
	//call constructor of super class. "super" is an pointer to the super class object
	super(name, age); 

}

getCitizen() {
	return this.citizen;
}
	//overriding
getName() {//we are calling the super class getName function
	return super.getName(); 
}

};


/*=====================================================================
Creación Custom Collection
=====================================================================*/
var custom_collection = { 

	elements: [1, 4, 6, 9],
	size : 3,
	pointer :0,
	[Symbol.iterator]: function(){
		var e = this.elements; 
		var s = this.size;
		var p = this.pointer; 

		return{
			next: function() { 
				if(p > s){
					return { value: undefined, done: true };
				} else {
					p++;
					return { value: e[p - 1], done: false }; }
				}, 
			};
		} 
	}

	for(var i of custom_collection) {
console.log(i); //1, 4, 6, 9 
}
