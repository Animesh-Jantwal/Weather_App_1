const api_key = "=91786ef1ff46d285feec730a53b2a028&units";
const api_url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=dehradun";


async function checkweather(params) {
    const response = await fetch(api_url + `&appid =${api_key}`);
    var data = await response.json();
}