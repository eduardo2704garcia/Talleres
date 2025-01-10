/****************************************************
                      OBJETOS
*****************************************************/

//Caracteristicas principales de los objetos en java script
//Claves y valores

//Las claves son cadenas de o simbolos(únicos)
//Los valores puedes ser de cualquier tipo: ya sean números, cadenas, funciones, 
//otros tipos de objetos, etc.

//Dinamismo:

//Los objetos pueden modificarse en tiempo de ejecución(agregar, modificar o eliminar propiedades de un objeto).

//Nota especial: 
//Dentro de los objetos se pueden incluir metodos 
//los metodos son asociados a un objeto

//*Objetos ==> propiedades y metodos

let persona = {
    nombre: "Eduardo",
    apellido: "García",
    email: "edgarcia@espe.edu.ec",
    edad: 22
}

console.log(persona)

//Incluir metodos en los OBJETOS

let people = {
    name: "Sara",
    lastname: "Candelario",
    email: "sariand29@espe.edu.ec",
    edad: 21,
    fullName: function () {
        return this.name + ' ' + this.lastname
    }
}

console.log(people.fullName())//siempre poner entre parentesis para ver los valores de la funcion

const person2 = {
    name: 'Dayana',
    lastname: 'Carrasc0',
    age: 19,
    saludo : function () {
        console.log(`Hello, my name is ${this.name}`);
    }
}
console.log(person2.name)
person2.saludo();

//Usando el contructor Objetct
//otra dorma de crar un objeto vacio y agregarle propiedades posteriormente

const persona1 = new Object();
persona1.nombre = 'Eduardo';
persona1.apellido = 'García';
persona1.edad = 22;
persona1.saludar = function () {
    console.log(`Hola, mi nombre es ${this.nombre}`);
}

console.log(persona1.nombre);
persona1.saludar();

//Usando la clse objetc.create

//Permite crear un obnjeto basado en un prototipo

const prototypePerson = {
    saludar: function () {
        console.log(`Hello since prototype, I am ${this.nombre}`);
    }
}

const persona2 = Object.create(prototypePerson);
persona2.nombre = 'Karen';
persona2.saludar();

//Usando clases(introducido desde ES6 ==> ES2024)
//Proporcionar una sintaxis mas estructurada  para crear objetos

class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }

    saludar(){
        console.log(`Helle since class, I am ${this.nombre}`)
    }
}

const persona3 = new Persona('Roxana', 'Cando');
persona3.saludar()

//usando funciones constructoras
//Forma clasica, utilizada no muy frecuente

function Persona1(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.saludar = function () {
        console.log(`Hello since functions, I am ${this.nombre}`);
    }
}

const persona4 = new Persona1('Byron', 22);
persona4.saludar()

//Manipulacion de los datos o propoedades de los objetos

//1. Agregar o modificar propiedades

const persona5 = {nombre: 'Joselyn'}
persona.edad = 20;
persona5.nombre = 'Joselyn Hernandez'
console.log(persona5)

//2. Eliminar propiedades

delete persona5.edad;
console.log(persona5)

//3. iterar sobre las propiedades

for (nombrePropiedad in persona5){
    console.log(nombrePropiedad);
    console.log(persona5[nombrePropiedad]);
}

for (let clave in persona5){
    console.log(`${clave}: ${persona5[clave]}`);
}

//4. verificar propiedades 
console.log('name' in persona5);
console.log('nombre' in persona5);
console.log(persona5.hasOwnProperty('age'));
console.log(persona5.hasOwnProperty('edad'));

//Metodos utiles para trabajar con objetos

//1. Object.keys()
//devolver un array con las claves del objeto
console.log(Object.keys(persona5));

//2. Object.values
//devuelve un array con laos valores del objeto

console.log(Object.values(persona5))

//3. Object.entries()

//devuelve un array de pares [claves, valores]

console.log(Object.entries(persona5))

//4. Object.assign
//Copia las propiedades de un objeto a otro

const copia = Object.assign({}, persona5);
console.log(copia);

//5. Object.freze()
//Congelar un objeto para evitar modificaciones

//Object.freeze(persona5);

//6. Objecto.seal()

//Permite modificar propiedad existentes pero no agregar o eliminar propiedades

Object.seal(persona5);

persona5.direccion = 'Quito';
console.log(persona5);

//Nota:
//iMPRESION DE LOS VALORES DE LAS PROPIEDADES DE UN OBJETO

let personaArray = Object.values(persona5);
console.log(personaArray);

let personaString = JSON.stringify(persona5);
//JSON es una notacion, es un objeto
//stringify convierte a cadena o string cada propiedad 
console.log(personaString);

