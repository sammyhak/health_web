<template>
    <div>
        <div class="container mt-5 margin-blow  ">
            <div class="row mt-5">
                <div class="col-12">
                    <h3 class="text-center tex font-for-our-milki">Our Partners</h3>
                </div>
            </div>
           <div class="row">
              <div class="col-12 container font-for-inter">
                <p class="text-center">We partner internationally recognized Pharmaceutical companies across the </p>
                    <p class="text-center">globe. The partners that trust us have huge value for their money. </p>
              </div>
           </div>


		</div>
       
           <div class="mb-5">
            <div class="slider-area f">
		<h2>Our Clients</h2>
		<div class="wrapper">
			<div class="item"><img alt="" src="../assets/f1-min.png" class="img-fluid "></div>
			<div class="item"><img alt="" src="../assets/f2-min.png" class="img-fluid ml-5 mr-5 ml mtwo "></div>
			<div class="item"><img alt="" src="../assets/Group-69-min.png" class="img-fluid ml-5 mr-5 ml mthr"></div>
			<div class="item"><img alt="" src="../assets/f4-min.png" class="img-fluid ml-5 mr-5 ml mfour"></div>
			<div class="item"><img alt="" src="../assets/f5-min.png" class="img-fluid ml-5 mr-5 "></div>
            <div class="item"><img alt="" src="../assets/f6-min.png" class="img-fluid ml-5 mr-5 ml msix"></div>
            <div class="item"><img alt="" src="../assets/f7-min.png" class="img-fluid ml-5 mr-5 ml mseven"></div>
		</div>
	</div>
           </div>
       
 
    </div>
 
</template>

<script>
export default {
name:'ourProject'
}
</script>

<style>
.margin-blow {
margin-bottom: 30px;
}
@font-face {
  font-family: face;
  src: url(../assets/Millik.otf);
}
.font-for-our-milki{
  font-family: face;
}
.ml{
    margin-right:200px !important;
	width:220.75px;
	height:60px;
}
.mu{
  width:37.4px !important;
  height:70px !important;
}
.mtwo{
	width:141.23px !important;
	height:60px !important;
}
.mfour{
	width:226.13px !important;
	height:60px !important;
}
.msix{
	width:220.75px !important;
	height:60px !important
}
.mseven{
 width:90.28px !important;
 height:60px !important;
}
.it{
    width:100px;
    height:100px;
}
.mthr{
	width:205.57px;
	height:60.78px;
}

.slider-area h2 {
	text-align: center;
	
	font-size: 60px;
	font-weight: 500;
	text-transform: uppercase;
	letter-spacing: 2px;
	/* margin: 100px 0 30px 0; */
	color: #fff;
}
.wrapper {
	display: flex;
	width: inherit;
	margin: 0 auto;
	overflow: hidden;
    justify-content: center;
      align-items: center;
      height: 40vh;
	/* border-radius: 180px; */
	padding: 2.5rem;
	/* background: #ddd; */
	/* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */
}
.item {
	animation: animate 25s alternate linear infinite;
}
.container:hover .item {
	animation-play-state: paused;
}
@keyframes animate {
	0% {
		transform: translate3d(0, 0, 0);
	}
	100% {
		transform: translate3d(-1100px, 0, 0);
	}
}
@media (max-width:767px) {
	.slider-area h2 {
		font-size: 30px;
	}
	.wrapper {
		width: 95%;
		border-radius: 0;
		padding: 0;
	}
}

  .tex{
    color:#18564C;
   
    font-weight:bold;
  }
  
 
</style>