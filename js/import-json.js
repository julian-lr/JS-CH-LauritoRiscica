let currencies = [];

fetch("./data/divisas.json")
  .then((response) => response.json())
  .then((data) => {
    currencies = data;
    renderizarDivisas(currencies);

    // loggeo de click+recoloración de cta compra con mouseover y mouseout, más que nada para testeo es esto.
    let buttons = document.getElementsByClassName("compra");

    for (const button of buttons) {
      button.onmouseover = () =>
        button.classList.replace("btn-warning", "btn-secondary");
      button.onmouseout = () =>
        button.classList.replace("btn-secondary", "btn-warning");
      button.addEventListener("click", () => {
        const currencyId = parseInt(button.id);
        showCurrencyOverlay(currencyId);
      });
    }
  })
  .catch((error) => {
    console.error("Error obteniendo data:", error);
  });
