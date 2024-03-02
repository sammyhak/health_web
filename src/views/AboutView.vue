<template>
  <div class="about">

    <AboutFirst></AboutFirst>
    <AboutSecond></AboutSecond>
    <ThirdSecond></ThirdSecond>
    <ourproject></ourproject>
    <AboutThird class="mb-5"></AboutThird>


  </div>
</template>
<script>
import AboutFirst from '@/components/AboutFirst.vue';
import AboutSecond from '@/components/AboutSecond.vue';
import ThirdSecond from '@/components/ThirdSecond.vue';
import ourproject from '@/components/ourProject.vue';
import AboutThird from '@/components/AboutThird.vue';

export default {
  name: 'AboutView',

  components: {
    AboutFirst, AboutSecond, ThirdSecond, ourproject, AboutThird,
  }
}
</script>