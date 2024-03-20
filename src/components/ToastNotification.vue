<template>
    <div class="toast" :class="type" v-if="isVisible">
      {{ internalMessage }}
    </div>
  </template>
  
  <script>
  export default {
    props: {
      message: {
        type: String,
        required: true
      },
      type: {
        type: String,
        default: 'success'
      }
    },
    data() {
      return {
        internalMessage: '', // Initialize
        isVisible: false
      }
    },
    mounted() {
      this.showToast();
    },
    created() {
        this.$root.$refs.toast = this;
    },
    methods: {
        showToast() {
            this.isVisible = true; // Show the Toast
            // Access the message prop
            this.internalMessage = this.message;
            setTimeout(() => {
                this.isVisible = false; // Hide after 20 secs (increased for testing)
            }, 20000); 
        }
    }
  }
  </script>
  
  <style scoped>
  .toast {
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 15px;
    background-color: #4CAF50; /* Success color */
    color: white;
    border-radius: 5px;
  }
  .toast.error {
    background-color: #f44336; /* Error color */
  }
  </style>
  