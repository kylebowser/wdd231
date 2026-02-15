
21.16273152571937, -86.84954230561468

const currentTemp = document.querySelector('#curtemp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const forecast = document.querySelector(`#forecast`);
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=21.16&lon=-86.84&units=imperial&appid=e66129b6c789dd6105a6da327ca0989d';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data); // testing only
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}


function displayResults(data) {
    currentTemp.innerHTML = `Current Temp: ${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}

apiFetch();