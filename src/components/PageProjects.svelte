<script>
  import ProjectCard from "./ProjectCard.svelte";
    import ActivePage from "../stores/ActivePage.js";
    import DrawerStore from "../stores/DrawerStore.js";

    let projects = [
        {
            pid: 1,
            title: "Project 1",
            description: "This is a project",
            image: "https://via.placeholder.com/150",
        },
        {
            pid: 2,
            title: "Project 2",
            description: "This is a project",
            image: "https://via.placeholder.com/150",
        },
        {
            pid: 3,
            title: "Project 3",
            description: "This is a project",
            image: "https://via.placeholder.com/150",
        },
        {
            pid: 4,
            title: "Project 4",
            description: "This is a project",
            image: "https://via.placeholder.com/150",
        },
        {
            pid: 5,
            title: "Project 5",
            description: "This is a project",
            image: "https://via.placeholder.com/150",
        },
        {
            pid: 6,
            title: "Project 6",
            description: "This is a project",
            image: "https://via.placeholder.com/150",
        },
        {
            pid: 7,
            title: "Project 7",
            description: "This is a project",
            image: "https://via.placeholder.com/150",
        },
    ];

</script>
<div class="outer-container">
<div class="card-container grid grid-cols-2 md:grid-cols-3 gap-5 sm-gap-7 mb-auto mt-20 pt-20 sm-pt-20">
{#each projects as project}
    <div on:click={() => { ActivePage.update(value => project.pid); DrawerStore.update(value => true); }}>
    <ProjectCard />
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

</style>