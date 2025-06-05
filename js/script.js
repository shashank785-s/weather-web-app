const apiKey = "45e816ef7adad79f6a41f608d317e492"; // ✅ Replace with your real API key (no \n!)

function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const resultDiv = document.getElementById("weatherResult");

  if (!city) {
    resultDiv.innerHTML = "Please enter a city name.";
    return;
  }

  // Add country code to improve accuracy
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},IN&appid=${apiKey}&units=metric`)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found.");
      }
      return response.json();
    })
    .then(data => {
      const temp = data.main.temp;
      const desc = data.weather[0].description;
      resultDiv.innerHTML = `🌡️ Temperature in ${city}: ${temp}°C<br>🌥️ Description: ${desc}`;
    })
    .catch(error => {
      resultDiv.innerHTML = error.message;
    });
}
