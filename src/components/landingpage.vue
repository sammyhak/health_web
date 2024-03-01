<template>
      <div class="container te">
        <div class="row">
      <div class="col-md-6 col-12">
        <div class="ft mt-5">
        
          <h2 class="mt-5 te font-for-our-milki">Our love for <span class="humanity">Humanity</span> drives our <span class="passion">passion</span>  for <span class="healthcare">healthcare.</span> </h2>
        <br>

        </div>
        <p class="font-for-inter">Bridging unmet healthcare need.</p>
        <button class="btn-lg bt button-nav mar mt-4 font-for-inter " style="color:white"  @click="navigateToAbout">View products</button>
      </div>
      <div class="col-md-6 col-12"><img src="../assets/new.png" class="img-fluid mt-3"></div>
    
     </div>

    <div class="mt-5 ">
      <div class="row row-color mt-3 container">
       
       <div class="col-lg-5 col-12 mt-5 pt-5">
        <h5 class="what font-for-inter ">What we do</h5>
        <p class="mt-3 font-for-inter">We are a pharmaceutical company focused on the marketing and distribution of pharmaceutical healthcare products. But Also involved in bridging unmet healthcare needs in medical tourism, providing Diagnostic Equipment's for medical institutions and  medical training's( for Medical Personnel & Para-Medics) thereby ensuring a more knowledgeable and skillful health team.</p>
        <button class="btn-lg bt button-nav mar mt-5 font-for-inter" @click="navigateToAbout">Read More</button>
      </div>
       <div class="col-lg-7 col-12 mt-5">
        <img src="../assets/Group 3.png" class="img-fluid">
       </div>
     </div>
    </div>
      </div>
</template>

<script>
export default {
   name:'LandingPage',
   methods: {
    navigateToAbout() {
      this.$router.push('/product'); // Navigate to the '/about' route
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
.font-for-our-milki{
  font-family: face;
}
.font-for-inter{
  font-family: facee;
}
.what{
  color:#D41420;
}
.row-color{
  background-color:#F2F8F7;
}
.button-nav{
  background-color: #258576 !important;
  width:135px;
  height:42px;
  border: 0px;
  border-radius:34px;
  color:white !important;
  font-size: 16px !important;
}
.ft{

  display: flex;
  height:50h;
  align-items: center; /* Vertically center content */


}
.healthcare{
  color:#258576;
}
.passion{
  color:#BE0F44;
}
.humanity{
color:#FCB912 !important;
}
h2{
  font-size: 50px !important;
 

}
.te{
     
}


</style>