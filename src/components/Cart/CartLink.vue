<template>
    <div>
      <secondbar></secondbar>
      <br>
      <div class="container">
        <h3 class="mt-3 d-none d-md-block">Pharmacy Cart</h3>
      </div>
      <div class="container mb-5" v-if="cartItems.length < 1">
        <div class="container">
          <br><br>
          <div class="row ca">
            <div class="col-md-4 offset-md-4 text-center mt-5">
              <img src="../../assets/ShoppingCart.png" class="img-fluid op" />
              <br><br>
              <p class="emp">Your cart is empty!</p>
              <p class="bwe">Browse our categories and discover our best deals!</p>
              <button class="se">
                <router-link to="/spec" class="se">Start Shopping</router-link>
              </button>
            </div>
            <!-- Show each cart item -->
            <div class="row" v-if="cartItems.length > 0">
              <div class="col-4" v-for="cart in cartItems" :key="cart.id">
                <img :src="cart.image" class="img-fluid" />
              </div>
            </div>
            <!-- Show each cart item's name -->
            <ul v-if="cartItems.length > 0">
              <li v-for="cart in cartItems" :key="cart.id">{{ cart.name }}</li>
            </ul>
          </div>
        </div>
      </div>
      <!-- If cartItems is not empty, show the CartChoose component -->
      <div v-else>
        <CartChoose></CartChoose>
      </div>
    </div>
  </template>
  
<script>
  import secondbar from "../secondBar.vue";
  import CartChoose from "../Cart/CartChoose.vue";
  
  export default {
    name: "CartLink",
    data() {
      return {
        cartItems: JSON.parse(sessionStorage.getItem("cart")) || [], // Handle empty cart
      };
    },
    components: {
      secondbar,
      CartChoose,
    },
  };
</script>
  
  <style>
  div.col-md-4.offset-md-4.text-center{
    margin-top: 5rem !important;
  }
  .emp{
    font-size: 24px;
    font-weight: bold;
  }
  .ro {
    background-color: #24A6A6;
    text-decoration: none;
  }
  .op {
    width: 49px;
    height: 49px;
  }
  .ca {
    border: 1px solid #e0e0e0;
    border-radius: 20px;
    width: 100% !important;
    height: 370px;
  }
  .se {
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    padding-right: 20px;
    font-size: 16px !important;
    background-color: #202020;
    color: white !important;
    border: none;
    border-radius: 50px;
    text-decoration: none;
  }
  h3.mt-3{
    font-family: millik;
    font-size: 28px;
  }
  .bwe{
    color: #202020;
  }

  
@media only screen and (max-width: 576px) {
  .op {
    width: 26.67px;
    height: 26.67px;
  }
  .emp{
    font-size: 14px;
    font-weight: bold;
  }
  .bwe{
    font-size: 11px;
  }
  .ca {
    border: none;
    width: auto !important;
    height: 190px;
  }
  .se{
    font-size: 10px !important;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    padding-right: 20px;
    width: 100%;
  }
  div.col-md-4.offset-md-4.text-center{
    margin-top: 1px !important;
  }
}
  </style>
  