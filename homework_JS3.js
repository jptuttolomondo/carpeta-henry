// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  aux=array.length
  return array[aux-1]
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for (var i=0;i<array.length;i++){
    array[i]= array[i]+1
  }
  return array
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push (elemento)
  return array
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento)
  return array
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  /*var aux ='' ;
  for (var i=0;i<palabras.length;i++){
    if (i===(palabras.length-1) )aux=aux+ palabras[i]
    else aux= aux+ palabras[i]+' '

  }
  //anda bien
  return aux
  */
return palabras.join(' ')
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  var flag=false
  var i=0
 // for(var i=0;i<=array.length;i++){
  //  if(array[i]===elemento) return true
 // }
 // return false
  do {
    if(array[i]===elemento) flag=true
    i=i+1
  } while (flag===false && i<= array.length);
  return flag
  
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var cuenta=0;
  for(var i=0;i<= numeros.length-1;i++){
      cuenta= cuenta +numeros[i]
  }
  return cuenta
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var cuenta=0;
  for(var i=0;i<= resultadosTest.length-1;i++){
      cuenta= cuenta +resultadosTest[i]
  }
  return cuenta/(resultadosTest.length)
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var masgrande= numeros[0];

  for(var i=0;i<numeros.length;i++){
if(numeros[i]>masgrande)masgrande=numeros[i]
  }
  return masgrande
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if(arguments.length<1)return 0
 
  aux=1;
  for(var i=0;i<arguments.length;i++){
aux=aux*arguments[i]
  }
return aux

}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
var contador=0;
for(var i=0;i<arreglo.length;i++){
  if(arreglo[i]>18) contador++
}
return contador
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
var mensaje;

    if(numeroDeDia===1||numeroDeDia===7) mensaje='Es fin de semana'
    else mensaje= 'Es dia Laboral'

return mensaje
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  let aux=n.toString();
  var flag=false;
  if(aux.charAt(0)=='9') flag=true
  return flag
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  flag= true
  var i=0;
 while (flag===true&& i<arreglo.length) {
   if(arreglo[0]===arreglo[i]) i++
   else flag=false
 }
  return flag
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  
var salida = [];
var flag1=false;
var flag2=false;
var flag3=false;
  for(let i=0;i<array.length;i++){
        
    if(array[i]==='Enero'||array[i]==='Marzo'||array[i]==='Noviembre') {salida.push(array[i]);}
   /* switch (array[i]) {
      case 'Enero': salida.push(array[i]);
      case 'Marzo': salida.push(array[i]);
      case 'Noviembre': salida.push(array[i]);
      default: continue;
       }
 */
  }
  if(salida.length<3) return 'No se encontraron los meses pedidos'
    
    else return salida
  
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var arrayMayor =[];
  for(let i=0;i<array.length;i++){
    if(array[i]>100){arrayMayor.push(array[i])}
  }
  return arrayMayor
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var sale=[];
  var aux=numero;
  var i;
  for(i=1;i<=10;i++){
          aux=aux+2;
      if(i===aux)break;
      else{sale.push(aux)
            }

      }
          
  
if (i<10)return 'Se interrumpió la ejecución'
 return sale
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var sale=[];
  var aux=numero;
  var i;
  for(i=1;i<=10;i++){
          if(i===5) continue;
          else{aux=aux+2;
          sale.push(aux);
            }

      }
          
 return sale


}


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
