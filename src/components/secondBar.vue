<template>
  <div class="">
    <div class="">
      <div class="container">
        <b-navbar class="d-none d-md-block">

          <b-navbar-toggle type="light" variant="light" target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="">
              <b-nav-item href="#" class="ma ml-5 pharnav"><router-link to="/"
                  class="rou pharnav">Pharmacy</router-link></b-nav-item>
              <!-- <b-nav-item href="# " class="ml-5  mar ma ">
                <router-link to="/about" class="rou pharnav">Vitamins & Supplements</router-link></b-nav-item>

              <b-nav-item href="# " class="ml-5  mar ma ">
                <router-link to="/about" class="rou pharnav">Sexual wellbeing</router-link></b-nav-item>
              <b-nav-item href="# " class="ml-5  mar ma ">
                <router-link to="/about" class="rou pharnav">Skincare</router-link></b-nav-item> -->


            </b-navbar-nav>


            <b-navbar-nav class="ms-auto">
              <!-- <b-form-input class="uy" placeholder="Search" ></b-form-input> -->
              <input class="uy" placeholder="search">

            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>




      <!-- Navbar for small screen -->
      <b-navbar class="d-md-none bn">

        <b-navbar-toggle type="light" variant="light" target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="">
            <b-nav-item href="#" class="ma ml-5 "><router-link to="/" class="rou tr">Pharmacy</router-link></b-nav-item>
            <!-- <b-nav-item href="# " class="ml-5  mar ma ">
              <router-link to="/about" class="rou tr">Vitamins & Supplements</router-link></b-nav-item>

            <b-nav-item href="# " class="ml-5  mar ma ">
              <router-link to="/about" class="rou tr">Sexual wellbeing</router-link></b-nav-item> -->



          </b-navbar-nav>


        </b-collapse>
      </b-navbar>



    </div>



  </div>
</template>

<script>
export default {
  name: 'secondBar'
}
</script>

<style>
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
  width: 350px;
  padding-left: 20px;
  border: 1px solid #E0E0E0;
  border-radius: 15px;
  padding-top: 2px;
  padding-bottom: 2px;
}
</style>