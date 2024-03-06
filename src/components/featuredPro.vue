<template>
  <section class='featured-products'>
    <div class="featured-product-container">
      <div class="header">
        <h3>Featured Products</h3>
        <div class="controls">
          <img src="../assets/previous.svg" alt="previous" class="previous">
          <img src="../assets/next.svg" alt="next" class="next">
        </div>
      </div>

      <div class="products">
        <div class="featured-product">
          <div class="img-container">
            <img src="../assets/para.png" alt="drug">
          </div>
          <div class="title">
            Paracetamol
            <div class="price">N2000</div>
          </div>
          <div class="description">
            Pain relief 1
          </div>
        </div>

        <div class="featured-product">
          <div class="img-container">
            <img src="../assets/para.png" alt="drug">
          </div>
          <div class="title">
            Paracetamol
            <div class="price">N2000</div>
          </div>
          <div class="description">
            Pain relief 2
          </div>
        </div>

        <div class="featured-product">
          <div class="img-container">
            <img src="../assets/para.png" alt="drug">
          </div>
          <div class="title">
            Paracetamol
            <div class="price">N2000</div>
          </div>
          <div class="description">
            Pain relief 3
          </div>
        </div>

        <div class="featured-product">
          <div class="img-container">
            <img src="../assets/para.png" alt="drug">
          </div>
          <div class="title">
            Paracetamol
            <div class="price">N2000</div>
          </div>
          <div class="description">
            Pain relief 4
          </div>
        </div>

        <div class="featured-product">
          <div class="img-container">
            <img src="../assets/para.png" alt="drug">
          </div>
          <div class="title">
            Paracetamol
            <div class="price">N2000</div>
          </div>
          <div class="description">
            Pain relief 5
          </div>
        </div>

        <div class="featured-product">
          <div class="img-container">
            <img src="../assets/para.png" alt="drug">
          </div>
          <div class="title">
            Paracetamol
            <div class="price">N2000</div>
          </div>
          <div class="description">
            Pain relief 6
          </div>
        </div>

        <div class="featured-product">
          <div class="img-container">
            <img src="../assets/para.png" alt="drug">
          </div>
          <div class="title">
            Paracetamol
            <div class="price">N2000</div>
          </div>
          <div class="description">
            Pain relief 7
          </div>
        </div>

        <div class="featured-product">
          <div class="img-container">
            <img src="../assets/para.png" alt="drug">
          </div>
          <div class="title">
            Paracetamol
            <div class="price">N2000</div>
          </div>
          <div class="description">
            Pain relief 8
          </div>
        </div>

        <div class="featured-product">
          <div class="img-container">
            <img src="../assets/para.png" alt="drug">
          </div>
          <div class="title">
            Paracetamol
            <div class="price">N2000</div>
          </div>
          <div class="description">
            Pain relief 9
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import '../styles/components/featuredPro.scss';
export default {

  name: 'featuredPro',

}

document.addEventListener("DOMContentLoaded", function () {
  const previous = document.querySelector(".previous");
  const next = document.querySelector(".next");
  const slider = document.querySelector('.products');

  slider.scrollLeft = 0;
  previous.addEventListener("click", function () {
    moveSlide(-1);
  });

  next.addEventListener("click", function () {
    moveSlide(1);
  });
});

function moveSlide(direction) {  
  const slider = document.querySelector('.products');
  if(direction == -1){        
    slider.scrollLeft -= 1290;
  }else{
    slider.scrollLeft += 1290;    
  }  
}
</script>