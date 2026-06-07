const readLine = require('readline') //importamos el modulo readline para poder leer la entrada y salida de la consola

const rl = readLine.createInterface({ //creamos la interfaz para leer la entrada y salida
    input: process.stdin, //entrada
    output: process.stdout //salida
})

rl.question('Ingrese un numero: ', (num) => {
    const numero = parseInt(num)
    rl.question('Ingrese otro numero: ', (num2) => {
        const numero2 = parseInt(num2)
        console.log(`La suma de ${numero} y ${numero2} es: ${suma(numero, numero2)}`)
    rl.close()

    })
})

function suma (num1, num2){     //siempre se llamara asi por que si le ponemos el nombre de la variable, la funcion no lo conoce
    return parseInt(num1) + parseInt(num2)
}


      