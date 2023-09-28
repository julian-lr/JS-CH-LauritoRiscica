// loggeo de click+recoloración de cta compra con mouseover y mouseout, más que nada para testeo es esto.
let buttons = document.getElementsByClassName('compra');

for (const button of buttons) {
  button.addEventListener('click', () => {
    const divACarro = currencies.find((divisa) => divisa.id == button.id);
    const currencyId = parseInt(button.id);
    showCurrencyOverlay(currencyId);
  });
  button.onmouseover = () =>
    button.classList.replace('btn-warning', 'btn-secondary');
  button.onmouseout = () =>
    button.classList.replace('btn-secondary', 'btn-warning');
}

