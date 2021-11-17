'use strict'

const { isBufferTask } = require("simple-git/src/lib/tasks/task")

// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
var salida=[]
salida.push(1)
for (let i =2 ;i<=num ;i++){ 
      if(num%i===0){//veo si i es primo
                    let band=false
                    var j=2
                    while(band===false&&j<i){if(i%j===0)band=true//no es primo
                                        else j++}
                    if(band===false){ //i es primo
                        var aux=num
                        while(aux%i===0){salida.push(i)
                                          aux=aux/i}
                    }
                    }    
 }

   return salida
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

 for(var i=0; i<array.length; i++){
   for(var j=0; j<( array.length-i-1 ); j++){
     if(array[j]>array[j+1]){
       var aux=array[j]
       array[j]=array[j+1]
       array[j+1]=aux}
   }
 }
return array
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
for ( var i = 1 ; i < array.length ; i ++ ) {   
    let actual = array [ i ]
  for(var j=i-1 ; (j>= 0 && array[ j ]> actual) ; j --) { 
                                      array[j+1]= array[j]}
    array[j+1]= actual
  }
return array
}




function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
let n= array.length;
  for(let i=0; i<n; i++) {
        let min= i; //minimo del array
        for(let j=i+1; j<n; j++){
            if(array[j]<array[min]) min=j; 
             }
         if (min!= i) {//swap
            let aux = array[i]; 
             array[i] = array[min];
             array[min] = aux;      
             }
    }
return array;
}

var array=[5, 1, 4, 2, 8, 18, 25, 3, 4]
insertionSort(array)


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
