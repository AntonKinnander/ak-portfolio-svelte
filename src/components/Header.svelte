<script>
  export let tabs = [];
  import DateTime from "./DateTime.svelte";
  export let goToSection; // Receive the function from the parent

  // function handleTabClick(sect) {
  //   if (goToSection) {
  //     goToSection(sect);
  //   }
  // }

</script>

<header
  id = "header" class={"sticky h-7 z-[10] top-0 duration-200 px-1 py-0.5 flex items-center justify-start gap-6 backdrop-blur-lg border-b border-solid border-[#ffffff]"}
>
  <h4 class="font-medium flex gap-3 items-center">
    <!-- Current page title instead of name, add dropdown menu -->
    <img src="./assets/ak-logo.svg" class="h-5" alt="logo" /> Anton Kinnander 
  </h4>

  <div
    class="flex flex-initial flex-row items-center gap-4 justify-start hidden md:block"
  >
    <!-- {#each tabs as tab, index}
      {#if tab.location !== 3}
        <a class="hover:text-lime-400 mr-4" href={tab.link}>
          {tab.name}
        </a>
      {/if}
    {/each} -->


    {#each tabs as tab}
    {#if tab.type !== 3}
    {#if tab.section}
    <button class="hover:text-lime-400 mr-4" on:click={() => goToSection(tab.section - 1)}>
        {tab.name}
    </button>
    {:else}
    <a class="hover:text-lime-400 mr-4" href={tab.link} target="_blank">
      {tab.name}
    </a>
    {/if}
    {/if}
  {/each}

  </div>
  <!-- Spacing -->
  <p class="ml-auto px-1"></p>
  <DateTime class="flex flex-row items-center justify-end gap-4" />
</header>
