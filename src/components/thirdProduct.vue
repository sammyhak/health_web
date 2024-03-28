<template>
  <div>
    <secondBar></secondBar>
    <div class="container">
      <h3 class="mt-5 pr">Products</h3>
      <div class="row">
        <div v-for="(product, index) in products" :key="index" class="col-6 col-md-4">
            <router-link :to="`/add/${product.id}`" class="rou" style="text-decoration: none; color: #000;">
              <div class="image-container" style="max-height: 250px !important;">
                <img :src="product.image" class="img-fluid im-pro" alt="broken">
              </div>

              <p class="mt-2">{{product.drug_name}}</p>
              <p class="mt-2">{{product.category}}</p>
              <p class="av in"><span><img src="../assets/Ellipse 43.png" class="im1"></span>Available for delivery</p>
              <p class="av "><span><img src="../assets/Ellipse 43.png" class=" im1"></span>In stock</p>
            </router-link>
        </div>
      </div>
      <nav aria-label="Page navigation example  mt-5">
        <ul class="pagination justify-content-center">
          <li class="page-item"><a class="page-link" href="#">
              <router-link to="/about" class="pe">Previous</router-link></a></li>
          <li class="page-item"><a class="page-link pe" href="#">1</a></li>
          <li class="page-item"><a class="page-link pe" href="#">2</a></li>
          <li class="page-item"><a class="page-link pe" href="#">3</a></li>
          <li class="page-item"><a class="page-link pe" href="#">Next</a></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import secondBar from './secondBar.vue';
import axios from "axios";
export default {

  name: 'thirdProducts',
  components: {
    secondBar
  },
  methods: {
    navigateToSpec() {
      this.$router.push('/spec'); // Navigate to the '/about' route
    },
    async fetchProductsByCategory() {
      // Alert the current ID
      const BASE_URL = 'https://prosperc40.pythonanywhere.com/';
      let url_extension = 'products?category=';
      let category = this.currentId;
      await axios.get(BASE_URL + url_extension + category).then(response => {
        // Handle successful response
        this.products = response.data;
        console.log(response);
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
      currentPage: 1,
      perPage: 6, // Number of images per page
      images: [
        { src: '../assets/f1-min.png' },
        { src: '../assets/f1-min.png' },
        // Add more image objects here
      ],
      currentId: null,
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
    this.fetchProductsByCategory();
  },

  watch: {
    // Watch for changes in the route parameters
    '$route'(to) {
      // Update the currentId when the ID in the URL changes
      this.currentId = to.params.id;
      this.fetchProductsByCategory();
    }
  },
}
</script>

<style>
.image-container {
  height: 350px;
  /* width:300px; Adjust the height as needed */
  overflow: hidden;
  /* Ensure images don't overflow the container */
}

.im-pro {
  width: 100%;
  /* Ensure images fill the container width */
  height: 100%;
  object-fit: cover;
  /* Allow images to maintain aspect ratio */
}

.pe {
  color: black !important;
  text-decoration: none !important;
}

.pharnav {
  color: black !important;
  text-decoration: none !important;
}

input {
  width: 400px !important;
  border-radius: 120px !important;
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


.mu {
  display: flex;
  justify-content: center;
  align-items: center;

}

.pag {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
</style>