<template>
    <div>
      
      <CartChoose></CartChoose>
      <FreQuent></FreQuent>
    </div>
</template>

<script>
import FreQuent from '../components/Cart/FreQuent.vue'
 
import CartChoose from '../components/Cart/CartChoose';
export default {
name:'CartChoView',
components:{
  
CartChoose,
FreQuent
}
}
</script>

<style>

</style>