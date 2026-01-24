49.7706695112242, 6.641893230214196
41.05957287674173, -111.9723354979789

const currentTemp = document.querySelector('#curtemp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const forecast = document.querySelector(`#forecast`);
const forUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=41.05&lon=-111.97&units=imperial&appid=e66129b6c789dd6105a6da327ca0989d`;
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=41.05&lon=-111.97&units=imperial&appid=e66129b6c789dd6105a6da327ca0989d';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data); // testing only
            displayResults(data); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

async function apiFetch2() {
    try {
        const response2 = await fetch(forUrl);
        if (response2.ok) {
            const data2 = await response2.json();
            // console.log(data2); // testing only
            displayResults2(data2); // uncomment when ready
        } else {
            throw Error(await response2.text());
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

function displayResults2(data2) {
    let today = new Date().getDay();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day1 = document.createElement('p');
    let day2 = document.createElement('p');
    let day3 = document.createElement('p');

    if (today === 6) {
        today = 0;
    }
    else {
        today++;
    }

    day1.textContent = `${days[today]}: ${data2.list[0].main.temp}°F`;

    if (today === 6) {
        today = 0;
    }
    else {
        today++;
    }

    day2.textContent = `${days[today]}: ${data2.list[11].main.temp}°F`;

    if (today === 6) {
        today = 0;
    }
    else {
        today++;
    }

    day3.textContent = `${days[today]}: ${data2.list[21].main.temp}°F`;

    forecast.appendChild(day1);
    forecast.appendChild(day2);
    forecast.appendChild(day3);


}

apiFetch();
apiFetch2();