//Methodo GET en Objetos JS
//Son metodos que se usan a manera de buenas practicas
//Que permiten acceder y modificar dichos objetos
//Permite acceder a los valores de las propiedades
let personaGET = {
    nombre: 'Marco',
    apellido: 'Valdivieso',
    email: 'mar@gamil.com',
    edad: 20,
    get nombreCompleto(){ //No es una propiedad es un metodo get
        return this.nombre + ' ' + this.apellido;
    }
}
console.log(personaGET.nombreCompleto);

//Metodo Set en Objetos JS
//Set establece o midifica los valores de los atributos en los objetos

//Validacion

let persona1SET = {
    nombre: 'Marco',
    apellido: 'Valdivieso',
    email: 'mar@gamil.com',
    edad: 20,
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase();
    },
    get nombreCompleto(){ //No es una propiedad es un metodo get
        return this.nombre + ' ' + this.apellido;
    }
}
console.log(personaSET.lang);

//Set
let personaSET2 = {
    nombre: 'Marco',
    apellido: 'Valdivieso',
    email: 'mar@gamil.com',
    edad: 20,
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(lang) {
        this.idioma = this.lang.toUpperCase();
    },
    get nombreCompleto(){ //No es una propiedad es un metodo get
        return this.nombre + ' ' + this.apellido;
    }
}
console.log(personaSET2.lang);

personaSET2.lang = 'en';

console.log(personaSET2.lang);

//Constructor en JS

//Si se desea desea crear mas objetos del mismo tipo esto NO ES POSIBLE
//Es por ello que se crean los constructores

//Es una funcion principal que permite trabajar con objetos en js

//Funcion constructura de tipo persona
function PersonaFC(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
}

let padreFC = new PersonaFC('Eduardo', 'García', 'edgarcia9@espe.edu.ec');//La variable ya no es variable, ahora es un metodo que permite crear un objeto de tipo persona
console.log(padreFC);

let madreFC = new PersonaFC('Nohemí', 'Romero', 'mnromero10@espe.edu.ec');//La variable ya no es variable, ahora es un metodo que permite crear un objeto de tipo persona
console.log(madreFC);

padreFC.tel = '0983339952';
console.log(padreFC);

//agregar un metodo a una funcion constructora de objetos 

function PersonaFCM(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function (){
        return this.nombre + ' ' + this.apellido;
    }
}
let padreFCM = new PersonaFCM('Eduardo', 'García', 'edgarcia9@espe.edu.ec');
console.log(padreFCM.nombreCompleto);

let madreFCM = new PersonaFCM('Nohemí', 'Romero', 'mnromero10@espe.edu.ec');
console.log(madreFCM.nombreCompleto);

//uso de prototype

PersonaFCM.prototype.telefono = '0983339952';
console.log(padreFCM);
console.log(madreFCM);

//uso de call

let personaCALL1 = {
    nombre: 'Marco',
    apellido: 'Valdivieso',
    email: 'mar@gamil.com',
    get nombreCompleto(){ 
        return this.nombre + ' ' + this.apellido;
    }
}

let personaCALL2 = {
    nombre: 'Juan',
    apellido: 'Rojas',
}

//para usar el metodo nombrecompleto que pértenece al objeto personaCALL1
//con los datos que estan en el personaCALL2

console.log(personaCALL1.nombreCompleto());
console.log(personaCALL1.nombreCompleto.call(personaCALL2));

//como pasar parametros a traves del metodo call

let personaCALLP1 = {
    nombre: 'Marco',
    apellido: 'Valdivieso',
    email: 'mar@gamil.com',
    nombreCompleto: function(titulo, telefono){ 
        return titulo + ' ' + this.nombre + ' ' + this.apellido + ' ' + telefono;
    }
}

let personaApply1 = {
    nombre: 'Juan',
    apellido: 'Rojas',
}

console.log(personaCALLP1.nombreCompleto('Lic', '3333333'));
console.log(personaCALLP1.nombreCompleto(personaCALLP2,'Ing', '555555556'));

//uso del metdo apply

let personaApply2 = {
    nombre: 'Marco',
    apellido: 'Valdivieso',
    email: 'mar@gamil.com',
    nombreCompleto: function(titulo, telefono){ 
        //return this.nombre + ' ' + this.apellido;
        return titulo + ' ' + this.nombre + ' ' + this.apellido + ' ' + telefono;
    }
}

let personaCALLP2 = {
    nombre: 'Juan',
    apellido: 'Rojas',
}

console.log(personaApply1.nombreCompleto());
console.log(personaApply1.nombreCompleto.apply(personaApply2));

let arreglo = ['Ing', '9999999']
console.log(personaApply1.nombreCompleto.apply(personaApply2, arreglo));

