


<!-- 9/16 PROJECT CARD -->
<div class="card relative flex flex-col border border-[var(--activeFG)] border-1 border-b-none overflow-hidden bg-[var(--activeBG)]">

    <div class="image w-full h-3/4 flex justify-center items-center bg-gray-200 ">
        <div class="overlay absolute"></div>
        <img src="https://storage.needpix.com/rsynced_images/monkey-2596865_1280.jpg" alt="" class="z-9 w-full h-full object-cover border-[var(--activeFG)] border-b-1 ">
    </div>
    <div class="z-10 p-3 pt-0 pb-0 text-left flex-grow bg-[var(--activeBG)] border-t border-[var(--activeFG)] border-b-0">
        
        <p class="description">Case - Personal branding</p>
            <h3 class="title">AK Personal Branding</h3>
        
        
        <div class="z-10 text-container absolute bottom-3 right-2 sm:block hidden">
            <p class="view-project text-[var(--activeBG)] px-0.5 -my-1"> View Project &#8599;</p>
        </div>
     </div>

</div>


<style>
.view-project {
    margin-left: auto;
    position: relative;
    overflow: hidden;
    transition: color 0.2s ease-in-out;
    width: max-content;
}


.card:hover .view-project {
    color: var(--activeBG); /* Blue */
    transition: color 0.15s ease-in 0.55s;
    
}

.view-project::after {
    color: var(--activeBG); /* Blue */
    content: "";
    position: absolute;
    top: 0;
    right: 100%;
    height: 100%;
    width: 100%;
    background-color: var(--activeFG); /* White background */
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
