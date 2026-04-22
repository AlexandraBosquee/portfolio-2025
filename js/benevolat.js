gsap.registerPlugin(ScrollTrigger);

// Accolage -------------------------------
const accolage = document.querySelector(".grid_accolage");
const aphotos = document.querySelectorAll(".grid_accolage .grid_photo");

const hearts = document.querySelectorAll(".grid_accolage .heart");

gsap
  .timeline({
    scrollTrigger: {
      trigger: accolage,
      start: "top center+=20%",
      end: "bottom center",
      toggleActions: "play none none reverse",
    },
  })
  .from(accolage.querySelector(".grid_intro"), {
    opacity: 0,
    x: -50,
    duration: 0.5,
  })
  .from(accolage.querySelector(".cinema"), {
    opacity: 0,
    x: -50,
    duration: 0.5,
  });

// Accolage coeurs -------------------------------

hearts.forEach((heart) => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: heart,
        start: "top =+70% center+=20%",
        toggleActions: "play none none reverse",
      },
    })
    .from(heart, {
      opacity: 0,
      y: 50,
      duration: 0.5,
    });
});

// Accolage photos -------------------------------

aphotos.forEach((photo) => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: photo,
        start: "top =+70% center+=20%",
        toggleActions: "play none none reverse",
      },
    })
    .from(photo, {
      opacity: 0,
      x: 50,
      duration: 0.5,
      rotation: 5,
    });
});

// Torn paper -------------------------------

const torns = document.querySelectorAll(".torn");

torns.forEach((torn) => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: torn,
        start: "top-=10% center+=30%",
        toggleActions: "play none none reverse",
      },
    })
    .from(torn, {
      opacity: 0,
      y: 50,
      duration: 0.5,
    });
});

// Sections web (bouble pcq 2 sections) -------------------------------

const webs = document.querySelectorAll(".grid_web");

webs.forEach((web) => {
  const webphotos = web.querySelectorAll(".grid_photo");

  gsap
    .timeline({
      scrollTrigger: {
        trigger: web,
        start: "top center+=20%",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
    })
    .from(web.querySelector(".grid_intro"), {
      opacity: 0,
      x: -50,
      duration: 0.5,
    })
    .from(web.querySelector(".grid_post-it"), {
      opacity: 0,
      x: 50,
      duration: 0.5,
      rotation: 5,
    });

  webphotos.forEach((photo) => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: photo,
          start: "top-=10% bottom-=30%",
          toggleActions: "play none none reverse",
        },
      })
      .from(photo, {
        opacity: 0,
        y: 50,
        duration: 0.5,
        rotation: 5,
      });
  });
});

// Tisses-reine -------------------------------------

const tisse = document.querySelector(".grid_tisse");
const tissephotos = document.querySelectorAll(".grid_tisse .grid_photo");


gsap
  .timeline({
    scrollTrigger: {
      trigger: tisse,
      start: "top center+=20%",
      end: "bottom center",
      toggleActions: "play none none reverse",
    },
  })
  .from(tisse.querySelector(".grid_intro"), {
    opacity: 0,
    x: -50,
    duration: 0.5,
  })

// Tisses-reine photo pairs-------------------------------------


const photoPairs = Array.from(tissephotos).filter(
  (_, index) => index % 2 === 1,
);

photoPairs.forEach((right) => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: right,
        start: "top center+=20%",
        toggleActions: "play none none reverse",
      },
    })
    .from(right, {
      opacity: 0,
      x: -50,
      duration: 0.5,
      rotate: -10,
    });
});

// Tisses-reine photo impairs-------------------------------------

const photoImpairs = Array.from(tissephotos).filter(
  (_, index) => index % 2 === 0,
);

photoImpairs.forEach((left) => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: left,
        start: "top center+=20%",
        toggleActions: "play none none reverse",
      },
    })
    .from(left, {
      opacity: 0,
      x: 50,
      duration: 0.5,
      rotate: 10,
    });
});

// Tisses-reine bulles -------------------------------------


const bulles = document.querySelectorAll(".grid_tisse .grid_deco");


bulles.forEach((bulle) => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: bulle,
        start: "center center+=20%",
        toggleActions: "play none none reverse",
        markers: true
      },
    })
    .from(bulle, {
      opacity: 0,
      duration: 0.3,
      scale: 0
    });
});



// Moment mémorable -------------------------------------

const memorable = document.querySelector(".grid_moments");
const memorablephotos = document.querySelectorAll(".grid_moments .grid_photo");


gsap
  .timeline({
    scrollTrigger: {
      trigger: memorable,
      start: "top center+=20%",
      end: "bottom center",
      toggleActions: "play none none reverse",
    },
  })
  .from(memorable.querySelector(".grid_intro"), {
    opacity: 0,
    x: -50,
    duration: 0.5,
  })


// Moment mémorable pairs-------------------------------------


const memorablePairs = Array.from(memorablephotos).filter(
  (_, index) => index % 2 === 1,
);

memorablePairs.forEach((right) => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: right,
        start: "top center+=20%",
        toggleActions: "play none none reverse",
      },
    })
    .from(right, {
      opacity: 0,
      y: 50,
      duration: 0.5,
      rotate: -10,
    });
});

// Moment mémorable photo impairs-------------------------------------

const memorableImpairs = Array.from(memorablephotos).filter(
  (_, index) => index % 2 === 0,
);

memorableImpairs.forEach((left) => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: left,
        start: "top center+=20%",
        toggleActions: "play none none reverse",
      },
    })
    .from(left, {
      opacity: 0,
      y: 50,
      duration: 0.5,
      rotate: 10,
    });
});