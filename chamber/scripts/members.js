let membersData = [];

const members = document.querySelector('#members');
const grid = document.querySelector('#grid');
const list = document.querySelector('#list');
const sptlit = document.querySelector(`#sptlit`);

async function getMemberData() {
    const response = await fetch('./data/members.json');
    const data = await response.json();
    // console.table(data.members); // temporary testing of data response
    membersData = data.members;

    if (sptlit) {
        getSpotLight();
    }
}

function getSpotLight() {
    for (let i = 0; i < 2; i++) {
        let x = Math.floor(Math.random() * membersData.length);
        if (membersData[x].memberlevel !== 1) {

            let card = document.createElement('section');
            let name = document.createElement('h3');
            let address = document.createElement('p');
            let phone = document.createElement('p');
            let website = document.createElement('p');
            let image = document.createElement('img');
            let membershipLevel = document.createElement('p');

            name.textContent = `${membersData[x].name}`;
            address.textContent = `${membersData[x].address}`;
            phone.textContent = `${membersData[x].phone}`;
            website.textContent = `${membersData[x].website}`;
            image.setAttribute('src', membersData[x].image);
            image.setAttribute('alt', `${membersData[x].name}`);
            image.setAttribute('width', '340');
            image.setAttribute('height', '440');
            membershipLevel.textContent = `Membership Level: ${membersData[x].memberlevel}`;

            card.appendChild(name);
            card.appendChild(address);
            card.appendChild(phone);
            card.appendChild(website);
            card.appendChild(image);
            card.appendChild(membershipLevel);

            sptlit.appendChild(card);
        }
        else {
            i--;
        }

    }
}

if (grid) {
    grid.addEventListener("click", () => {
        members.innerHTML = '';
        members.classList.add('grid');
        members.classList.remove('list');
        membersData.forEach((member) => {

            let card = document.createElement('section');
            let name = document.createElement('h3');
            let address = document.createElement('p');
            let phone = document.createElement('p');
            let website = document.createElement('p');
            let image = document.createElement('img');
            let membershipLevel = document.createElement('p');

            name.textContent = `${member.name}`;
            address.textContent = `${member.address}`;
            phone.textContent = `${member.phone}`;
            website.textContent = `${member.website}`;
            image.setAttribute('src', member.image);
            image.setAttribute('alt', `${member.name}`);
            image.setAttribute('width', '340');
            image.setAttribute('height', '440');
            membershipLevel.textContent = `Membership Level: ${member.memberlevel}`;

            card.appendChild(name);
            card.appendChild(address);
            card.appendChild(phone);
            card.appendChild(website);
            card.appendChild(image);
            card.appendChild(membershipLevel);

            members.appendChild(card);
        });
    })
}


if (list) {
    list.addEventListener("click", () => {
        members.innerHTML = '';
        members.classList.add('list');
        members.classList.remove('grid');
        membersData.forEach((member) => {

            let card = document.createElement('section');
            let name = document.createElement('h3');
            let address = document.createElement('p');
            let phone = document.createElement('p');
            let website = document.createElement('p');
            let membershipLevel = document.createElement('p');

            name.textContent = `${member.name}`;
            address.textContent = `Address: ${member.address}`;
            phone.textContent = `Phone: ${member.phone}`;
            website.textContent = `${member.website}`;

            card.appendChild(name);
            card.appendChild(address);
            card.appendChild(phone);
            card.appendChild(website);

            members.appendChild(card);
        });
    })
}

getMemberData();