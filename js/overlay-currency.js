//mostrar overlay cuando se decide comprar una currency
function showCurrencyOverlay(currencyId) {
  //constantes
  const contenedorOverlay = document.getElementById('overlay');
  const closeOverlay = document.getElementById('closeOverlay');
  const divisa = currencies.find((divisa) => divisa.id == currencyId);
  //ingreso HTML
  contenedorOverlay.innerHTML += `
      <div class="card mx-auto col-5">
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
          <form id="formulario">
          <label for="cantidad">
              Ingresá cuanto querés comprar:
              <input type="text" name="cantidad" id="cantidad" placeholder="Ingresá un valor"/>
            </label>
          <input id="${divisa.id}" type="submit" value="Comprar" class="btn btn-success" />
          </form>
          <button id="closeOverlay" class="btn btn-cancel">Cancelar</button>
        </div>
      </div>
      `;
  contenedorOverlay.style.display = 'block';

  // escucha al click del boton cancelar y cerrar overlay al clickear
  document.getElementById('closeOverlay').addEventListener('click', () => {
    contenedorOverlay.style.display = 'none';

    // while para borrar todos los childs que puedan existir dentro del overlay para evitar generar cards de más
    while (contenedorOverlay.firstChild) {
      contenedorOverlay.removeChild(contenedorOverlay.firstChild);
    }
  });
}