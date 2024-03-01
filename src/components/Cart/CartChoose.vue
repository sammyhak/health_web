<template>
    <div>
        <secondbar></secondbar>
        <div class="container ">

         <h4 class="mt-3">Pharmacy Cart</h4> 
        
      <div class="row">
        <div class="col-md-7 col-12  " >
            <div class="row container mr mt-3" v-for="cart in cartItems" :key="cart.id" >
                <div class="col-md-2 mt-4 col-12" >
                    <img src="../../assets/para.png"  class="ts" >
                </div>
                <div class="col-md-9 col-12 pb-3">
                    <h5 class="mt-3 mk pt-3" >{{ cart.name }}</h5>
                    <p class="cef">Ceftriaxone for injection USP1.0gIM/IV Use</p>
                    <p class=""><span class="io">Presentation</span> :<span class="pre">1 Vail</span></p>
                    <p class="pre">Quantity</p>
                    <p class=""><span >
                        <button class="minus" @click="minus(cart.id)">-</button>
                    </span><span class="forty">{{ cart.quantity}}</span><span>
                        <button class="minus" @click="plus(cart.id)">+</button></span>
                    </p>
                </div>
                <div class="col-md-1 col-12 lo">
                    <div class="lo"><button class="lo" @click="remove(index)"><span class="material-symbols-outlined">
close
</span></button>
                        

                    <p class="lo">₦2,800.00</p></div></div>
                    
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
                <!-- <p>2000</p> -->
            </div>
            <!-- <button class="fh ">Place Order</button> -->
            <div>
  <b-button v-b-modal.modal-1 class="fh "  >Place Order</b-button>

  <b-modal id="modal-1" title="Place Order" hide-footer="true">
    <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email</label>
        
    <input type="email" class="form-control" id="exampleInputEmail1" v-model="formdata.email" aria-describedby="emailHelp" placeholder="Enter email">
    <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1 mt-5">Drug</label>
    <input type="text" class="form-control" id="exampleInputPassword1" v-model="formdata.drug" placeholder="Drug">
    {{ nameofperson }} {{ email }}
  </div>
 
  <button type="submit" class="btn fh mt-3" @click.prevent="sendEmail">Submit</button>
</form>
  </b-modal>
</div>
        </div>
        </div>
      </div>
      <!-- <div class="row mt-4 mb-5">
        <div class="col-md-7 col-12 mr">
            <div class="row container">
                <div class="col-md-2 mt-4 col-12">
                    <img src="../../assets/para.png" class="ts" >
                </div>
                <div class="col-md-9 col-12">
                    <h4 class="mt-3 mk">Emeceph</h4>
                    <p class="cef">Ceftriaxone for injection USP1.0gIM/IV Use</p>
                    <p class=""><span class="io">Presentation</span> :<span class="pre">1 Vail</span></p>
                    <p class="pre">Quantity</p>
                    <p class=""><span ><button class="minus">-</button></span><span class="forty">40</span><span><button class="minus">+</button></span></p>
                </div>
                <div class="col-md-1 col-12 lo">
                    <div class="lo"><p class="lo">X</p> 
                    <p class="lo">₦2,800.00</p></div></div>
                    
            </div>
        </div>
        <div class="col-md-1 col-12 ">
        
    </div>
        <div class="col-md-4 col-12 ">
        
        </div>
      </div> -->
    </div>
    </div>
 
</template>

<script>
import secondbar from '../secondBar.vue';
import axios from 'axios';
// import * as EmailJS from 'emailjs-com';
// import { SMTPClient } from 'emailjs';
// import * as EmailJS from 'emailjs-com';
//  import smtp from 'smtp.js';
export default {
name:'CartChoose',
components:{
    secondbar,
   

},
data(){
    return{
        // cartItems:JSON.parse(sessionStorage.getItem("cart")),
        cartItems:[],
        nameofperson:"",
        formdata:{
            email:"",
        drug:"",
     
        },
        // email:"",
       
    }
},
computed: {
        totalItems() {
            return this.cartItems.reduce((total, cart) => total + cart.quantity, 0);
        }
    },
methods:{
   
//     async sendEmail() {
//   const emailData = {
//     from: 'Sender Name <nancee801@gmail.com>',
//     to: 'prosperc40@gmail.com',
//     subject: 'Test Email',
//     text: 'This is a test email sent from Vue.js frontend using Mailgun.'
//   };

//   try {
//     const response = await axios.post('https://api.mailgun.net/v3/your-domain.com/messages', emailData, {
//       auth: {
//         username: 'api',
//         password: '3de6b66a321321a89451d09cfb6dc01b-408f32f3-d2c355bc'
//       }
//     });

//     if (response.status === 200) {
//       alert('Email sent successfully!');
//     } else {
//       console.error('Failed to send email:', response.data);
//       alert('Failed to send email');
//     }
//   } catch (error) {
//     console.error('Error sending email:', error);
//     alert('Error sending email. Please try again later.');
//   }
// },

async sendEmail() {
//   const emailData = {
//     from: 'nancee801@gmail.com',
//     to: 'prosperc40@gmail.com',
//     subject: 'Test Email',
//     text: 'This is a test email sent from Vue.js frontend using Mailgun.'
//   };

//   try {
//     const response = await axios.post('https://prosperc40.pythonanywhere.com/api/send-email/', emailData, {
//       auth: {
//         username: 'moses',
//         password: '771f9f51da3894470667836dbdf2a2a8-408f32f3-bc019a5b'
//       }
//     });

//     if (response.status === 200) {
//       alert('Email sent successfully!');
//     } else {
//       console.error('Failed to send email:', response.data);
//       alert('Failed to send email');
//     }
//   } catch (error) {
//     console.error('Error sending email:', error);
//     alert('Error sending email. Please try again later.');
//   }
this.formdata.drug = this.cartItems.map(cart => cart.name).join(', ');
  axios.post('https://prosperc40.pythonanywhere.com/api/send-email/', this.formdata)
    .then(response => 
        console.log(response)
    )
    .catch(error => console.log(error));
    try {
    // Assuming the email data is properly formatted in this.formdata
    const response = await axios.post('https://prosperc40.pythonanywhere.com/api/send-email/', this.formdata);

    if (response.status === 200) {
      // Display congratulatory message in modal
      alert('Congratulations! Your order will be delivered.');

      // Clear form data
      this.formdata.email = '';
      this.formdata.drug = '';

      // Update cart items to zero
      this.cartItems = [];

      // Close the modal
      this.$bvModal.hide('modal-1');
    } else {
      console.error('Failed to send email:', response.data);
      alert('Failed to send email');
    }
  } catch (error) {
    console.error('Error sending email:', error);
    alert('Error sending email. Please try again later.');
  }
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
// ,
// mounted(){
//     cartItems:JSON.parse(sessionStorage.getItem("cart"))
   
// }}

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