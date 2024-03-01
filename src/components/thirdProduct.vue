<template>
  <div>
    <div class="container">
      <secondBar></secondBar>

      <h3 class="mt-5 pr">Products</h3>
      <div class="row">
        <div class="col-12 col-md-4" @click="navigateToSpec">
          <div class="image-container">
            <img src="../assets/Frame 83-min.png" class="img-fluid im-pro">
          </div>

          <p class="text-center mt-2">Anti Infectives</p>
        </div>
        <div class="col-12 col-md-4 " @click="navigateToSpec">
          <div class="image-container">
            <img src="../assets/Frame 83-min.png" class="img-fluid im-pro">
          </div>

          <p class="text-center mt-2">Anti Diabetics</p>
        </div>
        <div class="col-12 col-md-4 " @click="navigateToSpec">
          <div class="image-container">
            <img src="../assets/Frame 83-min.png" class="img-fluid im-pro">
          </div>

          <p class="text-center mt-2">Anti Malaria</p>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-12 col-md-4" @click="navigateToSpec">
          <div class="image-container">
            <img src="../assets/Blood tonic new (1).png" class="img-fluid im-pro">
          </div>

          <p class="text-center mt-2">Blood Tonics and Ani-aneamics</p>
        </div>
        <div class="col-12 col-md-4 " @click="navigateToSpec">
          <div class="image-container">
            <img src="../assets/Antihistimine.jpg" class="img-fluid im-pro ">
          </div>

          <p class="text-center mt-2">Multivitamins/Antioxidants</p>
        </div>
        <div class="col-12 col-md-4 " @click="navigateToSpec">
          <div class="image-container">
            <img src="../assets/new dental.webp" class="img-fluid im-pro">
          </div>

          <p class="text-center mt-2">Dental range</p>
        </div>
      </div>

      <div class="row mb-3 mt-5 mb-5">
        <div class="col-12 col-md-4 " @click="navigateToSpec">
          <div class="image-container">
            <img src="../assets/iron replacement.png" class="img-fluid im-pro">
          </div>

          <p class="text-center mt-2">Antiseptics</p>
        </div>
        <div class="col-12 col-md-4" @click="navigateToSpec">
          <div class="image-container">
            <img src="../assets/new wound dressing.png" class="img-fluid im-pro">
          </div>

          <p class="text-center mt-2">Antibiotics</p>
        </div>
        <div class="col-12 col-md-4 " @click="navigateToSpec">
          <div class="image-container">
            <img src="../assets/skin.webp" class="img-fluid im-pro">
          </div>

          <p class="text-center mt-2">Skincare</p>
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
export default {

  name: 'thirdProducts',
  components: {
    secondBar

  },
  methods: {
    navigateToSpec() {
      this.$router.push('/spec'); // Navigate to the '/about' route
    },
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
    };
  },
  computed: {
    paginatedImages() {
      const startIndex = (this.currentPage - 1) * this.perPage;
      const endIndex = startIndex + this.perPage;
      return this.images.slice(startIndex, endIndex);
    },
  }
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