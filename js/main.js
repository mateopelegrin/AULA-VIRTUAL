class Producto {
    constructor(nombre, cantidad, precio) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
    }
}


const catalogo = [
    { nombre: 'Lechuga', precio: 10 },
    { nombre: 'Tomate', precio: 15 },
    { nombre: 'Papa', precio: 8 },
    { nombre: 'Zanahoria', precio: 12 },
    { nombre: 'Cebolla', precio: 7 },
];

class Verduleria {
    constructor() {
        this.productos = [];
    }

    agregarProducto(producto) {
        this.productos.push(producto);
    }

    eliminarProducto(nombre) {
        this.productos = this.productos.filter((producto) => producto.nombre !== nombre);
    }

    calcularPrecioTotal() {
        let precioTotal = 0;
        for (let producto of this.productos) {
            precioTotal += producto.cantidad * producto.precio;
        }
        return precioTotal;
    }

    agregarProductosDelCatalogo() {
        let seguirAgregando = true;
        while (seguirAgregando) {
            console.log('Este es nuestro catálogo de productos:');
            for (let i = 0; i < catalogo.length; i++) {
                console.log(`${i + 1}. ${catalogo[i].nombre} - $${catalogo[i].precio}`);
            }
            const opcion = parseInt(prompt('Ingrese el número del producto que desea agregar, o 0 para terminar.'));
            if (opcion === 0) {
                seguirAgregando = false;
            } else if (opcion >= 1 && opcion <= catalogo.length) {
                const productoElegido = catalogo[opcion - 1];
                const cantidad = parseInt(prompt(`Cuántas ${productoElegido.nombre} desea agregar?`));
                const producto = new Producto(productoElegido.nombre, cantidad, productoElegido.precio);
                this.agregarProducto(producto);
                console.log(`Se agregaron ${cantidad} ${productoElegido.nombre} a la verdulería.`);
            } else {
                console.log('Opción inválida, por favor intente nuevamente.');
            }
        }
    }
}


const verduleria = new Verduleria();
verduleria.agregarProductosDelCatalogo();

console.log('Los productos en su carrito son:');
for (let producto of verduleria.productos) {
    console.log(`${producto.cantidad} ${producto.nombre} - $${producto.cantidad * producto.precio}`);
}
console.log(`El precio total es: $${verduleria.calcularPrecioTotal()}`);
