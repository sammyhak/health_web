<template>
  <div>
    <secondBar></secondBar>
    <div class="container mb-5">
      <br class="d-none d-md-block">
      <br class="d-none d-md-block">
      <h3 class="pr mt-3">Products</h3>
      <br>
      <!-- <p>{{ cart.length }} Items have been added to cart</p> -->
      <div class="row mt-3">
        <div class="col-md-3 col-6" v-for="post in this.posts " :key="post.id">
          <router-link :to="`/add/${post.id}`" class="rou" style="text-decoration: none; color: #000;">
            <img :src="post.image" class="img-fluid mn im-pro">
            <div class="row">
              <div class="col-12">
                <p class="myh">{{ post.drug_name }}</p>
                <p class="ni">{{ post.category }}</p>
                <p class="av in"><span><img src="../assets/Ellipse 43.png" class="im1"></span>Available for delivery</p>
                <p class="av "><span><img src="../assets/Ellipse 43.png" class=" im1"></span>In stock</p>
              </div>
              <!-- <div class="col-5">
                <button class="buy" @click="addToCart(post)">Add to cart</button>
              </div> -->

            </div>
          </router-link>
        </div>
       
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import secondBar from './secondBar.vue';

export default {
  name: 'specProduct',
  components: {
    secondBar,
    //cartview

  },
  data() {
    return {
      cart: [],
      posts: [],
      baseUrl: process.env.MAIN_API ? process.env.MAIN_API : "",
    }
  },
  methods: {
    updateProfile() {
      alert('Your data: ' + JSON.stringify(this.user))
    },
    // working
    addToCart(post) {
      // Retrieve existing cart from sessionStorage
      let cart = JSON.parse(sessionStorage.getItem("cart")) || []; // Initialize as empty if none exists

      const cartItem = cart.find(item => item.id === post.id);

      if (cartItem) {
        cartItem.quantity += 1;
      } else {
        cart.push({
          id: post.id,
          name: post.drug_name,
          desc: post.drug_desc,
          price: post.price,
          image: post.image,
          presentation: post.presentation,
          quantity: 1, 
        });
      }

      // Save the updated cart to sessionStorage
      sessionStorage.setItem("cart", JSON.stringify(cart));
    }

  },
  mounted() {
    axios.get('https://prosperc40.pythonanywhere.com/products', {
      // headers: {
      //   'Authorization': 'Token ' + '6124bc0794931a48a4665935619ee039bb7be277'
      // }
    }
    )
      .then(response => {
        console.log(response);
        this.posts = response.data

        console.log(this.posts)
        // Now check the structure of the response and ensure it has a 'protocol' property.
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      })
  },
}
</script>

<style>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
}
.buy {
  background-color: #24A6A6;
  border: 0;
  font-size: 13px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 2px;
  padding-bottom: 2px;
  margin-top: 5px;
  color: white;
  border-radius: 20px;
}

.we {
  width: "297px";
  width: "295px";
}

.myh {
  font-size: 16px !important;
  font-weight: 500 !important;
  margin-bottom: 0;
  padding-bottom: 0;
  line-height: 2;
}

.mh {
  font-size: 16px !important;
  font-weight: 700 !important;
}

.ni {
  font-size: 12px !important;
  color: #535353 !important;
}

.av {
  font-size: 12px !important;

}

.in {
  margin-bottom: 0;
  padding-bottom: 0;
  line-height: 1;
}

.im1 {
  width: 12px;
  height: 12px;
  margin-right: 10px;

}

.pr {
  font-size: 24px !important;
  color: #24A6A6
}
@media only screen and (max-width: 576px) {
  .pr {
    font-size: 18px !important;
    color: #24A6A6
  }
}
</style>