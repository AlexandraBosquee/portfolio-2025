document.querySelectorAll('.illu').forEach(illu => {
    const id = illu.id; // Ceci est correct, mais vérifie que chaque div avec la classe .illu a bien un `id`.
    fetch(`svg/${id}.svg`)
        .then(response => response.text())
        .then(svgContent => {
            const container = document.querySelector(`.illu#${id}`);
            container.innerHTML = svgContent;
        });
});




