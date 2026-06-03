let message = "==NUMEROS PRIMOS DEL 1 AL 20==\n"
let contador = 1

while(contador <= 20){ //mientras el contador sea menor o igual a 20, haz lo siguiente
    let esPrimo = true      //creamos una variable booleana para determinar si el numero es primo o no, inicialmente la ponemos en true
    for(let i = 2; i < contador; i++){      //creamos un ciclo for para verificar si el numero es divisible entre algun numero menor que el mismo, empezando desde 2
        if(contador % i === 0){     //si el numero es divisible entre algun numero menor que el mismo, entonces no es primo
            esPrimo = false     //si el numero es divisible entre algun numero menor que el mismo, entonces no es primo, por lo tanto cambiamos el valor de la variable booleana a false
            break       //si el numero es divisible entre algun numero menor que el mismo, entonces no es primo, por lo tanto salimos del ciclo for para no seguir verificando
        }       //si el numero es divisible entre algun numero menor que el mismo, entonces no es primo, por lo tanto salimos del ciclo for para no seguir verificando
    }       //si el numero es divisible entre algun numero menor que el mismo, entonces no es primo, por lo tanto salimos del ciclo for para no seguir verificando
    if(esPrimo && contador > 1){        //si el numero es primo y es mayor que 1, entonces es un numero primo valido, por lo tanto lo agregamos al mensaje
        message = message + contador + "\n"     //concatenamos el mensaje con el numero primo y un salto de linea
    }       //si el numero es primo y es mayor que 1, entonces es un numero primo valido, por lo tanto lo agregamos al mensaje
    contador = contador + 1     //incrementamos el contador en 1 para que no se quede en un ciclo infinito
}
console.log(message)        //imprimimos el mensaje con los numeros primos del 1 al 20


