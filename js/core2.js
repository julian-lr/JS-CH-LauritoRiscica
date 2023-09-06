// declaración de todas las variables globales vacías
let currencyPicked;
let amountToPay;
let finalCostUSD;
let finalCostEUR;
let finalCostCNY;
let initialValue; // Guarda el primer o anterior resultado del exchange para despues sacar los incrementos
let incrementsStore; // Guarda los incrementos para el array despues
let exchangeResults = []; // Este array es especifico para registrar los incrementos

// Fecha y hora
const fecha = new Date();
const opcionesFecha = {
  day: 'numeric',
  month: 'long'
};
const opcionesHora = {
  hour: '2-digit',
  minute: '2-digit'
};

const fechaAjustada = fecha.toLocaleString('es-AR', opcionesFecha);
const horaAjustada = fecha.toLocaleString('es-AR', opcionesHora);

//Generador de numeros para el número de operación, bastante básico
function generaNumeroRandom() {
  // Generar número random entre 0 y 99999999 (es de 8 digitos)
  const numeroRandom = Math.floor(Math.random() * 100000000);

  // Asegurarse de que sea de 8 digitos, en caso contrario sumarle 0s
  const formatearNumeroGenerado = String(numeroRandom).padStart(8, '0');

  return formatearNumeroGenerado;
}
const numeroRandomParaOperacion = generaNumeroRandom();

//creación del constructor utilizando class
class Currency {
  constructor(type, valueInARS) {
    this.type = type;
    this.valueInARS = valueInARS;
  }
}

//const de las divisas
// const currencyDollar = new Currency('Dólares', 1074.32);
// const currencyEuro = new Currency('Euros', 1391.110);
// const currencyYuan = new Currency('Yuanes', 780.56);

// Array para las divisas
const currencies = [
  new Currency('Dólar blue', 1074.32),
  new Currency('Euro blue', 1391.11),
  new Currency('Yuan blue', 780.56),
  new Currency('Dólar MEP', (1074.32 * 1.12).toFixed(2)),
  new Currency('Euro MEP', (1391.11 * 1.12).toFixed(2)),
  new Currency('Yuan MEP', (780.56 * 1.12).toFixed(2)),
  new Currency('Dólar CCL', (1074.32 * 1.23).toFixed(2)),
  new Currency('Euro CCL', (1391.11 * 1.23).toFixed(2)),
  new Currency('Yuan CCL', (780.56 * 1.23).toFixed(2)),
  new Currency('Dólar crypto', (1074.32 / 1.17).toFixed(2)),
  new Currency('Euro crypto', (1391.11 / 1.17).toFixed(2)),
  new Currency('Yuan crypto', (780.56 / 1.17).toFixed(2)),
];

// Ordenar las divisas por valor en orden descendente
function ordenarCurrencyPorPrecioMax(ordenarCurrencies) {
  return ordenarCurrencies.sort((a, b) => b.valueInARS - a.valueInARS);
}

// Mostrar las divisas
console.table(currencies);

//-------------------------------------------------------------------------
// Funcion para filtrar productos por un precio máximo, esta funcionalidad va a ser mediante un input más adelante
function filterByMaxPrice(maxPrice) {
    const filtered = currencies.filter((Currency) => Currency.valueInARS <= maxPrice);
    console.table(filtered);
}
//filtrar por precio máximo con prompt
filterByMaxPrice(parseFloat(prompt('Ingresá el precio máximo de buscas en las cotizaciones, este resultado lo verás en el 2do console.table.\n\nTené en cuenta que:\n1- No afecta al flow siguiente, es solo para demostrar su funcionalidad en un console.table.\n2- Si elegis un número menor a 667.15, la tabla va a estar vacía.')));

//-------------------------------------------------------------------------

//Separar divisas en tres arrays por tipo
const dollarCategory = currencies.filter(currency => currency.type.includes('Dólar'));
const euroCategory = currencies.filter(currency => currency.type.includes('Euro'));
const yuanCurrency = currencies.filter(currency => currency.type.includes('Yuan'));

//Ordenar divisas por precio máximo
console.table(ordenarCurrencyPorPrecioMax(dollarCategory));
console.table(ordenarCurrencyPorPrecioMax(euroCategory));
console.table(ordenarCurrencyPorPrecioMax(yuanCurrency));

//-------------------------------------------------------------------------

// Definir constante para el valor de las currencies
const dollarValue = currencies[0].valueInARS;
const euroValue = currencies[1].valueInARS;
const yuanValue = currencies[2].valueInARS;

// Definir constante para el tipo de las currencies
const dollarType = currencies[0].type;
const euroType = currencies[1].type;
const yuanType = currencies[2].type;

//variable para iniciar el while loop
let continueExchange = true;

