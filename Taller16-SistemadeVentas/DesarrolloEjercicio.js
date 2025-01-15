// Clase Producto
class Producto {
    static contadorProductos = 0;

    constructor(nombre, precio, categoria, stock) {
        this.idProducto = ++Producto.contadorProductos;
        this.nombre = nombre;
        this.precio = precio >= 0 ? precio : 0; //precio no negativo
        this.categoria = categoria;
        this.stock = stock;
    }

    getIdProducto() {
        return this.idProducto;
    }

    getNombre() {
        return this.nombre;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }

    getPrecio() {
        return this.precio;
    }

    setPrecio(precio) {
        if (precio < 0) {
            console.log("El precio no puede ser negativo");
        } else {
            this.precio = precio;
        }
    }

    toString() {
        return `idProducto: ${this.idProducto}, nombre: ${this.nombre}, precio: $${this.precio.toFixed(2)}, categoria: ${this.categoria}, stock: ${this.stock}`;
    }
}

// Clase Orden
class Orden {
    static contadorOrdenes = 0;

    static get MAX_PRODUCTOS() {
        return 5;
    }

    constructor() {
        this.idOrden = ++Orden.contadorOrdenes;
        this.productos = [];
        this.mensajesDeStock = []; 
    }

    getIdOrden() {
        return this.idOrden;
    }

    agregarProducto(producto) {
        if (producto.precio < 0) {
            this.mensajesDeStock.push(`No se puede agregar el producto "${producto.nombre}" porque tiene un precio negativo.`);
            return;
        }
        if (producto.stock <= 0) {
            this.mensajesDeStock.push(`No hay stock del producto "${producto.nombre}".`);
            return;
        }
        if (this.productos.length >= Orden.MAX_PRODUCTOS) {
            this.mensajesDeStock.push("No se pueden agregar más productos a la orden.");
            return;
        }
        
        producto.stock--;
        this.productos.push(producto);
    }

    calcularTotal() {
        return this.productos.reduce((total, producto) => {
            let precioFinal = producto.precio;
            if (producto.categoria.toLowerCase() === "electronica") {
                precioFinal *= 0.9; // Descuento del 10% para productos electrónicos
            }
            return total + precioFinal;
        }, 0);
    }

    calcularImpuestos() {
        return this.calcularTotal() * 0.16; // 16% de impuestos
    }

    mostrarOrden() {
        const productosOrden = this.productos.map((producto) => producto.toString()).join("\n");
        console.log(`Orden: ${this.idOrden} Total sin impuestos: $${this.calcularTotal().toFixed(2)} Impuestos: $${this.calcularImpuestos().toFixed(2)} Productos: ${productosOrden}`);
        
        
        if (this.mensajesDeStock.length > 0) {
            console.log("Mensajes de Stock:");
            this.mensajesDeStock.forEach((mensaje) => console.log(mensaje));
        }
    }

    listarProductosPorPrecio() {
        return [...this.productos].sort((a, b) => b.precio - a.precio);
    }
}


// Creación de productos y órdenes
let producto1 = new Producto("Pantalón", 200, "Ropa", 0);  
let producto2 = new Producto("Teléfono", 300, "Electrónica", 5);
let producto3 = new Producto("Zapatos", 60, "Calzado", 3);
let producto4 = new Producto("Gafas", 150, "Electrónica", 2);  
let producto5 = new Producto("Chaqueta", -50, "Ropa", 4);  

// Orden 1
let orden1 = new Orden();
orden1.agregarProducto(producto1);  
orden1.agregarProducto(producto2);  
orden1.mostrarOrden(); 

// Orden 2
let orden2 = new Orden();
orden2.agregarProducto(producto3);  
orden2.agregarProducto(producto4);  
orden2.mostrarOrden();  

// Orden 3
let orden3 = new Orden();
orden3.agregarProducto(producto4);  
orden3.agregarProducto(producto5);  
orden3.mostrarOrden();  

// Orden 4 
let orden4 = new Orden();
orden4.agregarProducto(producto2);  
orden4.agregarProducto(producto3);  
orden4.mostrarOrden();  
