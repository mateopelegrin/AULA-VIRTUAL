// Definir los productos disponibles
const productos = [
    { nombre: "Manzanas", precio: 2.50, cantidad: 10 },
    { nombre: "Naranjas", precio: 2.00, cantidad: 15 },
    { nombre: "Bananas", precio: 1.50, cantidad: 12 },
    { nombre: "Papas", precio: 1.00, cantidad: 20 },
    { nombre: "Zanahorias", precio: 1.50, cantidad: 18 }
];

// Agregar los productos a la página
const listaProductos = document.getElementById("productos");
productos.forEach(producto => {
    const item = document.createElement("li");
    item.innerHTML = `${producto.nombre} - $${producto.precio.toFixed(2)} - Disponibles: ${producto.cantidad}`;
    const boton = document.createElement("button");
    boton.innerHTML = "Agregar al carrito";
    boton.addEventListener("click", () => agregarAlCarrito(producto));
    item.appendChild(boton);
    listaProductos.appendChild(item);
});

// Definir las variables para el carrito de compras y el total
let carrito = [];
let total = 0;

// Función para agregar un producto al carrito de compras
function agregarAlCarrito(producto) {
    if (producto.cantidad > 0) {
        carrito.push(producto);
        producto.cantidad--;
        actualizarCarrito();
        actualizarProductos();
    }
}

// Función para actualizar el carrito de compras en la página
function actualizarCarrito() {
    const listaCarrito = document.getElementById("carrito");
    listaCarrito.innerHTML = "";
    carrito.forEach(producto => {
        const item = document.createElement("li");
        item.innerHTML = `${producto.nombre} - $${producto.precio.toFixed(2)}`;
        listaCarrito.appendChild(item);
    });
    actualizarTotal();
}

// Función para actualizar la lista de productos disponibles en la página
function actualizarProductos() {
    const listaProductos = document.getElementById("productos");
    listaProductos.innerHTML = "";
    productos.forEach(producto => {
        const item = document.createElement("li");
        item.innerHTML = `${producto.nombre} - $${producto.precio.toFixed(2)} - Disponibles: ${producto.cantidad}`;
        const boton = document.createElement("button");
        boton.innerHTML = "Agregar al carrito";
        boton.addEventListener("click", () => agregarAlCarrito(producto));
        item.appendChild(boton);
        listaProductos.appendChild(item);
    });
}


// Función para actualizar el total a pagar en la página
function actualizarTotal() {
    total = carrito.reduce((suma, producto) => suma + producto.precio, 0);
    const totalElemento = document.getElementById("total");
    totalElemento.innerHTML = `Total a pagar: $${total.toFixed(2)}`;
}

// Función para procesar el pago
function procesarPago() {
    // Verificar que haya productos en el carrito
    if (carrito.length === 0) {
        alert("El carrito de compras está vacío");
        return;
    }

    // Confirmar la compra
    const confirmar = confirm(`Total a pagar: $${total.toFixed(2)}\n¿Desea confirmar la compra?`);
    if (!confirmar) {
        return;
    }

    // Restablecer el carrito y actualizar la lista de productos disponibles
    carrito.forEach(producto => {
        const productoOriginal = productos.find(p => p.nombre === producto.nombre);
        productoOriginal.cantidad++;
    });
    carrito = [];
    actualizarCarrito();
    actualizarProductos();
    actualizarTotal();
    alert("Gracias por su compra");
}

// Agregar el evento de click al botón de pago
const botonPagar = document.getElementById("pagar");
botonPagar.addEventListener("click", procesarPago);
