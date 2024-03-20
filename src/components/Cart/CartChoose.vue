<template>
    <div>
        <secondbar></secondbar>
        <div class="container ">

         <h4 class="mt-3">Pharmacy Cart</h4> 
        
      <div class="row">
        <div class="col-md-7 col-12  " >
            <div class="row container mr mt-3" v-for="cart in cartItems" :key="cart.id" >
                <div class="col-md-2 mt-4 col-12" >
                    <img :src="cart.image"  class="ts" >
                </div>
                <div class="col-md-9 col-12 pb-3">
                    <h5 class="mt-3 mk pt-3" >{{ cart.name }}</h5>
                    <p class=""><span class="io">Presentation</span> :<span class="pre">{{ cart.presentation }}</span></p>
                    <p class="pre">Quantity</p>
                    <p class=""><span >
                        <button class="minus" @click="minus(cart.id)">-</button>
                    </span><span class="forty">{{ cart.quantity}}</span><span>
                        <button class="minus" @click="plus(cart.id)">+</button></span>
                    </p>
                </div>
                <div class="col-md-1 col-12 lo">
                    <div class="lo"><button class="lo" @click="remove(index)"><span class="material-symbols-outlined">close</span></button></div>
                  </div>  
            </div>
        </div>
         <div class="col-md-1 col-12"></div> 
        <div class="col-md-4  col-12 fd mt-3">
        <div class="row container  ">
            <h5 class="pt-3">Order Summary </h5>
            <div class="col-5 ">
                <P>No of items</P>
                <!-- <p>Total </p> -->
            </div>
            <div class="col-6 lo">
                <P class="">{{ totalItems }}</P>
            </div>
            <div>
  <b-button v-b-modal.modal-1 class="fh">Place Order</b-button>

  <b-modal id="modal-1" title="Place Order" hide-footer="true">
    <form>
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" class="form-control" id="name" v-model="formdata.name" aria-describedby="customerName" required>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" class="form-control" id="email" v-model="formdata.email" aria-describedby="email" required>
      </div>
      <div class="form-group">
        <label for="tel">Phone Number:</label>
        <input type="tel" class="form-control" id="tel" v-model="formdata.phone" aria-describedby="phone">
      </div>
      <div class="form-group">
        <label for="state">State:</label>
        <input type="text" class="form-control" id="state" v-model="formdata.state" aria-describedby="state">
      </div>
      <div class="form-group">
        <label for="lga">Local Government:</label>
        <input type="text" class="form-control" id="lga" v-model="formdata.lga" aria-describedby="LGA">
      </div>
      <div class="form-group">
        <label for="address">Home Address:</label>
        <textarea id="address"  v-model="formdata.address" class="form-control" required></textarea> 
      </div>
      <div class="form-group">
        <label for="add_info">Additional Information:</label>
        <textarea id="add_info"  v-model="formdata.add_info" class="form-control"></textarea> 
      </div>
      <div class="form-group">
        <label for="drug">Drug:</label>
        <input type="text" class="form-control" id="drug" v-model="formdata.prescription" readonly>
        {{ nameofperson }} {{ email }}
      </div>  
      <button type="submit" class="btn fh mt-3" @click.prevent="sendEmail">Submit</button>
    </form>
  </b-modal>
</div>
        </div>
        </div>
      </div>
    </div>
    </div>
 
</template>

<script>
  import secondbar from '../secondBar.vue';
  import axios from 'axios';

  export default {
  name:'CartChoose',
  components:{
      secondbar,
  },
  data(){
      return{
        cartItems:[],
        nameofperson:"",
        formdata:{
          prescription: "",
          name: "",
          email: "",
          phone: "",
          state: "",
          lga: "",
          address: "",
          add_info: "",
        },
      }
  },
  computed: {
          totalItems() {
              return this.cartItems.reduce((total, cart) => total + cart.quantity, 0);
          }
      },
  methods:{
  async sendEmail() {
  this.formdata.prescription = this.cartItems.map(cart => cart.name + ` x${cart.quantity}`).join(', ');
    axios.post('https://prosperc40.pythonanywhere.com/api/send-email/', this.formdata)
      .then(response => {
        console.log(response);
        // Display congratulatory message in modal
        alert('Congratulations! Your order will be delivered.');

        // Clear form data
        this.formdata.prescription = "",
        this.formdata.name = "",
        this.formdata.email = "",
        this.formdata.phone = "",
        this.formdata.state = "",
        this.formdata.lga = "",
        this.formdata.address = "",
        this.formdata.add_info = "",

        // Update cart items to zero
        this.cartItems = [];

        // Close the modal
        this.$bvModal.hide('modal-1');
      })
      .catch(error => console.log(error));
  },


      remove(index) {
              this.cartItems.splice(index, 1);
              this.updateSessionStorage();
              window.location.reload();
          },
      plus(cartId){
          const productToUpdate = this.cartItems.find(cart => cart.id === cartId);
        if (productToUpdate) {
          productToUpdate.quantity += 1;
          // Update session storage
          this.updateSessionStorage();
        }
      },
      minus(cartId){
          const productToUpdate = this.cartItems.find(cart => cart.id === cartId);
        if (productToUpdate.quantity>0) {
          productToUpdate.quantity -= 1;
          // Update session storage
          this.updateSessionStorage();
        }
        
      },
      updateSessionStorage() {
        sessionStorage.setItem('cart', JSON.stringify(this.cartItems));
      },
      delete(){

      }
  },

  mounted(){
      const cartItems = sessionStorage.getItem('cart');
      if (cartItems) {
        this.cartItems = JSON.parse(cartItems);
      }
  }
  }
</script>

<style>
/* .er{
    height:auto;
} */
.material-symbols-outlined{
    background-color:white;
}
.fh{
    background-color: #258576 !important ;
    color: white !important; ;
    border:none;
    border-radius:8px;
}
.fd{
    border:1px solid #E0E0E0;
    border-radius:10px;
    height:40vh;
    
}
.lo{
    text-align: right;
    float: right;
    border:0px;
    background-color:white;
}
.as{
    width:10px;
    height:10px;
}
.mr{
    border:1px solid #E0E0E0;
    border-radius:10px;
}
.ts{
    width:62px;
height: 62px;
}
.mk{
    font-weight:bold;
}
.cef{
    margin-bottom: 0; 
  padding-bottom: 0; 
  line-height: 1.2;
  color:#343434;
  font-size: 16px;
  
}
.pre{
    margin-top:-20px;
  
  color:#343434;
  font-size: 13px;
  
}
.io{
 color:#525252 !important;font-size: 13px;
 
 margin-bottom: 0; 
  padding-bottom: 0; 
  line-height: 1.2;
  font-size: 13px;
  margin-top:-10px
}
</style>