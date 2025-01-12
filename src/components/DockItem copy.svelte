<script lang="ts">
	import { fade } from "svelte/transition";
	import { cn } from "$lib/utils";


	// Define props for single dock tab
	let { icon, name, link, section }: { icon: string; name: string; link: string; section: string } = $props();

	// State for hover effect
	let isHovered = $state(false);

	if (section) {
		const bLink  = `href="javascript:;"`;
		const bTarget  = "";
		const bSection = `on:click={() => goToSection(${section})}`;
	}
	else {
		const bLink = `href="${link}"`;
		const bTarget  = `target="_blank"`;
		const bSection = ``;
	}


</script>

{#if section}
	<a href="javascript:;" on:click={() => goToSection({section})}>
	<div 
	class="group relative flex cursor-pointer items-end pt-4" 
	onmouseenter={() => (isHovered = true)} 
	onmouseleave={() => (isHovered = false)}
  >
	<div 
	  class={cn(
		"flex flex-col items-center justify-center border-2 transition-all duration-300",
		isHovered ? "scale-110 -translate-y-7" : "scale-100",
		"bg-[#0f0098] hover:bg-[linear-gradient(270deg,_#ffffff40,_#0f0098)]"
	  )}
	  style="--size: 7.5rem; width: var(--size); height: var(--size);"
	>
	  <img 
		src={icon} 
		alt="{name} navigation icon" 
		class="h-[70%] w-[70%] text-white -mb-1 transition-transform duration-300"
	  />
	  <p class="text-xl text-center mb-1.5"> {name} </p>
	</div>
  
	<!-- {#if isHovered}
	  <div 
		class="absolute -
<a {bLink} {bTarget} {bSection} >
	<div 
	class="group relative flex cursor-pointer items-end pt-4" 
	onmouseenter={() => (isHovered = true)} 
	onmouseleave={() => (isHovered = false)}
  >
	<div 
	  class={cn(
		"flex flex-col items-center justify-center border-2 transition-all duration-300",
		isHovered ? "scale-110 -translate-y-7" : "scale-100",
		"bg-[#0f0098] hover:bg-[linear-gradient(270deg,_#ffffff40,_#0f0098)]"
	  )}
	  style="--size: 7.5rem; width: var(--size); height: var(--size);"
	>
	  <img 
		src={icon} 
		alt="{name} navigation icon" 
		class="h-[70%] w-[70%] text-white -mb-1 transition-transform duration-300"
	  />
	  <p class="text-xl text-center mb-1.5"> {name} </p>
	</div>
  
	<!-- {#if isHovered}
	  <div 
		class="absolute -top-10 left-1/2 w-max -translate-x-1/2"
		transition:fade={{ duration: 150 }}
	  >
		<span class="text-xl text-white pt-1">
		  {name}
		</span>
	  </div>
	{/if} -->
  </div>
  </a>
  {/if}