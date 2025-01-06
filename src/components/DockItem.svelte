<script lang="ts">
	import { fade } from "svelte/transition";
	import { Home, Folder, Mail, Image, Settings, Music } from "lucide-svelte";
	import { cn } from "$lib/utils";


	// Define props for single dock tab
	let { icon, name, link }: { icon: string; name: string; link: string } = $props();

	// State for hover effect
	let isHovered = $state(false);

	// Map icon names to components
	const iconMap = {
		home: Home,
		folder: Folder,
		mail: Mail,
		image: Image,
		settings: Settings,
		music: Music,
	};

	// Get icon component from map
	const IconComponent = iconMap[icon];
</script>

<div class="group relative flex cursor-pointer items-end pt-2" onmouseenter={() => (isHovered = true)} onmouseleave={() => (isHovered = false)}>
	<div class={cn("flex h-14 w-14 items-center border-2 justify-center p-1.5 transition-all duration-200 hover:bg-white/20", isHovered && "h-14 w-14 -translate-y-4")}>
		<svelte:component this={IconComponent} class={cn("h-full w-full text-white transition-all duration-200", isHovered && "scale-100")} />
	</div>

	{#if isHovered}
		<div class="absolute -top-8 left-1/2 w-max -translate-x-1/2" transition:fade={{ duration: 150 }}>
			<span class="text-sm text-white">
				{name}
			</span>
		</div>
	{/if}
</div>
