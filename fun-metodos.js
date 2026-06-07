document.querySelector("#btnresultado").addEventListener("click", () => {
    const num = parseInt(document.querySelector("#numero").value);
    const paridad = num % 2 === 0 ? "par" : "impar";
    const primo = esPrimo(num) ? "es primo" : "no es primo";
    document.querySelector("#resultado").textContent = `El número ${num} es ${paridad} y ${primo}`;
    document.querySelector("#numero").value = "";
        limpiar(num1, num2)
});
