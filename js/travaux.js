gsap.registerPlugin(ScrollTrigger);

// Sélection des éléments
const col2 = document.querySelector(".container-desktop .col-2");
const col2Elements = {
    titre: col2.querySelector(".titre"),
    p: col2.querySelector(".col-2-p"),
    images: col2.querySelector(".images"),
};

// Création du ScrollTrigger pour `col2`
ScrollTrigger.create({
    trigger: col2,
    start: "top top+=8%",
    end: "bottom center",
    pin: ".col-text",
});

// Animation des titres et paragraphes de `.col-2`
gsap.timeline({
    scrollTrigger: {
        trigger: col2,
        start: "top bottom-=20%",
        toggleActions: "play none none reverse",
    }
})
.from([col2Elements.titre, col2Elements.p], {
    opacity: 0,
    x: -50,
    duration: 0.3,
    stagger: 0.2 // Ajoute un décalage automatique
})
.from(col2Elements.images, {
    opacity: 0,
    x: 50,
    duration: 0.3,
    stagger: 0.2 // Ajoute un décalage automatique
});





// Animation des éléments liés aux triggers
const triggers = gsap.utils.toArray("[id^='trigger-']");
const items = gsap.utils.toArray("[id^='item-']");

triggers.forEach((trigger, i) => {
    if (!items[i]) return; // Vérifie si l'élément correspondant existe

    gsap.from(items[i], {
        opacity: 0,
        x: -50,
        duration: 0.3,
        ease: "power2.out",
        scrollTrigger: {
            trigger,
            start: "top center-=10%",
            toggleActions: "play none none reverse",
            pinSpacing: false,
        }
    });
});



const col1 = document.querySelectorAll(".anim");

console.log(col1);

col1.forEach((col1Item) => {
    let titre = col1Item.querySelector(".titre");
    let texte = col1Item.querySelector(".texte");


    gsap.
    timeline({
        scrollTrigger: {
            trigger: col1Item,
            start: "top bottom-=15%",
            toggleActions: "play none none reverse",

        }
        })
        .from( titre , {
        opacity: 0,
        y : 50,
        duration : 0.3 ,
        })
        .from( texte , {
            opacity: 0,
            y : 50,
            duration : 0.3,
        })

});


const col2P = document.querySelector(".container-phone .col-2");
const col2PElements = {
    titre: col2P.querySelector(".titre"),
    p: col2P.querySelector(".col-2-p")
};

gsap.timeline({
    scrollTrigger: {
        trigger: col2P,
        start: "top center",
        toggleActions: "play none none reverse",
    }
})
.from([col2PElements.titre, col2PElements.p], {
    opacity: 0,
    x: -50,
    duration: 0.3,
    stagger: 0.2 // Ajoute un décalage automatique
})


const col50 = document.querySelectorAll(".container-phone .col-50");

col50.forEach((col50Item) => {
    let point = col50Item.querySelector(".point");
    let ul = col50Item.querySelector("ul");
    let img = col50Item.querySelector(".images");

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: col50Item,
            start: "top center",
            toggleActions: "play none none reverse",
        }
    });

    if (point) {
        tl.from(point, {
            opacity: 0,
            x: -50,
            duration: 0.3,
        });
    }

    if (ul) {
        tl.from(ul, {
            opacity: 0,
            x: -50,
            duration: 0.3,
        });
    }

    if (img) {
        tl.from(img, {
            opacity: 0,
            x: 50,
            duration: 0.3,
        });
    }
});
