<script>
    export let title;
    export let description;
    export let folder;
    export let bgColor;
    export let fgColor;
    export let thumbVideo;
    export let thumbImage;
    export let pid;

    import ActivePage from "../stores/ActivePage.js";
    let mediaElement;
    const isVideo = !!thumbVideo;
    const mediaPath = isVideo 
        ? `/assets/projects/${folder}/Images/${thumbVideo}`
        : `/assets/projects/${folder}/Images/${thumbImage}`;

    function handleMouseEnter() {
        if (isVideo && mediaElement) {
            mediaElement.loop = true;
            mediaElement.play();
        }
        console.log(`Hovering project ${pid}: ${title}`);
        ActivePage.update(() => pid);
    }

    function handleMouseLeave() {
        if (isVideo && mediaElement) {
            mediaElement.loop = false;
        }
    }

</script>

<!-- 9/16 PROJECT CARD -->
<div class="card relative flex flex-col border overflow-hidden" 
     style="--cardBG: {bgColor}; --cardFG: {fgColor}; border-color: var(--cardFG);"
     on:mouseenter={handleMouseEnter}
     on:mouseleave={handleMouseLeave}>
    <div class="image w-full h-3/4 flex justify-center items-center bg-gray-200 border-b-1">
        <div class="overlay absolute"></div>
        {#if isVideo}
            <video 
                src={mediaPath}
                bind:this={mediaElement}
                class="z-9 w-full h-full object-cover"
                style="border-bottom-color: var(--cardFG);"
                muted
                playsinline
            ></video>
        {:else}
            <img 
                src={mediaPath}
                alt={title}
                class="z-9 w-full h-full object-cover"
                style="border-bottom-color: var(--cardFG);"
            >
        {/if}
    </div>
    <div class="z-10 p-3 pt-0 pb-0 text-left flex-grow border-t-2"
         style="background-color: var(--cardBG); border-top-color: var(--cardFG);">
        <p class="description" style="color: var(--cardFG);">Case - {description}</p>
        <h3 class="title" style="color: var(--cardFG);">{title}</h3>
        <div class="z-10 text-container absolute bottom-3 right-2 sm:block hidden">
            <p class="view-project px-0.5 -my-1" style="color: var(--cardBG);"> View Project &#8599;</p>
        </div>
    </div>
</div>

<style>
.card {
    border-width: 2px;
}


.view-project {
    margin-left: auto;
    position: relative;
    overflow: hidden;
    transition: color 0.2s ease-in-out;
    width: max-content;
}

.card:hover .view-project {
    color: var(--cardBG);
    transition: color 0.15s ease-in 0.55s;
}

.view-project::after {
    content: "";
    position: absolute;
    top: 0;
    right: 100%;
    height: 100%;
    width: 100%;
    background-color: var(--cardFG);
    z-index: -1;
    transition: transform 0.15s ease-in 0.55s;
}

.card:hover .view-project:after {
    transform: translateX(100%);
}

.title {
    font-size: calc(.4rem + 4.5vw);
    line-height: 90%;
}

.description, p.view-project {
    margin-top: 0;
    font-size: min(.95rem, calc(.7rem + .2vw));
}

.description{
    margin-top: max( 0.3rem, calc(0.1rem + 0.1vw));
    margin-bottom: calc(.2vw - .1rem);
}

@media (width >= 48rem) {

.title {
    font-size: calc(.7vw + 1.4rem);
    line-height: 85%;
    word-wrap: break-word;
}

.description, p.view-project {
    margin-top: 0;
    font-size: max(.85rem, calc(.6rem + .15vw));
}

.description{
    margin-top: max(0.05rem, calc(0.1rem + 0.15vw));
    margin-bottom: calc(.2vw - .15rem);
}

p.view-project {
  opacity: 0;
  transition: opacity 0.2s ease-in 0.6s;
}

.card:hover p.view-project{
  opacity: 1;
  transition: opacity 0.5s ease-in;
}

}

</style>
