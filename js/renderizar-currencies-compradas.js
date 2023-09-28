function guardarOperaciones(divisaSeleccionada) {
  const contenedorOverlay = document.getElementById("overlay");
  currenciesCompradas.push(divisaSeleccionada);
  console.log(currenciesCompradas);
  contenedorOverlay.style.display = "none";
}
