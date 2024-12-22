<script>
	import Dock from "./Dock.svelte";

	// Define dock items with icon and label
	const dockItems = $state([
		{ id: 1, icon: "home", label: "Home" },
		{ id: 2, icon: "folder", label: "Finder" },
		{ id: 3, icon: "mail", label: "Mail" },
		{ id: 4, icon: "image", label: "Photos" },
		{ id: 5, icon: "settings", label: "Settings" },
		{ id: 6, icon: "music", label: "Music" },
	]);
</script>

<div class="flex min-h-screen w-full items-end justify-center bg-gradient-to-b from-slate-800 to-slate-900 pb-8">
	<Dock {dockItems} />
</div>
