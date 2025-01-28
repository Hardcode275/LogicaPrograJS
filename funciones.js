/* 
    1️⃣
function nombre(p1, p2...) { }
Mediante declaración (la más usada por principiantes)
2️⃣
let nombre = function(p1, p2...) { }
Mediante expresión (la más habitual en programadores con experiencia)
3️⃣
new Function(p1, p2..., code);
Mediante un constructor de objeto (no recomendada)
*/

function saludar() {
    return "Hola";
  }
  
  console.log(saludar());      // 'Hola'
  typeof saludar(); // 'function'

  
// una funcion anonima es una funcion que no tiene nombre.

const saludar1 = function() { 
    return "Hola";
  }

console.log(saludar1());      // 'Hola'

(function () {
    console.log("Hola!!");
  })();

//
(function (name) {
    console.log(`¡Hola, ${name}!`);
})("Manz");
  


//

const value = (function (name) {
    return `¡Hola, ${name}!`;
  })("Manz");
  
 console.log(value);        // '¡Hola, Manz!`
  typeof value; // 'string'
  

// clausuras en javascript es una funcion que se declara dentro de otra funcion y que tiene acceso a las variables de la funcion padre.

  

const incr = (function () {
    let num = 0;
    return function () {
      num++;
      return num;
    };
  })();
  
console.log(incr()); // 1
console.log(incr()); // 2
console.log(incr()); // 3

/* 
  La «magia» de las clausuras es que en el interior de la función autoejecutable estamos creando una variable num que se guardará en el ámbito de dicha función autoejecutable, por lo tanto seguirá existiendo, inicialmente con el valor declarado: 0.

Por lo tanto, en la variable incr guardamos una función que además conoce el valor de una variable num, que sólo existe dentro de incr.

Cada vez que llamemos a incr, incrementará el valor de num en 1 y lo devolverá. 

*/


typeof incr; // 'function'
incr(); // 1
incr(); // 2
incr(); // 3

 // ahora aprenderemos que es una funcion callback en javascript.

 /** 
  * A grandes rasgos, un callback (llamada hacia atrás) es pasar una función por parámetro a otra función, 
  * de modo que esta última función puede ejecutar la función pasada por parámetro de forma genérica desde su propio código, y 
  * nosotros podemos definirlas desde fuera de dicha función.
  * 
  */


 /*
  por lo que entiendo en esta parte de codigo los callbacks funcionan para poder tomar una funcion
  ya cerrada y poder ejecutarla de afuera sin necesidad de un console.log o un return.
  esta ya conoce cual funcion es con solo darle el parametro correcto
 */

 const action = function () {
    console.log("Acción ejecutada.");
  };

  const action2 = function () {
    console.log("Acción ejecutada 2.");
  }
  
  const mainFunction = function (callback) {
    callback();
  };
  
  mainFunction(action2);
  
/* 
  las funciones de orden superior son funciones que reciben como parametro otra funcion.
  son conocidos tambien como HOF o Higher Order Functions.
*/


const action3 = function () {
    console.log("Acción ejecutada.");
  };
  
  const error = function () {
    console.error("Ha ocurrido un error");
  };
  
  const doTask = function (callback, callbackError) {
    const isError = Math.random() < 0.5;
  
    if (!isError) callback();
    else callbackError();
  };
  
  doTask(action3, error);
  

  // esta seria otra forma de hacerlo.

  /* 
   en el caso de que las funciones callbacks sean muy cortas, muchas veces utilizamos directamente la funcion anonima,
   sin necesidad de guardarla en una variable previamente.
  */

   // no se utiliza mucho esta parte de escriturade codigo.
  const doTask1 = function (callback, callbackError) {
    const isError = Math.random() < 0.5;
  
    if (!isError) callback();
    else callbackError();
  };
  
  doTask1(function () {
      console.log("Acción ejecutada.");
    },
    function () {
      console.error("Ha ocurrido un error");
    }
  );
  