<style>
/* Base styles for the gallery */
.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
    /* gap: .2rem; */
    /* padding: .1rem; */
    background-color: #0F0098;
    overflow-y: scroll;
    padding-bottom: 20rem;
}

.row1 {
    display: flex;
    grid-column: span 3;
  
    /* padding: 0 10px; */

}

.row1 .small {
  margin-left: auto;
  object-fit: fill;
}

.description {
    min-width:50%;
 
    
    /* margin-right: .2rem; */
    border-right: .15rem solid #ffffff;
    border-bottom: .3rem solid #ffffff;
}

/* Styles for small images */
.gallery .small {
    grid-column: span 1;
    height: 100%; /* Set a fixed height for small images */
    object-fit: fill; /* Ensures the image covers the area without distortion */
    width: 100%;
    border: .15rem solid #ffffff;
    border-width: 0 .15rem .3rem .15rem;
    
}

/* Styles for wide images */
.gallery .wide {
    grid-column: span 2;
    height: 100%; /* Same height as small images */
    object-fit: fill; /* Ensures the image covers the area without distortion */
    width: 100%;
    border: .15rem solid #ffffff;
    border-width: 0 .15rem .3rem .15rem;
}

/* Responsive adjustments for smaller screens */
@media (max-width: 767px) {
    .gallery {
        grid-template-columns: repeat(2, 1fr); /* 2 small images per row */
    }

    .gallery .wide {
        grid-column: span 2; /* Wide images take up the full row */
    }
}

/* Responsive adjustments for medium screens and up */
@media (min-width: 768px) {
    .gallery {
        grid-template-columns: repeat(3, 1fr); /* Up to 3 small images per row */
    }

    .gallery .wide {
        grid-column: span 2; /* Wide images take up 2 units */
    }

    /* Ensure that a small image and a wide image together take up 3 units */
    .gallery .small + .wide {
        grid-column: span 2;
    }
}
  </style>
  
  <div class="gallery">
    <div class="row1">
      <div class="description">Epic Bacon Project2</div>
      <img class="small" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG_bna8l28WfiFj7D17a7wdVIrLuWWjkgxfA&s" alt="Portrait">
    </div>
      <img class="wide" src="https://placehold.co/60x40" alt="Landscape">
      <img class="small" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG_bna8l28WfiFj7D17a7wdVIrLuWWjkgxfA&s" alt="Portrait">
      <img class="small" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG_bna8l28WfiFj7D17a7wdVIrLuWWjkgxfA&s" alt="Portrait">
      <img class="wide" src="https://placehold.co/60x40" alt="Landscape">
      <img class="small" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG_bna8l28WfiFj7D17a7wdVIrLuWWjkgxfA&s" alt="Portrait">
      <img class="small" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG_bna8l28WfiFj7D17a7wdVIrLuWWjkgxfA&s" alt="Portrait">
  </div>