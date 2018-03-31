interface IMove{
	corre(distancia:number)

};

abstract class Animal{
	nombre:string;
	peso:number;
	velocidad:number;

	constructor(nombre:string,peso:number,velocidad:number){
		this.nombre=nombre;
		this.peso=peso;
		this.velocidad=velocidad;
	};

};

class Caballo extends Animal implements IMove{
	/*El constructor de caballo se hereda de Animal*/

	corre(distancia:number){
		console.log(`${this.nombre} moved ${this.velocidad*distancia}.m`);
	};
};

class Au extends Animal implements IMove{

	corre(distancia:number){
		console.log(`${this.nombre} swimmed ${this.velocidad*distancia}.m`);
	};
};

class Pez extends Animal implements IMove{

	corre(distancia:number){
		console.log(`${this.nombre} flyed ${this.velocidad*distancia}.m`);
	};
};

