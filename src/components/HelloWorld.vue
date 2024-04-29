<template>
   <div class="bottom">
    <div class="container">
      
    <div class="navb" style="padding-top: 24px;">
    <b-navbar toggleable="lg">
    <b-navbar-brand v-if="!visible" href="#"><img src="../assets/Frame 8.png" class="img-class"></b-navbar-brand>
    <b-navbar-toggle style="overflow: none !important; border: none !important; padding-right: 0px !important;" v-if="!visible" type="light" variant="light" target="nav-collapse" class="mb-2"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="mx-auto">
        <b-nav-item href="#" class="ma mt-2" ><router-link to="/" class="rou">Home</router-link></b-nav-item>
        <b-nav-item href="# " class="mt-2 ma ">
           <router-link to="/about" class="rou mar">About Us</router-link>
          </b-nav-item>
        <b-nav-item href="#" class="nav-item-for-drop mt-2" >  <li class="ml-5nav-item dropdown dropdown-hover position-static">
          <div @click="this.clicked">
            <a class="nav-link dropdown-toggle d-none d-lg-block d-xl-block d-xxl-block" href="#" id="navbarDropdown" role="button"
              data-mdb-toggle="dropdown" aria-expanded="false" style="padding-top: 0px;">
              Products
            </a>
          </div>
          <!-- Dropdown menu -->
          <!-- DESKTOP -->
          <transition name="dropdown">
            <div v-if="isDropped" class="dropdown-menu mt-0" aria-labelledby="navbarDropdown" style="border-top-left-radius: 0;
                              border-top-right-radius: 0;">

              <div class="container">
                <br><br>
                <div class="container">
                    <h1>Pharmacy</h1>
                </div>
                <div class="row my-4" v-for="(group, index) in groupedCategories" :key="index">
                  <div class="col-md-6 col-lg-3 mb-3 mb-lg-0" v-for="(category, index) in group" :key="index">
                    <div class="list-group list-group-flush">
                      <a @click="navClicked" href="/product" class="list-group-item list-group-item-action">
                        <router-link :to="'/product/' + category" class="rou">{{ category }}</router-link>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </li>
        <!-- MOBILE -->
        <transition name="dropdown">
          <b-nav-item-dropdown text="Product" right  class="ml-5 mar container d-sm-block d-md-block d-lg-none" menu-class="w-100">
            <div class="" v-for="(category, index) in uniqueCategories" :key="index">
              <div class="col-2"><b-dropdown-item href="#"><router-link :to="'/product/' + category" class="rou">{{ category }}</router-link></b-dropdown-item></div>
            </div>
          </b-nav-item-dropdown>
        </transition>
      </b-nav-item>
       
      </b-navbar-nav>
      
      <div>

  
</div>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#">
          <div>
            <router-link
                to="/contact"
                custom
                v-slot="{ navigate }"
              >
              <button class="btn-lg bt button-nav mar" @click="navigate" role="link">Contact Us</button>
            </router-link>
          </div>
        </b-nav-item>
        <b-nav-item href="#"> <div></div></b-nav-item>
      </b-navbar-nav>
    </b-collapse>
    <b-navbar-nav class="dith1">
      <div class="mt-2 ma">
        <div v-if="!visible" ref="specrou" class="rou d-inline-block d-md-none">
          <img src="../assets/search-black.jpg" @click="showSearch" class="imgf ml-5 side-con" style="cursor: pointer;">
        </div>
        <div v-if="visible" class="dith2 input-wrapper">
          <input type="text" class="text search-input" v-model="searchTerm" @keyup.enter="submitSearch" placeholder="Type here to search..." />
          <span @click="closeSearch">&times;</span>
        </div>
        <span v-if="!visible">&nbsp;</span>
         <span v-if="!visible" class="d-inline-block d-md-none">&nbsp;</span>
        <router-link v-if="!visible" to="/cart" class="rou">
          <img src="../assets/ShoppingCart.png" class="imgf ml-5 side-con">
        </router-link>
      </div>
    </b-navbar-nav>
  </b-navbar>
  
