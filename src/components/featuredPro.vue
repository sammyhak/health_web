<template>
  <section class='featured-products'>
    <div class="featured-product-container">
      <div class="header">
        <h3>Featured Products</h3>
        <div class="controls">
          <img src="../assets/previous.svg" alt="previous">
          <img src="../assets/next.svg" alt="next">
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
            Pain relief
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
            Pain relief
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
            Pain relief
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
            Pain relief
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

</script>

<style>
.font-for-inter {
  font-family: facee;
}

.fea {

  color: #258576;
}

.card {
  padding: 0;

}

.card-wrapper {}

.card {
  border: none !important;
}

.bu {
  /* color:green !important; */
  width: 50px !important;
  height: 50px !important;
}

.firstbu {
  position: absolute !important;
  top: -20px !important;
  left: 590px !important;
  width: 40px !important;
  height: 40px !important;

}

.firsttwo {
  position: absolute !important;
  top: -40px !important;
  left: 0px !important;
  width: 40px !important;
  height: 40px !important;

}

.carousel-dark .carousel-control-prev-icon,
.carousel-dark .carousel-control-next-icon {
  filter: invert(1) grayscale(100) hue-rotate(120deg);
}
</style>