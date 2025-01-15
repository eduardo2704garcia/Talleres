/****************************************************
            SISTEMA DE VENTAS EN JS
*****************************************************/
//Clase Producto
class Producto {
    static contadorProductos = 0;
    //Modificar static
    //Se utiliza para acceder directamente a traves de la clase

    //Los metodos o propiedades no requieren que se creen instancias de la clase para ser utilizados
    //Se pueden acceder directamente desde la clase
    constructor(nombre, precio, categoria, stock){
        this.idProducto = ++Producto.contadorProductos;
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.stock = stock;
    }

    getIdProducto(){
        return this.idProducto;
    } 

    getNombre(){
        return this.nombre;
    }
    setNombre(nombre){
        this.nombre = nombre;
    }

    getPrecio(){
        return this.precio;
    }

    setPrecio(precio){
        this.precio = precio;
    }

    toString(){
        return `idProducto: ${this.idProducto}, nombre: ${this.nombre}, precio: ${this.precio, 2}, categoria: ${this.categoria}, stock: ${this.stock}`
    }
}

//Creación de la clase orden

class Orden{
    static contadorOrdenes = 0;
    static get  MAX_PRODUCTOS(){ //Cuando se trabaja con constantes se debe utilizar mayúsculas
        return 5; 

    }

    constructor(){
        this.idOrden = ++Orden.contadorOrdenes;
        this.productos = [];
        this.contadorProductosAgregados = 0;
    }

    getIdOrden(){
        return this.idOrden;
    }

    agregarProducto(producto){
        //Verificar si no hemos superado el maximo de productos existentes
        if(this.productos.length >= Orden.MAX_PRODUCTOS){
            console.log("No se pueden agregar más productos a la orden");
        return;
        }
        if(producto.stock <= 0){
            console.log("No hay stock del producto");
            return;
        } 
        producto.stock--;
        this.productos.push(producto);

     }
    

     calcularTotal() {
        let totalVenta = 0;
        for (const producto of this.productos) {
            let precioFinal = producto.precio;
            if (producto.categoria.toLowerCase() === "electronica") {
                precioFinal *= 0.9;
            }
            totalVenta += precioFinal;
        }
        return totalVenta;
    }

    calcularImpuestos(){
        const total = this.calcularTotal();
        return total * 0.15;
    }

    mostrarOrden() {
        let productosOrden = this.productos.map((producto) => producto.toString());
        console.log(`Orden: ${this.idOrden}\nTotal sin impuestos: $${this.calcularTotal()}\nImpuestos: $${this.calcularImpuestos()}\nProductos:\n${productosOrden}`);
    }

    listarProductosPorPrecio() {
        return [...this.productos].sort((a, b) => b.precio - a.precio);
    }

}

let producto1 = new Producto("Pantalon", 200, "Ropa", 10);
let producto2 = new Producto("Telefono", 300, "Electronica", 5);
let producto3 = new Producto("Zapatos", 60, "Calzado", 3);

console.log(producto1);
console.log(producto2);


let orden1 = new Orden(); //Objeto de la clase Orden
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.mostrarOrden();

console.log("Productos por precio descendente:");
let productosOrdenados = orden1.listarProductosPorPrecio();
productosOrdenados.forEach((producto) => console.log(producto.toString()));

let orden2 = new Orden();
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto3);  
orden2.agregarProducto(producto3);  
orden2.agregarProducto(producto3);  
orden2.mostrarOrden();

//Stock debe disminuirse con la venta 

//Descuentos por categoría

//Crear una propiedad categoria en la clase Producto
//Los productos de la categoria electronica debe tener un descuento del 10% al calcular el total de su venta

//Implementar un método calcularImpuestos() que calcule el 15% de impuestos sobre el total de la venta

//Listar productos por precio descendente

//Asegurarse que los precios no pueden ser negativos al establecerlos en la clase producto.



