<template>
  <div class="">
    <secondBar></secondBar>
    <br><br>
    <ToastNotification ref="toast" message="Item added!" type="success"/>
    <div class="container">
       <div class="row container">
          <div class="col-lg-4 col-md-12 col-12">
            <img :src="product.image" class="id" alt="broken">
          </div>
          <div class="offset-lg-1 col-lg-7 col-md-12 col-12">
            <p class="h2-ceph">{{product.drug_name}}</p>
            <p class="desc">{{ product.drug_desc }}</p>
            <p class="cat">Category: {{ product.category }}</p>
            <p class="cat">Presentation: <span class="val">{{ product.presentation }}</span></p>
            <p ><span class="nu">{{product.price}}</span> <span><button class="ins">In stock</button></span></p>
            <!-- <p class="hy">Quantity</p>
            <p class="col-12">
              <span>
                <button class="minus" @click="minus()">-</button>
              </span>
              <span class="forty">{{quantity}}</span>
              <span>
                <button class="minus" @click="plus()">+</button>
              </span>
            </p>
            <button ref="addToCartButton" class="er mb-5 col-xl-3 col-lg-4 col-md-5 col-12" @click="addToCart(product)">Add to cart</button>  -->
          </div>
       </div>
       <div class="container">
        <div class="row d-sm-none d-md-none d-lg-none">
          <div class="col" style="width: 327px; height: 368px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 20px; display: inline-flex">
            <div style="flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 10px; display: flex">
              <div style="width: 100%; border-bottom: 1px rgba(32, 32, 32, 0.30) solid; justify-content: flex-start; align-items: center; display: inline-flex">
                <div style="width: 100%; height: 44px; justify-content: flex-start; align-items: center; gap: 10px; display: flex">
                  <div style="color: rgba(32, 32, 32, 0.80); font-size: 12px; font-family: Inter; font-weight: 500; word-wrap: break-word">COMPOSITION</div>
                </div>
              </div>
              <div style="width: 100%; color: rgba(32, 32, 32, 0.90); font-size: 12px; font-family: Inter; font-weight: 400; word-wrap: break-word">{{ product.composition }}</div>
            </div>
            <div style="flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 10px; display: flex">
              <div style="width: 100%; border-bottom: 1px rgba(32, 32, 32, 0.30) solid; justify-content: flex-start; align-items: center; display: inline-flex">
                <div style="width: 100%; height: 44px; justify-content: flex-start; align-items: center; gap: 10px; display: flex">
                  <div style="color: rgba(32, 32, 32, 0.80); font-size: 12px; font-family: Inter; font-weight: 500; word-wrap: break-word">INDICATIONS</div>
                </div>
              </div>
              <ul v-if="product.indications"> 
                <div v-for="indications in product.indications" :key="indications">
                  <li class="ea" v-for="indication in indications" :key="indication">
                    {{ indication }}
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <br><br>
       <div class="fr container-fluid d-none d-sm-block d-md-block d-lg-block">
        <div>
          <b-tabs v-model="activeTab" card active-nav-item-class="text-success"  class="">
            <b-tab style="color: #202020;" title="COMPOSITION" event-key="tab1" >
              <br>
              <p class="ea mt-3">{{ product.composition }}</p>
              <br>
            </b-tab>
            <b-tab style="color: #202020 !important;" title="INDICATIONS" event-key="tab2">
              <br>
              <ul v-if="product.indications"> 
                <div v-for="indications in product.indications" :key="indications">
                  <li class="ea">
                    {{ indications }}
                  </li>
                </div>
              </ul>
              <br>
            </b-tab>
          </b-tabs>
      </div>
    </div>
    <br><br>
    <div>
        <div class="row mt-3 mb-5">
          <p style="font-size: 22px; font-weight:normal;">More Products</p>
            <section class='featured-products'>
              <div class="featured-product-container featured-product-container2">
                <div class="header">
                  <div class="controls">
                    <img src="../assets/previous.svg" alt="previous" class="previous">
                    <img src="../assets/next.svg" alt="next" class="next">
                  </div>
                </div>

                <div class="products">
                  <div class="featured-product" v-for="(product, index) in similarProducts" :key="index">
                    <router-link :to="`/add/${product.id}`" class="rou" style="text-decoration: none; color: #000;">
                      <div class="img-container">
                        <img :src="product.image" alt="drug" class="img">
                      </div>
                      <div class="title">
                        {{product.drug_name}}
                        <div class="price">{{product.price}}</div>
                      </div>
                      <div class="description">
                        {{product.category}}
                      </div>
                    </router-link>
                  </div>        
                </div>
              </div>
            </section>
        </div>
       </div>
       </div>
       <br><br>
  </div>
</template>

