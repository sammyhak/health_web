<template>
  <div class="container">
    <div class="row container">
      <div class="col-12 col-md-4">
        <img src="../assets/healthLogo (2).svg" class="im" />
        <p class="mt-3">29 Adeniyi Jones Avenue,Ikeja-Lagos,Nigeria</p>
        <p class="pt">+234 7081123545 +234 8129937001</p>
        <p class="pt">info@healthlineng.com</p>
      </div>
      <div class="col-12 col-md-3 omo">
        <p class=""><router-link to="/" class="rou h">Company</router-link></p>
        <!-- <p><router-link to="/" class="rou fortext">New</router-link></p> -->
        <p><router-link to="/" class="rou fortext">Career</router-link></p>
        <p class="fortext">
          <a
            href="/#section2"
            style="color: black !important; text-decoration: none !important"
            ><router-link class="fortext" :to="{ path: '/', hash: '#section2' }"
              >FAQ</router-link
            ></a
          >
        </p>
      </div>
      <div class="col-12 col-md-3 omo">
        <p class="">
          <router-link to="/about" class="rou h">About</router-link>
        </p>
        <p class="mt-3">
          <router-link to="/contact" class="rou fortext">Contacts</router-link>
        </p>
        <p class="fortext">
          <a
            href="/about#section1"
            style="color: black !important; text-decoration: none !important"
            ><router-link
              class="fortext"
              :to="{ path: '/about', hash: '#section1' }"
              >Our team</router-link
            ></a
          >
        </p>
      </div>
      <div class="col-12 col-md-2 omo">
        <p class="">
          <router-link to="/spec" class="rou h">Products</router-link>
        </p>
        <p class="fortext">
          <a
            href="/#section2"
            style="color: black !important; text-decoration: none !important"
            ><router-link class="fortext" :to="{ path: '/', hash: '#section2' }"
              >Terms of use</router-link
            ></a
          >
        </p>
        <p class="fortext">privacy policy</p>
        <p>
          <router-link to="/spec" class="fortext">How to order</router-link>
        </p>
      </div>
    </div>

    <hr class="hr-class" />
    <p class="p20">©2024 Healthline. All rights reserved.</p>
  </div>
</template>

<script>
export default {
  name: "HomeFooter",
};
</script>

<style>
.hr-class {
  color: #bababa;
}
.p20 {
  color: #202020;
  font-size: 14px;
}
.im {
  width: 183.58px;
  height: 19.16px;
}
p {
  font-size: 16px;
}
.pt {
  margin-top: -10px;
}
.h {
  color: #24A6A6;
  font-weight: bold;
  text-decoration: none;
}

.fortext {
  color: black !important;
  text-decoration: none !important;
}

@media screen and (max-width: 600px) {
  #app > div.container > div > div.col-12.col-md-4 > p {
    font-family: Inter;
    font-size: 12px;
    font-weight: 400;
    line-height: 14.52px;
    text-align: left;
  }

  .h {
    color: #24A6A6;
    font-weight: bold;
    text-decoration: none;
    font-family: Inter;
    font-size: 16px;
    font-weight: 600;
    line-height: 19.36px;
    text-align: left;
  }
  .h:nth-child(1){
    margin-bottom: 5px !important;
  }
  
  .fortext {
    color: black !important;
    text-decoration: none !important;
    font-family: Inter;
    font-size: 14px;
    font-weight: 500;
    line-height: 16.94px;
    text-align: left;
  }

  .omo {
    margin-left: 10px;
  }
}
</style>
