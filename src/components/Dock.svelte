<script>
	import { cn } from "$lib/utils";
	import { scrollToSection } from "./utils/scroll-utils.js";
	import Main from "./Main.svelte";
	export let tabs = [];
	let hoveredIndex = false;
	// Icons
	import AkLogo from "./svg/ak-logo.svelte";
	import HomeIcon from "./svg/home-icon.svelte";
	import ProjectsIcon from "./svg/projects-icon.svelte";
	import CodepenIcon from "./svg/codepen-icon.svelte";

	function handleClick(tab, event) {
		event.preventDefault();
    if (tab.section) {
      tab.onclick();
    } else {
      tab.onclick();
    }
  }


</script>

<div class="front fixed bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 flex tabs-end">
  {#each tabs as tab, index}
    {#if tab.type !== 2}
      <a href={tab.link}  on:click={(event) => {
		handleClick(tab, event);
	  }} target="_blank">
        <div 
          class="group relative flex cursor-pointer items-end pt-4" 
          on:mouseenter={() => (hoveredIndex = index)} 
          on:mouseleave={() => (hoveredIndex = false)}
        >
          <div 
            class={cn(
              "card flex flex-col items-center justify-center border-2 border-[var(--activeFG)] transition-all duration-300 overflow-hidden",
              hoveredIndex === index ? "scale-110 -translate-y-7" : "scale-100",
              "bg-[var(--activeBG)]"
            )}
          >
            <div class="overlay absolute"></div>
            <div class="h-[77%] w-[77%] text-[var(--activeFG)] -mb-1 transition-transform duration-300">
              {#if tab.name === "Home"}
                <HomeIcon/>
              {:else if tab.name === "Projects"}
                <ProjectsIcon/>
              {:else if tab.name === "CodePen"}
                <CodepenIcon/>
              {:else}
                <AkLogo/>
              {/if}
            </div>
            <p class="text-xl text-center mb-1.5 text-[var(--activeFG)]"> {tab.name} </p>
          </div>
        </div>
      </a>
    {/if}
  {/each}
</div>

<style>
	.front {
		z-index: 100;
		gap: 3vw;
	}

	p {
		font-size: calc(.3rem + 2.5vw);
	}

	.card {
		--size: 20vw; 
		width: var(--size); 
		height: var(--size);
	}

	@media (width >= 40rem) {
	.card {
		--size: 7.5rem; 
	}
	.front {
		gap: 1.4rem
	}
	p {
		font-size: 1.2rem;
	}
	}
	



	

</style>
