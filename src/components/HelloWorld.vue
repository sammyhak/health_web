<template>
   <div>
    <div class="container">
      
    <div class="navb">
  <b-navbar toggleable="lg">
    <b-navbar-brand href="#"><img src="../assets/Frame 8.png" class="img-class"></b-navbar-brand>

    <b-navbar-toggle  type="light" variant="light" target="nav-collapse" class="mb-2"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="mx-auto">
        <b-nav-item href="#" class="ma ml-5" ><router-link to="/" class="rou">Home</router-link></b-nav-item>
        <b-nav-item href="# " class="ml-5 ma ">
           <router-link to="/about" class="rou mar">About Us</router-link></b-nav-item>
        <b-nav-item href="#" class="nav-item-for-drop ml-5" >  <li class="ml-5nav-item dropdown dropdown-hover position-static">
          <a class="nav-link dropdown-toggle d-none d-lg-block d-xl-block d-xxl-block" href="#" id="navbarDropdown" role="button"
            data-mdb-toggle="dropdown" aria-expanded="false">
            Products
          </a>
          <!-- Dropdown menu -->

          <div class="dropdown-menu w-90 mt-0" aria-labelledby="navbarDropdown" style="border-top-left-radius: 0;
                            border-top-right-radius: 0;
                          ">

            <div class="container">
              <div class="row my-4">
                <div class="col-md-6 col-lg-3 mb-3 mb-lg-0">
                  <div class="list-group list-group-flush">
                    <a href="/product" class="list-group-item list-group-item-action"><router-link to="/product" class="rou">Anti-histamines</router-link></a>
                    <a href="" class="list-group-item list-group-item-action"><router-link to="/product" class="rou">Anti Retrovial</router-link></a>
                    <a href="" class="list-group-item list-group-item-action"><router-link to="/product" class="rou">Anti-biotics</router-link></a>
                    <a href="" class="list-group-item list-group-item-action"><router-link to="/product" class="rou">Anti platelet</router-link></a>
                    <!-- <a href="" class="list-group-item list-group-item-action"><router-link to="/product" class="rou">Anti-histamines</router-link>Adipisicing elit</a> -->
                  </div>
                </div>
                <div class="col-md-6 col-lg-3 mb-3 mb-lg-0">
                  <div class="list-group list-group-flush">
                    <a href="" class="list-group-item list-group-item-action">Anti hypentensive</a>
                    <a href="" class="list-group-item list-group-item-action">Anti-fibrinolytic</a>
                    <a href="" class="list-group-item list-group-item-action">Anti thrombolytic</a>
                    <a href="" class="list-group-item list-group-item-action">Blood tonics</a>
                    <!-- <a href="" class="list-group-item list-group-item-action">Provident dolor</a> -->
                  </div>
                </div>
                <div class="col-md-6 col-lg-3 mb-3 mb-md-0">
                  <div class="list-group list-group-flush">
                    <a href="" class="list-group-item list-group-item-action">Disinfectant</a>
                    <a href="" class="list-group-item list-group-item-action">Dermato-cosmetics</a>
                    <a href="" class="list-group-item list-group-item-action">Iron Injection</a>
                    <a href="" class="list-group-item list-group-item-action">Oral Care</a>
                    <!-- <a href="" class="list-group-item list-group-item-action">Laboriosam</a> -->
                  </div>
                </div>
                <div class="col-md-6 col-lg-3">
                  <div class="list-group list-group-flush">
                    <a href="" class="list-group-item list-group-item-action">NSAID</a>
                    <a href="" class="list-group-item list-group-item-action"></a>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li></b-nav-item>
       

        <b-nav-item-dropdown text="Products" right  class="ml-5 mar  d-sm-block d-md-none d-md-block d-lg-none" 
    menu-class="w-100">
          <div class="">
            <div class="col-2"> <b-dropdown-item href="#">Anti hypentensive</b-dropdown-item></div>
            <div class="col-2"> <b-dropdown-item href="#">Anti Retrovial</b-dropdown-item></div>
            <div class="col-2"> <b-dropdown-item href="#">Anti-biotics</b-dropdown-item></div>
            <div class="col-2"><b-dropdown-item href="#">Anti platelet</b-dropdown-item></div>
            <div class="col-2"><b-dropdown-item href="#">Anti hypentensive</b-dropdown-item></div>
            <div class="col-2"><b-dropdown-item href="#">Anti-fibrinolytic</b-dropdown-item></div>
            <div class="col-2"><b-dropdown-item href="#">Anti thrombolytic</b-dropdown-item></div>
            <div class="col-2"><b-dropdown-item href="#">Blood tonics</b-dropdown-item></div>
            <div class="col-2"><b-dropdown-item href="#">Provident dolor</b-dropdown-item></div>
            <div class="col-2"><b-dropdown-item href="#">Disinfectant</b-dropdown-item></div>
            <div class="col-2"><b-dropdown-item href="#">Dermato-cosmetics</b-dropdown-item></div>
            <div class="col-2"><b-dropdown-item href="#">Iron Injection</b-dropdown-item></div>
            <div class="col-2"><b-dropdown-item href="#">Oral Care</b-dropdown-item></div>
            <div class="col-2"><b-dropdown-item href="#">Laboriosam</b-dropdown-item></div>
            <div class="col-2"><b-dropdown-item href="#">NSAID</b-dropdown-item></div>
          </div>
          
         
         
          
        </b-nav-item-dropdown>
        <!-- <b-nav-item href="#"  class="ml-5  mar ma">Blog</b-nav-item> -->
       
      </b-navbar-nav>
      
      <div>
  <!-- <b-dropdown
    text="Block Level Dropdown Menu"
    block
    variant="primary"
    class="dr"
    menu-class="w-100"
  >
  <div class="dr">
    <b-dropdown-item href="#">Action</b-dropdown-item>
    <b-dropdown-item href="#">Another action</b-dropdown-item>
    <b-dropdown-item href="# ">Something else here</b-dropdown-item>
  </div>
    
  </b-dropdown> -->

  
