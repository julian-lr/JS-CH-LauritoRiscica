//==========GUARDAR CURRENCIES AL LOCAL STORAGE=================================
const localStorageKey = 'currenciesCompradas';

function guardarAlLocalStorage(data) {
  localStorage.setItem(localStorageKey, JSON.stringify(data));
}

function cargarDelLocalStorage() {
  const data = localStorage.getItem(localStorageKey);
  return data ? JSON.parse(data) : [];
}

function actualizarCurrenciesCompradas(newData) {
  currenciesCompradas = newData;
  guardarAlLocalStorage(newData);
}


//funcion para guardar las currencies, sumando al objeto la cantidad comprada y cuanto abono.
function guardarOperaciones(divisaSeleccionada, cantidadComprada, montoPagado) {
  const compra = {
    type: divisaSeleccionada.type,
    valueInARS: divisaSeleccionada.valueInARS,
    delivery: divisaSeleccionada.delivery,
    description: divisaSeleccionada.description,
    img: divisaSeleccionada.img,
    location: divisaSeleccionada.location,
    id: divisaSeleccionada.id,
    amount: cantidadComprada,
    payed: montoPagado,
  };
  currenciesCompradas.push(compra);
  actualizarCurrenciesCompradas(currenciesCompradas);
  console.log(currenciesCompradas);
  renderizarListaOperaciones(currenciesCompradas);
}