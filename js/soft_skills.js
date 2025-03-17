document.querySelectorAll('.racine').forEach(illu => {
    const id = illu.id; 
    fetch(`svg/${id}.svg`)
        .then(response => response.text())
        .then(svgContent => {
            const container = document.querySelector(`.racine#${id}`);
            container.innerHTML = svgContent;
        });
});


const startPositions = {
    "racine_2": "top center+=20%",
    "racine_3": "top+=30% center+=20%",
    "racine_5": "top+=20% center+=20%",
    "racine_7": "top+=30% center+=20%",

};


gsap.utils.toArray(".racine-groupe").forEach((groupe) => {
    let racine = groupe.querySelector(".racine");
    let directionX = groupe.classList.contains("left") ? 50 : -50;
    let racineId = racine.id; // Récupère l'ID de la racine
    let startPosition = startPositions[racineId] || "center center+=20%";
    let adj = groupe.querySelectorAll("span");


    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: groupe,
            start: startPosition, 
            toggleActions: "play none none none",
            scrub : 1,
            end: "bottom center"

        }
    });

    tl.from(racine, {
        scaleY: 0, 
        scaleX: 0, 
        transformOrigin: "top center", 
        opacity: 0, 
        y: -100, 
        x: directionX, 
        duration: 1, 
        ease: "power2.out",
    })
    .from(adj, {
        opacity: 0, 
        x: directionX,
        delay: "-0.5",
    });


}); 