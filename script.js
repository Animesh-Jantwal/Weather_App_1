const api_key = "91786ef1ff46d285feec730a53b2a028";  
const api_url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const search_box = document.querySelector(".search input");
const search_btn = document.querySelector(".search button");
const weather_icon = document.querySelector(".weather_icon");

async function checkweather(city) {
    const response = await fetch(api_url + city + `&appid=${api_key}`);

    var data = await response.json(); // Parse data first

    // Check for a city not found error using the 'cod' property in the data object
    if (data.cod === "404") {
        document.querySelector(".error").style.display = "block";       
        document.querySelector(".weather").style.display = "none";       
    } else {
        // If the city is found, display weather information
        document.querySelector(".City").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " m/s";

        // Update weather icon based on condition
        if (data.weather[0].main === "Clouds") {
            weather_icon.src = "images/clouds.png";
        } else if (data.weather[0].main === "Rain") {
            weather_icon.src = "images/rain.png";
        } else if (data.weather[0].main === "Drizzle") {
            weather_icon.src = "images/drizzle.png";
        } else if (data.weather[0].main === "Mist") {
            weather_icon.src = "images/mist.png";
        }

        // Display weather and hide error message
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

// Add event listener to search button
search_btn.addEventListener("click", () => {
    const city = search_box.value.trim();
    checkweather(city);
});
