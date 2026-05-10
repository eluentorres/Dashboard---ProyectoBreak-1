const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const weatherInfo = document.getElementById("weatherInfo");
const forecastContainer = document.getElementById("forecast");
const miniForecast = document.getElementById("miniForecast");


const apiKey = "0ccf125894844a5291e135927260805 ";

if (cityInput && searchBtn && weatherInfo) {

  async function getWeather(city) {
    try {
      weatherInfo.innerHTML = "<p>Cargando...</p>";

      if (forecastContainer) forecastContainer.innerHTML = "";
      if (miniForecast) miniForecast.innerHTML = "";

      const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=1&aqi=no&alerts=no`;

      const response = await fetch(url);
      const data = await response.json();

      if (data.error) {
        weatherInfo.innerHTML = `<p>❌ Ciudad no encontrada</p>`;
        return;
      }

      const location = data.location;
      const current = data.current;
      const forecastHours = data.forecast.forecastday[0].hour;


      weatherInfo.innerHTML = `
        <h3>${location.name}, ${location.country}</h3>
        <p>${current.condition.text}</p>
        <img src="https:${current.condition.icon}" alt="icon">
        <p class="temp">${current.temp_c}°C</p>

        <div class="details">
          <p>💧 ${current.humidity}%</p>
          <p>🌧️ ${current.precip_mm} mm</p>
          <p>💨 ${current.wind_kph} km/h</p>
        </div>
      `;


      if (forecastContainer) {
        forecastHours.forEach((hour) => {
          const hourDiv = document.createElement("div");
          hourDiv.classList.add("hour-card");

          const hourText = hour.time.split(" ")[1];

          hourDiv.innerHTML = `
            <p>${hourText}</p>
            <img src="https:${hour.condition.icon}" alt="icon">
            <p><strong>${hour.temp_c}°C</strong></p>
          `;

          forecastContainer.appendChild(hourDiv);
        });
      }

      // Mini 
      if (miniForecast) {
        const currentHour = new Date().getHours();
        const nextHours = forecastHours.slice(currentHour, currentHour + 5);

        nextHours.forEach((hour) => {
          const miniDiv = document.createElement("div");
          miniDiv.classList.add("mini-hour");

          const hourText = hour.time.split(" ")[1];

          miniDiv.innerHTML = `
            <p>${hourText}</p>
            <img src="https:${hour.condition.icon}" alt="icon">
            <p><strong>${hour.temp_c}°C</strong></p>
          `;

          miniForecast.appendChild(miniDiv);
        });
      }

    } catch (error) {
      weatherInfo.innerHTML = "<p>❌ Error al conectar con la API</p>";
      console.log(error);
    }
  }

  searchBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();

    if (city === "") {
      alert("Escribe una ciudad");
      return;
    }

    getWeather(city);
  });

  getWeather("Madrid");
}



