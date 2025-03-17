gsap.registerPlugin(ScrollTrigger);

const colTween = document.querySelector('.col-tween')
const elements = document.querySelectorAll(".col-tween .col-flex-item"); // Sélectionne tous les éléments
const elementsPairs = Array.from(elements).filter((_, index) => index % 2 === 1); // Garde les index 1, 3, 5...

gsap.
timeline({
  scrollTrigger: {
    trigger: colTween,
    start: "top center+=20%",
    toggleActions: "play none none reverse",

  }
})
.from( colTween.querySelector(".titre") , {
  opacity: 0,
  x : -50,
  duration : 0.5,
})




console.log(elementsPairs);

elementsPairs.forEach( (right) => {


gsap.
    timeline({
      scrollTrigger: {
        trigger: right,
        start: "top-=100% center+=20%",
        toggleActions: "play none none reverse",

      }
    })
    .from( right , {
      opacity: 0,
      x : 50,
      duration : 0.5,
    })

});
    



const elementsImpairs = Array.from(elements).filter((_, index) => index % 2 === 0); // Index 0, 2, 4...

console.log(elementsImpairs);

elementsImpairs.forEach( (left) => {


    gsap.
        timeline({
          scrollTrigger: {
            trigger: left,
            start: "top-=100% center+=20%",
            toggleActions: "play none none reverse",

          }
        })
        .from( left , {
          opacity: 0,
          x : -50,
          duration : 0.5,
        })
    
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


const audit = document.querySelector(".col-audit");

if (audit) {  // Check if '.col-audit' exists

    const titreAudit = audit.querySelector("h2");
    const pAudit = audit.querySelector(".margin-bottom-1");
    const colAudit = audit.querySelectorAll(".border");

    console.log(titreAudit);

    // GSAP timeline for the title and paragraph animations
    gsap.timeline({
        scrollTrigger: {
            trigger: audit,
            start: "top center+=20%",
            toggleActions: "play none none reverse",
        }
    })
    .from(titreAudit, {
        opacity: 0,
        y: 50,
        duration: 0.3,
    })
    .from(pAudit, {
        opacity: 0,
        y: 50,
        duration: 0.3,
        delay: -0.3
    });

    // GSAP timeline for the border elements animations
    colAudit.forEach((itemsAudit) => {
        gsap.timeline({
            scrollTrigger: {
                trigger: audit,
                start: "top center+=20%",
                toggleActions: "play none none reverse",
            }
        })
        .from(itemsAudit, {
            opacity: 0,
            duration: 0.5,
            y: 50,
            delay: 0.3
        });
    });

}
