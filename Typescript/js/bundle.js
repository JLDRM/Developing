var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
;
var Animal = /** @class */ (function () {
    function Animal(nombre, peso, velocidad) {
        this.nombre = nombre;
        this.peso = peso;
        this.velocidad = velocidad;
    }
    ;
    return Animal;
}());
;
var Caballo = /** @class */ (function (_super) {
    __extends(Caballo, _super);
    function Caballo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /*El constructor de caballo se hereda de Animal*/
    Caballo.prototype.corre = function (distancia) {
        console.log(this.nombre + " moved " + this.velocidad * distancia + ".m");
    };
    ;
    return Caballo;
}(Animal));
;
var Au = /** @class */ (function (_super) {
    __extends(Au, _super);
    function Au() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Au.prototype.corre = function (distancia) {
        console.log(this.nombre + " swimmed " + this.velocidad * distancia + ".m");
    };
    ;
    return Au;
}(Animal));
;
var Pez = /** @class */ (function (_super) {
    __extends(Pez, _super);
    function Pez() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pez.prototype.corre = function (distancia) {
        console.log(this.nombre + " flyed " + this.velocidad * distancia + ".m");
    };
    ;
    return Pez;
}(Animal));
;
var Staff = /** @class */ (function () {
    function Staff(nombre, sueldo, equipo) {
        this.nombre = nombre;
        this.sueldo = sueldo;
        this.equipo = equipo;
    }
    return Staff;
}());
var Jugador = /** @class */ (function (_super) {
    __extends(Jugador, _super);
    function Jugador(nombre, sueldo, equipo) {
        return _super.call(this, nombre, sueldo, equipo) || this;
    }
    Jugador.prototype.jugar5minutos = function () {
    };
    ;
    Jugador.prototype.cambiar = function () {
    };
    ;
    return Jugador;
}(Staff));
var Zoo = /** @class */ (function () {
    function Zoo() {
        this.animals = new Array();
    }
    return Zoo;
}());
var zoo = new Zoo();
zoo.animals.push(new Caballo("cabró", 12, 23));
zoo.animals.push(new Caballo("cabrónas", 12, 23));
zoo.animals.push(new Au("cabrónasa", 12, 23));
zoo.animals.push(new Au("cabrónil", 12, 23));
zoo.animals.push(new Au("cabrit", 12, 23));
zoo.animals.push(new Pez("fill de politic", 12, 23));
zoo.animals.push(new Pez("mara del talp", 12, 23));
zoo.animals.push(new Pez("esquirol", 12, 23));
for (var _i = 0, _a = zoo.animals; _i < _a.length; _i++) {
    var m = _a[_i];
    m.corre(30);
}
//# sourceMappingURL=bundle.js.map