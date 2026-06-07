const num1 = document.querySelector ("#numero_1")
const num2 = document.querySelector ("#numero_2")
const buttonSuma = document.querySelector("#btnSuma")
const resultado = document.querySelector("#resultado")

buttonSuma.addEventListener("click", () => {
    const res = suma(num1.value, num2.value)
    resultado.textContent = res
    limpiar(num1, num2)
} )

const buttonResta = document.querySelector("#btnResta")
buttonResta.addEventListener("click", () => {
    const res = resta(num1.value, num2.value)
    resultado.textContent = res
    limpiar(num1, num2)
} )

const buttonMultiplicacion = document.querySelector("#btnMultiplicacion")
buttonMultiplicacion.addEventListener("click", () => {
    const res = multiplicacion(num1.value, num2.value)
    resultado.textContent = res
    limpiar(num1, num2)
} )

const buttonDivision = document.querySelector("#btnDivision")
buttonDivision.addEventListener("click", () => {
    const res = division(num1.value, num2.value)
    resultado.textContent = res
    limpiar(num1, num2)
} )


//TAREA1: Agrega eventos para los otros botones de resta, multiplicación y división, siguiendo el mismo patrón que el botón de suma.
//TAREA2: crear un archivo que se llame metodos.html, contendra unicamente un input 
// de tipo numero un boton que calcule: numeros pares, impar y primos
// el resultado se muestre en un parrafo debajo del boton. Ejemplo: "El numero 5 es impar y primo" o "El numero 6 es par y no es primo"

// 11 ded junio antes de media noche


//1->clic en el boton -> el numero 1 es impar o primo
