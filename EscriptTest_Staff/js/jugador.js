import  {Staff}  from './staff';

export class Jugador extends Staff{

	constructor(name, age, equipo) {
		super(name, age);
		this.equipo = equipo;
	};

	jugar10_min(){
		console.log('Esto es una funcion abstracta')
	};
};


