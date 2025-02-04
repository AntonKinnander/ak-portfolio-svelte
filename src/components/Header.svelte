<script>
  export let tabs = [];
  import DateTime from "./DateTime.svelte";
  import { scrollToSection } from "./utils/scroll-utils.js";
  import AkLogo from "./svg/ak-logo.svelte";

  function handleClick(tab, event) {
		event.preventDefault();
    tab.onclick();
  }

</script>

<style>
 .tab-text:hover, :global(h4:hover .cls-1) {
  opacity: 0.6;
  transition: opacity 0.2s ease;
}


</style>

<header
  id="header"
  class={"sticky h-7 z-[10] top-0 duration-200 px-1 py-0.5 flex items-center justify-start gap-6 backdrop-blur-lg border-b border-solid border-[var(--activeFG)]"}
>
  <a
    href=""
    on:click={(event) => {
      handleClick(tabs[0], event);
    }}
    ><h4
      class="tab-text font-medium flex gap-3 items-center]"
    >
      <!-- Current page title instead of name, add dropdown menu -->
      <!-- <img src="./assets/ak-logo.svg" class="h-5" alt="logo" />  -->
      <div class="h-5 my-auto"><AkLogo/></div>
      Anton Kinnander
    </h4>
  </a>
  <div
    class="flex flex-initial flex-row items-center gap-4 justify-start hidden md:block"
  >
    {#each tabs as tab}
      {#if tab.type !== 3}
          <a
            href="{tab.link}"
            class="tab-text mr-4"
            on:click={(event) => {
              handleClick(tab, event);
              }}>
            {tab.name}</a
          >
      {/if}
    {/each}
  </div>
  <!-- Spacing -->
  <p class="ml-auto px-1"></p>
  <DateTime class="flex flex-row items-center justify-end gap-4" />
</header>
