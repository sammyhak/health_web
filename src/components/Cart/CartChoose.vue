<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-7 col-12">
          <div
            class="row container mr mt-3"
            v-for="cart in cartItems"
            :key="cart.id"
          >
            <div class="container col-md-2 mt-4 col-4">
              <img :src="cart.image" class="ts" />
            </div>
            <div class="col-md-9 col-8">
              <button class="lo" @click="remove(index)">
                <span class="material-symbols-outlined">close</span>
              </button>
              <h5 class="mk pt-3">{{ cart.name }}</h5>
              <p class="desc">{{ cart.desc }}</p>
              <p class="press">
                <span class="io">Presentation:</span>
                <span class="pre">{{ cart.presentation }}</span>
              </p>
              <p class="pre">Quantity</p>
              <p class="">
                <span>
                  <button class="minus m2" @click="minus(cart.id)">-</button>
                </span>
                <span class="forty">{{ cart.quantity }}</span>
                <span>
                  <button class="minus m2" @click="plus(cart.id)">+</button>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-1 col-12"></div>
        <div class="col-md-4 col-12 fd mt-3">
          <div class="row">
            <h5 class="pt-3 d-none d-md-block">Order Summary</h5>
            <div class="col-6">
              <br class="d-none d-md-block" />
              <P class="noitems">No of items</P>
              <!-- <p>Total </p> -->
            </div>
            <div class="col-6 lo">
              <br class="d-none d-md-block" />
              <p class="noitems">{{ totalItems }}</p>
            </div>
            <br /><br class="d-none d-md-block" /><br
              class="d-none d-md-block"
            /><br class="d-none d-md-block" />
            <div>
              <b-button v-b-modal.modal-1 class="fh">Place Order</b-button>
              <b-modal id="modal-1" hide-footer="true" hide-nav="true">
                <div class="">
                  <form class="row g-3">
                    <legend class="odr">Order Information</legend>
                    <div class="col-md-12 col-12">
                      <label for="inputName" class="form-label"
                        >Full Name</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        v-model="formdata.name"
                        id="inputName"
                      />
                    </div>
                    <div class="col-md-6 col-12">
                      <label for="inputEmail" class="form-label">Email</label>
                      <input
                        type="email"
                        class="form-control"
                        v-model="formdata.email"
                        id="inputEmail"
                      />
                    </div>
                    <div class="col-md-6 col-12">
                      <label for="inputPhone" class="form-label"
                        >Phone Number</label
                      >
                      <input
                        type="tel"
                        class="form-control"
                        v-model="formdata.phone"
                        id="inputPhone"
                      />
                    </div>
                    <legend class="odr">Location</legend>
                    <div class="col-12">
                      <label for="inputAddress" class="form-label"
                        >Address</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        v-model="formdata.address"
                        id="inputAddress"
                      />
                    </div>
                    <div class="col-md-6 col-6">
                      <label for="inputState" class="form-label">State</label>
                      <select
                        id="inputState"
                        v-model="formdata.state"
                        class="form-select"
                        @change="getCities"
                      >
                        <option selected>Choose...</option>
                        <option
                          v-for="state in states"
                          :value="state.isoCode"
                          :key="state.isoCode"
                        >
                          {{ state.name }}
                        </option>
                      </select>
                    </div>

                    <div class="col-md-6 col-6">
                      <label for="inputCity" class="form-label">LGA</label>
                      <select
                        class="form-select"
                        v-model="formdata.lga"
                        id="inputCity"
                      >
                        <option selected>Choose...</option>
                        <option
                          v-for="city in cities"
                          :value="city.name"
                          :key="city.name"
                        >
                          {{ city.name }}
                        </option>
                      </select>
                    </div>

                    <div class="mb-3 col-12">
                      <label for="inputTextarea" class="form-label"
                        >Additional Information</label
                      >
                      <textarea
                        class="form-control"
                        v-model="formdata.add_info"
                        id="inputTextarea"
                        rows="3"
                      ></textarea>
                    </div>
                    <div class="col-12">
                      <button
                        type="submit"
                        class="btn stl"
                        @click.prevent="sendEmail"
                      >
                        Place Order
                      </button>
                    </div>
                  </form>
                </div>
              </b-modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { State, City } from "country-state-city";
