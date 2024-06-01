document.addEventListener("DOMContentLoaded", () => {
  const precio = 400000;
  const precioSpan = document.querySelector(".precio-inicial");
  const cantidadSpan = document.querySelector(".cantidad");
  const totalSpan = document.querySelector(".valor-total");
  let cantidad = 0;

  precioSpan.innerHTML = precio;

  function actualizarTotal() {
    totalSpan.innerHTML = cantidad * precio;
  }

  window.aumentar = function () {
    cantidad++;
    cantidadSpan.innerHTML = cantidad;
    actualizarTotal();
  };

  window.reducir = function () {
    if (cantidad > 0) {
      cantidad--;
      cantidadSpan.innerHTML = cantidad;
      actualizarTotal();
    }
  };
});
