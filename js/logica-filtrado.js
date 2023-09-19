//logica de los filtros
//constantes para los checkbox
const choseDolar = document.getElementById('dolar');
const choseEuro = document.getElementById('euro');
const choseYuan = document.getElementById('yuan');
const inPerson = document.getElementById('inperson');
const inBank = document.getElementById('inbank');
const inAffiliate = document.getElementById('inaffiliate');
const inAgent = document.getElementById('inagent');
const inWallet = document.getElementById('inwallet');
const u1 = document.getElementById('u1');
const u12 = document.getElementById('u12');
const u24 = document.getElementById('u24');
const u48 = document.getElementById('u48');

// Function to update filtered currencies based on selected checkboxes
function filtrarCurrencies() {
  const filtrosSeleccionados = [];

  // Check which currency types are selected
  if (choseDolar.checked) {
    filtrosSeleccionados.push('Dólar');
  }
  if (choseEuro.checked) {
    filtrosSeleccionados.push('Euro');
  }
  if (choseYuan.checked) {
    filtrosSeleccionados.push('Yuan');
  }

  // Check which delivery times are selected
  if (u1.checked) {
    filtrosSeleccionados.push('30 min', '15 min');
  }
  if (u12.checked) {
    filtrosSeleccionados.push('30 min', '15 min', '3 hs', ' 6 hs');
  }
  if (u24.checked) {
    filtrosSeleccionados.push('30 min', '15 min', '3 hs', ' 6 hs', '12 hs', '24 hs');
  }
  if (u48.checked) {
    filtrosSeleccionados.push('30 min', '15 min', '3 hs', ' 6 hs', '12 hs', '24 hs', '48 hs');
  }

// Filter currencies based on selected types and times
const currenciesFiltradas = currencies.filter((currency) => {
  const matchesFilters = filtrosSeleccionados.length === 0 || filtrosSeleccionados.some(
    (filter) =>
      currency.type.includes(filter) || currency.delivery.includes(filter)
  );

  return matchesFilters;
});


  // Render the filtered currencies
  renderizarDivisas(currenciesFiltradas);
}

// Add event listeners to currency type and delivery time checkboxes
choseDolar.addEventListener('change', filtrarCurrencies);
choseEuro.addEventListener('change', filtrarCurrencies);
choseYuan.addEventListener('change', filtrarCurrencies);
u1.addEventListener('change', filtrarCurrencies);
u12.addEventListener('change', filtrarCurrencies);
u24.addEventListener('change', filtrarCurrencies);
u48.addEventListener('change', filtrarCurrencies);
