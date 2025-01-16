<!-- 9/16 PROJECT CARD -->
<div class="card relative flex flex-col border border-white border-1 overflow-hidden bg-[#0f0098]">

    <div class="image w-full h-3/4 flex justify-center items-center bg-gray-200 ">
        <div class="overlay absolute"></div>
        <img src="https://storage.needpix.com/rsynced_images/monkey-2596865_1280.jpg" alt="" class="z-9 w-full h-full object-cover border-white border-b-1 ">
    </div>
    <div class="z-10 description p-3 text-left flex-grow bg-[#0f0098] border-t border-white ">
        <p class="text-sm">Project Description </p>
            <h3 class="title">Project Name <span class="title text-[#0f0098]">&#8680;</span></h3>
        </div>
        <div class="z-10 text-container absolute bottom-3 right-3">
            <p class=" text-base text-[#0f0098] px-0.5"> View Project &#8599;</p>
        </div>
     

</div>

<!-- <style>
    .card {
        --base-width: calc(50vw - 1.5rem);
        width: var(--base-width);
        height: calc(var(--base-width) * 14/9);
    }
    @media (min-width: 640px) { 
    .card {
        --base-width: max(calc(33.333vw - 1.5rem), calc(25vh - 1.5rem));
        width: var(--base-width);
        height: calc(var(--base-width) * 14/9);
    }
    

    </style> -->
<style>
.text-container {
    margin-left: auto;
    position: relative;
    overflow: hidden;
    transition: color 0.2s ease-in-out;
    width: max-content;
}

.card:hover .text-container {
    color: #0f0098; /* Blue */
    transition: color 0.15s ease-in 0.55s;
    
}

.text-container::after {
    color: #0f0098; /* Blue */
    content: "";
    position: absolute;
    top: 0;
    right: 100%;
    height: 100%;
    width: 100%;
    background-color: #ffffff; /* White background */
    z-index: -1;
    transition: transform 0.15s ease-in 0.55s;
}

.card:hover .text-container:after {
    transform: translateX(100%);
}

.title {
    padding-top: 0.5rem; /* py-2 */
    padding-bottom: 0.5rem;
}

</style>
