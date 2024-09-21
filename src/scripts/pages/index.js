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
      gsap.to(".progress-bar, .logo-animation", {
        opacity: 0,
        duration: 0.85,
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
