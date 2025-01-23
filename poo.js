//clase
class comida  {
    //constructor
    constructor(id, name, color){
        this.id = id;
        this.name = name;
        this.color = color;
    }
    //metodo 
    nombrar() {
        return `${this.name} de color ${this.color}`;
    }
}
//herencia 
class galleta extends comida {
    constructor(id, name, color, sabor) {
        super(id, name, color);
        this.sabor = sabor;
    }
    //metodo 
    nombrarGalleta() {
        return `Galletas ${this.name} sabor ${this.sabor}`;
    }
}
//instanciar 
const manzana = new comida(1, 'manzana', 'rojo');
const pera = new comida(1, 'pera', 'verde');
//instanciar
const oreo = new galleta( 3, 'oreos', 'negro', 'chocolate');
const chokis = new galleta(3, 'chokis', ' marron', ' vainilla');
//llamar a un metodo
console.log(oreo.nombrarGalleta())