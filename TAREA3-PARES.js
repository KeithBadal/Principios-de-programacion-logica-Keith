/*
    Crear en el programa que ustedes quieran, el diagrama de flujo para:
    1.Sumatoria de numeros del 1 al 10
    2.Impresion de números pares del 1 al 20
    3.Impresion de números impares del 1 al 20
    4.Impresion de números primos del 1 al 20

    Tarea 4:
    -Crear un programa que imprima en consola:
    -numeros pares del 1 al 20
    -numeros impares del 1 al 20
    -numeros primos del 1 al 20
    Los diagramas se suben al github n imágenes , en una csrpeta que se llama diagramas
    antes del 5 de junio antes de medio dia */

    let message = "==NUMEROS PARES DEL 1 AL 20==\n"
  
    let contador = 1

    while(contador <= 20){ //mientras el contador sea menor o igual a 20, haz lo siguiente
        if(contador % 2 === 0){ //si el numero es divisible entre 2, entonces es par
            message = message + contador + "\n" //concatenamos el mensaje con el numero par y un salto de linea
        }
        contador = contador + 1  //incrementamos el contador en 1 para que no se quede en un ciclo infinito
    }
    console.log(message)