</div>

    
  </div>
 
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HelloWorld',
  data(){
    return {
      log: "logged",
      isDropped: false,
      visible: false,
      shown: false,
      searchTerm: '',
      currentId: null,
      products: [],
      uniqueCategories: [],
      groupedCategories: []
    }
  },
  watch: {
    '$route'(to) {
      this.dropdownOpen = false;
      // Update the currentId when the ID in the URL changes
      this.currentId = to.params.id;
    }
  },
  mounted() {
    window.addEventListener('click', this.closeDropdown);
  },
  created() {
    // Access the route parameters to get the ID when the component is created
    this.currentId = this.$route.params.id;
    this.fetchCategories();
  },
  methods:{
    fetchCategories() {
      axios.get('https://prosperc40.pythonanywhere.com/products')
        .then(response => {
          this.products = response.data;
          this.extractUniqueCategories();
          this.groupCategories();
        })
        .catch(error => {
          console.error(error);
        });
    },
    extractUniqueCategories() {
      let categories = this.products.map(product => product.category.toLowerCase());
      let uniqueCategories = [...new Set(categories)];

      // Filter out categories that are supersets of others
      this.uniqueCategories = uniqueCategories.filter(category => {
        for (let otherCategory of uniqueCategories) {
          if (otherCategory !== category && category.includes(otherCategory)) {
            return false;
          }
        }
        return true;
      });
    },
    groupCategories() {
      for (let i = 0; i < this.uniqueCategories.length; i += 4) {
        this.groupedCategories.push(this.uniqueCategories.slice(i, i + 4));
      }
    },
    submitSearch() {
      this.$router.push({
        path: '/search',
        query: { q: this.searchTerm }
      });
    },
    showSearch() {
      this.visible = true;
      setTimeout(() => {
        document.querySelector('.search-input').style.width = '100%';
        document.querySelector('.dith1').style.width = '100%';
        document.querySelector('.dith2').style.width = '100%';
      }, 100);
    },
    closeSearch() {
      document.querySelector('.search-input').style.width = '0';
      document.querySelector('.dith1').style.width = '59px';
      setTimeout(() => {
        this.visible = false;
      }, 300);
      setTimeout(() => {
        this.$refs.specrou.setAttribute('style', 'width: 25px');
      }, 500);
    },
    clicked(){
      this.isDropped = !this.isDropped;
    },
     navClicked(){
        setTimeout(() => {
           this.isDropped = false;
        }, 500);
     },
    closeDropdown(event) {
      if (!this.$el.contains(event.target)) {
        this.isDropped = false;
      }
    }
  },
  beforeRouteLeave(to, from, next) {
    console.log('leaving');
    this.dropdownOpen = false;
    next();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.side-con{
  width: 37px !important;
  height: 37px !important;
}
@media only screen and (max-width: 576px) {
  .side-con{
    width: 25px !important;
    height: 25px !important;
  } 
}
.search-input{
  width: 0;
  height: 26px;
  padding: 20px !important;
  background-image: url('../assets/search-black.jpg');
  background-position: 10px 10px;
  background-size: 19.5px 19.5px;
  background-repeat: no-repeat;
  padding-left: 40px !important;
  border: none !important;
  outline: none !important;
  transition: width 1s !important;
}
.input-wrapper { 
    position: relative; 
    display: inline-block; 
} 

.input-wrapper input { 
    padding-right: 40px; 
    font-size: 14px !important;
} 

.input-wrapper span { 
    position: absolute; 
    top: 0; 
    right: 0; 
    border: none; 
    font-size: 24px !important;
    background-color: transparent; 
    cursor: pointer; 
} 
.dropdown-menu.mt-0 {
    position: absolute !important;
    width: 100% !important;
    height: 617px !important;
    right: 0 !important;
    left: 0 !important;
    top: 80px !important;
    background: #FFFFFF;
    border: none;
    display: block;
    border-radius: unset;
}

.list-group-item{
  border: none;
}

.container h1{
  padding-left: 5px !important;
  font-weight: bolder !important;
  font-size: 24px !important;
}

div.bottom {
    border-bottom: 1px solid #e0dfdf;
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 1s;
}
.dropdown-enter,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

@media only screen and (max-width: 988px) {
  a {
    text-transform: uppercase;
  }
}
#app > div:nth-child(1) > div > div > nav > button[data-v-469af010]:focus {
    border: none !important;
    outline: none !important;
    box-shadow: none !important;
}
.font-for-inter{
  font-family: facee;
}
/* Ensure the dropdown menu is full width */
.custom-dropdown-menu .container-fluid {
  width: 100%;
}


/* Optional: Style the dropdown toggle as per your design */
.navbar .nav-link.dropdown-toggle {
  color: #333;
}
.dr{
  /* width: 100!important;
  left: 0 !important;
  right: 0 !important; */
  position:absolute;
   left:20; 
   width: 100%;
}

.vr{
  width:100v;
}
.imgf{
  width:32px;
  height: 32px;
  
}
*{
  color:black !important;
  font-weight:400 !important;
  font-size: 16px !important;
}

b-navbar-nav{
  color:black !important;
}
.ma{
 
  font-size: 18px;
  color:blue;
}
.navb{
  color:blue !important
}

.img-class{
  width: 183.58px;
  height: 19.16px;
  margin-left: 40px !important;
      /* border: 10px solid blue; */
}
.ml-auto, .mx-auto {
    margin-left: auto!important;
}
*{
  background-color:white;
  
}
button.button-nav{
  background-color: #258576 !important;
  width: 135px !important;
  height: 42px !important;
  border: 0px;
  padding: 10px 20px !important;
  border-radius: 34px !important;
  color:white !important;
  font-size: 16px !important;
}
@media (min-width: 992px) and (max-width : 1200px){
  .mar{
  margin-left:20px;
}
}

@media screen and (max-width: 576px) {
  button.button-nav.mar{
    background-color: #18564C !important;
    width: 100% !important;
  }
}

.rou{
  text-decoration: none !important;
  text-transform: capitalize;
}
/* .dropdown-hover:hover>.dropdown-menu {
display: inline-block;
} */

.dropdown-hover>.dropdown-toggle:active {
/*Without this, clicking will make it sticky*/
pointer-events: none;
}
@media only screen and (max-width: 600px) {
  .dropdown-hover:hover>.dropdown-menu{
    display:block;
  }

  .button-nav{
    width: 100%;
  }
}

.nav-item-for-drop {
  margin-top:-8px;
}


#app > div:nth-child(1) > div > div > nav > button{
  border: none !important;
  position: absolute !important;
  top: 10px !important;
  outline: none;
}

#app > div:nth-child(1) > div > div > nav > a > img{
  margin-left: 50px;
}

#nav-collapse > ul.navbar-nav.mx-auto > li > a > a{
  font-family: Inter;
font-size: 16px !important;
font-weight: 400 !important;
line-height: 19.36px !important;
text-align: left !important;
margin-left: 10px !important;
}
</style>
