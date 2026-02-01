const modalN = document.querySelector("#signupN");
const openModalN = document.querySelector(".open-buttonN");
const closeModalN = document.querySelector(".close-buttonN");

const modalB = document.querySelector("#signupB");
const openModalB = document.querySelector(".open-buttonB");
const closeModalB = document.querySelector(".close-buttonB");

const modalS = document.querySelector("#signupS");
const openModalS = document.querySelector(".open-buttonS");
const closeModalS = document.querySelector(".close-buttonS");

const modalG = document.querySelector("#signupG");
const openModalG = document.querySelector(".open-buttonG");
const closeModalG = document.querySelector(".close-buttonG");

openModalN.addEventListener("click", () => {
    modalN.showModal();
});

closeModalN.addEventListener("click", () => {
    modalN.close();
});

openModalB.addEventListener("click", () => {
    modalB.showModal();
});

closeModalB.addEventListener("click", () => {
    modalB.close();
});

openModalS.addEventListener("click", () => {
    modalS.showModal();
});

closeModalS.addEventListener("click", () => {
    modalS.close();
});

openModalG.addEventListener("click", () => {
    modalG.showModal();
});

closeModalG.addEventListener("click", () => {
    modalG.close();
});