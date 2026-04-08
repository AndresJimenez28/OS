const productos = [
    {id: 1, nombre: "Rines OZ Racing", precio: 1800000, img: "/images/rines.png"}, 
    {id: 2, nombre: "Llantas ToyoTires", precio: 450000, img: "/images/llantas2.png"}, 
    {id: 3, nombre: "Volante OMP", precio: 350000, img: "/images/volante.png"},
    { id: 4, nombre: "Puntera Akrapovic", precio: 480000 },
    { id: 5, nombre: "Suspensión Bilstein", precio: 520000 },
    { id: 6, nombre: "Sillas Bride", precio: 4200000 },
    { id: 7, nombre: "Sunroof", precio: 2500000 },
    { id: 8, nombre: "Coilovers ajustables", precio: 430000 },
    { id: 9, nombre: "Alerón fibra carbono", precio: 650000 },
    { id: 10, nombre: "Filtro K&N", precio: 250000 }
];

function obtenerCarrito() {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

// ===== GUARDAR CARRITO =====
function guardarCarrito(carrito) {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

// ===== AGREGAR PRODUCTO =====
function agregarAlCarrito(id) {
    let carrito = obtenerCarrito();

    let productoExistente = carrito.find(p => p.id === id);

    if (productoExistente) {
        productoExistente.cantidad++;
    } else {
        let producto = productos.find(p => p.id === id);
        carrito.push({ ...producto, cantidad: 1 });
    }

    guardarCarrito(carrito);
    alert("Producto agregado al carrito 🛒");
}

// ===== ELIMINAR PRODUCTO =====
function eliminarProducto(id) {
    let carrito = obtenerCarrito();
    carrito = carrito.filter(p => p.id !== id);
    guardarCarrito(carrito);
    mostrarCarrito();
}

// ===== CAMBIAR CANTIDAD =====
function cambiarCantidad(id, cambio) {
    let carrito = obtenerCarrito();

    carrito.forEach(p => {
        if (p.id === id) {
            p.cantidad += cambio;
            if (p.cantidad <= 0) {
                carrito = carrito.filter(prod => prod.id !== id);
            }
        }
    });

    guardarCarrito(carrito);
    mostrarCarrito();
}

// ===== MOSTRAR CARRITO =====
function mostrarCarrito() {
    const contenedor = document.getElementById("carrito-contenedor");

    if (!contenedor) return;

    let carrito = obtenerCarrito();

   if (carrito.length === 0) {
    contenedor.innerHTML = "<p style='color:white; text-align:center;'>No hay productos en el carrito</p>";
    return;
}

    let total = 0;

    contenedor.innerHTML = carrito.map(p => {
        total += p.precio * p.cantidad;

        return `
    <div class="item-carrito">
        <img src="${p.img}" style="width:100px;">
        <h3>${p.nombre}</h3>
        <p>Precio: $${p.precio.toLocaleString()}</p>
        <p>Cantidad: ${p.cantidad}</p>

        <button onclick="cambiarCantidad(${p.id}, 1)">+</button>
        <button onclick="cambiarCantidad(${p.id}, -1)">-</button>
        <button onclick="eliminarProducto(${p.id})">Eliminar</button>
    </div>
`;
    }).join("");

    contenedor.innerHTML += `
        <h2>Total: $${total.toLocaleString()}</h2>
    `;
}

// ===== CARGAR AUTOMÁTICO =====
document.addEventListener("DOMContentLoaded", mostrarCarrito);