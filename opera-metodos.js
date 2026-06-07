function esPrimo(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
function limpiar (num1, num2) {
    num1.value = ""
    num2.value = ""
}
