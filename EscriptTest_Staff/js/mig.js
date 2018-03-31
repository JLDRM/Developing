import { Jugador } from'jugador.js';

export class Mig extends Jugador {
	constructor(name, age, equipo){
		super(name, age, equipo);
		
	}
	jugar10_min(){
		console.log('tiki-taka madafacka')
	};
}