<script>
	import { Drawer as DrawerPrimitive } from "vaul-svelte";
	import { cn } from "$lib/utils.js";
	export let el = undefined;
	let className = undefined;
	export { className as class };
</script>

<DrawerPrimitive.Overlay
	bind:el
	class={cn("static inset-0", className)}
	{...$$restProps}
>
	<slot />
</DrawerPrimitive.Overlay>
