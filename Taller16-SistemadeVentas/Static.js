class Producto {
    static contadorproductos = 0;
}

//Modificador STATIC 
//Se utiliza para acceder directamente a traves de la clase

//Los metodoso propiedades estaticas(static) no requieren que se 
//creen una instancia de la clase para ser utilizados

class Calculadora {
    //metodo Static
    static sumar(a, b){
        return a + b;
    }
}

//el acceso al metodo estatico directamente de la clase es asi

console.log(Calculadora.sumar(5, 3));

//No se puede acceder desde una instancia
const calc = new Calculadora();

//El modificador static en JS es una herramienta clave para definir funciones y propiedades
//compartidas sin necesitdad de crear algun tipo de instancia de una clase.
