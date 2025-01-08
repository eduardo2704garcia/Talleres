const inventario = {
    KitKat: { nombre: "KitKat", precio: 1.25, cantidad: 90 },
    CocaCola: { nombre: "CocaCola", precio: 0.75, cantidad: 40 },
    PapaFrita: { nombre: "PapaFrita", precio: 2.25, cantidad: 30 },
    Queso: { nombre: "Queso", precio: 2.00, cantidad: 60 },
};

Object.seal(inventario); // No se elimina ni se agregan productos, pero modifico cantidad y precios

function soldProduct(nombre, cantidad) {
    if (inventario[nombre]) {
        if (inventario[nombre].cantidad >= cantidad) {
            inventario[nombre].cantidad -= cantidad;
            console.log(`Venta completa: ${cantidad} ${nombre}.`);
        } else {
            console.log(`Error: No hay suficiente cantidad en stock de ${nombre}. Quedan ${inventario[nombre].cantidad} unidades.`);
        }
    } else {
        console.log(`Error: El producto ${nombre} no existe en el inventario.`);
    }
}

function aplicarDescuento(porcentaje) {
    const descuento = porcentaje / 100;
    for (const producto in inventario) {
        const nuevoPrecio = inventario[producto].precio * (1 - descuento);
        inventario[producto].precio = nuevoPrecio > 0 ? nuevoPrecio : 0;
        console.log(`Nuevo precio de ${producto}: ${inventario[producto].precio}`);
    }
    console.log(`Descuento del ${porcentaje}% aplicado a todos los productos.`);
}


soldProduct("KitKat", 20);  
soldProduct("CocaCola", 50); 
soldProduct("Jumbo", 5);     

aplicarDescuento(10); 

console.log("Inventario final:");
console.log(inventario);
