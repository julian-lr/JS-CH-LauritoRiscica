//array de divisas que compra el user
let currenciesCompradas = JSON.parse(localStorage.getItem('currenciesCompradas')) || [];

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
              <input type="text" name="cantidad" id="cantidadComprar" placeholder="Ingresá un valor"/>
            </label>
            <p class="card-text abonando">Estarás abonando:</p>
            <div id="costoTotal">$0</div>
          </form>
          <br>
          <button id="comprarDivisa" class="btn btn-success btn-exito">Comprar</button>
          <br>
          <button id="closeOverlay" class="btn btn-cancel">Cancelar</button>
        </div>
      </div>
      `;
  contenedorOverlay.style.display = 'block';

  //============= ACA EMPIEZA LA ACCION DE CANCELAR==============
  // escucha al click del boton cancelar y cerrar overlay al clickear
  document.getElementById('closeOverlay').addEventListener('click', () => {
    contenedorOverlay.style.display = 'none';

    // while para borrar todos los childs que puedan existir dentro del overlay para evitar generar cards de más
    while (contenedorOverlay.firstChild) {
      contenedorOverlay.removeChild(contenedorOverlay.firstChild);
    }
  });

  //========== ACA EL WATCH DEL VALUE ====================
  const cantidadInput = document.getElementById('cantidadComprar');
  const outputValor = document.getElementById('costoTotal');

  cantidadInput.addEventListener('input', function () {
    //recibir valor del input
    const valorInput = cantidadInput.value;

    //updatear el contenido
    outputValor.innerHTML = '$' + (valorInput * divisa.valueInARS).toFixed(2);
  });

  //===========GUARDAR CURRENCIES COMPRADAS===========
  const botonComprar = document.getElementById('comprarDivisa');
  botonComprar.addEventListener('click', function () {
    const cantidadComprada = parseFloat(cantidadInput.value);
    const montoPagado = parseFloat(outputValor.innerHTML.substring(1));

    if (!isNaN(cantidadComprada)) {
      guardarOperaciones(divisa, cantidadComprada, montoPagado.toFixed(2)); 
      contenedorOverlay.style.display = 'none';
    } else {
      console.error('Valor invalido');
    }
  });
}
