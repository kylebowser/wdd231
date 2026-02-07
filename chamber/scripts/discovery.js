import { interest } from '../data/info.mjs';
let cards = document.querySelector(".discover");

function displayItems(interest) {
    interest.forEach(x => {
        let card = document.createElement('section');
        let name = document.createElement('h3');
        let address = document.createElement('address');
        let description = document.createElement('p');
        let image = document.createElement('img');

        name.textContent = `${x.name}`;
        address.textContent = `${x.address}`;
        description.textContent = `${x.description}`;
        image.setAttribute('src', x.image);
        image.setAttribute('alt', `${x.name}`);
        image.setAttribute('width', '300');
        image.setAttribute('height', '440');

        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(description);
        card.appendChild(image);

        cards.appendChild(card);
    })
}

displayItems(interest);