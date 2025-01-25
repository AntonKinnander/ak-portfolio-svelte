<script>
	import { Drawer as DrawerPrimitive } from "vaul-svelte";
	import DrawerOverlay from "./drawer-overlay.svelte";
	import { cn } from "$lib/utils.js";
	let className = undefined;
	export { className as class };
</script>

<style>
    :global(.drawer-content) {
        /* background-color: #110796; */
		height: calc(100vh + 4rem);
		overflow: hidden;
		max-width: 66.7rem;
		width: calc(100vw - 20%);
		border: 0.1rem solid var(--activeFG);
		border-bottom: 0px;
    }

	 @media screen and (max-width: 50rem) {
		:global(.drawer-content) {
			width: calc(100vw - .25rem);
		}
	 }
</style>

<DrawerPrimitive.Portal>
	
	<DrawerPrimitive.Content
		class={cn(
			"fixed drawer-content inset-x-0 top-9  z-50 flex m-auto flex-col md:top-20",
			className
		)}
		{...$$restProps}
	>
		<!-- <div class="bg-muted mx-auto mt-4 h-2 w-[100px] "></div> -->
		<slot />
	</DrawerPrimitive.Content>
</DrawerPrimitive.Portal>

