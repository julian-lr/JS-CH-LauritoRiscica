// renderizar operaciones
const contenedorOperaciones = document.getElementById("contenedorOperaciones");

//function para generar la lista de operaciones
function renderizarListaOperaciones(listaOperaciones) {
  contenedorOperaciones.innerHTML = "";

  for (const operacion of listaOperaciones) {
    contenedorOperaciones.innerHTML += `
    <div class="operacion">
      <img src="${operacion.img}" class="operacion-side-img" alt="${operacion.type}" />
      <div class="operacion-body">
        <h5 class="operacion-title">${operacion.type}</h5>
        <h6 class="operacion-subtitle">
                  Cantidad adquirida: N/A
        </h6>
        <p class="operacion-text">
        Estado: N/A
        </p>
      </div>
    </div>
    `;
  }
}