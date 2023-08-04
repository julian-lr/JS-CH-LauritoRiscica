//Sintaxis y variables de JS

//Declaración de variable
let nombre;

//Inicialización de la variable
nombre = 'Julián'; //dato tipo string

//Declarar e incializar al mismo tiempo
let resultado = 10; //dato tipo number

//Constantes
const copaDelMundoMessi = 2022;
const copaDelMundoMaradona = 1986;
const nacArgentina = 1816;

//Operaciones matematicas basicas
let suma = resultado + 90;
let resta = copaDelMundoMessi - copaDelMundoMaradona;
let multiplicacion = resultado * 10;
let division = resultado / 2;

//Concatenacion
let saludo = 'Hola ' + nombre + ', '; 
let nota = 'tenes un ' + resultado + ' en tu entrega.';
let completo = saludo + nota;

//Ingreso de datos con prompt
let nombreIngresado = prompt('Ingrese su nombre');

//Convertir prompt a numero
//parseInt si quiero convertir a un numero entero
//parseFloat si quiero convertir a un numero decimal
let anoNacim = parseInt(prompt('Ingresa tu año de nacimiento'));
let edad = 2023 - anoNacim;

console.log('El nombre del usuario es ' + nombreIngresado + ' y su edad es de ' + edad + ' años.');
