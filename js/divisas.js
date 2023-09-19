// class + Constructor para darle formato al array de las currencies ----------------------------------
class Currency {
  constructor(type, valueInARS, delivery, description, img, location, id) {
    this.type = type;
    this.valueInARS = valueInARS;
    this.delivery = delivery;
    this.description = description;
    this.img = img;
    this.location = location;
    this.id = id;
  }
}

// array para las divisas ----------------------------------------------------
const currencies = [
  new Currency(
    'Dólares blue',
    1074.32,
    '24 a 48 hs',
    'Se entrega en tu estación de servicio más cercana.',
    './img/dolar.png',
    'En persona',
    1
  ),
  new Currency(
    'Euros blue',
    1391.11,
    '72 a 96 hs',
    'Se entrega en tu consulado europeo más cercano.',
    './img/euro.png',
    'En persona',
    2
  ),
  new Currency(
    'Yuanes blue',
    780.56,
    '3 a 6 hs',
    'Se entrega en tu ArgenChino más cercano*.',
    './img/yuan.png',
    'En persona',
    3
  ),
  new Currency(
    'Dólares MEP',
    (1074.32 * 1.12).toFixed(2),
    '1 a 3 hs',
    'Se transfiere a tu cuenta bancaria preferida.',
    './img/dolar.png',
    'Cuenta de banco',
    4
  ),
  new Currency(
    'Euros MEP',
    (1391.11 * 1.12).toFixed(2),
    '12 a 24 hs',
    'Se transfiere a tu cuenta bancaria en el exterior.',
    './img/euro.png',
    'Cuenta de banco',
    5
  ),
  new Currency(
    'Yuanes MEP',
    (780.56 * 1.12).toFixed(2),
    '1 a 3 hs',
    'Se deposita en una giftcard en tu chino afiliado más cercano.',
    './img/yuan.png',
    'Tarjeta de socio',
    6
  ),
  new Currency(
    'Dólares CCL',
    (1074.32 * 1.23).toFixed(2),
    '1 a 3 hs',
    'Se acredita en tu cuenta comitente de tu agente de preferencia.',
    './img/dolar.png',
    'Agente',
    7
  ),
  new Currency(
    'Euros CCL',
    (1391.11 * 1.23).toFixed(2),
    '3 a 12 hs',
    'Se acredita en tu cuenta comitente de tu agente de preferencia en el exterior.',
    './img/euro.png',
    'Agente',
    8
  ),
  new Currency(
    'Yuanes CCL',
    (780.56 * 1.23).toFixed(2),
    '10 a 15 min',
    'Se transfiere a tu tarjeta de socio en tu chino afiliado más cercano.',
    './img/yuan.png',
    'Tarjeta de socio',
    9
  ),
  new Currency(
    'Dólares crypto',
    (1074.32 / 1.17).toFixed(2),
    '15 a 30 min',
    'Se transfiere a tu wallet de preferencia.',
    './img/dolar.png',
    'Wallet digital',
    10
  ),
  new Currency(
    'Euros crypto',
    (1391.11 / 1.17).toFixed(2),
    '15 a 30 min',
    'Se transfiere a tu wallet de preferencia.',
    './img/euro.png',
    'Wallet digital',
    11
  ),
  new Currency(
    'Yuanes crypto',
    (780.56 / 1.17).toFixed(2),
    '15 a 30 min',
    'Se transfiere a tu wallet digital del Banco Central de China.',
    './img/yuan.png',
    'Wallet digital',
    12
  ),
];
