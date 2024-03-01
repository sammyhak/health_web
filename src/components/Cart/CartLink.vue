<template>
    <div>
      <div class="container mb-5" v-if="cartItems.length < 1">
        <secondbar></secondbar>
        <div class="row ca">
          <div class="col-md-4 offset-md-4 col-12 text-center mt-5 mb-5">
            <img src="../../assets/ShoppingCart.png" class="img-fluid op" />
            <p>Your Cart</p>
            <p>Browse our categories and discover our best deals!</p>
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
  .ro {
    background-color: #258576;
    text-decoration: none;
  }
  .op {
    width: 40.83px;
    height: 40.83px;
  }
  .ca {
    border: 1px solid #e0e0e0;
    border-radius: 10px;
  }
  .se {
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 30px;
    padding-right: 30px;
    background-color: #258576;
    color: white !important;
    border: none;
    border-radius: 15px;
    text-decoration: none;
  }
  </style>
  