<script>
	
	export let shouldScaleBackground = true;
	export let open = true;
	export let activeSnapPoint = undefined;
</script>

<DrawerPrimitive.NestedRoot {shouldScaleBackground} bind:open bind:activeSnapPoint {...$$restProps}>
	<slot />
</DrawerPrimitive.NestedRoot>
