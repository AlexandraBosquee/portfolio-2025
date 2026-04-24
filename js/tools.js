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
      markers: true,
    },
  });
}

let mm = gsap.matchMedia();

mm.add("(min-width: 768px)", () => {
  horizontalScroll(".tools_2d", ".container_2d");
  horizontalScroll(".tools_video", ".container_video");

  ScrollTrigger.refresh();
});