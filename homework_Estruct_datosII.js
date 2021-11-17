'use strict'
// Implementa la clase LinkedList
// tiene metodos `add`, `remove`, y `search`
// add: Agrega un nuevo nodo en el final de la lista
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null
// remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía)
// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1
// search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.

function LinkedList() {
this.length=0;
this.head=null;
}


LinkedList.prototype.add=function(arg){
  var nuevo=new (Node)
  nuevo.value=arg
  nuevo.next=null

  
  if(this.head===null) this.head=nuevo;
  else {var aux=this.head
        while(aux.next!==null) aux=aux.next;
            aux.next=nuevo
          nuevo=null}

}
LinkedList.prototype.remove=function(){
  
  if(this.head===null) return this.head=null
  var aux=this.head;
  var x=0
  if (aux.next===null){x=aux.value
                        this.length--;
                      this.head=null
                    return x}
  var aux1=aux
        while(aux.next!==null){ aux1=aux;
                             aux=aux.next;}
     
         x=aux.value
         aux1.next=null
      
        this.length--;
  return x
}



LinkedList.prototype.search=function(arg){

//if(this.length===0)return null
var aux=this.head;

while(aux){
if(arg===aux.value) return aux.value

if(typeof(arg)==='función'){if(arg) return arg}
                            else if(valor.real===arg)return arg;
aux=aux.next;
}

}



/*
/*LinkedList.prototype.search =  función (datos) {
                                          ​ if  (this.long  ===  0)  return  null;
var  actual  =  this.head;
​ while  (actual) {
​ ​                  if  (typeof(datos) ===  'función') { ​  if (datos (valor.real))  return valor.real} 
                                                           else if  (valor.real  ===  datos)  return  datos; 
 ​   actual=actual.siguiente;  // para  seguir  el  bucle  while  hasta  que actual.siguiente no  exista
  ​ }
​ ​ return  null;  // importante  este  null,  porque  si  hace  todo  lo  anterior  y  no  lo  encuentra,  tiene  que  retornar  null}


}
*/

function Node(valor){
  this.value=valor;
  this.next=null;
}

// Hash Table( ver información en: https://es.wikipedia.org/wiki/Tabla_hash)
// Una Hash table contiene un arreglo de "contenedores" o buckets donde puede guardar información.
// Para este ejercicio, generar 35 buckets para la Hash Table, y realizar los métodos, get, hasKey
// Para almacenar un valor asociado a una key (string):
//    - Se pasa ese valor a la función hash(Pista: usar la función charCodeAt), que determina la posición en que debe ir en el arreglo. 
//    - Luego el elemento se inserta(llamando al método set) en la posición(índice) devuelta. 
// Para buscar el valor por su key:
//    - Sólo habrá que pasarle a la función hash la clave del elemento a buscar y ésta determinará la posición 
//      en que se encuentra.
//    - Usar el número obtenido, para buscar(llamando al método get) el contenedor o bucket donde está el valor.
//    - Retornar dicho valor.

function HashTable() {
  /*
  function  HashTable ()  {
    ​ this.numBuckets  =  35;
  ​ this.bucket  =  []; } 
  HashTable.prototype.hash  =  function (value) {let  aux  =  0; ​ for  (let  i  =  0;  i  <  value.length;  i ++)  { 
    ​ ​   aux  + =  value.charCodeAt (i)
   ​ 
   ​ ​ return  aux  %  this.numBuckets; };
   
   HashTable.prototype.set  =  function (key, value){if  (typeof  key  ! ==  "string")  throw  new  TypeError ("Keys deben  ser  cadenas );
  ​ ​
   ​ let  index  =  this.hash (ky);
    ​ 
  
   ​ if  (! this.bucket [index]) {  // se  pregunta  si  existe  algo  en  ese  casilero
   ​ ​   this.bucket [index]  =  {};  //  si  el  casillero  se  encuentra  vacio,  creo  un  objeto  o  un  array,  esto  sirve para
   ​ ​ }                           // manejar  las  colisiones.  entonces  ahora  en  esa  posicion  de index  existe  un  casillero  que  es  un objeto
   ​ ​  
    this.bucket [index] [key]  =  value;  //  por  lo  tanto  ahora  si  puedo  ingresar  valores  sin  que  colisionen.  le  pasamos  su  [clave]  como};                                     //  notación de corchetes  y  le  asignamos  el  valor  que  queremos  guardar. 
    HashTable.prototype.get  =  function(key) {
   ​ ​ let  index  =  this.hah (key);
   ​ regreso this.bucket [índice] [clave]; }; 
   HashTable.prototype.hasKey  =  functio (key) {
   ​ ​ let  aux  =  this.gt (key);
  
   ​ if (aux)  return  true;
   ​ else  return false

  */
}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable
};
