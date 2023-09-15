// Fecha y hora + locale
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