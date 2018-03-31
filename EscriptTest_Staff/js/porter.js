import { Jugador } from'jugador.js';

export class Porter extends Jugador {
	constructor(name, age, equipo){
		super(name, age, equipo);

	}
	jugar10_min(){
		console.log('Saca de porteria')
	};
}