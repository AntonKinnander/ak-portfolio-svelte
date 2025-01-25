<script>
  export let tabs = [];
  import DateTime from "./DateTime.svelte";
  import { gsap } from "gsap";
  import { ScrollToPlugin } from "gsap/ScrollToPlugin";
  gsap.registerPlugin(ScrollToPlugin);
  export let goToSection; // Receive the function from the parent

  import { onMount } from "svelte";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { scrollToSection } from "./utils/scroll-utils.js";
  gsap.registerPlugin(ScrollTrigger);

  import AkLogo from "./svg/ak-logo.svelte";

  let headerHeight = 0;
  onMount(() => {
    let scrollTween;
    const header = document.getElementById("header");
    const panels = document.querySelectorAll("section"); // Assuming sections are the panels

    if (header) {
      headerHeight = header.offsetHeight;
    }

    function goToSection(index) {
      scrollTween = gsap.to(window, {
        scrollTo: {
          y: index * (window.innerHeight - headerHeight),
          autoKill: false,
        },
        duration: 1,
        onComplete: () => (scrollTween = null),
        overwrite: true,
      });
      console.log(headerHeight);
    }

    ScrollTrigger.create({
      start: 0,
      end: "max",
      snap: 1 / (panels.length - 1),
    });
  });
</script>

<style>
:global(h4:hover .cls-1) {
  fill: #fff;
}


</style>

<header
  id="header"
  class={"sticky h-7 z-[10] top-0 duration-200 px-1 py-0.5 flex items-center justify-start gap-6 backdrop-blur-lg border-b border-solid border-[var(--activeFG)]"}
>
  <a
    href=""
    on:click={(event) => {
      event.preventDefault();
      scrollToSection("home");
    }}
    ><h4
      class="font-medium flex gap-3 items-center hover:text-[var(--activeBG)]"
    >
      <!-- Current page title instead of name, add dropdown menu -->
      <!-- <img src="./assets/ak-logo.svg" class="h-5" alt="logo" />  -->
      <div class="h-5"><AkLogo/></div>
      Anton Kinnander
    </h4>
  </a>
  <div
    class="flex flex-initial flex-row items-center gap-4 justify-start hidden md:block"
  >
    {#each tabs as tab}
      {#if tab.type !== 3}
        {#if tab.section}
          <a
            href={tab.link}
            class="hover:text-[var(--activeBG)] mr-4"
            on:click={(event) => {
              event.preventDefault();
              scrollToSection(tab.link);
            }}
          >
            {tab.name}</a
          >
        {:else}
          <a
            class="hover:text-[var(--activeBG)] mr-4"
            href={tab.link}
            target="_blank"
          >
            {tab.name}
          </a>
        {/if}
      {/if}
    {/each}
  </div>
  <!-- Spacing -->
  <p class="ml-auto px-1"></p>
  <DateTime class="flex flex-row items-center justify-end gap-4" />
</header>
