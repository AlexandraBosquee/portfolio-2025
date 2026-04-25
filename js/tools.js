gsap.registerPlugin(ScrollTrigger);

function horizontalScroll(sectionSelector, containerSelector) {
  const section = document.querySelector(sectionSelector);
  const container = document.querySelector(containerSelector);

  if (!section || !container) return;

  gsap.to(container, {
    x: () => -(container.scrollWidth - window.innerWidth + 500),
    ease: "none",
    scrollTrigger: {
      trigger: section,
      pin: true,
      scrub: 1,
      start: "top-=3% top",
      end: () => `+=${container.scrollWidth - window.innerWidth + 500}`,
      invalidateOnRefresh: true,
    },
  });
}

let mm = gsap.matchMedia();

mm.add("(min-width: 769px)", () => {
  horizontalScroll(".tools_2d", ".container_2d");
  horizontalScroll(".tools_video", ".container_video");

  ScrollTrigger.refresh();
});

//--------------------------------------------------------------------------

function apparitionScroll(itemsSelector) {
  const items = document.querySelectorAll(itemsSelector);

  if (!items.length) return;

  const pairs = Array.from(items).filter((_, index) => index % 2 === 0);
  const impairs = Array.from(items).filter((_, index) => index % 2 === 1);

  pairs.forEach((item) => {
    gsap.from(item, {
      opacity: 0,
      x: -50,
      duration: 0.6,
      scrollTrigger: {
        trigger: item,
        start: "top 50%",
        toggleActions: "play none none reverse",
        markers: true,
      },
    });
  });

  impairs.forEach((item) => {
    gsap.from(item, {
      opacity: 0,
      x: 50,
      duration: 0.6,
      scrollTrigger: {
        trigger: item,
        start: "top 60%",
        toggleActions: "play none none reverse",
      },
    });
  });
}

// Tisses-reine photo impairs-------------------------------------

mm.add("(max-width: 768px)", () => {
  apparitionScroll(".items_2d");
  apparitionScroll(".items_video");

  ScrollTrigger.refresh();
});
