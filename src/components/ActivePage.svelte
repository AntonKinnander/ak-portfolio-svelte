<script>
import ActivePage from "../stores/ActivePage";
import ProjectTemplate from "./ProjectTemplate.svelte";

let page = "about";



 ActivePage.subscribe(value => {
        page = value;
  });
</script>




{#if page === "about"} 
  <ProjectTemplate />
{:else}
    "hello"
{/if}
