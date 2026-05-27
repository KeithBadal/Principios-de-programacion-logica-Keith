/* Como entrada de datos tendremos:
    -NOMBRE DEL PRODUCTO     -PRECIO UNITARIO        -CANTIDAD EN STOCK
*Imprimir en consola:
    -El mensaje: "SISTEMA BASICO DE INVENTARIO"
    -PRODUCTO REGISTRADO [nombre del producto]
    -PRECIO UNITARIO $[precio del producto]
    -UNIDADES DISPONIBLES [cantidad en stock]
    -VALOR TOTAL DEL INVENTARIO [precio unitario * cantidad en stock] */

let producto1 = "Chocolate CARLOS V";
let precio1 = "15";
let stock1 = "100"; 

let producto2 = "Agua embotellada 1L";
let precio2 = "20";
let stock2 = "45";

let producto3 = "Vaso Termico Animado";
let precio3 = "350";
let stock3 = "20";

console.log("====================================================================")
console.log("||            *SISTEMA* -- *BASICO* -- *DE* -- *INVENTARIO*       ||")
console.log("====================================================================")

console.log("          ____________________________________________")
console.log("          |                                          |")
console.log("          | Producto registrado: " + producto1," |")
console.log("          | Precio unitario: $" + precio1,"                    |")
console.log("          | Unidades disponibles: " + stock1,"               |")
console.log("          | Valor total del inventario: $" +(precio1*stock1),"       |")
console.log("          |__________________________________________|")

console.log("          |                                          |")
console.log("          | Producto registrado: " + producto2,"|")
console.log("          | Precio unitario: $" + precio2,"                    |")
console.log("          | Unidades disponibles: " + stock2,"                |")
console.log("          | Valor total del inventario: $" +(precio2*stock2),"        |")
console.log("          |_________________________________________ |")

console.log("          |                                          |")
console.log("          | Producto registrado:" + producto3,"|")
console.log("          | Precio unitario: $" + precio3,"                   |")
console.log("          | Unidades disponibles: " + stock3,"                |")
console.log("          | Valor total del inventario: $" +(precio3*stock3),"       |")
console.log("          |__________________________________________|")

