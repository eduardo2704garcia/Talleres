// Parte 1
function calcularPromedio(num1, num2, num3) {
    if (num1 === 'number' || num2 === 'number' || num3 === 'number') {
        console.error("Error: Todos los valores deben ser numeros.")
    }
    return (num1 + num2 + num3) / 3;
}

// Parte 2
const numeroMayor = function(num1, num2) {
    if (num1 === 'number' ||num2 === 'number') {
        console.error("Error: Los dos valores deben ser numeros.")
    }
    return num1 > num2 ? num1 : num2;
};

// Parte 3
const numeroPar = (num) => {
    if ( num === 'number') {
        console.error("Error: El valor debe ser un numero.")
    }
    return num % 2 === 0;
};

// Parte 4
(function() {
    try {
        const a = 27, b = 10, c = 27

        const promedio = calcularPromedio(a, b, c);
        const mayor = numeroMayor(a, b);
        const par = numeroPar(a);

        console.log(`El promedio de a + b + c  es: ${promedio}`);
        console.log(`El mayor entre a y b es: ${mayor}`);
        console.log(`${a} es par: ${par}`);
    } catch (error) {
        console.error(error.message);
    }
})();




