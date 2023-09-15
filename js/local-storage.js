// para simular como que el número de operaciones va cambiando, vamos a trabajar con el local storage
let currentNumber = localStorage.getItem('currentNumber');

// si no esta guardado el número, lo forzamos a que sea 0
if (currentNumber === null) {
  currentNumber = 0;
} else {
  // si está almacenado, lo analizamos como un entero
  currentNumber = parseInt(currentNumber, 10);
}

// generador de numeros para simular el número de operación, bastante básico
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