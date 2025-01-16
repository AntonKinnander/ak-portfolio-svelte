import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollToPlugin);
}

export function scrollToSection(index, headerHeight = 0) {
  const element = document.getElementById(index);
  if (element) {
    gsap.to(window, {
      scrollTo: { y: element.offsetTop - headerHeight, autoKill: false },
      duration: 1,
    });
  } else {
    console.error(`Element with id ${index} not found`);
  }
}