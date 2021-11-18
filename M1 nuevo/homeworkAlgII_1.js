'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
var pivot = array[Math.floor(array.length / 2)];
  var izquierda = []; 
  var derecha = [];
  var igual= [];
  if (array.length <= 1) {
    return array;
  }
  
  
 for (var i =0 ; i < array.length; i++) {
 if(array[i] < pivot) izquierda.push(array[i])
else if(array[i] > pivot) derecha.push(array[i])
      else igual.push(array[i])
 }
return quickSort(izquierda).concat(igual).concat(quickSort(derecha));

};

//var unsorted = [23, 45, 16, 37, 3, 99, 22];


function fusion(izq, der) {
  let ordenado= []; // matriz ordenada
var contIzq=0
var contDer=0

  while (contIzq <izq.length && contDer <der.length) { //mientras haya elementos en los dos arrays
    // inserta el menor elemento
    if (izq[contIzq] < der[contDer]) {
      ordenado.push(izq[contIzq]);
      contIzq++}
       else {ordenado.push(der[contDer]);
             contDer++ }//el numero de componentes de cada array puede ser diferente . se los combina para poner el elemento sobrante
  //operador spread incorpora todos los elementos de caada array combinando los tres
} 
return ordenado.concat(izq.slice(contIzq)).concat(der.slice(contDer))
 }

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:  
    
    if (array.length === 1) return array;  // cuando el array es de un solo elemmnto
    var mitad= Math.floor(array.length / 2);
    const izq = array.slice(0, mitad);//izq tendra mitad del array. array queda cortado
    const der = array.slice(mitad);//der se queda con la mitad derecha del array
    return fusion(mergeSort(izq), mergeSort(der)); //llamo a fusion de los arrrays y avanzo en la division
    }

//var unsorted = [23, 45, 16, 37, 3, 99, 22];
//quickSort(unsorted)

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