<script>
  import axios from 'axios';
  import secondBar from './secondBar.vue';
  import ToastNotification from './ToastNotification.vue';

  export default {
    name:'addCart',
    components:{
      secondBar,
      ToastNotification,
    },
    data() {
      return {
        activeTab: 'tab2',
        product: null,
        similarProducts: null,
        cart: [],
        quantity: 0,
      };
    },
    watch: {
      '$route': 'fetchProductData'
    },
    created() {
      this.fetchProductData();
    },
    mounted() {
      this.fetchProductData();
      this.quantity = Number(sessionStorage.getItem(`product-quantity-${this.$route.params.id}`)) || 0;
    },
    updated() {
      this.quantity = Number(sessionStorage.getItem(`product-quantity-${this.$route.params.id}`)) || 0;
      this.$nextTick(() => {
        if (this.quantity === 0){
          this.$refs.addToCartButton.setAttribute('disabled', 'disabled');
          this.$refs.addToCartButton.setAttribute('style', 'background-color:grey;');
        }
      });
    },
    methods: {
        fetchProductData() {
          let productId = this.$route.params.id;
          const BASE_URL = 'https://prosperc40.pythonanywhere.com/products';

          axios
          .get(BASE_URL + '/' + productId).then(response => {
            this.product = response.data;
            axios
            .get(BASE_URL + '?category=' + this.product.category).then(response => {
              this.similarProducts = response.data;
              console.log(this.similarProducts);
            })
          })
          .catch(error => {
            console.error('Error fetching product:', error);
          });
        },
        plus(){
          this.quantity += 1;
          sessionStorage.setItem(`product-quantity-${this.$route.params.id}`, this.quantity);
          if(this.quantity > 0){
            this.$refs.addToCartButton.removeAttribute('disabled');
            this.$refs.addToCartButton.removeAttribute('style');
          }
        },
        minus(){
          if (this.quantity > 0) { // Check for valid decrease
            this.quantity -= 1;
            sessionStorage.setItem(`product-quantity-${this.$route.params.id}`, this.quantity);
          }
          if(this.quantity === 0){
            this.$refs.addToCartButton.setAttribute('disabled', 'disabled');
            this.$refs.addToCartButton.setAttribute('style', 'background-color:grey;');
          }
        },
        addToCart(post) {
          // Retrieve existing cart from sessionStorage
          let cart = JSON.parse(sessionStorage.getItem("cart")) || []; // Initialize as empty if none exists

          const cartItem = cart.find(item => item.id === post.id);
          
          // this.$root.$refs.toast.showToast();
          this.$nextTick(() => {
            console.log(this.$root.$refs.toast.showToast());
          });

          if (cartItem) {
            cartItem.quantity = this.quantity;
          } else {
            cart.push({
              id: post.id,
              name: post.drug_name,
              desc: post.drug_desc,
              price: post.price,
              image: post.image,
              presentation: post.presentation,
              quantity: this.quantity,
            });
          }
          // Save the updated cart to sessionStorage
          sessionStorage.setItem("cart", JSON.stringify(cart));
          sessionStorage.removeItem(`product-quantity-${this.$route.params.id}`);
          this.$refs.addToCartButton.innerHTML = 'Added to Cart';
          this.$refs.addToCartButton.setAttribute('disabled', 'disabled');
          this.quantity = 0;
        },
    },
  };

</script>

<style>

.ea{
  margin-bottom: 0; 
  padding-bottom: 0; 
  line-height: 1.2;
  color:#343434;
  font-size: 13px;
  
}
.ca{
  background-color:white !important;
}
.fr{
  border:1px solid #E0E0E0;
  border-radius: 10px;
  width: 100% !important;
}
.val{
  color:black;
}
.h2-ceph{
  font-size: 46px;
  font-weight:bold;
  margin-top: 15px;
  margin-bottom: 0; 
  padding-bottom: 5px; 
  line-height: 1.2;
  font-family: millik;
}
.desc{
  font-size: 20px;
}

@media only screen and (max-width: 576px) {
  .h2-ceph {
    font-size: 22px;
  }
  .desc{
    font-size: 14px;
  }
}

.featured-product-container2{
  padding-top: 0px !important;
  padding-left: 0px !important;
  padding-right: 0px !important;
  height: 507px !important;
}

.img-container{
  width: 298px !important;
  height: 241px !important;
}

.cef{
  font-weight: 20px;
  font-weight: 800px;
  margin-bottom: 0; 
  padding-bottom: 0; 
  line-height: 1;
}
.cat{
  margin-bottom: 0; 
  padding-bottom: 0; 
  
  color:#878787;
  font-size:14px;
}
.nu{
  font-size: 30px;
  font-weight:bold;
  margin-bottom: 0; 
  padding-bottom: 0; 
  line-height: 1.2;
  margin-bottom:12px !important;
}

.h2-ceph + .cef{
  margin-top: 0; /* Remove the top margin of the second paragraph */
  margin-bottom: 10px; }

.id{
  width:100%;
  height:327px;
  /* margin-left:20px; */
}  

.er{
  background-color:#258576;
  color:white;
  border:0;
  height: 50px;
  border-radius:34px;
  width: auto;
  padding: 10px 40px 10px 40px;
}

.ins{
  background-color: white;
  border:1px solid #1DCA58;
  color:#1DCA58;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right:12px;
  border-radius:15px;
  margin-bottom:-120px !important;
}
.minus{
  background-color:#F0F0F0 ;
  width:36px;
  height:36px;
  border-radius:46px;
  border:2px solid #F0F0F0;
  margin-top:10px;
}
.forty{
  margin-left:10px;
  margin-right:10px;
  top: 11px;
  left: 14px;
  font-family: inter;
  font-size: 12px;
  line-height: 14.52px;
  font-weight: 400;
}
.hy{
  margin-bottom: 0; 
  padding-bottom: 0; 
  line-height: 1.2;
}/* Custom styles for the tab bar */
.b-nav-tabs .nav-link.active {
  border: none; /* Remove borders */
  position: relative; /* Required for underline effect */
}

/* Underline effect on focus */
.b-nav-tabs .nav-link.active::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px; /* Underline height */
  background-color: red; /* Red underline color */
  transform: scaleX(0); /* Initial underline width */
  transition: transform 0.3s ease;
  transform-origin: bottom left;
  color:black !important;

}

.b-nav-tabs .nav-link.active:focus::before {
  transform: scaleX(1); /* Full underline width on focus */
}
</style>