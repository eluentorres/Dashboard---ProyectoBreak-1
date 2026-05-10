const timeElement = document.getElementById("time");
const dateElement = document.getElementById("date");
const messageElement = document.getElementById("message");

function formatNumber(num) {
  return num < 10 ? "0" + num : num;
}

function updateClock() {
  const now = new Date();

  const hours = formatNumber(now.getHours());
  const minutes = formatNumber(now.getMinutes());
  const seconds = formatNumber(now.getSeconds());

  const day = formatNumber(now.getDate());
  const month = formatNumber(now.getMonth() + 1);
  const year = now.getFullYear();

  timeElement.textContent = `${hours}:${minutes}:${seconds}`;
  dateElement.textContent = `${day}/${month}/${year}`;

  const totalMinutes = now.getHours() * 60 + now.getMinutes();

  if (totalMinutes >= 1 && totalMinutes <= 420) {
    messageElement.textContent = "😴 Es hora de descansar. Hasta mañana.";
  } else if (totalMinutes >= 421 && totalMinutes <= 720) {
    messageElement.textContent = "☀️ Buenos días, desayuna fuerte y a darle al código.";
  } else if (totalMinutes >= 721 && totalMinutes <= 840) {
    messageElement.textContent = "🍽️ Echa un rato más pero no olvides comer.";
  } else if (totalMinutes >= 841 && totalMinutes <= 960) {
    messageElement.textContent = "😄 Espero que hayas comido bien.";
  } else if (totalMinutes >= 961 && totalMinutes <= 1080) {
    messageElement.textContent = "💪 Buenas tardes, toca el último empujón.";
  } else if (totalMinutes >= 1081 && totalMinutes <= 1320) {
    messageElement.textContent = "🔥 ... piensa en parar pronto.";
  } else {
    messageElement.textContent = "🌙 Buenas noches, es hora de desconectar y descansar.";
  }
}

updateClock();
setInterval(updateClock, 1000);