abstract class Staff{
	constructor(nombre:string,sueldo:number,equipo:string){
		this.nombre = nombre;
		this.sueldo = sueldo;
		this.equipo = equipo;
	}

	nombre:string;
	sueldo:number;
	equipo:string;

}

interface IJugador{
	jugar5minutos():void;
}

interface ISubstituible{
	cambiar():void;
}

abstract class Jugador extends Staff  {
	
	constructor(nombre:string,sueldo:number,equipo:string){
		super(nombre,sueldo,equipo);	
	}
	jugar5minutos():void{

	};
	cambiar():void{
		
	};

}

