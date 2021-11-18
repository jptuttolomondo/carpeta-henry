'use strict'
// resolve estos ejercicios usando recursión
// hbjhhjk
// lkñoi
// ljñliñ

// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests



function BinarySearchTree(dato) {

    this.value=dato;
    this.left=null;
    this.right=null;
    
}



BinarySearchTree.prototype.insert=function (dato){
  var nuevoArbol= new BinarySearchTree (dato);
  if(dato<this.value){
                    if(this.left===null)this.left=nuevoArbol
                    else this.left.insert(dato)
                     }
  else { if(this.right===null)this.right=nuevoArbol
                  else this.right.insert(dato)
  }

}
BinarySearchTree.prototype.contains=function(dato){
  
  if(this.value === dato){
		return true;}
else{
	
	      if(dato <= this.value && this.left !== null){
	      	return this.left.contains(dato);
	        }else if(dato > this.value && this.right !== null){
		    return this.right.contains(dato)
	  }
 return false }
  
}
BinarySearchTree.prototype.breadthFirstForEach = function (cb, array = [] ){

  cb(this.value);
this.left && array.push(this.left);
this.right && array.push(this.right);
array.length && array.shift().breadthFirstForEach(cb,array);
}
BinarySearchTree.prototype.size=function(){
if(!this.left&&!this.right)return 1
if(!this.left&&this.right)return 1+ this.right.size()
if(this.left&&!this.right)return 1+this.left.size()
if(this.left&&this.right)return 1 +this.left.size()+ this.right.size()

}
BinarySearchTree.prototype.depthFirstForEach=function(cb,order){
if(order==="in-order"||order===undefined){

  this.left&&this.left.depthFirstForEach(cb,order)  
   cb(this.value);
   this.right&&this.right.depthFirstForEach(cb,order)
}

if(order==="pre-order"){  
  cb(this.value);
  this.left&&this.left.depthFirstForEach(cb,order)
  this.right&&this.right.depthFirstForEach(cb,order)
}
if(order==="post-order"){  
  
  this.left&&this.left.depthFirstForEach(cb,order)
  this.right&&this.right.depthFirstForEach(cb,order)
  cb(this.value);
}
}





// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree
};
