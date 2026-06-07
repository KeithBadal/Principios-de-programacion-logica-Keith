//Funciones 

const numero_1 = 8
const numero_2 = 4
const numero_3 = 3
const numero_4 = 5

const suma1 = suma(numero_1, numero_2) //no importas el nombre de las variables
console.log(suma1)
console.log()
console.log(suma(numero_2, numero_3))
console.log(suma(numero_3, numero_4))
console.log(suma(numero_4, numero_1))

//podemos llamar a la funcion directamente sin necesidad de guardarla en una variable
function suma (num1, num2){     //siempre se llamara asi por que si le ponemos el nombre de la variable, la funcion no lo conoce
    return parseInt(num1) + parseInt(num2)
}

function promedio (num1, num2) {
    return (suma(num1, num2)) / 2

}   
