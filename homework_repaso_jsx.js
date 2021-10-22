// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí


let array=[];
for(key in objeto){array.push([key,objeto[key]])}
return array;
  }


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
let obj={} //creo un objeto vacio
for(i=0;i<string.length;i++){
        var letra=string[i];
        if(obj[letra]===undefined)obj[letra]=1;//crea una propiedad letra dentro del objeto obj. se la denomina [letra] y el valor es obj[letra]
        else obj[letra]+=1;
}
return obj;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var mayusculas="ABCDEFGHYJKLMNÑOPQRSTUVWXYZ";
salida='';
aux='';
   for(i=0; i<s.length; i++){
      if (mayusculas.indexOf(s.charAt(i),0)!=-1){
         salida=salida+ s.charAt(i);
      }
      else aux=aux+s.charAt(i);
   }
   return salida+aux;
  
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  //comienzo hasta encontar un espacio. corto el string lo invierto y lo devuelvo. avanzo uno y asi hasta el final
   
    salida='';
  
  
    var j=0;
   for(i=0;i<str.length;i++){
     
     if(str[i]===' '){inversa=str.slice(j,i).split('').reverse().join('');
                     if(j==0) salida=salida+inversa+' '
                      else salida=salida+inversa;
                      j=i;}
     if(i===str.length-1){inversa=str.slice(j,i+1).split('').reverse().join('');
                      salida=salida+inversa;
                          salida=salida.slice(0,salida.length-1);
     }
  } 
    
    
    return salida;
} 
 



function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  

    var numeroCadena=numero.toString();
    //console.log(numeroCadena);
    const aux=numeroCadena.length%2;
        if (numeroCadena.length<=1)return 'No es capicua'
    for(i=0;i<(numeroCadena.length +aux);i++){
        if(numeroCadena.charAt(i)!==numeroCadena.charAt(numeroCadena.length-1-i)) return 'No es capicua'}
          return 'Es capicua'
    
    
}




function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var salida=cadena;
  
  for(i=0;i<cadena.length;i++){
    if(cadena.charAt(i)=='a'||cadena.charAt(i)=='b'||cadena.charAt(i)=='c') salida=salida.replace(cadena.charAt(i),'') }

  
  return salida;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  for(i=0;i<arr.length;i++){
    
    var aux=arr[i];
   var j=i-1;
   while((j>=0) && (aux.length<arr[j].length)) {arr[j+1]=arr[j];
                                               j--;
                                              }
 
 arr[j+1]=aux;
   }
 return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var array=[];
  for(var i=0;i<arreglo1.length;i++){
    for(var j=0;j<arreglo2.length;j++){
      if(arreglo1[i]===arreglo2[j]) array.push(arreglo1[i]);
    }
    
  }
  return array;

}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

