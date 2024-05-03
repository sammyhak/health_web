<template>
  <div class="about">
    <thirdProducts></thirdProducts>

  </div>
</template>
<script>

import thirdProducts from '@/components/thirdProduct.vue';
export default {
  name: 'proView',

  components: {
    thirdProducts
  }
}
</script>

<style>
@media screen and (max-width: 768px) {
.background-light, #app > div.about > div > div:nth-child(1) > div > nav{
  background-color: #24A6A6 !important;
}
}
</style>