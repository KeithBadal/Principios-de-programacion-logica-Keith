/* Imprimir en consola si existen mas de 20 productos en stock
  Que imprima el numero de productos que tengo
  */
const NumerodeProductos = 20
const mensaje = "¿Hay mas de 20 productos en stock? "

/*Tambien se puede poner de esta manera: 
let respuesta = NumerodeProductos > 20 ? 
"Sí, hay más de 20 productos en stock." : 
"No, no hay más de 20 productos en stock."
*/

let respuesta = " "

if(NumerodeProductos >20){
  respuesta =" Si "
} else {
   respuesta =" No "
    
}
console.log(mensaje + respuesta) 

