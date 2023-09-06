// Class + Constructor para darle formato al array de las currencies ----------------------------------
class Currency {
  constructor(type, valueInARS, delivery, description, img, location) {
    this.type = type;
    this.valueInARS = valueInARS;
    this.delivery = delivery;
    this.description = description;
    this.img = img;
    this.location = location;
  }
}

// Array para las divisas ----------------------------------------------------
const currencies = [
  new Currency('Dólares blue', 1074.32, '24 a 48 hs', 'Se entrega en tu estación de servicio más cercana.', './img/dolar.png', 'En persona'),
  new Currency('Euros blue', 1391.11, '72 a 96 hs', 'Se entrega en tu consulado más cercano.', './img/euro.png', 'En persona'),
  new Currency('Yuanes blue', 780.56, '3 a 6 hs', 'Se entrega en tu ArgenChino más cercano, en caso de no tener uno cerca, revisá los convenios con la comunidad autónoma china <a href="#">acá</a>.', './img/yuan.png', 'En persona'),
  new Currency('Dólares MEP', (1074.32 * 1.12).toFixed(2), '1 a 3 hs', 'Se transfiere a tu cuenta bancaria.', './img/dolar.png', 'Cuenta de banco'),
  new Currency('Euros MEP', (1391.11 * 1.12).toFixed(2), '3 a 6 hs', 'Se transfiere a tu cuenta bancaria en el exterior.', './img/euro.png', 'Cuenta de banco'),
  new Currency('Yuanes MEP', (780.56 * 1.12).toFixed(2), '1 a 3 hs', 'Se deposita a tu tarjeta de socio en tu chino afiliado más cercano.', './img/yuan.png', 'Tarjeta de socio'),
  new Currency('Dólares CCL', (1074.32 * 1.23).toFixed(2), '1 a 3 hs', 'Se acredita en tu cuenta comitente de tu agente de preferencia.', './img/dolar.png', 'Agente'),
  new Currency('Euros CCL', (1391.11 * 1.23).toFixed(2), '1 a 3 hs', 'Se acredita en tu cuenta comitente de tu agente de preferencia en el exterior.', './img/euro.png', 'Agente'),
  new Currency('Yuanes CCL', (780.56 * 1.23).toFixed(2), '10 a 15 min', 'Se transfiere a tu tarjeta de socio en tu chino afiliado más cercano.', './img/yuan.png', 'Tarjeta de socio'),
  new Currency('Dólares crypto', (1074.32 / 1.17).toFixed(2), '15 a 30 min', 'Se transfiere a tu wallet de preferencia.', './img/dolar.png', 'Wallet digital'),
  new Currency('Euros crypto', (1391.11 / 1.17).toFixed(2), '15 a 30 min', 'Se transfiere a tu wallet de preferencia.', './img/euro.png', 'Wallet digital'),
  new Currency('Yuanes crypto', (780.56 / 1.17).toFixed(2), '15 a 30 min', 'Se transfiere a tu wallet digital del Banco Central de China.', './img/yuan.png', 'Wallet digital'),
];

console.table(currencies)