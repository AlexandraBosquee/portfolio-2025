gsap.registerPlugin(ScrollTrigger);

    const timeline = document.querySelector(".timeline");

        gsap.killTweensOf(timeline);
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());

        if (window.innerWidth > 768) {
            gsap.to(timeline, {
                x: () => -(timeline.scrollWidth - (window.innerWidth / 2)), 
                ease: "none",
                scrollTrigger: {
                    trigger: timeline,
                    start: "top-=100 top",
                    end: () => `+=${timeline.scrollWidth * 2}`, 
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true
                }
            })
        };




/* TIMELINE ETUDES ----------------------------------------------------------- */

/* Trouver % width*/

    function getColMinWidth() {
        let col = document.querySelector(".timeline_etudes .col-1");
        if (!col) {
            console.error("Élément .col-1 non trouvé !");
            return 100; // Valeur par défaut
        }

        let minWidth = window.getComputedStyle(col).minWidth;

        if (minWidth.includes("%")) {
            let parentWidth = col.parentElement.clientWidth;
            return (parseFloat(minWidth) / 100) * parentWidth;
        } else {
            return parseFloat(minWidth);
        }
    }


/* Apparition elements*/

        let isMobile = window.innerWidth <= 768;
        let cols = document.querySelectorAll(".timeline_etudes .col-1");


        cols.forEach((element, index) => {
            let beforeLine = element.querySelector(".before");
            let afterLine = element.querySelector(".after");
            let annee = element.querySelector("h2");
            let etude = element.querySelector(".etude");
            let texte = element.querySelector("p");

            let btn = element.querySelector(".btn");
            let interaction = element.querySelector(".interaction");

            let colMinWidth = getColMinWidth();
            let factor = colMinWidth / window.innerWidth * 2;

            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: element,
                    start: isMobile 
                        ? `top center`  
                        : `left+=${index * window.innerWidth * factor} bottom`,  
                    end: isMobile 
                        ? `bottom center`  
                        : `right+=${index * window.innerWidth * factor} bottom`,  
                    toggleActions: "play none none none",
                    pinSpacing: isMobile ? true : false,
                }
            });

            if (isMobile) {
                tl.from(annee, { y: 50, opacity: 0, duration: 0.3 })  
                  .from(etude, { y: 50, opacity: 0, duration: 0.3 })
                  .from(texte, { y: 50, opacity: 0, duration: 0.3 })
                  .to(afterLine, { scaleY: 1, ease: "none" })
                  .to(beforeLine, { scaleX: 1, ease: "none" }) ;
                
                if (btn) {
                    tl.from(btn, { x: -50, opacity: 0, duration: 0.3 }); // Animation du bouton
                }
                if (interaction) {
                    tl.from(interaction, { y: 50, opacity: 0, duration: 0.3 }); // Animation du bouton
                }

            } else {
                tl.from(annee, { x: 50, opacity: 0, duration: 0.3 })  
                  .from(etude, { x: 50, opacity: 0, duration: 0.3 })
                  .from(texte, { x: 50, opacity: 0, duration: 0.3 })
                  .to(beforeLine, { scaleX: 1, ease: "none" })  
                  .to(afterLine, { scaleY: 1, ease: "none" });

                if (btn) {
                    tl.from(btn, { x: -50, opacity: 0, duration: 0.3 }); // Animation du bouton
                }
                if (interaction) {
                    tl.from(interaction, { y: 50, opacity: 0, duration: 0.3 }); // Animation du bouton
                }
            }
        });


/* Resize screen--------------------------------------------------------*/        

let screenWidth = window.innerWidth;

window.addEventListener("resize", () => {
    if (window.innerWidth !== screenWidth) {
        location.reload(); // Recharge la page si la largeur change
    }
});


/* TIMELINE PRO ----------------------------------------------------------- */


function getColProMinWidth() {
    let col = document.querySelector(".timeline_pro .col-1");
    if (!col) {
        console.error("Élément .col-1 non trouvé !");
        return 100; // Valeur par défaut
    }

    let minWidth = window.getComputedStyle(col).minWidth;

    if (minWidth.includes("%")) {
        let parentWidth = col.parentElement.clientWidth;
        return (parseFloat(minWidth) / 100) * parentWidth;
    } else {
        return parseFloat(minWidth);
    }
}



let colsPro = document.querySelectorAll(".timeline_pro .col-1");


        colsPro.forEach((element, index) => {
            let beforeLine = element.querySelector(".before");
            let afterLine = element.querySelector(".after");
            let annee = element.querySelector("h2");
            let etude = element.querySelector(".etude");
            let texte = element.querySelector("p");
            let thumbnail = element.querySelector(".thumbnail");

            let btn = element.querySelector(".btn");
            let interaction = element.querySelector(".interaction");

            let colMinWidth = getColProMinWidth();
            let factor = colMinWidth / window.innerWidth * 1.75 ;

            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: element,
                    start: isMobile 
                        ? `top center`  
                        : `left+=${index * window.innerWidth * factor} bottom`,  
                    end: isMobile 
                        ? `bottom center`  
                        : `right+=${index+1 * window.innerWidth * factor} bottom`,  
                    toggleActions: "play none none none",
                    pinSpacing: isMobile ? true : false,
                }
            });

            if (isMobile) {
                tl.from(annee, { y: 50, opacity: 0, duration: 0.3 })
                if (etude) {
                    tl.from(etude, { y: 50, opacity: 0, duration: 0.3 })
                    .from(texte, { y: 50, opacity: 0, duration: 0.3 })
                    .from(thumbnail, { y: 50, opacity: 0, duration: 0.3 })
                    .to(afterLine, { scaleY: 1, ease: "none" })
                    .to(beforeLine, { scaleX: 1, ease: "none" }) ;
                }
                if (btn) {
                    tl.from(btn, { x: -50, opacity: 0, duration: 0.3 }); // Animation du bouton
                }
                if (interaction) {
                    tl.from(interaction, { y: 50, opacity: 0, duration: 0.3 }); // Animation du bouton
                }

            } else {
                tl.from(annee, { x: 50, opacity: 0, duration: 0.3 })  
                if (etude) {
                    tl.from(etude, { x: 50, opacity: 0, duration: 0.3 })
                    .from(texte, { x: 50, opacity: 0, duration: 0.3 })
                    .from(thumbnail, { x: -50, opacity: 0, duration: 0.3 })
                }
                    tl.to(beforeLine, { scaleX: 1, ease: "none" }) 
                    .to(afterLine, { scaleY: 1, ease: "none" });
                    
                if (btn) {
                    tl.from(btn, { x: -50, opacity: 0, duration: 0.3 }); // Animation du bouton
                }
                if (interaction) {
                    tl.from(interaction, { y: 50, opacity: 0, duration: 0.3 }); // Animation du bouton
                }
            }
        });