





<style> 
/* 2 column grid */
.grid-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 100%;
    overflow-y: scroll;
    /* hide scrollbar */
		scrollbar-width: none;
    background-color: var(--activeBG);
    border-bottom: 0px;
    height: calc(100% + 10rem);
  }
  
  /* Style the images inside the grid */
  .grid-container img {
    width: 100%;
    
    display: block;
    border: 1px solid #ffffff;
    border-bottom: 0px;
 
  }
  
  .grid-container img.landscape {
    grid-column: span 2;
  }
  
  /* On screens that are 992px wide or less, go from four columns to two columns */
  /* @media screen and (max-width: 992px) {
    .grid-container {
      grid-template-columns: 1fr 1fr;
    }
  } */


  /* large screens */
  
@media screen and (min-width: 60rem) {
    .grid-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  /* On screens that are 600px wide or less, make the columns stack on top of each other instead of next to each other */
  @media screen and (max-width: 30rem) {
    .grid-container {
      grid-template-columns: 1fr;
    }

    .grid-container img.landscape {
    grid-column: span 1;
  }
  }

</style>


<div class="grid-container">
        <div class="text-container"> Epic Bacon Project2</div>
      <img class=""src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG_bna8l28WfiFj7D17a7wdVIrLuWWjkgxfA&s" alt="3x4">
      <img class="landscape" src="https://placehold.co/80x50" alt="">
      <img class=""src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG_bna8l28WfiFj7D17a7wdVIrLuWWjkgxfA&s" alt="3x4">
      <img class=""src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG_bna8l28WfiFj7D17a7wdVIrLuWWjkgxfA&s" alt="3x4">
      <img class="landscape" src="https://placehold.co/80x50" alt="">
      <img class=""src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG_bna8l28WfiFj7D17a7wdVIrLuWWjkgxfA&s" alt="3x4">
      <img class=""src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG_bna8l28WfiFj7D17a7wdVIrLuWWjkgxfA&s" alt="3x4">

</div>