// Swiper imports
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/effect-cards";
import { Navigation, EffectFade, EffectCards, Autoplay } from "swiper/modules";

// Animation imports
import { onMount } from "solid-js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import SplitType from "split-type";

// swiper js hero carousel
const heroBackgrounds = new Swiper(".hero-swiper", {
  modules: [EffectFade, Navigation, Autoplay],
  effect: "fade",
  loop: true,
  slidesPerView: 1,
  fadeEffect: {
    crossFade: false,
  },
  // autoplay: {
  //   delay: 4000,
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// swiper js gallery carousel
const galleryCarousel = new Swiper(".gallery-carousel", {
  modules: [EffectCards, Autoplay],
  autoplay: {
    delay: 3000,
  },
  effect: "cards",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
});

gsap.registerPlugin(ScrollTrigger);

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

onMount(() => {
  gsap.to(".about-images img", {
    y: -230, // Move the images up to their original position
    opacity: 1, // Show the images
    duration: 1, // Animation duration
    ease: "sine.out", // Animation easing
    filter: "none",
    stagger: 0.125, // Stagger the animation of the images
    scrollTrigger: {
      trigger: ".about-section", // Trigger the animation when the user scrolls to the .about-section
      start: "top 80%", // Start the animation when the top of the .about-section reaches 80% of the viewport
      end: "bottom 60%", // End the animation when the bottom of the .about-section reaches 20% of the viewport
      scrub: true, // Smoothly animate the images as the user scrolls
    },
  });
});

// SplitType
const splitTypes = document.querySelectorAll(".font-header-1, .font-header-2");

splitTypes.forEach((splitType) => {
  const isHeroSection = splitType.closest(".hero-section"); // Check if the element is within the hero section

  const split = new SplitType(splitType, {
    types: "words",
    wordsClass: "word",
  });

  gsap.from(split.words, {
    y: "50%",
    duration: 1.2,
    ease: "expo.out",
    opacity: 0,
    filter: "blur(3px)",
    stagger: 0.1,
    scrollTrigger: {
      trigger: splitType,
      start: "top 90%",
      end: "top 20%",
      scrub: !isHeroSection, // Set scrub to false for hero section, true for others
      markers: false,
    },
  });
});

// Select paragraph tags
const paragraphs = document.querySelectorAll("p.reveal-text");

paragraphs.forEach((paragraph) => {
  const isHeroSection = paragraph.closest(".hero-section");

  const split = new SplitType(paragraph, {
    types: "words",
    wordsClass: "word",
  });

  gsap.from(split.words, {
    opacity: 0,
    duration: 0.4,
    filter: "blur(7px)",
    ease: "power2.out",
    stagger: 0.05,
    scrollTrigger: {
      trigger: paragraph,
      start: "top 100%",
      end: "top 70%",
      scrub: !isHeroSection,
      markers: false,
    },
  });
});

// preloader animation
const loader = document.querySelector(".loader");

window.addEventListener("load", () => {
  // Animate the progress bar first
  gsap.to(".progress", {
    width: "100%",
    duration: 0.85,
    ease: "linear",
    opacity: 0,
    onComplete: () => {
      gsap.to(".progress-bar", {
        opacity: 0,
      });

      gsap.to(".blinder.top", {
        height: 0,
        ease: "sine.inOut",
        duration: 0.85,
        delay: 0.25,
      });

      gsap.to(".blinder.bottom", {
        height: 0,
        ease: "sine.inOut",
        duration: 0.85,
        delay: 0.25,
        onComplete: () => {
          // Hide the loader after the blinder animations finish
          gsap.to(".loader", {
            opacity: 0,
            onComplete: () => {
              loader.style.display = "none";
            },
          });
        },
      });
    },
  });
});
