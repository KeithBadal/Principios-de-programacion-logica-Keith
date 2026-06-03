/* Como entrada de datos tendremos:
    -NOMBRE DEL PRODUCTO     -PRECIO UNITARIO        -CANTIDAD EN STOCK
*Imprimir en consola:
    -El mensaje: "SISTEMA BASICO DE INVENTARIO"
    -PRODUCTO REGISTRADO [nombre del producto]
    -PRECIO UNITARIO $[precio del producto]
    -UNIDADES DISPONIBLES [cantidad en stock]
    -VALOR TOTAL DEL INVENTARIO [precio unitario * cantidad en stock] */

     //arreglo,vector o matrices, llave y valor 
    const products = [
        {
            name: "Café",
            price: 25.50,
            stock: 7
        },
        {
            name: "computadora",
            price: 250.50,
            stock:7
        },
        {
            name:"pizarron",
            price: 125.50,
            stock: 7
        },
        {
            name: "Shampoo",
            price: 30,
            stock: 17
        }
    ]        
     //arreglo,vector o matrices
     let total_inventory = 0
     let message = `==SISTEMA BASICO DE INVENTARIO==\n`
    products.forEach((product, index) => {
        total_inventory = total_inventory + parseFloat(product.price) * parseFloat(product.stock) 
        message = message + `\nproducto ${index + 1}: ${product.name}\nPrecio Unitario: ${index + 1}: $${product.price}
        \nUnidades disponibles: ${index + 1}: ${product.stock}\n\n`
    }) //forEach es un metodo de los arreglos, se le pasa una funcion anonima, el index es el numero del producto, el product es el producto en si

    console.log(message+ `Valor total del inventario: $${total_inventory.toFixed(2)}`)


    

   /* let total_inventory = parseFloat(product_price) * parseFloat(product_stock)
    total_inventory = total_inventory.toFixed(2) //Significa agregale 2 decimales

    //sirve para concatenar o mas bien para no poner tantos console.log 
    const message = `==SISTEMA BASICO DE INVENTARIO==\nProducto registrado:     
    ${product_name}\nPrecio Unitario: $${product_price}\nUnidades disponibles: 
    ${product_stock}\nValor total del inventario: $${total_inventory}`

    console.log("==SISTEMA BASICO DE INVENTARIO==")
    console.log("Producto registrado: " +product_name)
    console.log("Precio Unitario: $" +product_price)
    console.log("Unidades disponibles: " +product_stock)
    console.log("Valor total del inventario: $" +total_inventory)

    console.log(message) */

