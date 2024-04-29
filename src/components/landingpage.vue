<template>
  <div class="container te">
    <div class="row container-sm">
      <div class="col-md-6 col-12">
        <br><br>
        <div class="ft">
          <h2 class="mt-5 te font-for-our-milki">Our love for <span class="humanity">Humanity</span> drives our <span
              class="passion">passion</span> for <span class="healthcare">healthcare.</span> </h2>
          <br>

        </div>
        <p class="font-for-inter">Bridging unmet healthcare needs.</p>
        <button class="btn-lg bt button-nav mar mt-4 font-for-inter " style="color:white" @click="navigateToAbout">View
          products</button>
      </div>
      <div class="col-md-6 col-12"><img src="../assets/new.png" class="img-fluid mt-3"></div>

    </div>

    <div class="mt-5 ">
      <div style="border-radius: 20px;" class="burn row row-color container-sm">
        <div class="col-lg-6 col-md-12 col-12 mt-5 pt-5 d-none d-sm-block">
          <h5 class="what font-for-inter" style="font-size: 22px !important;">What we do</h5>
          <p class="mt-3 fs-6 font-for-inter bud" style="font-size: 21px !important;">We are a pharmaceutical company focused on the marketing and distribution of pharmaceutical and healthcare products. We also involve in bridging unmet healthcare needs in medical tourism,providing Diagnostics equipment for medical institutions and medical trainings (for Medical Personnel & para-Medics) thereby ensuring a more knowledgeable and skillful health team.</p>
          <!-- <button class="btn-lg bt button-nav mar mt-5 font-for-inter" @click="navigateToAbout">Read More</button> -->
        </div>
        <div class="col-lg-6 col-md-12 col-12 mt-5">
          <img src="../assets/Group 3.png" class="img-fluid">
        </div>
        <div class="col-md-6 col-12 d-block d-sm-none"><br><br>
          <h5 class="what font-for-inter ">What we do</h5>
          <p style="font-size: larger;" class="mt-3 fs-6 font-for-inter">We are a pharmaceutical company focused on the marketing and distribution of pharmaceutical and healthcare products. We also involve in bridging unmet healthcare needs in medical tourism,providing Diagnostics equipment for medical institutions and medical trainings (for Medical Personnel & para-Medics) thereby ensuring a more knowledgeable and skillful health team.</p>
          <!-- <button class="btn-lg bt button-nav mar mt-5 font-for-inter" @click="navigateToAbout">Read More</button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
  methods: {
    navigateToAbout() {
      this.$router.push('/spec'); // Navigate to the '/about' route
    },
  },
}
</script>

<style>
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
  font-size: 16px !important;
  font-weight: 400;
}

.font-for-inter.bud{
  font-size: 22px !important;
}

.what {
  color: #D41420;
}

.row-color {
  background-color: #F2F8F7;
}

.button-nav {
  background-color: #258576 !important;
  width: 196px;
  height: 46px;
  border: 0px;
  border-radius: 62px;
  color: white !important;
  font-size: 18px !important;
  font-weight:500;
}

.ft {

  display: flex;
  height: 50h;
  align-items: center;
  /* Vertically center content */


}

.healthcare {
  color: #258576;
}

.passion {
  color: #BE0F44;
}

.humanity {
  color: #FCB912 !important;
}

h2 {
  font-size: 48px !important;
}

.burn{
  padding: 42px !important;
}

@media screen and (max-width: 576px) {
  h2{
    font-size: 28px !important;
  }
  .font-for-inter {
    font-size: 18px;
  }
  .button-nav{
    font-size: 14px !important;
  }
  .burn{
    border-radius: 0px !important;
    width: auto !important;
    padding: 0px !important;
  }
}
</style>
<!-- @media screen and (max-width: 600px) {
  #app > div:nth-child(2) > div.container.te > div.mt-5 > div{
    padding: unset;
    margin:unset;
  }
}
 -->
