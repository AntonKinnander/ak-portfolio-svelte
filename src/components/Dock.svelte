<script>
	import DockItem from "./DockItem.svelte";
	// Define props for dock tabs
	export let children;
	export let tabs = [];
  </script>

<div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex h-45 tabs-end gap-1">
	{#each tabs as tab}
		<DockItem icon={tab.icon} name={tab.name} />
	{/each}
	{@render children?.()}
</div>
