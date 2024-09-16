import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";

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
