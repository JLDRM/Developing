import { Jugador } from'jugador.js';

export class Defensa extends Jugador {
	constructor(name, age, equipo){
		super(name, age, equipo);
		
	}
	jugar10_min(){
		console.log('La peina')
	};
}