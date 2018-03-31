import Staff from './staff';
import Jugador from './jugador';


var equipo = { 
	elements: [
	new Porter('bernat',15,'Drink'),
	new Defensa('astruss',17,'Drink'),
	new Defensa('pallus',18,'Drink'),
	new Defensa('lluç',22,'Drink'),
	new Defensa('rap',24,'Drink'),
	new Mig('rata',12,'Drink'),
	new Mig('gos',23,'Drink'),
	new Mig('gat',4,'Drink'),
	new Delanter('paquet',65,'Drink'),
	new Delanter('eto',33,'Drink'),
	new Delanter('el_bicho',69,'Drink')
	]
	,
	size : 10,
	pointer :0,
	[Symbol.iterator]: function(){
		var e = this.elements; var s = this.size;
		var p = this.pointer; 
		return{
			next: function() { if(p > s)
				{
					return { value: undefined, done: true };
				} else {
					p++;
					return { value: e[p - 1], done: false }; }
				}, };
			} }