</div>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#"> <div>
    <router-link
      to="/contact"
      custom
      v-slot="{ navigate }"
    >
    <button class="btn-lg bt button-nav mar" @click="navigate" role="link">Contact Us</button>
    </router-link>
  </div></b-nav-item>
        <b-nav-item href="#"> <div>
    <!-- <router-link
      to="/contact"
      custom
      v-slot="{ navigate }"
    >
      <button
        @click="navigate"
        role="link"
      >
        Posts
      </button>
    </router-link> -->
  </div></b-nav-item>
        <b-nav-item href="#" class="mt-2 ma"><router-link to="/cart" class="rou"><img src="../assets/ShoppingCart.png" class="imgf ml-5"></router-link></b-nav-item>
      

       
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

  
</div>




    
  </div>
 
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',

 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

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
      /* border: 10px solid blue; */
}
.ml-auto, .mx-auto {
    margin-left: auto!important;
}
*{
  background-color:white;
  
}
.button-nav{
  background-color: #258576;
  width:135px;
  height:42px;
  border: 0px;
  border-radius:34px;
  color:white !important;
  font-size: 16px !important;
}
@media (min-width: 992px) and (max-width : 1200px){
  .mar{
  margin-left:20px;
}
}

.rou{
  text-decoration: none !important;
}
.dropdown-hover:hover>.dropdown-menu {
display: inline-block;
}

.dropdown-hover>.dropdown-toggle:active {
/*Without this, clicking will make it sticky*/
pointer-events: none;
}
@media only screen and (max-width: 600px) {
  .dropdown-hover:hover>.dropdown-menu{
    display:block;
  }
}

.nav-item-for-drop {
  margin-top:-8px;
}



</style>
