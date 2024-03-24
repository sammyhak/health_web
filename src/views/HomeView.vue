<script>

import landingPage from '@/components/landingpage.vue';
import featuredPro from '@/components/featuredPro.vue';
// import blogPro from '@/components/blogPro.vue';
import discoverLanding from '@/components/discoverLanding.vue';
import ourProject from '../components/ourProject.vue';

import freQuent from '@/components/freQuent.vue';
import chatComponent from '@/components/chatComponent.vue';

// import thirdProducts from '@/components/thirdProduct.vue';


export default {
  name: 'HelloView',

  components: {
    landingPage, featuredPro, chatComponent,
    // blogPro
    discoverLanding, freQuent, ourProject,
  },
}
</script>


<template>

  <div class="">

    <landingPage></landingPage>
    <br><br>
    <featuredPro></featuredPro>
    <!-- <blogPro></blogPro> -->
    <br><br>
    <discoverLanding></discoverLanding>
    <br><br>
    <ourProject></ourProject>
    <br><br><br><br>
    <freQuent></freQuent>
    <chatComponent></chatComponent>
    <br><br><br><br><br><br>
    <!-- <thirdProducts></thirdProducts> -->

  </div>


</template>
<style></style>
