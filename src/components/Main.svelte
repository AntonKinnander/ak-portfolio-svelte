<script>
  import { onMount } from "svelte";
  import gsap from "gsap";
  import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
  import PageProjects from "./PageProjects.svelte";
  import ProjectView from "./ProjectView.svelte";

  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  }

  let panels;
  let headerHeight = 0;
  let blurValue = 0; // Initialize blurValue
  // let opacityValue = 0;
   // Initialize opacityValue

  onMount(() => {
    let scrollTween;
    const panelElements = Array.from(panels.children);
    const header = document.getElementById("header");

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
      blurValue = Math.pow(window.scrollY, 1.1) * (1.5 / window.innerHeight);

      // opacityValue = Math.min(1, scrollY / (window.innerHeight - 100));
      // console.log(scrollY);
      // console.log(window.innerHeight);
      // console.log(opacityValue);
      console.log(blurValue);

      document.documentElement.style.setProperty("--blur-value", `${blurValue}px`);
      // document.documentElement.style.setProperty("--opacity-value", `${opacityValue}`);
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

  .blurred {
    /* Default blur effect */
    backdrop-filter: blur(var(--blur-value, 2));
    
  
    /* opacity: var(--opacity-value, 0); */
    /* fill-opacity: var(--opacity-value, 0); */
    transition: backdrop-filter 0.3s ease; /* Smooth transition */
    /* transition: opacity  0.3s ease; Smooth transition */
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


<div bind:this={panels} class="panels">
  <section class="panel blurred" id="home">
  </section>
  <section class="panel blurred"  id="projects">
    <PageProjects />
  </section>
  <section class="panel blurred"  id="projects">
    <ProjectView />
  </section>
  <!-- <section class="panel" id="home"></section> -->
</div>
<!-- background covering viewport bind:this={blurElement}-->
<div class="fixed top-0 w-full h-1/6 bg-gradient-to-b from-[#0f0098]/30"></div>
<div class="fixed bottom-0 w-full h-1/6 bg-gradient-to-t from-[#0f0098]/30"></div>
<!-- <div id="background" class="w-full h-full fixed top-0 left-0 z-[-1]"
></div>  -->
