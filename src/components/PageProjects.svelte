<script>
  import ProjectCard from "./ProjectCard.svelte";

</script>
<div class="outer-container">
<div class="card-container grid grid-cols-2 md:grid-cols-3 gap-5 sm-gap-7 mb-auto mt-20 pt-20 sm-pt-20">
    <ProjectCard/>
    <ProjectCard/>
    <ProjectCard/>
    <ProjectCard/>
    <ProjectCard/>
    <ProjectCard/>
    <ProjectCard/>
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

</style>