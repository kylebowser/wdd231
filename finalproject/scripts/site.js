const year = document.querySelector("#current-year");

// use the date object
const today = new Date();

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

document.getElementById("lastModified").innerHTML = `Last Modified: <span class="highlight">${document.lastModified}</span>`;

const mainnav = document.querySelector('.header');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

// local storage signup inputs and auto render when revisited
const fname = document.querySelector('#fname');
const lname = document.querySelector('#lname');
const phone = document.querySelector('#phone');
const email = document.querySelector('#email');
const submit = document.querySelector('#submit');
const infoList = document.querySelector('#info')

let formArray = getFormInputs() || [];

// formArray.forEach(info => {
//     displayInfo(info);
// });

for (let i = 0; i < formArray.length; i++) {
    if (i == 0) {
        fname.value = formArray[i];
    }
    else if (i == 1) {
        lname.value = formArray[i];
    }
    else if (i == 2) {
        phone.value = formArray[i];
    }
    else if (i == 3) {
        email.value = formArray[i];
    }
}

submit.addEventListener('click', () => {
    clearArray();

    formArray.push(fname.value);
    formArray.push(lname.value);
    formArray.push(phone.value);
    formArray.push(email.value);

    clearLS();
    setformLS();
});


function clearLS() {
    localStorage.removeItem('autoFill');
}

function clearArray() {
    formArray.length = 0;
}

function setformLS() {
    localStorage.setItem('autoFill', JSON.stringify(formArray));
}

function getFormInputs() {
    return JSON.parse(localStorage.getItem('autoFill'));
}

function displayInfo(info) {
    const li = document.createElement('li');
    li.textContent = info;
    infoList.append(li)
}


