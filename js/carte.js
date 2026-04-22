const carte = document.querySelector("#carte");

carte.addEventListener('click', (event) => {
    document.querySelector(`.carte`).classList.add('visible');
    document.querySelector(`.f-index`).classList.add('index');
});

const btnX = document.querySelector(".btn-x")

btnX.addEventListener('click', (event) => {
    document.querySelector(`.carte`).classList.remove('visible');
    document.querySelector(`.f-index`).classList.remove('index');
});
