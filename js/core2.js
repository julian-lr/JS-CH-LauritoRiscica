// fecha y hora
const fecha = new Date();
const opcionesFecha = {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
};
const opcionesHora = {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
};

const fechaAjustada = fecha.toLocaleString('es-AR', opcionesFecha);
const horaAjustada = fecha.toLocaleString('es-AR', opcionesHora);

//-------------------------------------------------------------------------

// para simular como que el número de operaciones va cambiando, vamos a trabajar con el local storage
let currentNumber = localStorage.getItem('currentNumber');

// si no esta guardado el número, lo forzamos a que sea 0
if (currentNumber === null) {
  currentNumber = 0;
} else {
  // si está almacenado, lo analizamos como un entero
  currentNumber = parseInt(currentNumber, 10);
}

// generador de numeros para el número de operación, bastante básico
function generaNumeroSecuencial() {
  // incrementa el número por cada llamada
  currentNumber++;
  // se asegura de que sea de 8 digitos, en caso contrario sumarle 0s antes
  const formatearNumeroGenerado = String(currentNumber).padStart(8, '0');
  // Almacenamos el número en el local storage
  localStorage.setItem('currentNumber', currentNumber.toString());
  return formatearNumeroGenerado;
}
const numeroDeOperacion = generaNumeroSecuencial();

//-------------------------------------------------------------------------

console.table(currencies);
console.log(numeroDeOperacion);

//-------------------------------------------------------------------------

// renderizar divisas
const contenedorDivisas = document.getElementById('divisas');

// funcion para generar las tarjetas de las divisas
function renderizarDivisas(listaDivisas) {
  contenedorDivisas.innerHTML = '';
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

//-------------------------------------------------------------------------

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
            <input type="text" name="cantidad" id="cantidad" placeholder="1000"/>
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

//-------------------------------------------------------------------------

// loggeo de click+recoloración de cta compra con mouseover y mouseout, más que nada para testeo es esto.
let buttons = document.getElementsByClassName('compra');

for (const button of buttons) {
  button.addEventListener('click', () => {
    console.log(`hiciste click en el boton id ${button.id}`);
    const divACarro = currencies.find((divisa) => divisa.id == button.id);
    console.log(divACarro);
    const currencyId = parseInt(button.id);
    showCurrencyOverlay(currencyId);
  });
  button.onmouseover = () =>
    button.classList.replace('btn-warning', 'btn-secondary');
  button.onmouseout = () =>
    button.classList.replace('btn-secondary', 'btn-warning');
}

//-------------------------------------------------------------------------

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
