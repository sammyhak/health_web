<template>
  <div class="fe">
    <div class="head pb-2 pt-2">
      <div class="container-fluid">
        <img src="../assets/tr.png" class="img-fluid ij">
      </div>

    </div>


    <div class="container-fluid">
      <div class="row">
        <div class="col-md-4 offset-md-4  ">
          <div class="text-center"> <img src="../assets/Frame 8.png" class="img-fluid he text-center"></div>

          <h6 class="text-center">Welcome, Sign in or Create an account</h6>

          <h5 class="text-center">SIGN IN</h5>
          <div>
            <div class="form-group">
              <p for="exampleInputEmail1 text-left">Email address</p>
              <input type="email" class="form-control" v-model="email" id="exampleInputEmail1">

            </div>

            <div class="form-group mt-3">
              <p for="exampleInputPassword1 text-left">Password</p>
              <input type="password" class="form-control" v-model="password" id="exampleInputPassword1"
                placeholder="Password">
            </div>


            <button type="button" @click="login" class="btn  btn-lg btn-block w-100 mt-3 button-for-login">SIGN
              IN</button>
            <!-- 
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <p class="form-check-label" for="exampleCheck1">Remember me</p>
  </div> -->
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios';
export default {



  name: 'LoginView',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  /* methods:{
    async login(){
      let result =await axios.get(
       `https://prosperc40.pythonanywhere.com/users?email=${this.email}&password=${this.password}`
      )
      console.log(result)
    }
  } */
}
</script>

<style>
.head {
  background-color: #24A6A6;
  ;
}

.ij {
  width: 171px;
  height: 18.66px
}

.fe {
  height: 100%;
  margin: 0;
}


.co {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.he {
  width: 244.83px;
  height: 26.71px;
}

.button-for-login {
  background-color: #102A38 !important;
  color: white !important;
  border-radius: 900px !important;
}</style>