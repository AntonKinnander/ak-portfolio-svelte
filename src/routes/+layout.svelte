<script>
  import "../app.css";
  import gsap from "gsap";
  import { onMount } from 'svelte';
  import { ScrollTrigger, ScrollToPlugin } from "gsap/all";

  
  import { page } from "$app/stores";
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
  import Dock from "../components/Dock.svelte";
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
    { name: "Home", icon: "./assets/Icon_home.svg", link:"home", type: 3, section: 1, },
    { name: "Projects", icon: "./assets/Icon_projects.svg", link:"projects", type: 1, section: 2, },
    { name: "Contact", icon: "./assets/Icon_projects.svg", link:"contact", type: 2, popup: true, },
    { name: "CodePen", icon: "./assets/Icon_codepen.svg", link:"codepen", type: 3, open:"new", },
    { name: "About me", icon: "./assets/ak-logo.svg", link:"about", type: 1, popup: true,},
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


