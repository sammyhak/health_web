<template >
    <div class="fp">
        <div class="container mt-5 mb-5 pt-5">
       <div class="row">
            <div class="col-md-4 col-12">
                <P class="fe">Frequently asked Questions about getting medications</P>
            </div>
            <div class="col-md-4 col-12">
                <p class="p-how">How do I get my medication delivered to my location. </p>
<p class="ou">Our products will be delivered to requested location via our trusted courier agency FEDEX EXPRESS (Red star logistics)  with there offices all over the country. </p>

<P class="p-how">Is there extra charges for product <br> delivery</P>
                <p class="ou">No extra charge for product delivery.</p>
            </div>
            
            
            <div class="col-md-4 col-12">
                <h6 class="p-how"> How safe is my medications during transportation </h6><br>
                <p class="ou">Our courier agency (FEDEX express) delivers each product in accordance with the medically specified condition of transportation for each product. they are also a group of well-trained logistics experts with several years of experience in medical delivery services. you can trust your product are in good hands.</p>
            </div>
       </div>
    </div>
    </div>
   
</template>

<script>


export default {
name:'FreQuent',

}
</script>

<style>
.fp{
    background-color: #F3F3F3 !important;
}
.fe{
    line-height: normal;
    font-size:32px;
    font-family: millik;
    color:black !important;
}
.p-how{
    font-size:20px;
    font-weight: bold;
}
.ou{
    font-size:16px;
}
div.col-md-4.col-12{
    margin-bottom: 2rem !important;
}

@media only screen and (max-width: 576px) {
    .fe{
        font-size: 14px;
    }
    .p-how{
        font-size: 12px;
    }
    .ou{
        font-size: 11px;
    }
}
</style>