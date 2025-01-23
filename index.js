function perro(nombre, edad){
    let perro = Object.create(objetoConstructor);
    perro.nombre = nombre;
    perro.edad = edad;
    return perro; 
}

let objetoConstructor = {
    habla: function(){
        return "soy un perro"
    }
}

let firulais = perro(" firulays", 9 );
console.log(firulais);
console.log(firulais.objetoConstructor);