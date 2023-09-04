var cursr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  cursr.style.left = dets.x + "px";
  cursr.style.top = dets.y + "px";
});

document.addEventListener("mousemove", function (dets) {
  blur.style.left = dets.x - 150 + "px";
  blur.style.top = dets.y - 150 + "px";
});

gsap.to("#nav", {
  backgroundColor: "#000",
  height: "105px",
  duration: 0.1,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers: true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",

    start: "top -50%",
    end: "top -80vh",
    scrub: 2,
    // end,
  },
});

gsap.from("#about-us img, #aboutusin", {
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.4,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",

    start: "top 60%",
    end: "top 58%",
    scrub: 3,
  },
});

gsap.from(".card", {
  scale: 0.8,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",

    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});

gsap.from("#colon1, #colon2", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",

    start: "top 35%",
    end: "top 30%",
    scrub: 4,
    // end,
  },
});
