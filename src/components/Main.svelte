<script>
  import { onMount } from "svelte";
  import gsap from "gsap";
  import { ScrollTrigger, ScrollToPlugin } from "gsap/all";

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  let panels;
  let headerHeight = 0;
  // let blurElement;

  onMount(() => {
    let scrollTween;
    const panelElements = Array.from(panels.children);
    const header = document.getElementById("header");
    const background = document.getElementById("background");


    if (header) {
      headerHeight = header.offsetHeight;
    }


    
    function goToSection(index) {
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
  });
</script>

<style>
  .panel {
    height: calc(100vh - 1.75rem);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
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
  <section class="panel" id="home">Hero</section>
  <section class="panel backdrop-blur-sm" id="projects">Rio De Janiro</section>
</div>
<!-- background covering viewport bind:this={blurElement}-->
<div id="background" class="w-full h-full fixed top-0 left-0 z-[-1]"
></div> 
