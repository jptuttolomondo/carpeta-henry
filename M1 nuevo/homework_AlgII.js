'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if (array.length <= 1) {
    return array;
  }
  var posicionPivot=Math.trunc(array.length/2)
  var pivot = array[posicionPivot];
  var izquierda = []; 
  var derecha = [];
 for (var i = 1; i < array.length; i++) {
 if(array[i] < pivot) izquierda.push(array[i])
else derecha.push(array[i]);
 }
return quickSort(izquierda).concat(pivot, quickSort(derecha));

};

//var unsorted = [23, 45, 16, 37, 3, 99, 22];


function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:  
    
    if (array.length <= 1) return array;  // cuando el array es de un solo elemmnto
    const mitad= array.length / 2;
    const izq = array.splice(0, mitad);//izq tendra mitad del array. array queda cortado
    const der = array;//der se queda con la mitad derecha del array
    return fusion(mergeSort(izq), mergeSort(der)); //llamo a fusion de los arrrays y avanzo en la division
    }

 function fusion(izq, der) {
  let ordenado= []; // matriz ordenada

  while (izq.length && der.length) { //mientras haya elementos en los dos arrays
    // inserta el menor elemento
    if (izq[0] < der[0]) {
      ordenado.push(izq.shift());//lo saaca de izq y lo pone en ordenado
    } else {
      ordenado.push(der.shift());//lo saca ded derecha y lo poone en ordenado
    }
  }//el numero de componentes de cada array puede ser diferente . se los combina para poner el elemento sobrante
  return [...ordenado, ...izq, ...der];//operador spread incorpora todos los elementos de caada array combinando los tres
}
var unsorted = [23, 45, 16, 37, 3, 99, 22];
quickSort(unsorted)

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
