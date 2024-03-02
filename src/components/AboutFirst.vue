<template>
  <div class="check-big">
    <div class="row">
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
            aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
            aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
            aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active container-fluid">
            <img src="../assets/Frame 112.png" class="d-block w-100" alt="...">
            <div class="carousel-caption check-car">
              <h5 class="font-for-our-milki">We offer a wide range of products and services</h5>
              <p>medical training,diagnostic equipment,updates on medical</p>
              <p>breakthrough studies and medical conferences</p>
            </div>
          </div>
          <div class="carousel-item active container-fluid">
            <img src="../assets/Frame 112.png" class="d-block w-100" alt="...">
            <div class="carousel-caption check-car">
              <h5 class="font-for-our-milki">We offer a wide range of products and services</h5>
              <p>medical training,diagnostic equipment,updates on medical</p>
              <p>breakthrough studies and medical conferences</p>
            </div>
          </div>
          <div class="carousel-item active container-fluid">
            <img src="../assets/Frame 112.png" class="d-block w-100" alt="...">
            <div class="carousel-caption check-car">
              <h5 class="font-for-our-milki">We offer a wide range of products and services</h5>
              <p>medical training,diagnostic equipment,updates on medical</p>
              <p>breakthrough studies and medical conferences</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import "../styles/components/AboutUs.scss";
export default {
  name: 'AboutSecond'
}
</script>

<style scoped>
@font-face {
  font-family: face;
  src: url(../assets/Millik.otf);
}

@font-face {
  font-family: facee;
  src: url(../assets/Inter-Regular.otf);
}

.font-for-our-milki {
  font-family: face;
}

.font-for-inter {
  font-family: facee;
}

.vertical-center {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  /* Ensure the container covers the entire viewport height */
}

@media screen and (min-width: 768px) {
  .check-car {
    margin-bottom: 100px;
  }
}

.check-big {
  overflow-x: hidden;
}

.cf {
  margin-top: 50px;
  height: 581px;
}

.background-div {
  width: 100%;
  /* height: 300px; Set height as needed */
  background-image: url('../assets/Frame\ 112.png');
  /* Replace 'path/to/your/image.jpg' with the path to your image */
  background-size: cover;
  /* Cover the entire area of the div */
  background-position: center;
  /* Center the background image */
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.c {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.carousel-item {
  background: url(../assets/Frame\ 112.png) !important;
  height: 500px;
}

.carousel-caption h5 {
  font-family: Millik;
  font-size: 48px;
}

.carousel-caption p {
  text-align: center;
  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.carousel-indicators>button {
  border-radius: 50%;
  width: 12px !important;
  height: 12px !important;
}

@media (min-width: 769px) and (max-width : 1200px) {}
</style>