// declaración de todas las variables globales vacías
let currencyPicked;
let amountToPay;
let finalCostUSD;
let finalCostEUR;
let finalCostCNY;
let carrito = [];

//-------------------------------------------------------------------------

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
        Entrega en  : ${divisa.delivery}
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

// loggeo de click para posterior generación de carrito
let buttons = document.getElementsByClassName('compra');

for (const button of buttons) {
  button.addEventListener('click', () => {
    console.log(`hiciste click en el boton id ${button.id}`);
    const divACarro = currencies.find((divisa) => divisa.id == button.id);
    console.log(divACarro);
    agregarAlCarrito(divACarro);

  });

  button.onmouseover = () =>
  button.classList.replace('btn-warning', 'btn-secondary');
  button.onmouseout = () =>
  button.classList.replace('btn-secondary', 'btn-warning');
}


// tablaBody para loggear que este agregando bien al carrito con el html
const tablaBody = document.getElementById('tablaBody');

function agregarAlCarrito(divisa) {
  carrito.push(divisa);
  console.table(carrito);
  alert(`Agregaste ${divisa.type} al carrito`);

  //agregar producto a la tabla
  tablaBody.innerHTML += `
    <tr>
        <td>${divisa.id}</td>
        <td>${divisa.type}</td>
        <td>${divisa.valueInARS}</td>
    </tr>
    `;
}
