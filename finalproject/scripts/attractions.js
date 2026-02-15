import { attraction } from '../data/info.mjs';
let cards = document.querySelector(".discover");
let popup = document.querySelector("#moreinfo");
let modalname = document.querySelector("#modalname");
let modaldesc = document.querySelector("#modaldesc");

function displayItems(attraction) {
    attraction.forEach(x => {
        let card = document.createElement('section');
        let name = document.createElement('h3');
        let hours = document.createElement('p');
        let description = document.createElement('p');
        let image = document.createElement('img');

        name.textContent = `${x.name}`;
        hours.textContent = `${x.hours}`;
        description.textContent = `${x.description}`;
        image.setAttribute('src', x.image);
        image.setAttribute('alt', `${x.name}`);
        image.setAttribute('width', '300');
        image.setAttribute('height', '440');

        image.style.cursor = "pointer";

        image.addEventListener('click', () => {
            modalname.textContent = `${x.name}`;
            modaldesc.textContent = `${x.description}`;
            popup.showModal();
        });


        card.appendChild(name);
        card.appendChild(hours);
        card.appendChild(image);

        cards.appendChild(card);
    })
}

displayItems(attraction);

document.querySelector('#close-modal').addEventListener('click', () => {
    popup.close();
});
