<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-4">
        <img src="../assets/Frame 8.png" class="im">
        <p class="mt-3">29 Adeniyi Jones Avenue,Ikeja-Lagos,Nigeria</p>
        <p class="pt">+234 7081123545 +234 8129937001</p>
        <p class="pt">info@healthlineng.com</p>
      </div>
      <div class="col-12 col-md-3">
      
        <p class=""><router-link to="/" class="rou h">Company</router-link></p>
        <!-- <p><router-link to="/" class="rou fortext">New</router-link></p> -->
        <p><router-link to="/" class="rou fortext">Career</router-link></p>
          <p class="fortext"><a href="/#section2" style="color: black !important; text-decoration: none !important;"><router-link class="fortext" :to="{ path: '/', hash: '#section2' }">FAQ</router-link></a></p>
      </div>
      <div class="col-12 col-md-3">
        <h6 class=""> <router-link to="/about" class="rou h">About</router-link></h6>
        <p class="mt-3"><router-link to="/contact" class="rou fortext">Contacts</router-link> </p>
        <p class="fortext"><a href="/about#section1" style="color: black !important; text-decoration: none !important;"><router-link class="fortext" :to="{ path: '/about', hash: '#section1' }">Our team</router-link></a></p>
      
      </div>
      <div class="col-12 col-md-2">
        <h6 class="h"><router-link to="/spec" class="rou h">products</router-link></h6>
        <p class="fortext"><a href="/#section2" style="color: black !important; text-decoration: none !important;"><router-link class="fortext" :to="{ path: '/', hash: '#section2' }">Terms of use</router-link></a></p>
        <p>Privacy policy</p>
        <p><router-link to="/spec" class="fortext ">How to order</router-link></p>
       
       
      </div>
    </div>
    
    <hr class="hr-class">
    <p class="p20">©2024 company name. All rights reserved.</p>
  </div>
</template>

<script>
export default {
   name:'HomeFooter'
}
</script>

<style>
.hr-class{
  color:#bababa;
}
.p20{
  color:#202020;
  font-size:14px;
}
.im{
  width: 183.58px;
     height: 19.16px;
}
p{
  font-size: 16px;
}
.pt{
  margin-top:-10px;
}
.h{
  color:#258576;
  font-weight:bold;
  text-decoration:none;
  
}

.fortext{
  color:black !important;
  text-decoration: none !important;
}
</style>