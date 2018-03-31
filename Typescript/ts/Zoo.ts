class Zoo {
	animals = new Array<Animal>();
	nombre:string;
}

const zoo = new Zoo();
zoo.animals.push(new Caballo("cabró",12,23));
zoo.animals.push(new Caballo("cabrónas",12,23));
zoo.animals.push(new Au("cabrónasa",12,23));
zoo.animals.push(new Au("cabrónil",12,23));
zoo.animals.push(new Au("cabrit",12,23));
zoo.animals.push(new Pez("fill de politic",12,23));
zoo.animals.push(new Pez("mara del talp",12,23));
zoo.animals.push(new Pez("esquirol",12,23));

for(const m of zoo.animals){
	m.corre(30);
}

