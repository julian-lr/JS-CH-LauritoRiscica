// renderizar divisas
const contenedorDivisas = document.getElementById('divisas');

// funcion para generar las tarjetas de las divisas
function renderizarDivisas(listaDivisas) {
  // vacia primero el contenedor
  contenedorDivisas.innerHTML = '';

  // genera las cards con un for con cada contenido
  for (const divisa of listaDivisas) {
    contenedorDivisas.innerHTML += `
    <div class="card mx-auto my-3 gap-1 col-8 col-sm-6 col-md-5 col-lg-3">
      <img src="${divisa.img}" class="card-img-top" alt="${divisa.type}" />
      <div class="card-body">
        <h5 class="card-title">${divisa.type}</h5>
        <h6 class="card-subtitle">
                  Cotización actual:
                  <span>$${divisa.valueInARS}</span>
        </h6>
        <p class="card-text">
        Entrega en: ${divisa.delivery}
        <br><br>
        ${divisa.description}
        </p>
        <button id="${divisa.id}" href="#" class="btn btn-warning compra">
          Comprar
        </button>
      </div>
    </div>
    `;
  }
}

renderizarDivisas(currencies);
