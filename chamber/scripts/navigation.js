// const mainnav = document.querySelector('.header');
// const hambutton = document.querySelector('#menu');

// hambutton.addEventListener('click', () => {
//     mainnav.classList.toggle('show');
//     hambutton.classList.toggle('show');
// });

const navButton = document.querySelector('#nav-button');
const mainNav = document.querySelector('.header');

navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    mainNav.classList.toggle('show');

});