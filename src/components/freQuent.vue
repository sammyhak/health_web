<template>
 

  <div class="container can mt-5" id="section2">
    <div class="row">
        <div class="col-12 so">
          <h3 class="de font-for-our-milki">Frequently asked Questions and Answers</h3>
          <p class="font-for-inter">What is on your mind about us</p>
        </div>
    </div>
  
  <div class="accordion font-for-inter "  role="tablist">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <P block v-b-toggle.accordion-1 variant="info">+ How do i get my Products delivered to my location.</P>
        
      </b-card-header>
      <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          
          <b-card-text>{{ text }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <p block v-b-toggle.accordion-2 variant="info">+ Are there extra charges for product delivery.</p>
      </b-card-header>
      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ second }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

   
  </div>

  <div class="subscribe">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-8"> 
          <h5>Subscribe to our News Letter and get exclusive updates</h5><h5> when we post a new blog.</h5>
        </div>
        <div class="col-12 col-md-4 ">  
           <button class="btn-lg button-sub mt-4 text-center">Subscribe</button></div>
      </div> 
    </div>
   
  </div>
</div>



</template>

<script>
export default {
  data() {
      return {
        text: `
          Our products will be delivered to your request
          located via our trusted courier agency FEDEX EXPRESS(Red star logistics) with
          there offices all over the country.
        `,
        second:`
         No extra charges for product delivery.
        `
      }
    },
 name:'freQuent'
 
}

</script>

<style>
.button-sub {
  padding-left:25px;
  padding-right:25px;
  padding-top:10px;
  padding-bottom:10px;
  border:none;
  background-color:white;
  color:black;
  border-radius:30px;
}

.font-for-our-milki{
  font-family: face !important; 
}
.font-for-inter{
  font-family: facee;
}
.de{
  color:#18564C;
  
    font-weight:bold;
}
.so{
  text-align: center;
}

.bu{
  display: flex;
      justify-content: center;
      align-items: center;
}
.button-nav{
  background-color: white;
  width:135px;
  height:42px;
  border: 0px;
  border-radius:34px;
  color:white !important;
  font-size: 16px !important;
}
.subscribe{
  background-color:#18564C;
  margin-top:200px;
  color:white;
  
  border-radius:10px;
  display: flex;
      justify-content: center;
      align-items: center;
      height: 42%; 
      margin-bottom: 100px;
      padding-left: 20px;
      padding-right:20px;
      padding-top:40px;
      padding-bottom:40px;
}
template{
   background-color:white !important; 
}
.can{
  background-color:white !important;
}
.accordion{
 
}
 .accordion .card-header {
      cursor: pointer;
      position: relative;
    }
    .accordion .card-header .icon {
      position: absolute;
      left: 10px;
      top: 50%;
      transform: translateY(-50%);
    }
    .accordion .card-header .icon::before {
      font-size: 1.2em;
    }
    .collapsed .icon::before {
      content: '+';
    }
    .icon::before {
      content: '+';
    }


</style>