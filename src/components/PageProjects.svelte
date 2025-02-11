<script>
  import ProjectCard from "./ProjectCard.svelte";
  import ActivePage from "../stores/ActivePage.js";
  import DrawerStore from "../stores/DrawerStore.js";
  import { updateActiveColors } from "../stores/ActiveColors.js";
  import { onMount } from 'svelte';

  let projects = [];
  let isDrawerOpen = false;

  DrawerStore.subscribe(value => {
    isDrawerOpen = value;
  });

  function handleProjectClick(project) {
    ActivePage.update(() => project.pid);
    DrawerStore.update(() => true);
    updateActiveColors(project.colors[0], project.colors[1]);
    
  }

  


  onMount(async () => {
    // Define the project folders we know exist
    const projectFolders = ['1_AK', '2_Dreamhack', '3_DaVinciCode', '4_Luftanka'];
    
    // Load each project's JSON file
    projects = await Promise.all(projectFolders.map(async (folder, index) => {
      try {
        const response = await fetch(`/assets/projects/${folder}/${folder.split('_')[1]}.json`);
        const data = await response.json();
        return {
          pid: index + 1,
          title: data.title,
          description: data.type,
          folder: folder,
          colors: data.colors || ['#0F0098', '#ffffff'],
          thumbVideo: data.thumbVideo,
          thumbImage: data.thumbImage || '1.jpg'
        };
      } catch (error) {
        console.error(`Error loading project ${folder}:`, error);
        return null;
      }
    }));
    
    // Filter out any failed loads incase i set wrong folder names
    projects = projects.filter(p => p !== null);
  });
</script>

<div class="outer-container">
<div class="card-container grid grid-cols-2 md:grid-cols-3 gap-5 sm-gap-7 mb-auto mt-20 pt-20 sm-pt-20">
{#each projects as project}
    <div on:click={() => handleProjectClick(project)} class ="project-card" class:drawer-open={isDrawerOpen}>
    <ProjectCard 
      title={project.title} 
      description={project.description} 
      folder={project.folder}
      bgColor={project.colors[0]}
      fgColor={project.colors[1]}
      thumbVideo={project.thumbVideo}
      thumbImage={project.thumbImage}
      pid={project.pid}
    />
    </div>
{/each}
</div>
</div>

<style> 
.card-container {
    margin-top: 0;
    margin-bottom: 12rem;
    margin-right: auto;
    margin-left: auto;
    width: fit-content;
}
.outer-container{
    scroll-behavior: smooth;
    height: 100%;
    width: 100vw;
    overflow-y: scroll;
   
}



::-webkit-scrollbar {
    display: none;
}

@media (width >= 48rem) {
    .card-container {
    min-width: 35rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
}
}

.project-card{
    transition: opacity 0.3s ease;
}

.drawer-open {
    opacity: 0;
    pointer-events: none;
    
}

</style>