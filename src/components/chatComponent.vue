<template>
    <section class="chatSection">
        <div class="chatContainer" v-if="isChatVisible">
            <div class="chatHeader">
                <div class="chatHeaderText">
                    Chat with us
                </div>
            </div>
            <div class="chatContent">
                <div class="message-head">
                    Hi there, How can we help?
                </div>

                <div class="message-date">
                    <span>Connected with Ada</span>
                </div>
                <div class="chat-inner">
                    <div class="message-left">
                        <div class="userImage">
                            <!-- <img src="" alt=""> -->
                        </div>

                        <div class="message-container">
                            <div class="message">
                                Good Afternoon
                            </div>
                            <div class="message-time">
                                Ada . 3mins ago
                            </div>
                        </div>
                    </div>

                    <div class="message-right">
                        <div class="message-container">
                            <div class="message">
                                Lorem ipsum dolor sit amet consectetur. Vel feugiat enim vestibulum pellentesque lectus
                                ipsum habitant. Purus nisnf faucibus
                            </div>
                            <div class="message-time">
                                Just Now . Seen
                            </div>
                        </div>
                    </div>

                    <div class="message-left">
                        <div class="userImage">
                            <!-- <img src="" alt=""> -->
                        </div>

                        <div class="message-container">
                            <div class="message">
                                Good Afternoon
                            </div>
                            <div class="message-time">
                                Ada . 3mins ago
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sendMessage">
                <div class="message-head"><input type="text" name="email" id="email" placeholder="email@example.com">
                </div>
                <div class="textarea-container">
                    <textarea name="" id="" cols="30" rows="5" placeholder="Write your message..."></textarea>
                    <div class="sendMessageBtn">
                        <img src="../assets/send.svg" alt="sendIcon">
                    </div>
                </div>
            </div>
        </div>
        <img :class="{ 'reposition': !isChatVisible }" @click="toggleChatVisibility" src="../assets/chatIcon.svg"
            alt="chat-icon">
    </section>
</template>

<script>
import "../styles/components/chatComponent.scss";
export default {
    name: 'ChatComponent',
    data() {
        return {
            isChatVisible: false, // Initial visibility state
            isMoreHeaderVisible: false
        };
    },
    methods: {
        toggleChatVisibility() {
            // Toggle the visibility state
            this.isChatVisible = !this.isChatVisible;
        },
        toggleMoreHeaderVisibility() {
            // Toggle the visibility state
            this.isMoreHeaderVisible = !this.isMoreHeaderVisible;
        }
    }
};
</script>
