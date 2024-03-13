<template>
  <div class="main-div">
    <div class="container di">
      <div class="row container">
      <div class="col-6 di">
        <div>
            <h1 class="h1-dis te font-for-our-milki">Discover a world of healthcare solutions at your fingertips.</h1>
        <p class="font-for-inter">Healthline is here to support you on your journey to better health.</p>
        <!-- <button class="btn-lg bt button-nav mar mt-4 text-center font-for-inter">Read More</button> -->
        </div>
      
      </div>
      <div class="col-6 di">
        <img src="../assets/newes.png" class="img-fluid">
      </div>
    </div>
    </div>
  
  </div>
</template>

<script>
export default {
    name:'discoverLanding'
}
</script>

<style>
.h1-dis{

  color:#18564C;
  font-weight:bold;
}
.di{

      display: flex;
      justify-content: center;
      align-items: center;
      
    
}
.main-div{
     background-image: url("../assets/new\ \(2\).png");
    height:90%;
    background-position: center;
  background-repeat: no-repeat; 
  background-size: cover; 
 
  padding-top:10px !important;
  padding-bottom:10px !important;
  margin:0 !important
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

</style>