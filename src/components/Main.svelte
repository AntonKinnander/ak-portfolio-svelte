<script>
  import { onMount } from "svelte";
  import gsap from "gsap";
  import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
  import PageProjects from "./PageProjects.svelte";
  import ProjectDrawer from "./ProjectDrawer.svelte";
  import { DrawerTrigger } from "$lib/components/ui/drawer";
  import Background from "./svg/background.svelte";

  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  }

  let panels;
  let headerHeight = 0;
  let blurValue = 0; // Initialize blurValue
  let lastBlurValue = 0;
  // let opacityValue = 0;
   // Initialize opacityValue
   let isDrawerOpen = false;
  //  let drawerTrigger = null;





  onMount(() => {
    let scrollTween;
    const panelElements = Array.from(panels.children);
    const header = document.getElementById("header");
    //This fixes drawer opening animations so i keep it actually was fixed by reverting to svelte 5.1.4
    // isDrawerOpen = false; 
    if (header) {
      headerHeight = header.offsetHeight;
    }

    function goToSection(index) {
      switch (index) {
        case "home":
          index = 0;
          break;
        case "projects":
          index = 1;
          break;
        default:
          break;
      }

      scrollTween = gsap.to(window, {
        scrollTo: { y: index * (window.innerHeight - headerHeight), autoKill: false },
        duration: 1,
        onComplete: () => (scrollTween = null),
        overwrite: true,
      });
      console.log(headerHeight);
    }

    ScrollTrigger.create({
      start: 0,
      end: "max",
      snap: 1 / (panelElements.length - 1),
    });

    // Track scroll to update blurValue
    const updateBackground = () => {
      // blurValue = window.scrollY * 0.007 -3; // Adjust multiplier as needed
      // exponmential blur effect - compare against window. innerheight to ensure consistent blur when resizing 
      // blurValue = Math.pow(scrollY, 1.27) * (0.85 / window.innerHeight);

      // Prevent issue were opening drawer sets blur to 0
      if(blurValue > 0){
      lastBlurValue = blurValue;
      }
     
      if(!isDrawerOpen){
        blurValue = Math.pow(window.scrollY, 1.1) * (3.5 / window.innerHeight);
      }
      else{
        blurValue = lastBlurValue;
      }
      

      console.log(blurValue);

      document.documentElement.style.setProperty("--blur-value", `${blurValue}px`);
    
    };

    window.addEventListener("scroll", updateBackground);
    

    return () => {
      window.removeEventListener("scroll", updateBackground);
    };

    
    
  });
</script>

<style>
  .panel {
    height: calc(100vh - 1.75rem);
    max-height: 100vh;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
  }

  .blurred{
    /* Default blur effect */
    backdrop-filter: blur(var(--blur-value, 0px));
    transition: backdrop-filter 0.3s ease; /* Smooth transition */
  }

  .outer-background {
    display: flex;
    position: fixed;
    width: 100vw;
    z-index: -1;
    bottom: 0;
    align-items: center;
    justify-content: center;

  }

  .background {
    /* margin: 0; */
    /* display: flex; */
    scale: 1.5;
    align-self: flex-end;
    position: static;
    margin-bottom: 15%;
    width:max(350vh, 120vw);
    min-width: 100rem;
  }
 
 


  :global(body, html) {
    /* hide scrollbar on all browsers */
    scrollbar-width: none;
    -ms-overflow-style: none;
    margin: 0;
    padding: 0;
    height: 100%;
  }
</style>

<!-- {#if isDrawerOpen} -->
<ProjectDrawer bind:open={isDrawerOpen}>  </ProjectDrawer>
<!-- {/if} -->



<div bind:this={panels} class="panels">
  <section class="panel blurred" id="home">
    <button on:click={() => (isDrawerOpen = !isDrawerOpen)}>
      Toggle Drawer
  </button>
  </section>
  <section class="panel blurred"  id="projects">
    <PageProjects />
  </section>
</div>

<div class="outer-background bottom-0"> <div class="background bottom-0"> <Background/> </div> </div>
 <!-- Fix gradients -->
<div class="z-5 fixed top-0 w-full h-1/6 bg-gradient-to-b from-[var(--activeBG)]/40"></div>
<div class="z-5 fixed bottom-0 w-full h-1/6 bg-gradient-to-t from-[var(--activeBG)]"></div>


