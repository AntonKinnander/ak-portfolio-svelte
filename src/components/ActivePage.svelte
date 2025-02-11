<script>
import ActivePage from "../stores/ActivePage";
import ProjectTemplate from "./ProjectTemplate.svelte";
import { onMount } from 'svelte';

let page = "about";
let activeProject = null;

async function loadProjectData(pid) {
  if (typeof pid === "number") {
    const projectFolders = ['1_AK', '2_Dreamhack', '3_DaVinciCode', '4_Luftanka'];
    const folder = projectFolders[pid - 1];
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
}

ActivePage.subscribe(value => {
  page = value;
  loadProjectData(value);
});
</script>

{#if page === "about"} 
  "About me"
{:else}
  <ProjectTemplate project={activeProject} />
{/if}
