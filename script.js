const api_key = "91786ef1ff46d285feec730a53b2a028";  
const api_url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=dehradun&appid=" + api_key;


async function checkweather() {
    const response = await fetch(api_url + `&appid =${api_key}`);
    var data = await response.json();
    console.log(data);


document.querySelector(".City").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.wind.speed + " m/s";
}

checkweather();