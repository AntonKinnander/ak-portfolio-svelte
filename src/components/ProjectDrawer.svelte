<script lang="ts">
  import * as Drawer from "$lib/components/ui/drawer";
  import ProjectGrid from "./ProjectGrid.svelte";

  export let open = false;
  // export let drawerTrigger;
</script>



<!-- <Drawer.Root bind:open shouldScaleBackground>   -->

<Drawer.Root bind:open shouldScaleBackground>  
<Drawer.Trigger> </Drawer.Trigger>

      <Drawer.Content>      
        <Drawer.Close>
              <Drawer.Header>
                  <Drawer.Description>
                    <p class="ml-1 sm:ml-0">Personal Branding</p></Drawer.Description>
              </Drawer.Header>
            </Drawer.Close>
            
            <ProjectGrid/>
            <div class="z-5 fixed bottom-0 w-full h-1/6 bg-gradient-to-t from-[var(--activeBG)]/20 pointer-events-none" ></div>
          </Drawer.Content>
       
  </Drawer.Root>
 



