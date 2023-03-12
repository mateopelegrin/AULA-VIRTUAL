class Producto {
    constructor(nombre, cantidad, precio) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
    }
}

const catalogo = [
    { nombre: 'Manzanas', precio: 2.5 },
    { nombre: 'Peras', precio: 3 },
    { nombre: 'Naranjas', precio: 4 },
    { nombre: 'Bananas', precio: 1.5 },
];

class Verduleria {
    constructor() {
        this.productos = [];
    }

    agregarProducto(producto) {
        const index = this.productos.findIndex(p => p.nombre === producto.nombre);
        if (index !== -1) {
            this.productos[index].cantidad += producto.cantidad;
        } else {
            this.productos.push(producto);
        }
    }

    calcularPrecioTotal() {
        let total = 0;
        for (let producto of this.productos) {
            total += producto.cantidad * producto.precio;
        }
        return total;
    }

    agregarProductosDelCatalogo() {
        let seguirAgregando = true;
        while (seguirAgregando) {
            let catalogoMensaje = 'Este es nuestro catálogo de productos:\n\n';
            for (let i = 0; i < catalogo.length; i++) {
                catalogoMensaje += `${i + 1}. ${catalogo[i].nombre} - $${catalogo[i].precio}\n`;
            }
            alert(catalogoMensaje);
            const opcion = parseInt(prompt('Ingrese el número del producto que desea agregar, o 0 para terminar.'));
            if (opcion === 0) {
                seguirAgregando = false;
            } else if (opcion >= 1 && opcion <= catalogo.length) {
                const productoElegido = catalogo[opcion - 1];
                const cantidad = parseInt(prompt(`Cuántas ${productoElegido.nombre} desea agregar?`));
                const producto = new Producto(productoElegido.nombre, cantidad, productoElegido.precio);
                this.agregarProducto(producto);
                alert(`Se agregaron ${cantidad} ${productoElegido.nombre} a la verdulería.`);
            } else {
                alert('Opción inválida, por favor intente nuevamente.');
            }
        }
    }
}

const verduleria = new Verduleria();
verduleria.agregarProductosDelCatalogo();

let carritoMensaje = 'Los productos en su carrito son:\n\n';
for (let producto of verduleria.productos) {
    carritoMensaje += `${producto.cantidad} ${producto.nombre} - $${producto.cantidad * producto.precio}\n`;
}
const precioTotalMensaje = `El precio total es: $${verduleria.calcularPrecioTotal()}`;

alert(carritoMensaje + precioTotalMensaje);
