<template>
  <div class="">
    <div class="">
      <div class="container">
        <b-navbar class="d-none d-md-block">
          <b-navbar-toggle type="light" variant="light" target="nav-collapse"></b-navbar-toggle>
          <b-collapse class="row" id="nav-collapse" is-nav>
            <b-navbar-nav ref="search" class="col-5">
              <b-nav-item href="#" class="ma ml-5 pharnav"><router-link to="#"
                  class="rou pharnav">Pharmacy</router-link></b-nav-item>
              <b-nav-item href="#" class="ml-5 mar ma">
                <router-link to="#" class="rou pharnav">{{ currentId }}</router-link></b-nav-item>
            </b-navbar-nav>
            <b-navbar-nav class="offset-1 col-6">
              <input id="seach" type="text" :class="{ focused: isFocused }" v-model="searchTerm" @focus="onFocus" @blur="onBlur" @keyup.enter="submitSearch" class="uy" placeholder="Search">
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>

      <!-- Navbar for small screen -->
      <b-navbar class="d-md-none bn">
        <b-navbar-toggle type="light" variant="light" target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="container">
            <b-nav-item href="#" class="ma ml-5 "><router-link to="/" class="rou tr">Pharmacy</router-link></b-nav-item>
            <b-nav-item href="# " class="ml-5  mar ma ">
              <router-link to="#" class="rou tr">{{ currentId }}</router-link></b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'secondBar',
  data() {
    return {
      currentId: null,
      searchTerm: '',
      isFocused: false,
    };
  },
  created() {
    // Access the route parameters to get the ID when the component is created
    this.currentId = this.$route.params.id;
  },
  watch: {
    // Watch for changes in the route parameters
    '$route'(to) {
      // Update the currentId when the ID in the URL changes
      this.currentId = to.params.id;
    }
  },
  methods: {
    submitSearch() {
      this.$router.push({
        path: '/search',
        query: { q: this.searchTerm }
      });
    },
    onFocus() {
      this.isFocused = true;
      this.$refs.search.setAttribute('style', 'opacity: 0 !important');
    },
    onBlur() {
      this.isFocused = false;
      this.$refs.search.setAttribute('style', 'opacity: 1 !important');
    },
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
.pharnav {
  color: black !important;
  text-decoration: none !important;
}

.bn {
  background-color: #026640;
  padding-left: 0px !important;
  margin-left: 0px !important;
  color: white;

}

.tr {
  color: white;
  text-decoration: none;
  font-size: 12px;
}

.fr {
  width: 100px;
}

.uy {
  width: 446px !important;
  height: 44px;
  border: 1px solid #E0E0E0;
  border-radius: 25px;
  padding-top: 2px;
  padding-bottom: 2px;
  background-color: white;
  background-image: url('../assets/search.jpg');
  background-position: 10px 10px; 
  background-repeat: no-repeat;
  padding-left: 40px;
}
#seach{
  float: right !important;
  position:relative;
  right: 0 !important;
  -webkit-transition: right 1s, height 1s, transform 1s, width 1s !important;
  transition: right 1s, height 1s, transform 1s, width 1s, !important;
}
#seach.focused {
  right: 50%;
  transform: translateX(-50%);
  height: 54px !important;
  width: 750px !important;
  background-image: none;
}

</style>