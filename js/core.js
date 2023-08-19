// declaración de todas las variables globales vacías
let currencyPicked;
let amountToPay;
let finalCostUSD;
let finalCostEUR;
let finalCostCNY;

//creación del constructor utilizando class
class Currency {
  constructor(type, valueInARS) {
    this.type = type;
    this.valueInARS = valueInARS;
  }
  addSolidarityTax(percentage) {
    this.valueInARS = this.valueInARS * percentage;
  }
}
//const de las divisas
const currencyDollar = new Currency('Dólares', 367);
const currencyEuro = new Currency('Euros', 381);
const currencyYuan = new Currency('Yuanes', 50);

//ciclo para elegir la divisa
for (let i = 1; i <= 3; i++) {
  currencyPicked = parseInt(
    prompt('Elija su divisa: \n 1- Dólar \n 2- Euro \n 3- Yuan')
  );
  if (currencyPicked == 1) {
    currencyPicked = currencyDollar.type;
    console.log('eligió dolar');
    break;
  } else if (currencyPicked == 2) {
    currencyPicked = currencyEuro.type;
    console.log('eligió euro');
    break;
  } else if (currencyPicked == 3) {
    currencyPicked = currencyYuan.type;
    console.log('eligió yuan');
    break;
  } else {
    alert('Valor incorrecto. Te quedan ' + (3 - i) + ' intentos.');
  }
}

//prompt para ingresar la cantidad de divisas a comprar
let amountToBuy = parseFloat(
  prompt('Ingresá cuántos ' + currencyPicked.toLowerCase() + ' queres comprar.')
);

//función de cálculo de la divisa
function calculateExchange() {
  const solidarityMultiplier = 1.75;
  const disparoCambiario1 = 1.35;
  const disparoCambiario2 = 1.55;

  // Si el usuario eligio dolares
  if (currencyPicked == currencyDollar.type) {
    amountToPay = (amountToBuy * currencyDollar.valueInARS).toFixed(2);
    alert(
      'Para comprar $' + amountToBuy + ' USD, te va a costar $' + amountToPay
    );
    amountToPay = (amountToPay * disparoCambiario1).toFixed(2);
    alert(
      'Ah no banca, subió el dolar.\nPara comprar $' +
        amountToBuy +
        ' USD, te va a costar $' +
        amountToPay
    );
    amountToPay = (amountToPay * disparoCambiario2).toFixed(2);
    alert(
      'Ufff que garrón, se disparó de vuelta el dólar... Ya parece el bitcoin!\nPara comprar $' +
        amountToBuy +
        ' USD, te va a costar $' +
        amountToPay
    );
    amountToPay = (amountToPay * solidarityMultiplier).toFixed(2);
    alert(
      'Ayyyyyyyyy perdón! Me falto calcularte el nuevo y generosísimo aporte solidario.\nPara comprar $' +
        amountToBuy +
        ' USD, te va a costar $' +
        amountToPay
    );
  }
  // Si el usuario eligio euros
  else if (currencyPicked == currencyEuro.type) {
    amountToPay = (amountToBuy * currencyEuro.valueInARS).toFixed(2);
    alert(
      'Para comprar $' + amountToBuy + ' EUR, te va a costar $' + amountToPay
    );
    amountToPay = (amountToPay * disparoCambiario2).toFixed(2);
    alert(
      'Ah no banca, subió el euro.\nPara comprar $' +
        amountToBuy +
        ' EUR, te va a costar $' +
        amountToPay
    );
    amountToPay = (amountToPay * solidarityMultiplier).toFixed(2);
    alert(
      'Perdón! Me falto calcularte el nuevo y generosísimo aporte solidario.\nPara comprar $' +
        amountToBuy +
        ' EUR, te va a costar $' +
        amountToPay
    );
  }
  // Si el usuario eligio yuanes
  else if (currencyPicked == currencyYuan.type) {
    amountToPay = (amountToBuy * currencyYuan.valueInARS).toFixed(2);
    alert(
      'Para comprar $' + amountToBuy + ' CNY, te va a costar $' + amountToPay
    );
    amountToPay = (amountToPay * solidarityMultiplier).toFixed(2);
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

//ejecucion de la funcion
calculateExchange();
