let message = "==NUMEROS IMPARES DEL 1 AL 20==\n"

let contador = 1

while(contador <= 20){ //mientras el contador sea menor o igual a 20, haz lo siguiente
    if(contador % 2 !== 0){ //si el numero no es divisible entre 2, entonces es impar
        message = message + contador + "\n" //concatenamos el mensaje con el numero impar y un salto de linea
    }
    contador = contador + 1 //incrementamos el contador en 1 para que no se quede en un ciclo infinito
}
console.log(message)

