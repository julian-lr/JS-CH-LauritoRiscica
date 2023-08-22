//Sintaxis y variables de JS

//Declaración de variable

// let nombre;

//Inicialización de la variable
//nombre = 'Julián'; dato tipo string

//Declarar e incializar al mismo tiempo
// let resultado = 10; dato tipo number

//Constantes

//  const copaDelMundoMessi = 2022;
//  const copaDelMundoMaradona = 1986;
//  const nacArgentina = 1816;
 

//Operaciones matematicas basicas

//  let suma = resultado + 90;
//  let resta = copaDelMundoMessi - copaDelMundoMaradona;
//  let multiplicacion = resultado * 10;
//  let division = resultado / 2;


//Concatenacion

//  let saludo = 'Hola ' + nombre + ', ';
//  let nota = 'tenes un ' + resultado + ' en tu entrega.';
//  let completo = saludo + nota;
 

//Ingreso de datos con prompt
//let nombreIngresado = prompt('Ingrese su nombre');

//Convertir prompt a numero
//parseInt si quiero convertir a un numero entero
//parseFloat si quiero convertir a un numero decimal

//  let anoNacim = parseInt(prompt('Ingresa tu año de nacimiento'));
//  let edad = 2023 - anoNacim;

//  console.log('El nombre del usuario es ' + nombreIngresado + ' y su edad es de ' + edad + ' años.'); 
 

//=====================SIGUIENTE CLASE A PARTIR DE ABAJO============================================
/*
let fuiAVotar = prompt('Responde con SI o NO si fuiste a votar');

 if (fuiAVotar.toLowerCase() == 'si') {
   console.log('Perdiste tiempo un domingo.');
 } else if (fuiAVotar.toLowerCase() == 'no') {
   console.log('Tenes que pagar 100 pesos por no ir, una ganga.');
 } else {
   console.log('Pusiste cualquier boludez, salame.');
   prompt('Responde con SI o NO si fuiste a votar');
} 

const vehicleYear = parseInt(
  prompt('Ingresá el año de patentado de tu vehículo')
);
const currentYear = 2023;

let amountToPay;

if (currentYear - vehicleYear > 20) {
  amountToPay = 3000;
} else {
  amountToPay = 10000;
}
console.log('Tenes que pagar $' + amountToPay + ' pesos.');
*/

//=====================SIGUIENTE CLASE A PARTIR DE ABAJO============================================
/*
 let precio=parseFloat(prompt('Ingresá el precio de tu producto'));
 let precioIva=precio*0.21;
 console.log('El IVA del precio $'+precio+' es: $'+precioIva);
 


for (let i = 1; i <= 20; i++) {
let ingresarNombre = prompt('Ingresar nombre');
alert('Turno número '+i+ ' Nombre: '+ingresarNombre);
}



let user;
let pwd;

for(let i=1; i<=3; i++) {
  user=prompt('Ingresá tu nombre de usuario');
  pwd=prompt('Ingresá tu clave');
  if((user == 'jose') && (pwd == '1111')) {
    alert('Welcome back '+user+'!');
    break;
  }else{
    alert('Usuario y/o contraseña incorrecta. Te quedan '+(3-i)+' intentos.');
  }
}



let idProducto = prompt('Ingresa ID del producto (Ingresá 0 para salir)');

while (idProducto != '0') {
  switch (idProducto) {
    case '1212':
      alert('Mouse ... $5699');
      break;
    case '3333':
      alert('Teclado... $5699');
      break;
    case '5555':
      alert('Monitor... $100000');
      break;
    case '9999':
      alert('Auricular... $59200');
      break;
    default:
      alert('Sin stock');
      break;
  }
  idProducto = prompt('Ingresa ID del producto (Apretar 0 para salir)');

}

*/
// ----------------------CLASE DE FUNCIONES----------------------------
/*
//declaracion
 function welcome() {
  let user = prompt('Cual es tu nombre?');
  alert('Bienvenido/a ' + user +'!');
}

//invocación
//welcome();


let envio = prompt('Desea envio a domicilio? \n 1- Si \n 2- No');
let necesitaEnvio;

if (envio == '1') {
    necesitaEnvio=true;
}
else if (envio == '2') {
  necesitaEnvio=false;
}
else {
  alert('Ingresaste un valor incorrecto.');
}

let total = 3400;

function informarEnvio(eleccionEnvio, montoTotal){
  if(eleccionEnvio==true) {
    alert('Proximamente recibiras el pedido, debes abonar $'+montoTotal);
  }
  else {
    alert('Debes retirar por el local y abonar $'+montoTotal);
  }
}

informarEnvio(necesitaEnvio, total);



function authUser(user,pwd) {
  if((user=='admin') && (pwd == '1234')) {
    return true;
  }
  else {
    return false;
  }
}

let user = prompt('Ingresá tu usuario');
let pwd = prompt('Ingresá tu contraseña');

let authResult = authUser(user,pwd);

console.log(authResult);



function calculateDiscount(total, percentage) {
  let discount = total * (percentage / 100);
  return discount;
}

let finalAmount = parseFloat(prompt('Ingrese el monto total de su compra'));
let paymentMethod = prompt(
  'Elija su modo de pago: \n 1- Efectivo \n 2- Debito \n 3- Credito'
);
switch (paymentMethod) {
  case '1':
    let discountCash = calculateDiscount(finalAmount, 30);
    alert('Tenés un descuento de $' + discountCash);
    break;
  case '2':
    let discountDebit = calculateDiscount(finalAmount, 15);
    alert('Tenés un descuento de $' + discountDebit);
    break;
  case '3':
    let discountCredit = calculateDiscount(finalAmount, 15);;
    alert('Tenés un recargo de $' + discountCredit + '.\nEs ilegal? Si. Nos importa? No.');
    break;
  default:
    alert('Error');
    break;
}



//scope de una variable

let province = 'Buenos Aires'

function observeCityOrigin(){
  let userCity = 'Ituzaingó';
  console.log(userCity+ ", "+province);
}

observeCityOrigin();



// funciones anonimas y funciones flecha
//const squaredResult = function (num)  {return num * num};
//console.log(squaredResult(parseInt(prompt('Insertá un número.'))));

//const area = (base,altura) => base * altura;
//console.log('El area del rectangulo de base 3 y de altura 2 es '+area(3,2));

//const discount = (total,percentage) => total * (percentage/100);
*/

