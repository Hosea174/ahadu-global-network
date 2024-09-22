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

// About section images animation
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

// Preloader and Hero section animations
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  const body = document.body;
  body.classList.add("no-scroll");

  const tl = gsap.timeline();

  // Pre-loader animation
  tl.to(".progress", { width: "100%", duration: 0.85, ease: "linear" })
    .to(
      ".progress-bar, .logo-animation",
      { opacity: 0, duration: 0.85 },
      "-=0.5"
    )
    .call(() => {
      body.classList.remove("no-scroll");
    })
    .to(
      ".blinder.top",
      { y: "-100%", ease: "power4.out", duration: 0.85, delay: .3},
      "-=0.5"
    )
    .to(
      ".blinder.bottom",
      { y: "100%", ease: "power4.out", duration: 0.85 },
      "-=0.85"
    )
    .to(".loader", {
      opacity: 0,
      duration: 0.5,
      onComplete: () => loader.remove(),
    });

  // Hero section animation
  const heroTl = gsap.timeline();
  heroTl
    .to(".hero-swiper .bg-img", {
      clipPath: "inset(0% 0% 0% 0% round 30px)",
      duration: 2,
      ease: "power2.out",
    })
    .from(
      ".hero-text-box h1",
      { opacity: 0, y: 40, duration: 0.75, ease: "power2.out" },
      "-=0.5"
    )
    .from(
      ".hero-text-box p",
      { opacity: 0, y: 40, duration: 0.65, ease: "power2.out" },
      "-=0.5"
    )
    .from(
      ".hero-section .btn-link",
      { opacity: 0, y: 40, duration: 0.65, ease: "power2.out" },
      "-=0.5"
    )
    .from(
      ".social-links, .navigation-wrap",
      { opacity: 0, y: 40, duration: 0.75, ease: "power2.out", stagger: 0.1 },
      "-=0.5"
    );
});
