let i = 0;  // Inicialización de la variable contador

// Condición: Mientras la variable contador sea menor de 5
while (i < 5) {
  console.log("Valor de i:", i);

  i = i + 1; // Incrementamos el valor de i
}


// en este solo da el string hola a todos, este es referenciado a do while
let q = 5;

do {
  console.log("Hola a todos");
  q = q + 1;
} while (q < 5);

console.log("Bucle finalizado");


//bucle for 

// for (inicialización; condición; incremento)
for (let i = 0; i < 5; i++) {
    console.log("Valor de i:", i);
  }
  


/* // esto seria con diminucion 

for (let i = 5; i > 0; i--) {
    console.log("Valor de i:", i);
  }
 */  


// esto seri con incremento multiple


for (i = 0, j = 5; i < 5; i++, j--) {
    console.log("Valor de i y j:", i, j);
  }

// saltar una interaccion
  for (let i = 0; i < 11; i++) {
    if (i == 5) {
      continue;
    }
  
    console.log("Valor de i:", i);
  }
  
 // sin usar continuo y hace la misma funcion
  for (let i = 0; i < 11; i++) {
    if (i != 5) {
      console.log("Valor de i:", i);
    }
  }

 // otra forma de hacer un bucle for pero sin el if, y seria lo mismo 
  for (let i = 0; i < 5; i++) {
    console.log("Valor de i:", i);
  }
  
  for (let i = 6; i < 11; i++) {
    console.log("Valor de i:", i);
  }
  
  
/* este es con el break 
  for (let i = 0; i < 11; i++) {
    if (i == 5) {
      break;
    }
  
    console.log("Valor de i:", i);
  }
  
 */


  for(let i = 1; i < 11 ; i++){
    console.log('2 x', i, '=', 2 * i);
  }

// a travez de una funcion...
  // Declaración de la función tablaDelUno()
function tablaDelUno() {
  for (let i = 0; i <= 10; i++) console.log("1 x", i, "=", 1 * i);
}

// Bucle que ejecuta 3 veces la función tablaDelUno()
for (intento = 0; intento < 3; intento++) tablaDelUno();
