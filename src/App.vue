<template>
  <div id="app">
    <HelloWorld v-if="!$route.meta.hideNavigation"></HelloWorld>
    <router-view />
    <HomeFooter v-if="!$route.meta.hideNavigation"></HomeFooter>
  </div>
</template>
<script src="https://kit.fontawesome.com/a934b30340.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
<script>
import HelloWorld from './components/HelloWorld.vue';
import HomeFooter from './components/HomeFooter.vue';

export default {
  
   components: {
   HelloWorld, HomeFooter
  }
}
</script>
<style>
* {
  padding: 0px;
  font-family: facee;
}


@font-face {
  font-family: face;
  src: url(../src/assets/Millik.otf);
}

@font-face {
  font-family: facee;
  src: url(../src/assets/Inter-Regular.otf);
}

.font-for-our-milki {
  font-family: face;
}

.font-for-inter {
  font-family: facee;
}
</style>
