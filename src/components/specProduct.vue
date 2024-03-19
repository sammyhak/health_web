<template>
  <div>
    <secondBar></secondBar>
    <div class="container mb-5">


      <h3 class="pr mt-3">Products</h3>
      <p>{{ cart.length }} Items have been added to cart</p>


      <div class="row mt-3">
        <div class="col-md-3 col-12" v-for="post in this.posts " :key="post.id">
          <div class>
            <img :src="post.image"  height="175" width="216">
            <div class="row">
              <div class="col-7">
                <p class="myh">{{ post.drug_name }}</p>
                <p class="ni">{{ post.category }}</p>
                <p class="av in"><span><img src="../assets/Ellipse 43.png" class="im1"></span>Available for delivery</p>
                <p class="av "><span><img src="../assets/Ellipse 43.png" class=" im1"></span>In stock</p>
              </div>
              <div class="col-5">
                <button class="buy" @click="addToCart(post)">Add to cart</button>
              </div>

            </div>
          </div>
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
    //   cartview

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
      const cartItem = this.cart.find(item => item.id === post.id);
      //   alert(cartItem)
      if (cartItem) {
        cartItem.quantity += 1;
      } else {
        this.cart.push({
          id: post.id,
          name: post.drug_name,
          price: post.price,
          image: post.image,
          presentation: post.presentation,
          quantity: 1,
        });
      }
      console.log(this.cart);
      sessionStorage.setItem("cart", JSON.stringify(this.cart));

      // Log the updated cart
      console.log(this.cart);

      // Save the updated cart to sessionStorage
      sessionStorage.setItem("cart", JSON.stringify(this.cart));
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

  }

}
</script>

<style>
.buy {
  background-color: #258576;
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
  color: #258576
}
</style>