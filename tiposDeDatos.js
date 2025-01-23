//una de las formas para saber los tipos de datos es con typeof

const text = "Hola ManzDev!";
typeof text;       // Devuelve "String"
console.log(text, typeof text);

const number = 42;
typeof number;     // Devuelve "Number"
console.log(number, typeof number);

const boolean = true;
typeof boolean;    // Devuelve "Boolean"
console.log(boolean, typeof boolean);

let notDefined;
typeof notDefined; // Devuelve undefined
console.log(notDefined, typeof notDefined);

const numbers = [1, 2, 3, 4];
typeof numbers;    // Devuelve "object"
console.log(numbers, typeof numbers);

const user = { name: "ManzDev" };
typeof user;       // Devuelve "object"
console.log(user, typeof user);

console.log("-------------------------------------------------");
// ahora otro tipo de dato que se podria utilizar es el siguiente constructor.name
//con el constructor.name se puede saber el tipo de constructor que se utiliza.
const text1 = "Hola ManzDev!";
text1.constructor.name;       // String
console.log(text1, text1.constructor.name);

const number1 = 42;
number1.constructor.name;     // Number
console.log(number1, number1.constructor.name);

const boolean1 = true;
boolean1.constructor.name;    // Boolean
console.log(boolean1, boolean1.constructor.name);

/* let notDefined1;
notDefined1.constructor.name; // ERROR
// constructor.name sólo funciona en variables definidas
// console.log(notDefined1, notDefined1.constructor.name);
 */
const numbers1 = [1, 2, 3, 4];
numbers1.constructor.name;    // Array
console.log(numbers1, numbers1.constructor.name);

const user1 = { name: "ManzDev" };
user1.constructor.name;       // Object
console.log(user1, user1.constructor.name);


console.log("-------------------------------------------------");

/* 
    ahora veremos cadena de prototipos, esto es, cada elemento hereda de otros elementos
    esto se maneja de esta forma a travez de getPrototypeChain junto con __proto__
 */

    // getPrototypeChain se necesita esta parte del codigo antes de poder mandarlo a llamar 
    const getPrototypeChain = (object) => {
        const chain = [];
        let proto = object;
        do {
          proto = Object.getPrototypeOf(proto);
          chain.push(proto?.constructor?.name ?? null);
        } while (proto);
        return chain;
      }
      
// getPrototypeChain

console.log(getPrototypeChain("Hola"));        // ['String', 'Object', null]
console.log(getPrototypeChain(42));            // ['Number', 'Object', null]
console.log(getPrototypeChain([1, 2, 3]));     // ['Array', 'Object', null]
console.log(getPrototypeChain(/.+/));          // ['RegExp', 'Object', null]


/* 
1️⃣ El primer prototipo es el tipo de dato de la variable. Por ejemplo, String en el primer ejemplo.
2️⃣ Como String, puede usar todas las operaciones para  (lo veremos más adelante).
3️⃣ El segundo prototipo es un Object, por lo que también puede usar las operaciones de .
4️⃣ Por último, null es el terminador de la cadena de prototipos. Simplemente hemos llegado al final. */


console.log("-------------------------------------------------");


// ahora utilizaremos un operador instanceof para saber si una variable hereda de un tipo de dato.
/* 
Ahora que conocemos el concepto de cadena de prototipos
 también podemos utilizar instanceof para saber si una variable hereda de uno de los tipos
que hemos visto en el apartado anterior.
 */
const numbers2 = [1, 2, 3];
getPrototypeChain(numbers);   // ['Array', 'Object', null]

numbers2 instanceof Array      // true
console.log(numbers2 instanceof Array);
numbers2 instanceof Object     // true
console.log(numbers2 instanceof Object);
numbers2 instanceof Number     // false
console.log(numbers2 instanceof Number);
numbers2 instanceof String     // false
console.log(numbers2 instanceof String);

/* 
Pero al igual que con vimos con typeof, hay una desventaja.
 Mientras que typeof sólo sirve para tipos de datos primitivos, 
 instanceof sólo sirve para tipos de datos no primitivos.

 */


