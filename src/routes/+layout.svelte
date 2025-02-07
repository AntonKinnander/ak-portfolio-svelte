<script>
  import "../app.css";
  import gsap from "gsap";
  import { onMount } from 'svelte';
  import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
  import { scrollToSection } from "../components/utils/scroll-utils.js";
  // import { isDrawerOpen } from "./Main.svelte";
  import { page } from "$app/stores";
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
  import Dock from "../components/Dock.svelte";
  import DrawerStore from "../stores/DrawerStore.js";
  import ActivePage from "../stores/ActivePage.js";
  // import {open} from "./ProjectDrawer.svelte";
  // import window from "../components/window.svelte";
  // import { Section } from "lucide-svelte";
  if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}

  // State to control window visibility
  // let isOpen = true;

  let y;
  let innerHeight = 0;
  let innerWidth = 0;


  let tabs = [
    { name: "Home", link:"home", type: 3, onclick: () => scrollToSection("home")},
    { name: "Projects",  link:"projects", type: 1, onclick: () => scrollToSection("projects")},
    { name: "CodePen",  link: "https://codepen.io/AntonKinnander", type: 3, onclick: () => window.open("https://codepen.io", "_blank")},
    { name: "About me", link:"about", type: 1,  onclick: () => { ActivePage.update(value => "about"); DrawerStore.update(value => true); }},
    // (isDrawerOpen = !isDrawerOpen)
  ];


</script>

<div
  class="relative flex flex-col max-w-w[1400px] mx-auto w-full text-sm sm:text-base min-h-screen"
>
  <div
    class={"fixed bottom o w-full duration 200 flex p-10 z-[10]" +
      (y > 0
        ? "opacity-full pointer-events-auto"
        : "opacity-0 pointer-events-none")}
  >
  </div>

  <Header {tabs} />
  <Dock  {tabs} />
  <slot />
  <Footer />
</div>


