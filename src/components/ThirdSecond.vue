<template>
  <div class="aboutpage">
    <div class="difference-container container">
      <div class="row">
        <div class="col-md-6">
          <img src="../assets/16.svg" alt="#" />
        </div>

        <div class="col-md-6">
          <h3>How we make a difference</h3>
          <p>
            Healthline Limited is a company registered in 2008 by Pharm
            Ramchandra Badgujar and Pharm Amara Chikwendu; and located at No, 29
            Adeniyi Jones Avenue, Ikeja Lagos, Nigeria. Commercial Operation in
            the company Started in 2012 with medical tourism business where over
            500 patients were treated successfully at the partner Hospital in
            India. Pharmaceutical importation and distribution started in 2013
            and in 2015 Avacare Health International – South Africa joins the
            company as a strategic investor.
          </p>
        </div>
      </div>
    </div>
    <div class="all">
      <div class="our-vision">
        <div class="row hello">
          <!--  -->
          <div class="col-12 damn">
            <div class="mt-3 cu">
              <h3 class="mt-3 mb-3 ml-3 mr-3">
                The Vision of the company is to be the leading Healthcare
                provider in Nigeria through Bridging Unmet Healthcare Needs
              </h3>
              <ul>
                <li>Hospital Management</li>
                <li>Medical Tourism</li>
                <li>Pharmaceutical</li>
                <li>Diagnostic Equipment's</li>
                <li>Medical Training (for Medical Personnel & Paramedics)</li>
              </ul>
            </div>
          </div>
          <!--  -->
          <!-- <div style="float: right !important; " class="col d-block d-sm-none d-lg-block">
            <img class="img-fluid rounded" src="../assets/IMG_8734.jpg" alt="#">
          </div> -->
        </div>
      </div>
      <br class="d-none d-sm-block d-lg-none" />
      <br class="d-none d-sm-block d-lg-none" />
      <br class="d-none d-sm-block d-lg-none" />
      <br class="d-none d-sm-block d-lg-none" />
      <div class="mb-5 marge our-vision">
        <div class="row core-values">
          <div class="col-12 text-center core-values-container">
            <h3 class="mt-5 fo">Core Values</h3>
            <p>
              In pursuit of bridging unmet healthcare needs in Nigeria we strive
              to reach higher levels of excellence through our values:
            </p>
          </div>
          <div class="row ow">
            <div class="col-md-3 col-12 core-value">
              <div class="card car">
                <div class="card-body text-center">
                  <h6 class="cus fo">Customer Service</h6>
                  <p class="">
                    HealthLine Limited prioritizes customer satisfaction and
                    continuously improves its services based on valuable
                    feedback.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-12 core-value">
              <div class="card car">
                <!-- style="width: 16rem;" -->
                <div class="card-body text-center">
                  <h6 class="cus fo">Trust and Reliability</h6>
                  <p class="">
                    We will set the highest standards of Trust and reliability
                    in all our business transactions.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-12 core-value">
              <div class="card car">
                <div class="card-body text-center">
                  <h6 class="cus fo">Innovation</h6>
                  <p class="">
                    HealthLine Limited prioritizes customer satisfaction and
                    continuously improves its services based on valuable
                    feedback.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-12 core-value">
              <div class="card car">
                <div class="card-body text-center">
                  <h6 class="cus fo">Collaboration and team work</h6>
                  <p class="">
                    HealthLine Limited prioritizes customer satisfaction and
                    continuously improves its services based on valuable
                    feedback.
                  </p>
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
import "../styles/components/AboutUs.scss";
export default {
  name: "ThirdSecond",
};
</script>

<style>
@media only screen and (min-width: 982px) {
  .damn {
    width: 520px !important;
  }
  div.container.mb-5.marge {
    margin-top: 5rem !important;
  }
}
.ow {
}

.cus {
  font-weight: bold;
}

.fo {
  /* font-weight:bold; */
  font-family: face;
}

.hello {
  margin-top: 300px;
}

.vision {
  border-radius: 10px;
}

.marge {
  margin-bottom: 100px !important;
}

@media (min-width: 769px) and (max-width: 1201px) {
  .car {
    height: 200px;
  }

  /* .cus{
  font:345px;
} */
}

@media (min-width: 992px) and (max-width: 1600px) {
  /* .mar{
  margin-left:20px;
} */

  .car {
    height: 200px;
  }
}

@media (max-width: 576px) {
  .cu {
    padding: 20px !important;
  }
  .cu h3 {
    font-size: 24px !important;
    line-height: normal !important;
  }
}

.card {
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(188, 187, 187, 0.072),
    0 41.8px 33.4px rgba(212, 212, 212, 0.086),
    0 100px 80px rgba(230, 229, 229, 0.12);

  min-height: 200px;

  margin: 100px auto;
  background: white;
  border-radius: 5px;
}
</style>
