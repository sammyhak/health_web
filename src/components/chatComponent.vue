<template>
  <section class="chatSection">
    <div class="chatContainer bg-cover" v-if="isChatVisible">
      <div class="chatHeader">
        <div class="chatHeaderText">Chat with us</div>
      </div>
      <div class="chatContent" v-if="this.chatStatus === 'approved'">
        <div class="message-date">
          <span>Connected with {{ backofficeAdmin }}</span>
        </div>
        <div class="chat-inner">
          <div
            v-for="message in messages"
            :key="message.id"
            :class="`message-${message.content_type === 15 ? 'right' : 'left'}`"
          >
            <div class="userImage">
              <!-- <img src="" alt=""> -->
            </div>
            <div class="message-container">
              <div class="message" style="background-color: #fff; opacity: 1">
                {{ message.text }}
              </div>
              <div class="message-time">
                {{ message.sender.name }}
                {{ formatTimestamp(message.timestamp) }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="request-pending" v-if="this.chatStatus === 'pending'">
        Request Pending...
      </div>
      <form class="sendMessage">
        <div
          class="sendMessageContainer"
          v-if="this.chatStatus === 'null' || this.chatStatus === 'rejected'"
        >
          <div class="message-head">
            <input
              type="text"
              name="name"
              id="name"
              v-model="formdata.name"
              placeholder="Name"
            />
          </div>
          <div class="message-head">
            <input
              type="text"
              name="email"
              id="email"
              v-model="formdata.email"
              placeholder="email@example.com"
            />
          </div>
          <div class="textarea-container">
            <textarea
              name=""
              id=""
              cols="30"
              rows="5"
              v-model="formdata2.message"
              placeholder="Write your message..."
            >
            </textarea>
            <button class="sendMessageBtn" @click.prevent="sendRequest">
              <img src="../assets/send.svg" alt="sendIcon" />
            </button>
          </div>
        </div>
        <form>
          <div
            class="sendMessageContainer"
            v-if="this.chatStatus === 'approved'"
          >
            <div class="textarea-container">
              <textarea
                cols="30"
                rows="5"
                v-model="formdata3.text"
                placeholder="Write your message..."
              >
              </textarea>
              <button class="sendMessageBtn" @click.prevent="sendText">
                <img src="../assets/send.svg" alt="sendIcon" />
              </button>
            </div>
          </div>
        </form>
      </form>
    </div>
    <img
      :class="{ reposition: !isChatVisible }"
      @click="toggleChatVisibility"
      src="../assets/chatIcon.svg"
      alt="chat-icon"
    />
  </section>
</template>

<style>
.bg-cover {
  background-image: url("../../src/assets/H Horizon-new.png") !important;
  background-repeat: no-repeat !important;
  background-size: 70% !important;
  background-position: center !important;
}
</style>

<script>
import axios from "axios";
import "../styles/components/chatComponent.scss";
export default {
  name: "ChatComponent",
  data() {
    return {
      isChatVisible: false, // Initial visibility state
      isMoreHeaderVisible: false,
      chatStatus: sessionStorage.getItem("requestStatus"),
      formdata: {
        name: "",
        email: "",
      },
      formdata2: {
        customer: "",
        message: "",
      },
      pollingStarted: false,
      messages: [],
      backofficeAdmin: "",
      formdata3: {
        text: "",
        content_type: 15,
        object_id: "",
        session: "",
      },
    };
  },
  methods: {
    formatTimestamp(timestampString) {
      const date = new Date(timestampString);
      return date.toLocaleString(); // Basic formatting
    },
    handleBodyClick(event) {
      const body = document.body;
      // Check if the clicked element is not within the chat component
      if (!this.$el.contains(event.target)) {
        body.style.overflow = "";
        this.isChatVisible = false; // Close the chat component
      }
    },
    toggleChatVisibility() {
      // Toggle the visibility state
      this.isChatVisible = !this.isChatVisible;

      if (this.isChatVisible) {
        // If chat is visible, add event listener to body to handle clicks
        document.body.addEventListener("click", this.handleBodyClick);
      } else {
        // If chat is not visible, remove event listener from body
        document.body.removeEventListener("click", this.handleBodyClick);
      }
      const body = document.body;

      // Check if scrolling is currently enabled
      if (body.style.overflow === "hidden") {
        // If scrolling is disabled, enable it
        body.style.overflow = "";
      } else {
        // If scrolling is enabled, disable it
        body.style.overflow = "hidden";
      }
    },
    toggleMoreHeaderVisibility() {
      // Toggle the visibility state
      this.isMoreHeaderVisible = !this.isMoreHeaderVisible;
    },
    async sendRequest() {
      const BASE_URL = "https://prosperc40.pythonanywhere.com/customers";
      axios
        .post(BASE_URL, this.formdata)
        .then((response) => {
          sessionStorage.setItem("customerId", response.data.id);
          this.formdata2.customer = response.data.id;
          axios
            .post(
              "https://prosperc40.pythonanywhere.com/chat-requests",
              this.formdata2
            )
            .then((response) => {
              this.formdata.name = "";
              this.formdata.email = "";
              this.formdata2.customer = "";
              this.formdata2.message = "";
              sessionStorage.setItem("requestStatus", "pending");
              sessionStorage.setItem("requestId", response.data.id);
              this.chatStatus = sessionStorage.getItem("requestStatus");
              this.startRequestStatusPolling();
            })
            .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error));
    },
    async checkForRequestStatus() {
      const id = sessionStorage.getItem("requestId");
      const url = `https://prosperc40.pythonanywhere.com/chat/status/${id}/`;

      try {
        const response = await axios.get(url);
        if (response.data.status === "a") {
          sessionStorage.setItem("requestStatus", "approved");
          sessionStorage.setItem("chatSessionId", response.data.session);
          this.chatStatus = sessionStorage.getItem("requestStatus");
          this.fetchMessages();
        } else if (response.data.status === "p") {
          sessionStorage.setItem("requestStatus", "pending");
          this.chatStatus = sessionStorage.getItem("requestStatus");
        } else if (response.data.status === "r") {
          sessionStorage.setItem("requestStatus", "rejected");
          this.chatStatus = sessionStorage.getItem("requestStatus");
        }
      } catch (error) {
        console.log(error);
        sessionStorage.setItem("requestStatus", null);
        this.chatStatus = sessionStorage.getItem("requestStatus");
      }
    },
    startRequestStatusPolling() {
      const pollingInterval = 5000; // 5 seconds (adjust as needed)

      this.pollingIntervalId = setInterval(() => {
        this.checkForRequestStatus();
      }, pollingInterval);
    },
    stopRequestStatusPolling() {
      clearInterval(this.pollingIntervalId);
    },
    async fetchMessages() {
      let chat_session_id = sessionStorage.getItem("chatSessionId");
      try {
        const response = await axios.get(
          `https://prosperc40.pythonanywhere.com/chat-sessions/${chat_session_id}`
        );
        let adminid = response.data.backoffice_user;
        const response2 = await axios.get(
          `https://prosperc40.pythonanywhere.com/users/${adminid}`
        );
        this.backofficeAdmin = response2.data.name;
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
      try {
        const response = await axios.get(
          `https://prosperc40.pythonanywhere.com/chat-messages?session=${chat_session_id}`
        );
        this.messages = response.data;
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    },
    async sendText() {
      this.formdata3.object_id = sessionStorage.getItem("customerId");
      this.formdata3.session = sessionStorage.getItem("chatSessionId");

      axios
        .post(
          "https://prosperc40.pythonanywhere.com/chat-messages",
          this.formdata3
        )
        .then((response) => {
          console.log(response);
          this.formdata3.text = "";
          this.fetchMessages();
        })
        .catch((error) => console.log(error));
    },
  },
  mounted() {
    this.checkForRequestStatus();
    if (
      sessionStorage.getItem("requestStatus") === "pending" ||
      sessionStorage.getItem("requestStatus") === "approved"
    ) {
      if (!this.pollingStarted) {
        // Check if polling has already begun
        this.startRequestStatusPolling();
        this.pollingStarted = true; // Set flag to prevent restarting
      }
    }
    if (sessionStorage.getItem("requestStatus") === "approved") {
      this.fetchMessages();
    }
  },
  beforeDestroy() {
    this.stopRequestStatusPolling();
  },
};
</script>
