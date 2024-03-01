<template>
  <div class="font-for-inter">

    <div class="container font-for-inter">
      <h3 class="mt-5 fea te">Featured Products</h3>
    </div>
    <div id="carouselExampleControls" class="carousel carousel-dark slide d-none d-lg-block" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="card-wrapper container-sm d-flex  justify-content-around">
            <div class="card  " style="width: 18rem;">
              <img src="../assets/para.png" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title"> Paracetamol</h5>
                <p>pain relief</p>

              </div>
            </div>
            <div class="card" style="width: 18rem;">
              <img src="../assets/download__30_-removebg-preview.png" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title"> Paracetamol</h5>
                <p>pain relief</p>

              </div>
            </div>
            <div class="card" style="width: 18rem;">
              <img src="../assets/chd.png" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title"> Paracetamol</h5>
                <p>pain relief</p>

              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="card-wrapper container-sm d-flex   justify-content-around">
            <div class="card  " style="width: 18rem;">
              <img src="../assets/download__22_-removebg-preview (1).png" class="card-img-top img-fluid" alt="...">
              <div class="card-body">

                <h5 class="card-title"> Paracetamol</h5>
                <p>pain relief</p>

              </div>
            </div>
            <div class="card" style="width: 18rem;">
              <img src="../assets/download__23_-removebg-preview (1).png" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title"> Paracetamol</h5>
                <p>pain relief</p>


              </div>
            </div>
            <div class="card" style="width: 18rem;">
              <img src="../assets/download__32_-removebg-preview.png" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title"> Paracetamol</h5>
                <p>pain relief</p>


              </div>
            </div>
          </div>
        </div>
        <!-- <div class="carousel-item">
      <div class="card-wrapper container-sm d-flex  justify-content-around">
      <div class="card " style="width: 18rem;">
  <img src="../assets/para.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    
  </div>
</div>
        <div class="card" style="width: 18rem;">
  <img src="../assets/para.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    
  </div>
        </div>
        <div class="card" style="width: 18rem;">
  <img src="../assets/para.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    
  </div>
</div>
    </div>
  </div> -->

      </div>

      <button class="carousel-control-prev bu firstbu" type="button" data-bs-target="#carouselExampleControls"
        data-bs-slide="prev">

        <span class="carousel-control-prev-icon bu firstbu .carousel-success " aria-hidden="true"><font-awesome-icon
            :icon="['fas', 'less-than']" /></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next bu" type="button" data-bs-target="#carouselExampleControls"
        data-bs-slide="next">
        <span class="carousel-control-next-icon firsttwo" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>

    </div>




    <div class="d-block d-md-none">
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
            aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
            aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
            aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../assets/para.png" class="d-block w-100" alt="..">
          </div>
          <div class="carousel-item">
            <img src="../assets/chd.png" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="../assets/download__30_-removebg-preview.png" class="d-block w-100" alt="...">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
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
}</style>