export default {
  name: "CartChoose",
  components: {},
  data() {
    return {
      cartItems: [],
      nameofperson: "",
      formdata: {
        prescription: "",
        name: "",
        email: "",
        phone: "",
        state: "",
        lga: "",
        address: "",
        add_info: "",
      },
      states: [],
      cities: [],
      // selectedState: "",
      // selectedCity: "",
    };
  },
  computed: {
    totalItems() {
      return this.cartItems.reduce((total, cart) => total + cart.quantity, 0);
    },
  },
  methods: {
    getCities() {
      console.log(this.formdata);
      if (this.formdata.state) {
        this.cities = City.getCitiesOfState("NG", this.formdata.state);
      } else {
        this.cities = [];
      }
    },
    async sendEmail() {
      this.formdata.prescription = this.cartItems
        .map((cart) => cart.name + ` x${cart.quantity}`)
        .join(", ");
      axios
        .post(
          "https://prosperc40.pythonanywhere.com/api/send-email/",
          this.formdata
        )
        .then((response) => {
          console.log(response);
          // Display congratulatory message in modal
          alert("Congratulations! Your order will be delivered.");

          // Clear form data
          (this.formdata.prescription = ""),
            (this.formdata.name = ""),
            (this.formdata.email = ""),
            (this.formdata.phone = ""),
            (this.formdata.state = ""),
            (this.formdata.lga = ""),
            (this.formdata.address = ""),
            (this.formdata.add_info = ""),
            // Update cart items to zero
            (this.cartItems = []);

          // Close the modal
          this.$bvModal.hide("modal-1");
        })
        .catch((error) => console.log(error));
    },

    remove(index) {
      this.cartItems.splice(index, 1);
      this.updateSessionStorage();
      window.location.reload();
    },
    plus(cartId) {
      const productToUpdate = this.cartItems.find((cart) => cart.id === cartId);
      console.log(productToUpdate);
      if (productToUpdate) {
        productToUpdate.quantity += 1;
        // Update session storage
        this.updateSessionStorage();
      }
    },
    minus(cartId) {
      const productToUpdate = this.cartItems.find((cart) => cart.id === cartId);
      console.log(productToUpdate);
      if (productToUpdate.quantity > 0) {
        productToUpdate.quantity -= 1;
        // Update session storage
        this.updateSessionStorage();
      }
    },
    updateSessionStorage() {
      sessionStorage.setItem("cart", JSON.stringify(this.cartItems));
    },
    delete() {},
  },

  mounted() {
    this.states = State.getStatesOfCountry("NG");
    const cartItems = sessionStorage.getItem("cart");
    if (cartItems) {
      this.cartItems = JSON.parse(cartItems);
    }
  },
  created() {
    this.states = State.getStatesOfCountry("NG");
  },
};
</script>

<style>
/* .er{
    height:auto;
} */
input.form-control {
  border-radius: 16px !important;
}
textarea.form-control {
  border-radius: 16px !important;
}
select.form-select {
  border-radius: 16px !important;
}
label.form-label {
  font-size: 13px !important;
  color: #757575;
}
button.btn.stl {
  background-color: #202020;
  color: #fff;
  padding: 12px 28px;
  border-radius: 100px;
  font-size: 16px !important;
  font-weight: lighter !important;
  float: right;
}
legend.odr {
  font-size: 28px;
  font-weight: bolder !important;
  font-family: inter;
}
button.close {
  text-align: right;
  float: right;
  border: 0px;
  background-color: white;
  font-size: 28.74px !important;
}
header#modal-1___BV_modal_header_ {
  border-bottom: none !important;
  padding-bottom: 0px !important;
}
.material-symbols-outlined {
  background-color: white;
}
.fh {
  background-color: #258576 !important;
  color: white !important;
  border: none;
  border-radius: 34px !important;
  width: 100%;
  font-size: 18px !important;
  padding: 10px 20px !important;
}
.fd {
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  height: 220px;
}
.desc {
  font-size: 20px !important;
  margin-bottom: 0px !important;
}
.lo {
  text-align: right;
  float: right;
  border: 0px;
  background-color: white;
}
.as {
  width: 10px;
  height: 10px;
}
.mr {
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  height: auto;
}
.ts {
  width: 62px;
  height: 62px;
  margin: 20px;
}
.mk {
  font-weight: normal !important;
  font-family: millik;
  font-size: 32px !important;
}
.cef {
  margin-bottom: 0;
  padding-bottom: 0;
  line-height: 1.2;
  color: #343434;
  font-size: 16px;
}
.pre {
  margin-top: -20px;
  color: #202020;
  font-size: 18px;
}
.io {
  opacity: 0.5 !important;
  color: #161616 !important;
  font-size: 18px !important;
  padding-bottom: 0;
  line-height: 1.2;
  font-size: 13px;
  margin-top: -10px;
}
.press {
  margin-top: 10px !important;
}
p.pre {
  margin-top: -9px !important;
}
h5.pt-3 {
  font-size: 18px;
  font-weight: bold;
}
.minus.m2 {
  background-color: #fbfbfb;
  border: none;
}
button.lo {
  margin-top: 30px !important;
}
@media only screen and (max-width: 576px) {
  .mr {
    border: none;
    border-bottom: 1px solid #e0e0e0 !important;
    border-radius: 0px !important;
    height: auto;
    width: auto !important;
    line-height: normal;
  }

  div.col-md-7.col-12 {
    border-bottom: 1px solid #e0e0e0;
    border-top: 1px solid #e0e0e0;
  }
  .mk {
    font-weight: normal !important;
    font-family: millik;
    font-size: 14px !important;
  }
  .desc {
    font-size: 11px !important;
    margin-bottom: 0px !important;
  }
  .io {
    font-size: 10px !important;
  }
  .pre {
    font-size: 10px !important;
  }
  span.material-symbols-outlined {
    font-size: 18.74px !important;
  }
  .fd {
    border: none;
    height: auto !important;
  }
  .fh {
    border-radius: 50px !important;
    background-color: #18564c !important;
    font-size: 12px !important;
  }
  .noitems {
    font-size: 12px !important;
  }
  legend.odr {
    font-size: 18px;
    font-weight: bolder !important;
    font-family: inter;
  }
  label.form-label {
    font-size: 12px !important;
    color: #757575;
  }
  button.btn.stl {
    font-size: 12px !important;
  }

  .modal-dialog .modal-md {
    margin-right: 0px !important;
    margin-left: 0px !important;
  }
}
</style>
