import { Jugador } from'jugador.js';

export class Delanter extends Jugador {
	constructor(name, age, equipo){
		super(name, age, equipo);
		
	}
	jugar10_min(){
		console.log('el bicho chuta i....GOLLL')
	};
}