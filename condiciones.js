
// condicion if, else
console.log('condicion if, else sencilla');
let nota = 7;
console.log("He realizado mi examen. Mi resultado es el siguiente:");

if (nota < 5) {
  // Acción A: nota es menor que 5
  calificacion = "suspendido";
} else {
  // Acción B: Cualquier otro caso diferente a A (nota es mayor o igual que 5)
  calificacion = "aprobado";
}

console.log("Estoy", calificacion);


// operador tenario, referente a una condicion! quitando el if y el else.
console.log('operador tenario sencillo');
let nota1 = 7;
console.log("He realizado mi examen. Mi resultado es el siguiente:");

// Operador ternario: (condición ? verdadero : falso)
let calificacion1 = nota1 < 5 ? "suspendido" : "aprobado";

console.log("Estoy", calificacion1);



//hoy lo veremos de una forma anidada el if y else primero.
console.log('if else anidado');
let notaA = 7;
console.log("He realizado mi examen.");

if (notaA < 5) {
  calificacionA = "Insuficiente";
} else if (notaA < 6) {
  calificaciónA = "Suficiente";
} else if (notaA < 8) {
  calificacionA = "Bien";
} else if (notaA <= 9) {
  calificacionA = "Notable";
} else {
  calificacionA = "Sobresaliente";
}

console.log("He obtenido un", calificacionA);



//hoy lo veremos con el operador tenario con anidacion.
console.log('operador tenario anidado');
let notaA1 = 7;
console.log("He realizado mi examen.");

let calificacionA1 =
  notaA1 < 5 ? "Insuficiente" :
  notaA1 < 6 ? "Suficiente" :
  notaA1 < 8 ? "Bien" :
  notaA1 <= 9 ? "Notable" :
  "Sobresaliente";

console.log("He obtenido un", calificacionA1);


//Condicion switch, en esta parte solo se puede ocupar enteros.
console.log('uso de switch');
let notaS = 7;
console.log("He realizado mi examen. Mi resultado es el siguiente:");

switch (notaS) {
  case 10:
    calificacionS = "Sobresaliente";
    break;
  case 9:
  case 8:
    calificacionS = "Notable";
    break;
  case 7:
  case 6:
    calificacionS = "Bien";
    break;
  case 5:
    calificacionS = "Suficiente";
    break;
  case 4:
  case 3:
  case 2:
  case 1:
  case 0:
    calificacionS = "Insuficiente";
    break;
  default:
    // Cualquier otro caso
    calificacionS = "Nota errónea";
    break;
}

console.log("He obtenido un", calificacionS); 



