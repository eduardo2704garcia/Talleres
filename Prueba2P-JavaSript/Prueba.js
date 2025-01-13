//Creacion de las clases proucto, inventario y venta
class Producto { 
    constructor(nombre, precio, cantidad, categoria) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.categoria = categoria;
    }
}

class Inventario { 
    productos = [];

    agregarProductoAlInventario(nombre, precio, cantidad, categoria) { 
        const nuevoProducto = new Producto(nombre, precio, cantidad, categoria);
        this.productos.push(nuevoProducto);
        console.log(`Producto agregado: ${nombre} | Precio: $${precio} | Cantidad: ${cantidad} | Categoría: ${categoria}`);
    }

    mostrarProductosOrdenados(orden = 'ascendente') { 
        const productosOrdenados = [...this.productos].sort((a, b) =>
            orden === 'ascendente' ? a.precio - b.precio : b.precio - a.precio
        );
        console.log(`Productos ordenados por precio (${orden}):`);
        productosOrdenados.forEach(producto => {
            console.log(`Nombre: ${producto.nombre} | Precio: $${producto.precio} | Cantidad: ${producto.cantidad} | Categoría: ${producto.categoria}`);
        });
    }

    buscarProductosPorCategoria(categoria){ 
        console.log(`Productos en la categoría "${categoria}":`);
        this.productos.forEach(producto => {
            if (producto.categoria === categoria) {
                console.log(`Nombre: ${producto.nombre} | Precio: $${producto.precio} | Cantidad: ${producto.cantidad}`);
            }
        });
    }
    
    //dESCUENTO POR CATEGORIA :)
    aplicarDescuentoPorCategoria(categoria, porcentaje){ 
        this.productos.forEach(producto => {
            if (producto.categoria === categoria){
                const precioAnterior = producto.precio;
                producto.precio -= producto.precio * (porcentaje / 100);
                console.log(`Descuento del ${porcentaje}% aplicado a "${producto.nombre}". Precio anterior: $${precioAnterior} -> Nuevo precio: $${producto.precio.toFixed(2)}`);
            }
        });
    }
}

class Venta { 
    ventasRealizadas = [];

    realizarVentaDeProducto(nombre, cantidad) {
        const producto = inventario.productos.find(prod => prod.nombre === nombre);
        if (!producto) {
            console.log(`Error: Producto "${nombre}" no encontrado en el inventario.`);
            return;
        }
        if (producto.cantidad < cantidad) {
            console.log(`Error: Cantidad insuficiente de "${nombre}" en el inventario.`);
            return;
        }
        producto.cantidad -= cantidad;
        const venta = new Producto(producto.nombre, producto.precio, cantidad, producto.categoria);
        this.ventasRealizadas.push(venta);
        console.log(`Venta realizada: ${nombre} | Cantidad: ${cantidad} | Total: $${(venta.precio * cantidad).toFixed(2)}`);
    }

    mostrarVentasRealizadas() { 
        console.log('Ventas realizadas:');
        this.ventasRealizadas.forEach(venta => {
            console.log(`Nombre: ${venta.nombre} | Precio: $${venta.precio} | Cantidad: ${venta.cantidad} | Categoría: ${venta.categoria}`);
        });
    }

    generarReporteDeVentas() {
        console.log('---------- REPORTE DE VENTAS ----------');
        console.log('Productos en inventario (actualizado):');
        inventario.mostrarProductosOrdenados();

        console.log('Ventas realizadas con fecha y hora:');
        this.ventasRealizadas.forEach(venta => {
            console.log(`Nombre: ${venta.nombre} | Precio: $${venta.precio} | Cantidad: ${venta.cantidad}`);
            console.log('Fecha y hora de la venta: ' + new Date());
        });

        const totalIngresos = this.ventasRealizadas.reduce((total, venta) => total + venta.precio * venta.cantidad, 0);
        console.log(`Total de ingresos generados: $${totalIngresos.toFixed(2)}`);

        const productoMasVendido = this.ventasRealizadas.reduce((max, venta) => venta.cantidad > max.cantidad ? venta : max, this.ventasRealizadas[0]);
        console.log(`Producto más vendido: ${productoMasVendido.nombre} con ${productoMasVendido.cantidad} unidades.`);
        console.log('---------------------------------------');
    }
}

//agregar productos
const inventario = new Inventario();
console.log('---------- AGREGANDO PRODUCTOS AL INVENTARIO ----------');
inventario.agregarProductoAlInventario('Coca-Cola', 1, 10, 'Refresco');
inventario.agregarProductoAlInventario('Papas Jumbo', 3, 15, 'Snacks');
inventario.agregarProductoAlInventario('Doritos Picantes', 2, 20, 'Snacks');
inventario.agregarProductoAlInventario('Laptop-Gamer', 100, 5, 'Electronicos');
inventario.agregarProductoAlInventario('Cueritos', 2, 30, 'Snacks');
inventario.agregarProductoAlInventario('Manza', 2, 25, 'Frutas');

console.log('---------- FILTRAR PRODUCTOS POR CATEGORÍA ----------');
inventario.buscarProductosPorCategoria('Snacks');

console.log('---------- MOSTRAR PRODUCTOS ORDENADOS POR PRECIO ----------');
inventario.mostrarProductosOrdenados('ascendente');

console.log('---------- APLICAR DESCUENTOS ----------');
inventario.aplicarDescuentoPorCategoria('Snacks', 10);
inventario.aplicarDescuentoPorCategoria('Electronicos', 20);

console.log('---------- REALIZANDO VENTAS ----------');
const ventas = new Venta();
ventas.realizarVentaDeProducto('Coca-Cola', 3);
ventas.realizarVentaDeProducto('Papas Jumbo', 5);
ventas.realizarVentaDeProducto('Doritos Picantes', 6);
ventas.realizarVentaDeProducto('Celular', 2);

console.log('---------- MOSTRAR VENTAS REALIZADAS ----------');
ventas.mostrarVentasRealizadas();

console.log('---------- GENERAR REPORTE ----------');
ventas.generarReporteDeVentas();
