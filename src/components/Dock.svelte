<script>
	import { cn } from "$lib/utils";
	import { scrollToSection } from "./utils/scroll-utils.js";
	export let tabs = [];
	let hoveredIndex = false;
  </script>


<div class="z-10 fixed bottom-10
 left-1/2 transform -translate-x-1/2 flex tabs-end gap-7">
 {#each tabs as tab, index}
	{#if tab.type !== 2}
	
<a href="{tab.link}" onclick={tab.section ? (event) => { event.preventDefault(); scrollToSection(tab.link); } : null} target = "_blank" >
	<div 
	class="group relative flex cursor-pointer items-end pt-4" 
	onmouseenter={() => (hoveredIndex = index)} 
	onmouseleave={() => (hoveredIndex = false)}
  >
  
	<div 
	  class={cn(
		"card flex flex-col items-center justify-center border-2 transition-all duration-300 overflow-hidden",
		hoveredIndex === index ? "scale-110 -translate-y-7" : "scale-100",
		"bg-[#0f0098]"
	  )}
	  style="--size: 7.5rem; width: var(--size); height: var(--size);"
	>
  <div class="overlay absolute"></div>
	  <img 
		src={tab.icon} 
		alt="{tab.name} navigation icon" 
		class="h-[70%] w-[70%] text-white -mb-1 transition-transform duration-300"
	  />
	  <p class="text-xl text-center mb-1.5"> {tab.name} </p>
	</div>
  </div>
  </a>
  {/if}
  {/each}
</div>

