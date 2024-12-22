<script>
  export let y;
  export let tabs = [];
</script>

<header
class={"sticky z-[10] top-0 duration-200 px-1 py-0.5 flex items-center justify-start gap-6  backdrop-blur border-b border-solid border-[#ffffff] "}
>
  <h4 class="font-medium flex gap-3 items-center">   <img src="./assets/ak-logo.svg" class="h-5" alt ="logo"> Anton Kinnander</h4>


  <div class=" flex flex-initial flex-row items-center gap-4 justify-start">
    {#each tabs as tab, index}
      <a href={tab.link} class="hover:text-lime-400">
        <p>{tab.name}</p>
      </a>
    {/each}
  </div>

  <p class="ml-auto px-1"> </p>

</header>
