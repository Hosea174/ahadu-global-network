import Lenis from "@studio-freight/lenis";
import SplitType from "split-type";
import { onMount } from "solid-js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

console.log("script loaded");
// Initialize Lenis
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true,
  gestureDirection: "vertical",
  smoothTouch: true,
  touchMultiplier: 2,
});

function raf(time) {
  lenis.raf(time);
  ScrollTrigger.update();
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

gsap.registerPlugin(ScrollTrigger);

// split type header animations
const splitTypes = document.querySelectorAll(
  ".font-header-1, .font-header-2, .font-header-3"
);

splitTypes.forEach((splitType) => {
  const noScrub = splitType.classList.contains("no-scrub");

  const split = new SplitType(splitType, {
    types: "words",
    wordsClass: "word",
  });

  gsap.from(split.words, {
    y: "50%",
    duration: noScrub ? 0.6 : 1.2, 
    ease: "expo.out",
    opacity: 0,
    filter: "blur(3px)",
    stagger: noScrub ? 0.05 : 0.1, 
    scrollTrigger: {
      trigger: splitType,
      start: "top 90%",
      end: "top 35%",
      scrub: !noScrub, 
      markers: false,
    },
  });
});

// split type paragraph animations
const paragraphs = document.querySelectorAll("p.reveal-text, h2.reveal-text");

paragraphs.forEach((paragraph) => {
  const noScrub = paragraph.classList.contains("no-scrub");

  const split = new SplitType(paragraph, {
    types: "words",
    wordsClass: "word",
  });

  gsap.from(split.words, {
    opacity: 0,
    duration: noScrub ? 0.1 : 0.2, 
    filter: "blur(7px)",
    ease: "power2.out",
    stagger: noScrub ? 0.025 : 0.025, 
    scrollTrigger: {
      trigger: paragraph,
      start: "top 100%",
      end: "top 70%",
      scrub: !noScrub,
      markers: false,
    },
  });
});
