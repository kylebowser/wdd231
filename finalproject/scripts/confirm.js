const infoList = document.querySelector('#info')

let formArray = getFormInputs() || [];

formArray.forEach(info => {
    displayInfo(info);
});

function getFormInputs() {
    return JSON.parse(localStorage.getItem('autoFill'));
}

function displayInfo(info) {
    const li = document.createElement('li');
    li.textContent = info;
    infoList.append(li)
}
