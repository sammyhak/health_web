<template>
	<div>
		<div class="container margin-blow our-partners-header">
			<div class="row">
				<div class="col-12">
					<h3 class="text-center tex font-for-our-milki">Our Partners</h3>
				</div>
			</div>
			<div class="row">
				<div class="col-12 container font-for-inter">
					<p class="text-center">We partner internationally recognized Pharmaceutical companies across the
						globe. The partners that trust us have huge value for their money. </p>
				</div>
			</div>


		</div>

		<div>
			<div class="slider-area f">
				<div class="wrapper">
					<div class="item"><img alt="" src="../assets/f1-min.png" class="img-fluid "></div>
					<div class="item"><img alt="" src="../assets/f2-min.png" class="img-fluid ml-5 mr-5 ml mtwo "></div>
					<div class="item"><img alt="" src="../assets/ICPA.png" class="img-fluid ml-5 mr-5 ml mthr">
					</div>
					<div class="item"><img alt="" src="../assets/f4-min.png" class="img-fluid ml-5 mr-5 ml mfour"></div>
					<div class="item"><img alt="" src="../assets/f5-min.png" class="img-fluid ml-5 mr-5 "></div>
					<div class="item"><img alt="" src="../assets/f6-min.png" class="img-fluid ml-5 mr-5 ml msix"></div>
					<div class="item"><img alt="" src="../assets/f7-min.png" class="img-fluid ml-5 mr-5 ml mseven">
					</div>
				</div>
			</div>
		</div>


	</div>

</template>

<script>
import "../styles/components/AboutUs.scss";
export default {
	name: 'ourProject'
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

.font-for-our-milki {
	font-family: face;
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
	width: 100%;
	margin: 0 auto;
	overflow: hidden;
	justify-content: center;
	align-items: center;
	height: 160px;
	/* border-radius: 180px; */	
	/* background: #ddd; */
	/* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */
}

.item {
	animation: animate 5s alternate linear infinite;
}

.container:hover .item {
	animation-play-state: paused;
}

@keyframes animate {
	0% {
		transform: translate3d(0, 0, 0);
	}

	100% {
		transform: translate3d(-700px, 0, 0);
	}
}

@media (max-width:767px) {	
	@keyframes animate {
		100% {
			transform: translate3d(-600px, 0, 0);
		}
	}
}

@media (max-width: 576px) {	
	@keyframes animate {
		0% {
			transform: translate3d(300px, 0, 0);
		}
		100% {
			transform: translate3d(-400px, 0, 0);
		}
	}
}

.tex {
	color: #18564C;

	font-weight: bold;
}
.our-partners-header .row {
    width: 100%;
}
</style>
