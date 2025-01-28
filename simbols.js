const id = Symbol("id");            // Identificador de "id"
const unique = Symbol("unique");    // Identificador de "unique"

const isEqual = Symbol("unique") === Symbol("unique");  // false
console.log(isEqual);

console.log(id, typeof id);

console.log('-----------------------------------------------------------')

const u1 = Symbol("unique");
const u2 = Symbol("unique");

u1 === u2;                            // false (son símbolos diferentes)
u1.description === u2.description;    // true  (se crearon con el mismo texto)
console.log(u1 === u2);
console.log(u1.description === u2.description);


console.log('-----------------------------------------------------------')

// ahora utilizaremos simbolos para un videojuego primeramente con string y luego con simbols

const enemies = [
    { id: "SKELETON", name: "Esqueleto" },
    { id: "SPECTRE", name: "Espectro" },
    { id: "GHOST", name: "Fantasma" }
  ];
  
  const addEnemy = (id, name) => {
    enemies.push({ id, name });
  }
  
  // Añadimos nuevo esqueleto a la lista de enemigos
  addEnemy("SKELETON", "Esqueleto resplandeciente");
  
  const findEnemyById = (id) => {
    return enemies.find(enemy => enemy.id === id);
  }
  
  findEnemyById("SKELETON");
  // Devuelve { id: "SKELETON", name: "Esqueleto" }
  

 console.log(enemies)
 /* 
  al utilizar string sucede que se puede sobreescribir un valor, por ejemplo si se quiere agregar un nuevo esqueleto, pero a la vez si se desea llamar
  se llamara el primero que se haya agregado, en este caso el esqueleto , por lo que se debe de tener cuidado al utilizar string
 */ 

    console.log('-----------------------------------------------------------')

// ahora lo ahoramos con simbols


const SKELETON = Symbol("SKELETON");
const SPECTRE = Symbol("SPECTRE");
const GHOST = Symbol("GHOST");

const enemies1 = [
  { id: SKELETON, name: "Esqueleto" },
  { id: SPECTRE, name: "Espectro" },
  { id: GHOST, name: "Fantasma" }
];

// Enemies methods
const addEnemy1 = (id, name) => enemies1.push({ id, name });
const findEnemyById1 = (id) => enemies1.find(enemy => enemy.id === id);

// Añadimos nuevo esqueleto a la lista de enemigos
const GLEAMING_SKELETON = Symbol("SKELETON");
addEnemy1(GLEAMING_SKELETON, "Esqueleto resplandeciente");

findEnemyById1(GLEAMING_SKELETON);
// Devuelve: { id: Symbol(SKELETON), name: "Esqueleto resplandeciente" }

findEnemyById1(SKELETON);
// Devuelve: { id: Symbol(SKELETON), name: "Esqueleto" }

console.log(enemies1)


console.log('-----------------------------------------------------------')

// simbolos globales 

const u11 = Symbol("unique");
const u21 = Symbol("unique");
u1 === u21; // false

console.log(u1 === u21);
//el simbolo global compartido se da utilizando la palabra reservada symbol seguido por el punto y for. siempre dara true porque es compartido
const u111 = Symbol.for("unique");    // Símbolo global compartido
const u211 = Symbol.for("unique");    // Símbolo global compartido
u1 === u21; // true

console.log(u111 === u211);

console.log('-----------------------------------------------------------')

// ahora utilizaremos keyfor para obtener el nombre de un simbolo global

const local = Symbol("unique"); // sin utilizar a palabra reservada for, se puede ver en consola que no da unique sino undefined
const global = Symbol.for("unique");

Symbol.keyFor(global);  // "unique"
Symbol.keyFor(local);   // undefined

console.log(Symbol.keyFor(global));
console.log(Symbol.keyFor(local));

console.log('-------------------------------------------------------------')
//El símbolo Symbol.iterator se utiliza para definir como iterar un objeto.
/* en esta parte primero se necesita que se coloque un contador y se coloque la palabra reservada start y end 
luego ya se interacua con  simbole.interator para iterar el objeto. */

const counter = {
    start: 1,
    end: 10,
    [Symbol.iterator]() {
      let current = this.start;
      const end = this.end + 1;
      return {
        next() {
          return {
            value: current++,
            done: current > end
          }
        }
      }
    }
  }

  // Muestra números del 1 al 10
for (const number of counter) {
    console.log(number);
  }
  
  // Devuelve [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const numbers = [...counter];
  console.log(numbers)


console.log('-----------------------------------------')

// con async y await se utiliza symbol.asyncIterator para iterar un objeto de forma asincrona

const practica = {
    start: 1,
    end: 10,
    [Symbol.asyncIterator]() {
        let current = this.start;
        const end = this.end + 1;
        return {
            async next() {
                if (current < end) {
                    return { value: current++, done: false };
                } else {
                    return { done: true };
                }
            }
        };
    }
};

(async () => {
    for await (const num1 of practica) {
        console.log(num1);
    }
})();

(async () => {
    const numbers = [...counter];
    console.log(numbers)
})();



console.log('-----------------------------------------')

// ahora estudiaremos los symbole.toPrimitive 
/* podemos definir funciones que se ejecutarán 
cuando se esté realizando una conversión implícita al tipo de dato
 en cuestión. */

 const theAnswer = {
    [Symbol.toPrimitive](hint) {
       if (hint === "string") {
         return "El sentido de la vida, el universo y todo lo demás.";
       }
       else if (hint === "number") {
         return 42;
       }
       else {
         return null;
       }
    }
  }
  

  theAnswer           // Devuelve { [Symbol.toPrimitive]: f }

String(theAnswer)   // Devuelve "El sentido de la vida, el universo y todo lo demás."
Number(theAnswer)   // Devuelve 42

console.log(theAnswer);
console.log(String(theAnswer));
console.log(Number(theAnswer));




console.log('-----------------------------------------')


// ahora haremos en una forma asincronica lamada callback 

const callback = {
  start: 1,
  end: 10,
  [Symbol.asyncIterator]() {
      let current = this.start;
      const end = this.end + 1;
      return {
          async next() {
              if (current < end) {
                  return Promise.resolve({ value: current++, done: false });
              } else {
                  return Promise.resolve({ done: true });
              }
          }
      };
  }
};

const asyncCallback = async () => { 
  console.log('--- Inicio de asyncCallback ---');
  for await (const num of callback) {
      console.log(num + " hello this is callbacks");
  }
  console.log('--- Fin de asyncCallback ---');
};

(async () => {
  await asyncCallback();
  console.log('-----------------------------------------');
})();



