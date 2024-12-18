var nombre = "Eduardo";
var apellido = "García";
var edad= 22;
console.log("Mi nombre es "+ nombre +" "+apellido);
console.log("Mi edad es "+ edad);
console.log("Mi nombre es "+nombre+" " + apellido + " y tengo " + edad + " años")
let x = 10;
let y = 20;
let z = x + y;
console.log(z);

//var declara una variable global
//let declara una variablee local o tambien una variable de bloqueç
//conts declara una variable que no va a cambiar su valor 

//if marca un bloque de instrucciones que se ejecutan si una condicion se cumple 
//swich marca un bloque de instrucciones que se ejcutan si una condicon se cumple
//While marca un bloque de instrucciones que se ejecutan varias veces 
//function marca un bloque de instrucciones que se ejcutan varias veces si se declaran 
// try se ejecuta cuando se produce un error
//catch se ejecuta cuando se produce un error
//Return se ejecuta cuando una condicion se cumple ademas de devolver un valor

//Ejemplo de los tipos de datos de JavaScript

//STRING
//var ==> undeprecated
// let ==> moderno
//const ==> moderno

let nombrePersona = "Eduardo"
console.log(nombre);

let nombrePersona1;
nombrePersona1 = "Eduardo"
console.log(nombrePersona1);

//Tipo de datos numericos
let numero = 1000;
console.log(numero);

//Tipo de dato objeto o object
let persona = {
    nombre: "Andres",
    apellido: "Vargas",
    edad: 25
}
console.log(persona)

//Tipo de dato typeof
let let1 = "Eduardo"
console.log(typeof let1);

let let2 = 25;
console.log(typeof let2);

let let3 = false;
console.log(typeof let3);

let let4 = BigInt(123);
console.log(typeof let4);

let let5 = [1, 2, 3, 4, 5, 6, 7];
console.log(typeof let5);

//Tipo de dato tipo function
function saludar() {}
console.log(typeof saludar);

//Tipo de dato symbol
let simbolo = Symbol("Mi simbolo");//puede ser utilizado por un identificador unico
console.log(typeof simbolo);

//Tipo de dato tipo clase

class Persona{//declaracion de la clase
    constructor(nombres, apellidos, edad){//constructor
        this.nombres = nombres;//propiedades: atributos
        this.apellidos = apellidos;
        this.edad = edad;
    }
}
console.log(typeof Persona)
//usar una clase es lo mismo que hacer una funcion

//Tipo de dato undefined  se puede utilizar como un valor
let variable;
console.log(variable);
console.log(typeof variable);

//Tipo de dato null, aunsencia de valores
let variable1 = null;
console.log(variable1);
console.log(typeof variable1);

//Tipo de datos de arreglos en JavaScrit
let autos = ["BMW", "Mercedes Benz", "Audi"];
console.log(autos);
console.log(typeof autos);

//Datos de tipo string como cadenas vacias
let cadenaCacia = "";
console.log(cadenaCacia);
console.log(typeof cadenaCacia);

//Reglas de JavaScipt para declarar variables
//formas correctas para declaras variables
let nombresCompletos = "Eduardo García";
let nombres_completos = "Eduardo García";
//forma incorrecta
//let 1nombreCompletos = "Ricardo Vargas";

//Existen palabras reservadas en JavaScript
//Revisar la imgen

//Operadores aritmeticos
//+
//-
//*
// /
// % modulo
// ** exponente
let numero1 = 10;
let numero2 =  5;
console.log(numero1 + numero2);
console.log(numero1 - numero2);
console.log(numero1 * numero2);
console.log(numero1 / numero2);
console.log(numero1 % numero2);
console.log(numero1 ** numero2);

//operadores de incremento y decremento
let numero3 = 3, numero4 = 2;
let numero5 = numero3 + numero4;

//Incrementos
//Preincremento(el operador ++ antes de la variable)
numero5 = ++numero3;
console.log(numero3);
console.log(numero5);
//Postincremento(el operador ++ va despues de la varibale)
numero5 = numero4++;
console.log(numero4);
console.log(numero5);

//Decrementos
//Predecremento(el operador ++ antes de la variable)
numero5 = --numero3;
console.log(numero3);
console.log(numero5);
//Postdecremento(el operador ++ va despues de la varibale)
numero5 = numero4--;
console.log(numero4);
console.log(numero5);

//Precedencia de operadores
//Se ejecutan de izquierda a derecha o de derecha a izquerda segun sea el caso
let pre1 = 2, pre2 = 3, pre3 = 4, pre4 = 5;
let pre5 = (pre1 + pre2)*pre3;
console.log(pre5);
let pre6 = (pre1 * pre3) + pre2 * pre4 / (pre1 + pre2);
console.log(pre6);

/*
El == compara pero no es estricto
El === compara y es estricto con el tipo de dato
*/

let operador1 = 10, operador2 = "10";
let comparador = operador1 == operador2;
console.log(comparador);

comparador = operador1 === operador2;
console.log(comparador);

if(operador1 == operador2){
    console.log("It is same");
} else {
    console.log("It is not same");
}

// Par o impar
let numer1 = 5;

if(numer1 % 2 === 0 ){
    console.log("Es primo");
} else {
    console.log("No es primo");
}

//Ejercicio2
let edad1 = 60;

if(edad1 >= 18){
    console.log("Es mayor de edad");
} else {
    console.log("No es mayor de edad ");
}

//De un conjutno de 10 valores, determinar pares e impares

let i;
let valores = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(let i = 0; i < valores; i++){

}


//Operadores logicos
// AND &&
// OR ||
// NOT !

let s = 12;

let valMin = 9; valorMax = 20;

if (s >= valMin &&  s <= valorMax){
     console.log("El valor esta dentro del rango");
}else{
    console.log("El valor no esta dentro del rango");
}

let resultado  = (s >= valMin && s <= valorMax) ? "El valor esta dentro del rango" : "El valor no esta dentro del rango"
console.log(resultado);

//Conversion
let miNumero = "10"

console.log(typeof miNumero);

let edad10 = parseInt(miNumero);
//parseInt: convierte un valor en numero entero (sin decimales)
console.log(typeof edad1);

let edad12 = Number(miNumero);
//Number: convierte un valor en un numero (puede ser entero o flotante)
console.log(typeof edad2);


if (edad12 >= 18){
    console.log("Puede votar")
}else{
    console.log("No puede votar")
}

console.log(parseInt("42px")) //Solo la parte numerica = 42
console.log(parseInt(3.1415)) //Convierte solo la parte entera = 3
console.log(parseInt("abc")) //existe un valor numero para convertir

console.log(Number("42px")) //No se puede convertir toda la cadena
console.log(Number(3.1415)) //convierte el numero en un flotante
console.log(Number("abc")) //no hay numero en la cadena

console.log(Number(true)) //No se puede convertir toda la cadena
console.log(Number(false)) //convierte el numero en un flotante
console.log(Number(null)) //no hay numero en la cadena
console.log(Number(undefined)) //No se puede convertir toda la cadena