while (continueExchange) {
  //ciclo para elegir la divisa
  for (let i = 1; i <= 3; i++) {
    currencyPicked = parseInt(
      prompt(`Bienvenido a DivisaFácil!\nHoy es ${fechaAjustada} y son las ${horaAjustada} hs.\n\nNúmero de operación: ${numeroRandomParaOperacion}\n\nElija su divisa: \n 1- Dólar blue\n 2- Euro blue\n 3- Yuan blue`)
    );
    if (currencyPicked == 1) {
      currencyPicked = dollarType;
      console.log('eligió dolar');
      break;
    } else if (currencyPicked == 2) {
      currencyPicked = euroType;
      console.log('eligió euro');
      break;
    } else if (currencyPicked == 3) {
      currencyPicked = yuanType;
      console.log('eligió yuan');
      break;
    } else {
      alert('Valor incorrecto. Te quedan ' + (3 - i) + ' intentos.');
    }
  }

  //prompt para ingresar la cantidad de divisas a comprar
  let amountToBuy = parseFloat(
    prompt(
      'Ingresá cuántos ' + currencyPicked.toLowerCase() + ' queres comprar.'
    )
  );

  //función de cálculo de la divisa
  function calculateExchange() {
    const solidarityMultiplier = 1.75;
    const disparoCambiario1 = 1.35;
    const disparoCambiario2 = 1.55;

    // Resetea el initialValue e incrementsStore para cada reinicio de proceso
    initialValue = 0;
    incrementsStore = 0;

    // Si el usuario eligio dolares
    if (currencyPicked == dollarType) {
      amountToPay = (amountToBuy * dollarValue).toFixed(2);
      initialValue = amountToPay;
      alert(
        'Para comprar $' + amountToBuy + ' USD, te va a costar $' + amountToPay
      );
      amountToPay = (amountToPay * disparoCambiario1).toFixed(2);
      incrementsStore = amountToPay - initialValue;
      exchangeResults.push({ currency: currencyPicked, incrementsStore });
      initialValue = amountToPay;
      alert(
        'Ah no banca, subió el dolar.\nPara comprar $' +
          amountToBuy +
          ' USD, te va a costar $' +
          amountToPay
      );
      amountToPay = (amountToPay * disparoCambiario2).toFixed(2);
      incrementsStore = amountToPay - initialValue;
      exchangeResults.push({ currency: currencyPicked, incrementsStore });
      initialValue = amountToPay;
      alert(
        'Ufff que garrón, se disparó de vuelta el dólar... Ya parece el bitcoin!\nPara comprar $' +
          amountToBuy +
          ' USD, te va a costar $' +
          amountToPay
      );
      amountToPay = (amountToPay * solidarityMultiplier).toFixed(2);
      incrementsStore = amountToPay - initialValue;
      exchangeResults.push({ currency: currencyPicked, incrementsStore });
      initialValue = amountToPay;
      alert(
        'Ayyyyyyyyy perdón! Me falto calcularte el nuevo y generosísimo aporte solidario.\nPara comprar $' +
          amountToBuy +
          ' USD, te va a costar $' +
          amountToPay
      );
    }
    // Si el usuario eligio euros
    else if (currencyPicked == euroType) {
      amountToPay = (amountToBuy * euroValue).toFixed(2);
      initialValue = amountToPay;
      alert(
        'Para comprar $' + amountToBuy + ' EUR, te va a costar $' + amountToPay
      );
      amountToPay = (amountToPay * disparoCambiario2).toFixed(2);
      incrementsStore = amountToPay - initialValue;
      exchangeResults.push({ currency: currencyPicked, incrementsStore });
      initialValue = amountToPay;
      alert(
        'Ah no banca, subió el euro.\nPara comprar $' +
          amountToBuy +
          ' EUR, te va a costar $' +
          amountToPay
      );
      amountToPay = (amountToPay * solidarityMultiplier).toFixed(2);
      incrementsStore = amountToPay - initialValue;
      exchangeResults.push({ currency: currencyPicked, incrementsStore });
      initialValue = amountToPay;
      alert(
        'Perdón! Me falto calcularte el nuevo y generosísimo aporte solidario.\nPara comprar $' +
          amountToBuy +
          ' EUR, te va a costar $' +
          amountToPay
      );
    }
    // Si el usuario eligio yuanes
    else if (currencyPicked == yuanType) {
      amountToPay = (amountToBuy * yuanValue).toFixed(2);
      initialValue = amountToPay;
      alert(
        'Para comprar $' + amountToBuy + ' CNY, te va a costar $' + amountToPay
      );
      amountToPay = (amountToPay * solidarityMultiplier).toFixed(2);
      incrementsStore = amountToPay - initialValue;
      exchangeResults.push({ currency: currencyPicked, incrementsStore });
      initialValue = amountToPay;
      alert(
        'Perdón! Me falto calcularte el nuevo y generosísimo aporte solidario.\nPara comprar $' +
          amountToBuy +
          ' CNY, te va a costar $' +
          amountToPay
      );
    }
    // Si el usuario tiene ganas de romper las normas
    else {
      alert('Me rompiste,¡gracias!');
    }
  }

  // ejecucion de la funcion and store the result in the array
  calculateExchange();

  // Llevar el resultado al array de exchangeResults
  console.table(exchangeResults);

  const doYouWantToContinue = prompt(
    'Querés cotizar otras monedas, o evaluar con otro número? (Si/No)'
  ).toLowerCase();

  if (doYouWantToContinue !== 'si') {
    continueExchange = false;
  }
}
