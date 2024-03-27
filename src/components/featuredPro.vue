<template>
  <section class='featured-products'>
    <div class="featured-product-container">
      <div class="container header">
        <h3>Featured Products</h3>
        <div class="controls">
          <img src="../assets/previous.svg" alt="previous" class="previous">
          <img src="../assets/next.svg" alt="next" class="next">
        </div>
      </div>

      <div class="products">
        <div class="featured-product" style="min-height: 316px !important;" v-for="(product, index) in products" :key="index">
          <div class="img-container">
            <img :src="product.image" alt="drug">
          </div>
          <div class="title">
            {{product.drug_name}}
            <div class="price">{{product.price}}</div>
          </div>
          <div class="description">
            {{product.category}}
          </div>
        </div>        
      </div>
    </div>
  </section>
</template>


<script>
import '../styles/components/featuredPro.scss';
import axios from "axios";
export default {

  name: 'featuredPro',
  methods: {
    navigateToSpec() {
      this.$router.push('/spec'); // Navigate to the '/about' route
    },
    async fetchProducts() {
      // Alert the current ID
      const BASE_URL = 'https://prosperc40.pythonanywhere.com/';
      let url_extension = 'products';   
      await axios.get(BASE_URL + url_extension).then(response => {
        // Handle successful response
        this.products = response.data.splice(0, 5);
        return response.data;
      })
        .catch(error => {
          // Handle error
          this.error = error.message;
          return error.message;
        });
    }
  },
  data() {
    return {           
      products: [],
      error: null,
    };
  },
  computed: {
    paginatedImages() {
      const startIndex = (this.currentPage - 1) * this.perPage;
      const endIndex = startIndex + this.perPage;
      return this.images.slice(startIndex, endIndex);
    },
  },
  created() {
    // Access the route parameters to get the ID when the component is created
    this.currentId = this.$route.params.id;
    this.fetchProducts();
  },

  watch: {
    // Watch for changes in the route parameters
    '$route'(to) {
      // Update the currentId when the ID in the URL changes
      this.currentId = to.params.id;
      this.fetchProducts();
    }
  },
}

document.addEventListener("DOMContentLoaded", function () {
  const previous = document.querySelector(".previous");
  const next = document.querySelector(".next");
  const slider = document.querySelector('.products');

  slider.scrollLeft = 0;
  previous.addEventListener("click", function () {
    moveSlide(-1);
  });

  next.addEventListener("click", function () {
    moveSlide(1);
  });
});

function moveSlide(direction) {  
  const slider = document.querySelector('.products');
  if(direction == -1){        
    slider.scrollLeft -= 1290;
  }else{
    slider.scrollLeft += 1290;    
  }  
}
</script>