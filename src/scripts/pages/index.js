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
  autoplay: {
    delay: 5500,
  },
});
// swiper js gallery carousel
const galleryCarousel = new Swiper(".gallery-carousel", {
  modules: [EffectCards, Autoplay],
  autoplay: {
    delay: 2000,
  },
  effect: "cards",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
});

gsap.registerPlugin(ScrollTrigger);

// About section images animation
onMount(() => {
  const commonAnimation = {
    y: -230,
    opacity: 1,
    duration: 1,
    ease: "sine.out",
    filter: "none",
    stagger: 0.125,
    scrollTrigger: {
      trigger: ".about-section",
      start: "top 80%",
      end: "bottom 60%",
      scrub: true,
    },
  };

  gsap.to(".about-images img", commonAnimation);

  gsap.to(".photo1", {
    rotate: -9.707,
    scrollTrigger: {
      trigger: ".about-section",
      start: "top 80%",
      end: "bottom 60%",
      scrub: true,
    },
  });

  gsap.to(".photo2", {
    rotate: 9.707,
    scrollTrigger: {
      trigger: ".about-section",
      start: "top 80%",
      end: "bottom 60%",
      scrub: true,
    },
  });

  gsap.to(".photo3", {
    rotate: 9.707,
    scrollTrigger: {
      trigger: ".about-section",
      start: "top 80%",
      end: "bottom 70%",
      scrub: true,
    },
  });

  gsap.to(".photo4", {
    rotate: -9.707,
    scrollTrigger: {
      trigger: ".about-section",
      start: "top 80%",
      end: "bottom 60%",
      scrub: true,
    },
  });
});

// Preloader and Hero section animations
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  const tl = gsap.timeline();

  // Pre-loader animation
  tl.to(".progress", { width: "100%", duration: 0.85, ease: "linear" })
    .to(
      ".progress-bar, .logo-animation",
      { opacity: 0, duration: 0.85 },
      "-=0.5"
    )
    .to(
      ".blinder.top",
      { y: "-100%", ease: "power4.out", duration: 0.85, delay: 0.3 },
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
      "header",
      {
        opacity: 0,
        filter: "blur(2px)",
        y: -20,
        duration: 0.25,
        ease: "power2.out",
      },
      "-=0.5"
    )
    .to(
      "header",
      {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        duration: 0.25,
        ease: "power2.out",
      },
      "-=0.5"
    )
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
      ".hero-section .social-links, .hero-section .navigation-wrap",
      {
        opacity: 0,
        y: 20,
        filter: "blur(2px)",
        duration: 0.75,
        ease: "power2.out",
        stagger: 0.1,
      },
      "-=0.5"
    );
});

gsap.from(".services-section img", {
  clipPath: "inset(0 50% 0 0 round 149px)",
  duration: 0.75,
  ease: "power2.out",

  scrollTrigger: {
    trigger: ".services-section",
    start: "top 70%",
    end: "bottom 100%",
  },
});
