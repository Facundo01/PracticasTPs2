// No cambies los nombres de las funciones.
let vector = ["pan","quesillo"];
let vec = [2,4,5]


function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0]
}
devolverPrimerElemento(vector)

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  let ultimo = array.length;
  ultimo--;
  return array[ultimo]
}
devolverPrimerElemento(vector)

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length
}
obtenerLargoDelArray(vector)

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  let copia = [];
  for (let i = 0; i < array.length; i++) {
    copia[i] = array[i];
  }
  for (let i = 0; i < array.length; i++) {
    copia[i] = copia[i] + 1;
  }
  return copia
}
incrementarPorUno(vec)

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
 array.push(elemento);
 return array
}
let elem = "picadillo";
agregarItemAlFinalDelArray(vector,elem)

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento)
  return array
}
elem = "manteca";
agregarItemAlComienzoDelArray(vector,elem)

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  //return palabras.join(' ')
 return palabras.join(' ')
}                       
dePalabrasAFrase(vector)

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  let b = 0;
  for (let i = 0; i < array.length; i++) {
    if (elemento === array[i]) {
      b = 1;
    }
  }
  if (b === 1) {
    return true
  } else {
    return false
  }
}
let busco = "mermelada";
arrayContiene(vector, busco)

function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  //var suma = numeros.reduce((a,b)=>a+b,0);
  //return suma;
  let suma = 0;
 for (let i = 0; i < numeros.length; i++) {
    suma = suma + numeros[i]
 }
 return suma
}

let nros = [4,6,3,6,23];
agregarNumeros(nros)

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let suma = 0;
  for (let i = 0; i < resultadosTest.length; i++) {
    suma = suma + resultadosTest[i]    
  } 
  let promedio = suma/(resultadosTest.length)
  return promedio
}
promedioResultadosTest(nros);


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  let may = numeros[0];
  for (let a = 1; a < numeros.length; a++) {
    if (may < numeros[a]) {
      may = numeros[a];
    }
  }
  return may
}
numeroMasGrande(nros);

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if (arguments.length === 0) {
    return 0;
  }
  else if (arguments.length === 1) {
    return arguments[0];
  }
  else {
    let mult = 1;
    for (let i = 0; i < arguments.length; i++) {
      mult *= arguments[i];
    }
    return mult
  }
}
multiplicarArgumentos(nros);

function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  let c = 0;
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i]>18) {
      c++;
    }
  }
  return c
}
let mayores = [12,656,24,889,2];
cuentoElementos(mayores);

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if (1 === numeroDeDia || 7 === numeroDeDia) {
    return "Es fin de semana";
  }  
  else{
    return "Es dia Laboral";
  }
} 
let dia=1;
diaDeLaSemana(dia);

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  let primero = 0;
  while (n > 0) {
    primero = n % 10;
    n = Math.trunc(n / 10);
  }
  if (primero === 9) {
    return true;
  } else {
    return false;
  }
}
empiezaConNueve(92);

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  let comparar = arreglo[0];
  let b=1;
  for (let i = 1; i < arreglo.length; i++) {
    if (comparar === arreglo[i]) {
      b++;
    }
  }  
  if (b===arreglo.length) {
    return true
  }
  else{
    return false
  }
} 
todosIguales(nros);


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  let nuevo = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
      nuevo.push(array[i]);
    }
  }
  if (nuevo.length < 3) {
    return "No se encontraron los meses pedidos";
  } else {
    return nuevo;
  }
}

let x=["Marzo", "Agosto", "Enero"];
mesesDelAño(x);


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let nuevo = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]>100) {
      nuevo.push(array[i]);
    }
  }  
  return nuevo
}

mayorACien(nros);

function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  let nuevo_valor = [];
  let limite = 0;
  while (limite < 10) {
    numero +=2;
    nuevo_valor[limite]=numero;
    limite++;
    if (numero === limite) {
      return "Se interrumpió la ejecución";
      break;
    }
  }
  return nuevo_valor;
}
breakStatement(2);


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  let nuevo_valor = [];
  for (let i = 0; i < 10; i++) {
    if (i === 5) {
      continue;
    }
    numero += 2;
    nuevo_valor.push(numero);
  }
  return nuevo_valor;
}
continueStatement(2);

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
