/*
    ARREGLOS
*/

//Declaracion

const arr = new Array(10);
console.log(arr);

const arr1 = [];
console.log(arr1);

const numeros = [1, 2, 3, 4, 5];
let colores = ["Rojo", "Verde", "aZUL"];

//Ejercicio
 
let videoJuegos = ["Mario 3", "Fifa 24", "Wwe2k25"];
console.log(videoJuegos[2]);

let arregloCosas = [
    true,
    123,
    "Fernando",
    1 + 2,
    function(){},
    ()=>{},
    ['S', 'Peliculas']
];
console.log({arregloCosas});
console.log(arregloCosas[2]);

//Para operaciones dentro de un arreglo utilizamos ciertos metodos
// map, filter, reduce()

//map() transoforma los elementos d eun arreglo
let numerosMap = [1, 2, 3, 4, 5, 6];
let cuadrados = numerosMap.map(num => num * num);
console.log(cuadrados); //itero dentro del arreglo para realizar alguna operacion

//filter()  filtra los elementos que cumplen algun tipo de condicion
let numerosFilter = [1, 2, 3, 4, 5, 6];
let pares = numerosFilter.filter(num => num % 2 == 0);
console.log(pares);

//reduce() reduce todos los elementos a un solo valor 
let numerosReduce = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let maximo = numerosReduce.reduce((acumulador, num) => (num > acumulador ? num : acumulador), numerosReduce[0]);
console.log(maximo);

//Ventajas
//Son ideales para trabajar con transformaciones y manipulaciones complejas de datos dentro de un array
//permiten un estilo de programacion funcional mas limpia y facil de leer

//Agregar elementos dentro de un array

//push() -> agrega uno o mas elementos al final de un arreglo

let p = [1, 2, 3, 4]
p.push(5);
console.log(p);

//unshift() -> agrega  uno o mas elementos al principio o al inicio del arreglo

let u =  [1, 2, 3, 4]
u.unshift(8, 9);
console.log(u);

//splice() -> agrega o elimina elementos en cualquier posicion dentro del array

let s = [1, 2, 3, 4]
s.splice(1, 0, 5); //agrega el numero 5 en la posicion 1 sin eliminar los elementos
console.log(s);

//Modificar elementos dentro de un array

//Podemos acceder a un elemento directarmente por su indice y modificarlo

let i = ['Ana', 'Juan', 'Pedro', 'Eduardo'];
i[2] = 'Alejandra'; //Modifica el elemento en la posicion 2 
console.log(i);

//Si deseamos modifcar el arreglo de forma inmutable, se puede utilizar el metodo map()
//map() -> crea un nuevo arreglo con los valores modificados

//let m = ['Blue', 'Yellow', 'Orange', 'Red', 'Black'];
let map = [10, 27, 47, 67, 77];
let mapNuevo = map.map(num => num === 77 ? 5 : num);
console.log(mapNuevo);

//splice() tambien se puede utilizar
let s2 = [1, 2, 3];
s2.splice(1, 1, 5);
console.log(s2);

//Eliminar elementos de un array
//pop() -> elimina el ultimo elemento dle arreglo 

let arregloE = ['Blue', 'Yellow', 'Orange', 'Red', 'Black'];
arregloE.pop();
console.log(arregloE);

//shift() -2 elimina el primer elemento de un array

let arregloE2 =  ['Blue', 'Yellow', 'Orange', 'Red', 'Black'];
arregloE2.shift();
console.log(arregloE2);

//splice() -> lo utilizamos para eleminar cualquier elemento dentro de un arreglo

let arregloSP =  ['Blue', 'Yellow', 'Orange', 'Red', 'Black'];
arregloSP.splice(2, 1);//posicion - elemento
console.log(arregloSP);