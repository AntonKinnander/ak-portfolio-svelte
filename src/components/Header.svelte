<script>
  export let y;

  let tabs = [
    { name: "Projects", link: "#projects" },
    { name: "About me", link: "#about" },
    { name: "Code", link: "#code" },
  ];
</script>

<header
class={"sticky z-[10] top-0 duration-200 px-1 py-0.5 flex items-center justify-start gap-6  bg-[#0f0098] border-b border-solid border-[#ffffff] "}
>
  <h4 class="font-medium flex gap-3 items-center">   <img src="./assets/ak-logo.svg" class="h-5" alt ="logo"> Anton Kinnander</h4>


  <div class="sm:flex items-center gap-4 justify-start">
    {#each tabs as tab, index}
      <a href={tab.link} class="hover:text-lime-400">
        <p>{tab.name}</p>
      </a>
    {/each}
  </div>

  <p class="ml-auto px-1"> </p>
<!-- <a href="https://www.google.com"
class = "blueShadow relative overflow-hidden px-5 py-2 group rounded-full bg-white text-slate-950">
    <div class="absolute top-0 right-full w-full h-full bg-lime-400 opacity-20 group-hover:translate-x-full z-0 duration-200"></div>
    <h4 class="z-9 relative">Contact</h4>
</a> -->
</header>
