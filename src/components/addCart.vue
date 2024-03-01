<template>
  <div class="">
    <secondBar></secondBar>
    <div class="container">
       <div class="row container">
          <div class="col-lg-4 col-12">
            <img src="../assets/para.png" class=" id" >
          </div>
          <div class="col-lg-8 col-12">
            <p class="h2-ceph">Emceph</p>
            <p class="cef">Ceftriaxone for injection USP1.0gIM/IV Use</p>
            <p class="cat">Category:</p>
            <p class="cat">Presentation: <span class="val">1 val</span></p>
            <p ><span class="nu">N 2,800.00 </span> <span><button class="ins">In stock</button></span></p>
            <p class="hy">Quantity</p>
           
            <p class=""><span ><button class="minus">-</button></span><span class="forty">40</span><span><button class="minus">+</button></span></p>
            <button class="er mb-5">Add to cart</button>
          </div>
       </div>



      
       <div class="fr container-fluid">
        <div>
    <b-tabs v-model="activeTab" card active-nav-item-class="text-success"  class="text-dark">
      <b-tab title="COMPOSITION" event-key="tab1" >
        <p class="ea mt-3">Each vial contains:sterile Ceftrixone sodium USP equivalent to ceftriaxone 1.0g,</p>
        <p class="ea">Each ampule contains:sterile injection USP 10ml</p>
        <p class="ea mb-3">Emceph is a sterile,semisynthetic,broad-spectrum cephalosporin antibotic for intravenous or intramuscular administration.</p>
      </b-tab>
      <b-tab title="INDICATIONS" event-key="tab2">
        <ul>
          <li class="ea">Lower Respiratory Tract Infections</li>
          <li class="ea">Acute bacterial otitis media</li>
          <li class="ea">Skin and skin structure infections</li>
          <li class="ea">Urinary tract infections</li>
          <li class="ea">Uncomplicated gonorrhea</li>
          <li class="ea" >Bacterial septicemia</li>
          <li class="ea">Bone and joint infections</li>
          <li class="ea" >Intra-abdominal infections</li>
          <li class="ea">meningitis</li>
          <li class="ea">Surgical Prophylaxis</li>
          
        </ul>
      </b-tab>
     
    </b-tabs>




   

  </div>
       





       </div>

       <div>
        <div class="row mt-3 mb-5">
            <div class ="col-md-3 col-12">
                <div class>
                    <img src="../assets/para.png" class="container-fluid we" >
                    <div class="row">
                        <div class="col-8">
                          <p class="myh">MyHep DVIR</p>
                          <p class="ni">Anti-removal</p>
                          <p  class="av in"><span><img src="../assets/Ellipse 43.png" class="im1" ></span>Available for delivery</p>
                          <p  class="av "><span><img src="../assets/Ellipse 43.png" class=" im1"  ></span>In stock</p>
                        </div>
                        <div class="col-4">
                           <p class="mh"> ₦ 2,800</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class ="col-md-3 col-12">
                <div class>
                    <img src="../assets/para.png" class="container-fluid we" >
                    <div class="row">
                        <div class="col-8">
                          <p class="myh">MyHep DVIR</p>
                          <p class="ni">Anti-removal</p>
                          <p  class="av in"><span><img src="../assets/Ellipse 43.png" class="im1" ></span>Available for delivery</p>
                          <p  class="av "><span><img src="../assets/Ellipse 43.png" class=" im1"  ></span>In stock</p>
                        </div>
                        <div class="col-4">
                           <p class="mh"> ₦ 2,800</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class ="col-md-3 col-12">
                <div class>
                    <img src="../assets/para.png" class="container-fluid we" >
                    <div class="row">
                        <div class="col-8">
                          <p class="myh">MyHep DVIR</p>
                          <p class="ni">Anti-removal</p>
                          <p  class="av in"><span><img src="../assets/Ellipse 43.png" class="im1" ></span>Available for delivery</p>
                          <p  class="av "><span><img src="../assets/Ellipse 43.png" class=" im1"  ></span>In stock</p>
                        </div>
                        <div class="col-4">
                           <p class="mh"> ₦ 2,800</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class ="col-md-3 col-12">
                <div class>
                    <img src="../assets/para.png" class="container-fluid we" >
                    <div class="row">
                        <div class="col-8">
                          <p class="myh">MyHep DVIR</p>
                          <p class="ni">Anti-removal</p>
                          <p  class="av in"><span><img src="../assets/Ellipse 43.png" class="im1" ></span>Available for delivery</p>
                          <p  class="av "><span><img src="../assets/Ellipse 43.png" class=" im1"  ></span>In stock</p>
                        </div>
                        <div class="col-4">
                           <p class="mh"> ₦ 2,800</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </div>
    </div>
  </div>
</template>

<script>

import secondBar from './secondBar.vue';
export default {
   name:'addCart',
   components:{
    secondBar
   },
   data() {
    return {
      activeTab: 'tab1'
    };
  
  },
  
}
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
}
.val{
  color:black;
}
.h2-ceph{
  font-size: 46px;
  font-weight:bold;
  margin-bottom: 0; 
  padding-bottom: 0; 
  line-height: 1.2;
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
  width:235px;
  height:235px;
  margin-left:20px;
}  

.er{
  
  
  background-color:#258576;
  color:white;
  border:0;
  padding-top:5px;
  padding-bottom: 5px;
  padding-left: 20px;
  padding-right:20px;
  border-radius:15px;
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
  width:30px;
  height:30px;
  border-radius:100px;
  border:2px solid #F0F0F0;
  margin-top:10px;
}
.forty{
  margin-left:10px;
  margin-right:10px;
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