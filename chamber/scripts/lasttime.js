const now = Date.now();

const message = document.querySelector("#return");

if (localStorage.getItem("lastVisit")) {
    let lastTime = JSON.parse(localStorage.getItem("lastVisit"));
    let daysSince = (now - lastTime) / 86400000;

    if (daysSince < 1) {
        message.textContent = `Back so soon! Awesome!`;
    }
    else if (daysSince === 1) {
        message.textContent = `You last visited ${daysSince.toFixed(0)} day ago.`;
    }
    else {
        message.textContent = `You last visited ${daysSince.toFixed(0)} days ago.`;
    }
}
else {
    message.textContent = `Welcome! Let us know if you have any questions.`;
    localStorage.setItem('lastVisit', JSON.stringify(now));
}

localStorage.setItem(key, JSON.stringify(now));