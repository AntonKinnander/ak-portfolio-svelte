<script>
	import { cn } from "$lib/utils.js";
	export let el = undefined;
	let className = undefined;
	export { className as class };
	import { Drawer as DrawerPrimitive } from "vaul-svelte";
  import Drawer from "./drawer.svelte";
</script>

<style>
	:global(.drawer-header) {
	border-bottom: .1rem solid var(--activeFG);
	display: flex;
	flex-direction: row;
	width: 100%;
	align-items: center;
	margin: 0;
	padding: 0;
	padding-left: .2rem;
	height: 1.7rem;
	backdrop-filter: blur(10px);
	/* Transparent gradient transparent left to white right */
	background: linear-gradient(to right, #ffffff22, #ffffff3b);
		}
		
		:global(.drawer-header button) {
			margin: 0;
			border-left: 1px solid var(--activeFG);
			width: 2rem;
			height: 100%;
			background: var(--activeBG);
			/* border-top: 1px solid #e5e7eb; */
			transition: background 0.3s ease;
			
		}

		/* :global(.drawer-header button:hover) {
			background: linear-gradient(to right, #0f0098, #c4beff);
			transition: background 0.3s ease;
			
		} */
		
</style>


<div
	bind:this={el}
	class={cn("drawer-header  gap-1.5 sm:text-left", className)}
	{...$$restProps}
>

<img src="./assets/ak-logo.svg" class="h-5 hidden sm:block" alt="logo" />
<slot />
<div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-2 backdrop-blur-sm rounded-sm opacity-70 sm:hidden"></div>
<button class="relative card overflow-hidden"><div class="overlay absolute"></div>X</button>
</div>
