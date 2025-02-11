<script lang="ts">
  import * as Drawer from "$lib/components/ui/drawer";
  import ActivePage from "./ActivePage.svelte";
  import DrawerStore from "../stores/DrawerStore.js";
  import { updateActiveColors } from "../stores/ActiveColors.js";
  import ActivePageStore from "../stores/ActivePage.js";
  import PageTitle from "../stores/PageTitle.js";


  let open = false;
  let activeProject = null;

  DrawerStore.subscribe(value => {
    open = value;
  });

  ActivePageStore.subscribe(async value => {
    if (typeof value === "number") {
      const projectFolders = ['1_AK', '2_Dreamhack', '3_DaVinciCode', '4_Luftanka'];
      const folder = projectFolders[value - 1];
      try {
        const response = await fetch(`/assets/projects/${folder}/${folder.split('_')[1]}.json`);
        const data = await response.json();
        activeProject = {
          ...data,
          folder: folder
        };
      } catch (error) {
        console.error('Error loading project data:', error);
      }
    } else {
      activeProject = null;
    }
  });

if (open) {
  PageTitle.update(value => activeProject.title);
}
else {
  PageTitle.update(value => "Anton Kinnander");
}

  // export let drawerTrigger;
</script>



<!-- <Drawer.Root bind:open shouldScaleBackground>   -->

<Drawer.Root bind:open shouldScaleBackground onClose={() => {
    updateActiveColors('#0F0098', '#ffffff');
    setTimeout(() => {
        DrawerStore.update(value => !value);
    }, 200);
}}>
      <Drawer.Content>      
        <Drawer.Close>
              <Drawer.Header>
                  <Drawer.Description>
                    {#if activeProject}
                      <p class="ml-1 md:ml-0">{activeProject.title}</p>
                    {:else}
                      <p class="ml-1 md:ml-0">About Me</p>
                    {/if}
                  </Drawer.Description>
              </Drawer.Header>
            </Drawer.Close>
            <ActivePage />
            <div class="z-20 fixed bottom-0 w-full h-1/6 bg-gradient-to-t from-[var(--activeBG)] pointer-events-none"></div>
          </Drawer.Content>
       
  </Drawer.Root>
 



