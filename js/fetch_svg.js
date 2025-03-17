document.querySelectorAll('.illu').forEach(illu => {
    const id = illu.id; // Ceci est correct, mais vérifie que chaque div avec la classe .illu a bien un `id`.
    console.log(id);
    fetch(`svg/${id}.svg`)
        .then(response => response.text())
        .then(svgContent => {
            const container = document.querySelector(`.illu#${id}`);
            container.innerHTML = svgContent;
        });
});


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