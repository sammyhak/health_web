<script>

import landingPage from '@/components/landingpage.vue';
import featuredPro from '@/components/featuredPro.vue'; 
// import blogPro from '@/components/blogPro.vue';
import discoverLanding from '@/components/discoverLanding.vue';
 import ourProject from '../components/ourProject.vue';

import freQuent from '@/components/freQuent.vue';

// import thirdProducts from '@/components/thirdProduct.vue';


export default {
   name: 'HelloView',
             
  components: {
    landingPage,featuredPro,
    // blogPro
    discoverLanding,freQuent,ourProject
    
  },
}
</script>


<template>
 
  <div class="">
 
     <landingPage></landingPage>
     <featuredPro></featuredPro>
     <!-- <blogPro></blogPro> -->
     <discoverLanding></discoverLanding>
     <ourProject></ourProject> 
     <freQuent></freQuent>
    <!-- <thirdProducts></thirdProducts> -->
     
 </div>
 
 
 </template>
<style>

</style>
