<script>
import "../app.css";
import Header from "../components/Header.svelte";
import Footer from "../components/Footer.svelte";
import Dock from "../components/Dock.svelte";
  import { Icon } from "lucide-svelte";

let y;
let innerHeight = 0;
let innerWidth = 0;

let tabs = [
    { name: "Projects", link: "#projects", icon: "folder" },
    { name: "Contact", link: "#contact" , icon: "mail"},
    { name: "About me", link: "#about" , icon: "music"},
    { name: "Code", link: "#code" , icon: "music"},
  ];


function goTop() {
    document.body.scrollIntoView();
}

</script>

<div
  class="relative flex flex-col max-w-w[1400px] mx-auto w-full text-sm sm:text-base min-h-screen"
>
  <div class={"fixed bottom o w-full duration 200 flex p-10 z-[10]" + (y > 0 ? 'opacity-full pointer-events-auto':'opacity-0 pointer-events-none') }>
    <button on:click={goTop} class="ml-auto rounded full bg-[#0f0098] text-white px-3 sm:px-4 hover:bg-slate-800 cursor-pointer">
      <i class="fa-solid fa-arrow-up" />
    </button>
  </div>
    <!-- Dock position absolute to make it float above slot -->
  
  <Header y={y} {tabs} />
  <slot />
  <Dock {tabs}/>
  <Footer />
</div>

<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth/>