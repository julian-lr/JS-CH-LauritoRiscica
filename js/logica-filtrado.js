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

// funcion para actualizar las divisas filtradas basada en los checkboxes
function filtrarCurrencies() {
  const filtrosSeleccionados = [];

  // revisar cuales divisas estan seleccionadas
  if (choseDolar.checked) {
    filtrosSeleccionados.push('Dólar');
  }
  if (choseEuro.checked) {
    filtrosSeleccionados.push('Euro');
  }
  if (choseYuan.checked) {
    filtrosSeleccionados.push('Yuan');
  }

  // revisar medio de entrega deseado
  if (inPerson.checked) {
    filtrosSeleccionados.push('En persona');
  }
  if (inBank.checked) {
    filtrosSeleccionados.push('Cuenta de banco');
  }
  if (inAffiliate.checked) {
    filtrosSeleccionados.push('Tarjeta de socio');
  }
  if (inAgent.checked) {
    filtrosSeleccionados.push('Agente');
  }
  if (inWallet.checked) {
    filtrosSeleccionados.push('Wallet digital');
  }

  // revisar tiempo de entrega seleccionados
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

// filtrar divisas segun su tipo, su tiempo de entrega y medio de entrega
const currenciesFiltradas = currencies.filter((currency) => {
  const filtrosCheckeados = filtrosSeleccionados.length === 0 || filtrosSeleccionados.some(
    (filter) =>
    (currency.type.includes(filter) || 
    currency.delivery.includes(filter) ||
    currency.location.includes(filter)
    ) 
  );

  return filtrosCheckeados;
});


  // renderizar esas divisas
  renderizarDivisas(currenciesFiltradas);
}

// agregar event listeners a los checkboxes
choseDolar.addEventListener('change', filtrarCurrencies);
choseEuro.addEventListener('change', filtrarCurrencies);
choseYuan.addEventListener('change', filtrarCurrencies);
inPerson.addEventListener('change', filtrarCurrencies);
inBank.addEventListener('change', filtrarCurrencies);
inAffiliate.addEventListener('change', filtrarCurrencies);
inAgent.addEventListener('change', filtrarCurrencies);
inWallet.addEventListener('change', filtrarCurrencies);
u1.addEventListener('change', filtrarCurrencies);
u12.addEventListener('change', filtrarCurrencies);
u24.addEventListener('change', filtrarCurrencies);
u48.addEventListener('change', filtrarCurrencies);
