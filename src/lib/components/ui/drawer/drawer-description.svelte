<script>
	import { Drawer as DrawerPrimitive } from "vaul-svelte";
	import { cn } from "$lib/utils.js";
	export let el = undefined;
	let className = undefined;
	export { className as class };
</script>

<style>
	:global(.drawer-desc) {
		color: rgb(255, 255, 255);
		margin: 0;
		margin-right: auto;
	}

</style>


<DrawerPrimitive.Description
	bind:el
	class={cn("drawer-desc text-sm", className)}
	{...$$restProps}
>
	<slot />
</DrawerPrimitive.Description>
