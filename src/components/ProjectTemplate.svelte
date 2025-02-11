<script>
  export let project;
</script>

<style>
  /* Base styles */
  .gallery {
    display: flex;
    flex-wrap: wrap;
    overflow-y: scroll;
    background-color: var(--activeFG);
  }
  
  .gallery-item {
    flex: 1 1 100%; /* Default: 1 image per row on tall screens */
    border-bottom: .3rem solid var(--activeFG);
    border-top: 0;
    border-left: .15rem solid var(--activeFG);
    border-right: .15rem solid var(--activeFG);
    object-fit: contain; /* Add this */
    height: auto; /* Add this */
    max-width: 100%;
}

  
  .text-container {
    display: flex;
    flex-direction: column;
    aspect-ratio: 1/1;
    height: auto;
    width: calc(50% + 4.5rem);
    background-color:var(--activeBG);
    color: var(--activeFG);
    border: .3rem solid var(--activeFG);
    border-right: .15rem solid var(--activeFG);
    border-top: 0px;
    border-left: 0px;
    padding: .6rem;
    padding-left: 1.1rem;
  }

  .title {
    padding-top: .33vw; 
    padding-bottom: 0.5rem;
    /* margin-left: .5rem; */
    font-size: min(calc(2.125rem + 1vw), 5rem);
    text-wrap: wrap;
    line-height: calc(100% + 0.1rem);
    max-height: 15rem;
  }
  
  /* tall images */
  .gallery-item.tall {
    aspect-ratio: 3 / 4; /* 1u * 1u */
    object-fit: fill;
    flex: 1 1 calc(33.333% - 0px); 
    width: auto;
  }
  


  /* Wide images */
  .gallery-item.wide {
    aspect-ratio: 3 / 2; /* 2u * 1u */
    margin: 0;
    object-fit:cover;
    flex: 1 1 calc(66.666% - 0px); /* 1 wide image = 2u */
  }
  
  /* Phone screens, full width text container, 1 image per row */
  @media (width <= 40rem)  {
    .text-container {
      width: 100%;
      min-height: 25%;
      aspect-ratio: 16/10;
    }
  
    .gallery-item {
      flex: 1 1 100%; /* 1 image per row */
    }
  }
  
  /* Medium screens (2 tall images or 1 wide image per row) */
  @media (width >= 40rem) and (width <= 64rem){
    .text-container {
      width: 50%;
      min-height: 25%;
    }
  
    .gallery-item.tall {
      flex: 1 1 calc(50% + 0px); /* 2 tall images per row */
    }
  
    .gallery-item.wide {
      flex: 1 1 100%; /* 1 wide image per row */
    }

    .gallery-item{
      min-width: 0;
    }
  }
  
  /* Large screens (3 tall images or 1 wide image per row) */
  @media (width >= 64rem) {
    .text-container {
      width: calc(50% + 4.5rem); /* Reset to base style for larger screens */
    }
  
    .gallery-item.tall {
      flex: 1 1 calc(33.333% - 0px); /* 3 tall images per row */
    }
  
    .gallery-item.wide {
      flex: 1 1 calc(66.666% - 0px); /* 1 wide image = 2u */
    }

    .gallery-item{
      min-width: 0;
    }
  }


/* Large screens (3 tall images or 1 tall + 1 wide = 3u per row) */


  </style>
  <div class="z-5 fixed bottom-0 w-full h-1/4 bg-gradient-to-t from-[var(--activeBG)]/60  pointer-events-none" ></div>
  <div class="gallery">
    {#if project}
      <div class="text-container"> 
        <p class="text-sm">{project.type}</p>
        <h3 class="title">{project.title}</h3>
        <p class="description">{project.description}</p>
      </div>
      {#each project.mediaList as media}
        {#if media.type === 'video'}
          <video 
            class="gallery-item {media.orientation}"
            src="/assets/projects/{project.folder}/Images/{media.file}"
            muted
            autoplay
            playsinline
            loop
            alt="{project.title} - {media.file}"
          ></video>
        {:else}
          <img 
            class="gallery-item {media.orientation}"
            src="/assets/projects/{project.folder}/Images/{media.file}"
            alt="{project.title} - {media.file}"
          >
        {/if}
      {/each}
      <div class="w-full bg-[var(--activeBG)] h-80 mb-5"></div>
    {/if}
  </div>