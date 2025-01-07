/****************************************************
                      FUNCIONES
*****************************************************/

//Funcion declarada

function miFunction(a, b, c) {
    console.log(arguments.length);
    console.log('La suma es: ' + (a+b+c));
}

miFunction(2, 3, 4);

//la palabra return dentro de la funcion

function miReturn(a, b) {
    return a + b;
}

let resultado = miReturn(4, 5);
console.log(resultado);

//Funcion de tipo expresion

//Declaracion de  una funcion que es igual a una expresion

let sumar = function (a, b) {return a * b};
resultado = sumar(2, 4);
console.log(typeof sumar);
console.log(resultado);

//funciones de tipo Self-Invoking
//Son funciones que llaman  a si mismas se denominan tambien Funciones Anonimas
//No son muy comunes pero pueden ser utiles en algunos casos

(function (a, b) {
    console.log('Ejecutando la funcion: ' + (a + b));
})(3, 4);

//Funciones anonimas

setTimeout(function () {
    console.log('Hola desde una funcion anonima');
}, 5000);

const persona = {
    nombre: 'Eduardo',
    saludar () {
        return `Hola, soy ${this.nombre}`;
    }, 
    apellido: 'García'
}

console.log(persona.saludar());

//Funciones tipo flecha(arrow function)
//Se mantiene como una forma concisa de declarar funciones y es ampliamente usada

const sumarValores = (a, b) => a + b;
console.log(sumarValores(5, 7));

const operaciones = {sumar: (a, b) => a + b, restar: (a, b) => a - b, multiplicar: (a, b) => a * b, dividir: (a, b) => a / b};
console.log(operaciones.sumar(2, 3));
console.log(operaciones.restar(2, 3));
console.log(operaciones.multiplicar(2, 3));
console.log(operaciones.dividir(27, 3));
