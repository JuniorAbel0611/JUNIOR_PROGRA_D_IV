function calcularTotal() {
    // Obtener valores del formulario
    const nombre = document.getElementById("cliente").value.trim();
    const producto = document.getElementById("producto");
    const precio = parseFloat(producto.value);
    const cantidad = parseInt(document.getElementById("cantidad").value);

    // Calcular total
    const total = precio * cantidad;

    // Mostrar mensaje
    if (nombre) {
        document.getElementById("resultado").textContent =
            `Gracias ${nombre}, el total de tu pedido es: S/ ${total}`;
    } else {
        document.getElementById("resultado").textContent =
            `Por favor, ingresa tu nombre para continuar con el pedido.`;
    }
}