// ----------------- SIGUIENTE CLASE---------------
// objetos
// literales
/*
const fibra = {
  color: 'negro',
  marca: 'faber',
  precio: 700,
  vendido: false,
};

console.log(fibra);
console.log('El color de la fibra es: ' + fibra.color);

fibra.precio = 1000;

console.log(fibra);
console.log(fibra['color']);
*/

//funcion constructora
/*
function Remera(color, talle, marca) {
  this.color = color;
  this.talle = talle;
  this.marca = marca;
  //metodos
  this.mostrarRemera = function () {
    alert(
      'Remera color: ' +
        this.color +
        '\nTalle: ' +
        this.talle +
        '\nMarca: ' +
        this.marca
    );
  };
}

const remera1 = new Remera('roja', 'XL', 'Polo');
const remera2 = new Remera('blanca', 'XL', 'Polo');
const remera3 = new Remera('negra', 'XL', 'Polo');
const remera4 = new Remera('azul', 'XL', 'Polo');

console.log(remera1);
console.log(remera2);
console.log(remera3);
console.log(remera4);

remera4.mostrarRemera();
*/

// metodos de strings
/*
let frase = 'Persevera y triunfarás!';

console.log('La frase tiene ' + frase.length + ' caracteres.');

console.log(frase.toUpperCase());

console.log(frase.toLowerCase());
*/

// Class
/*
class Computadora {
  constructor(tipo, marca, precio) {
    this.tipo = tipo;
    this.marca = marca;
    this.precio = precio;
    this.vendido=false;
  }
  //metodos
  venderCompu(){
    this.vendido=true;
  }
  aumentarPrecio(porcentaje){
    this.precio=this.precio * porcentaje;
  }
}

const compu1 = new Computadora('Desktop', 'DELL', 1700);
const compu2 = new Computadora('Desktop','HP', 1500);
const compu3 = new Computadora('Laptop','Apple', 2500);

compu3.venderCompu();

let aumento = parseInt(prompt('Ingresá el aumento que queres aplicar.'))
compu3.aumentarPrecio(1+(aumento/100));

console.log(compu3);
*/


//-------------------CLASE DE ARRAYS---------------------------------------------------------

//listas
const listaCompras = ['salamin','queso','vino','coca cola','frutos secos','hielo','fernet','pan','aceitunas','paté'];
//console.log(listaCompras[0]+' y '+listaCompras[1]);

//recorrido del array
for(let i=0; i<listaCompras.length; i++) {
  console.log(listaCompras[i]);
}

//metodo push agrega elemento al final
listaCompras.push('jamon');


//metodo unshift agrega elemento desde la pos 0
listaCompras.unshift('mortadela');

//eliminar con metodos pop y shift
listaCompras.pop();
listaCompras.shift();

//metodo splice
listaCompras.splice(4,2)

console.log(listaCompras);