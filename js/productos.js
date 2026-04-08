document.addEventListener("DOMContentLoaded", () => {

    const botones = document.querySelectorAll(".producto_card button");

    botones.forEach((boton, index) => {
        boton.addEventListener("click", () => {

            const producto = boton.closest(".producto_card");

            const nombre = producto.querySelector("h3").textContent;

            let precioTexto = producto.querySelector(".precio").textContent;
            let precio = parseInt(precioTexto.replace(/[^0-9]/g, ""));

            const imagen = producto.querySelector("img").src;

            const productoObj = {
                nombre,
                precio,
                imagen,
                cantidad: 1
            };

            agregarAlCarrito(productoObj);
        });
    });

});


function agregarAlCarrito(producto) {

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    const index = carrito.findIndex(item => item.nombre === producto.nombre);

    if (index !== -1) {
        carrito[index].cantidad++;
    } else {
        carrito.push(producto);
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));

    alert("Producto agregado 🛒");
}