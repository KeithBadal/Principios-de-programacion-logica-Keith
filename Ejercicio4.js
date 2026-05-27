/* Imprimir en consola:
 - Si el numero de productos es 0, el mensaje: "Alerta te quedaste sin productos"
 - Si el numero de productos es menor a 5, el mensaje: "Alerta te quedan pocos productos"
 - Si el numero de productos es mayor o igual a 5, el mensaje: "Tienes suficientes productos"
*/
let NumerodeProductos = 0;
let mensaje = " "

/* OPCION 1:
let mensaje = numeroDeProductos === 0 ? "Alerta te quedaste sin productos" 
                : numeroDeProductos < 5 ? "Alerta te quedan pocos productos"
               : "Tienes suficientes productos" */

               //OPCION 2:
if(NumerodeProductos ===0) {
    mensaje = "ALERTA! Te quedaste sin productos"
}  else if 
    (NumerodeProductos <5 ) {
    mensaje = "ALERTA! Te quedan pocos productos"
}  else if  (NumerodeProductos >= 5) {
        mensaje = "Tienes suficientes productos"
}
 console.log(mensaje)
 