const products = document.querySelector("#products")
let pesitos = new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
});
document.addEventListener("DOMContentLoaded", e => {
let productRow = ``
for (let index = 0; index < productosData.length; index++) 
{
    productRow += `
        <tr>
            <td>${productosData[index].id}</td>
            <td>${productosData[index].nombre}</td>
            <td>${pesitos.format(productosData[index].precio)}</td>
            <td>${productosData[index].categoria}</td>
            <td>${productosData[index].stock}</td>
            <td>${pesitos.format(productosData[index].precio * productosData[index].stock)}</td>
        </tr> `
}
    products.innerHTML = productRow
})
const productos = document.getElementById("products")
const filtro = document.getElementById("filtro")

function mostrarProductos(lista) {
    productos.innerHTML = ""

    lista.forEach(producto => {
        productos.innerHTML += `
            <tr>
                <td>${producto.id}</td>
                <td>${producto.nombre}</td>
                <td>${pesitos.format(producto.precio)}</td>
                <td>${producto.categoria}</td>
                <td>${producto.stock}</td>
                <td>${pesitos.format(producto.precio * producto.stock)}</td>
            </tr>
        `    
}   )   }
mostrarProductos(productosData)
filtro.addEventListener("change", () => {
    const categoria = filtro.value
    if (categoria === "Todas") {
        mostrarProductos(productosData)
        return
    }
    const filtrados = productosData.filter(
        producto => producto.categoria === categoria
    )
    mostrarProductos(filtrados)
})


/* TAREA 1: Agregar una columna llamada total de stock 
    total de stock = precio * stock
    TAREA 2: Filtrar por categorias  
*/





