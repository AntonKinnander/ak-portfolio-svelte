<script lang="ts">
  import * as Drawer from "$lib/components/ui/drawer";
  import ActivePage from "./ActivePage.svelte";
  import DrawerStore from "../stores/DrawerStore.js";
  import { onMount } from "svelte";
  let open = false;


  DrawerStore.subscribe(value => {
    open = value;
  });


  // export let drawerTrigger;
</script>



<!-- <Drawer.Root bind:open shouldScaleBackground>   -->

<Drawer.Root bind:open shouldScaleBackground onClose={() => setTimeout(() => DrawerStore.update(value => !value), 200)}>
      <Drawer.Content>      
        <Drawer.Close>
              <Drawer.Header>
                  <Drawer.Description>
                    <p class="ml-1 md:ml-0">Personal Branding</p></Drawer.Description>
              </Drawer.Header>
            </Drawer.Close>
            <ActivePage />
            <div class="z-20 fixed bottom-0 w-full h-1/6 bg-gradient-to-t from-[var(--activeBG)] pointer-events-none"></div>
          </Drawer.Content>
       
  </Drawer.Root>
 



