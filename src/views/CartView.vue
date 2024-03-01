<template>
    <div>
        <div class="container">
            <h3 class="mt-3">Pharmacy Cart</h3>
        </div>
        
       
       <CartLink></CartLink>
       
       
      <FreQuent></FreQuent>
    
    </div>
</template>

<script>
 import CartLink from '@/components/Cart/CartLink.vue'
 import FreQuent from '../components/Cart/FreQuent.vue'

export default {
name:'CartView',
components:{
    CartLink,
    FreQuent
},
// props: {
//     addToCart: Function,
//   },
//   mounted() {
//     // Listen for the 'cart-updated' event from the parent
//     this.$parent.$on('cart-updated', this.handleCartUpdate);
//   },
//   beforeDestroy() {
//     // Don't forget to clean up the event listener
//     this.$parent.$off('cart-updated', this.handleCartUpdate);
//   },
//   methods: {
//     handleCartUpdate(cart) {
//       // Handle the updated cart data
//       console.log('Received updated cart:', cart);
//     },
// }
}
</script>

<style>

</style>