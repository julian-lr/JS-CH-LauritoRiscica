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

//constantes para los filtros en sí, generando nuevos arrays
//const de divisa
const dollarCategory = currencies.filter((currency) =>
  currency.type.includes('Dólar')
);
const euroCategory = currencies.filter((currency) =>
  currency.type.includes('Euro')
);
const yuanCategory = currencies.filter((currency) =>
  currency.type.includes('Yuan')
);

//const de medio de entrega
const byPerson = currencies.filter((currency) =>
  currency.location.includes('En persona')
);
const byBank = currencies.filter((currency) =>
  currency.location.includes('Cuenta de banco')
);
const byAffiliate = currencies.filter((currency) =>
  currency.location.includes('Tarjeta de socio')
);
const byAgent = currencies.filter((currency) =>
  currency.location.includes('Agente')
);
const byWallet = currencies.filter((currency) =>
  currency.location.includes('Wallet digital')
);

//const de tiempo
const under1 = currencies.filter(
  (currency) =>
    currency.delivery.includes('30 min') || currency.delivery.includes('15 min')
);
const under12 = currencies.filter(
  (currency) =>
    (currency.delivery.includes('30 min') ||
      currency.delivery.includes('15 min') ||
      currency.delivery.includes('3 hs') ||
      currency.delivery.includes('6 hs') &&
    !currency.delivery.includes('72 a 96 hs'))
);
const under24 = currencies.filter(
  (currency) =>
    (currency.delivery.includes('30 min') ||
    currency.delivery.includes('15 min') ||
    currency.delivery.includes('3 hs') ||
    currency.delivery.includes('6 hs') ||
    currency.delivery.includes('12 hs')  &&
    !currency.delivery.includes('72 a 96 hs'))
);
const under48 = currencies.filter(
  (currency) =>
    (currency.delivery.includes('30 min') ||
    currency.delivery.includes('15 min') ||
    currency.delivery.includes('3 hs') ||
    currency.delivery.includes('6 hs') ||
    currency.delivery.includes('12 hs') ||
    currency.delivery.includes('48 hs')  &&
    !currency.delivery.includes('72 a 96 hs'))
);

//si elige el checkbox de < 1 hora:
u1.addEventListener('change', () => {
  if (u1.checked) {
    contenedorDivisas.innerHTML = '';
    renderizarDivisas(under1);
  } else {
    console.log('checkbox is not checked');
    renderizarDivisas(currencies);
  }
});

//si elige el checkbox de < 12 horas:
u12.addEventListener('change', () => {
  if (u12.checked) {
    contenedorDivisas.innerHTML = '';
    renderizarDivisas(under12);
  } else {
    console.log('checkbox is not checked');
    renderizarDivisas(currencies);
  }
});

//si elige el checkbox de < 24 horas:
u24.addEventListener('change', () => {
  if (u24.checked) {
    contenedorDivisas.innerHTML = '';
    renderizarDivisas(under24);
  } else {
    console.log('checkbox is not checked');
    renderizarDivisas(currencies);
  }
});

//si elige el checkbox de < 48 horas:
u48.addEventListener('change', () => {
  if (u48.checked) {
    contenedorDivisas.innerHTML = '';
    renderizarDivisas(under48);
  } else {
    console.log('checkbox is not checked');
    renderizarDivisas(currencies);
  }
});

//si elige el checkbox de Dolar:
choseDolar.addEventListener('change', () => {
  if (choseDolar.checked) {
    contenedorDivisas.innerHTML = '';
    renderizarDivisas(dollarCategory);
  } else {
    console.log('checkbox is not checked');
    renderizarDivisas(currencies);
  }
});

//si elige el checkbox de Euro:
choseEuro.addEventListener('change', () => {
  if (choseEuro.checked) {
    contenedorDivisas.innerHTML = '';
    renderizarDivisas(euroCategory);
  } else {
    console.log('checkbox is not checked');
    renderizarDivisas(currencies);
  }
});

//si elige el checkbox de Yuan:
choseYuan.addEventListener('change', () => {
  if (choseYuan.checked) {
    contenedorDivisas.innerHTML = '';
    renderizarDivisas(yuanCategory);
  } else {
    console.log('checkbox is not checked');
    renderizarDivisas(currencies);
  }
});

//si elige el checkbox de En persona:
inPerson.addEventListener('change', () => {
  if (inPerson.checked) {
    contenedorDivisas.innerHTML = '';
    renderizarDivisas(byPerson);
  } else {
    console.log('checkbox is not checked');
    renderizarDivisas(currencies);
  }
});

//si elige el checkbox de Cuenta de banco:
inBank.addEventListener('change', () => {
  if (inBank.checked) {
    contenedorDivisas.innerHTML = '';
    renderizarDivisas(byBank);
  } else {
    console.log('checkbox is not checked');
    renderizarDivisas(currencies);
  }
});

//si elige el checkbox de Tarjeta de socio:
inAffiliate.addEventListener('change', () => {
  if (inAffiliate.checked) {
    contenedorDivisas.innerHTML = '';
    renderizarDivisas(byAffiliate);
  } else {
    console.log('checkbox is not checked');
    renderizarDivisas(currencies);
  }
});

//si elige el checkbox de Agente:
inAgent.addEventListener('change', () => {
  if (inAgent.checked) {
    contenedorDivisas.innerHTML = '';
    renderizarDivisas(byAgent);
  } else {
    console.log('checkbox is not checked');
    renderizarDivisas(currencies);
  }
});

//si elige el checkbox de Wallet digital:
inWallet.addEventListener('change', () => {
  if (inWallet.checked) {
    contenedorDivisas.innerHTML = '';
    renderizarDivisas(byWallet);
  } else {
    console.log('checkbox is not checked');
    renderizarDivisas(currencies);
  }
});
