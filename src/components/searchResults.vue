<template>
    <center>
        <secondBar></secondBar>
        <div v-if="isLoading">Loading Search Results...</div>
        <div v-else-if="searchResults && searchResults.length > 0">
            <div>
                <div style="width: 499px; height: 34px; justify-content: flex-start; margin-left: -50% !important; align-items: center; gap: 10px; display: inline-flex">
                <div style="color: rgba(32, 32, 32, 0.60); font-size: 28px; font-family: Inter; font-weight: 400; word-wrap: break-word">Showing Results for</div>
                <div style="color: #258576; font-size: 28px; font-weight: 400; word-wrap: break-word">“{{ this.searchTerm }}”</div>
            </div><br>
            <div style="color: #202020; margin-left: -66.5% !important; font-size: 16px; font-weight: 500; word-wrap: break-word">Found {{ this.searchResults.length }} results relating to “{{ this.searchTerm }}”</div>
            </div>
            <br><br>
            <div class="container row">
                <div  v-for="result in searchResults" :key="result.id" class="col-6 col-md-3">
                    <router-link :to="`/add/${result.id}`" class="rou" style="text-decoration: none; color: #000;">
                        <div class="image-container">
                            <img :src="result.image" class="img-fluid im-pro" alt="broken">
                        </div>

                        <p class="mt-2">{{result.drug_name}}</p>
                        <p class="mt-2">{{result.category}}</p>
                        <p class="av in"><span><img src="../assets/Ellipse 43.png" class="im1"></span>Available for delivery</p>
                        <p class="av "><span><img src="../assets/Ellipse 43.png" class=" im1"></span>In stock</p>
                    </router-link>
                </div>
            </div>
        </div>
        <div v-else>No Results Found.</div>
        <br><br><br><br><br>
    </center>
</template>

<script>
    import axios from 'axios'
    import secondBar from './secondBar.vue'

    export default {
        name: 'searchResults',
        components: {
            secondBar,
        },
        data() {
            return {
                searchResults: null,
                isLoading: false,
                searchTerm: this.$route.query.q,
                BASE_URL: 'https://prosperc40.pythonanywhere.com/products?items=',
            }
        },
        mounted() {
            this.performSearch();
        },
        methods: {
            async performSearch() {
                this.isLoading = true;
                const response = await axios.get(this.BASE_URL + this.searchTerm);
                this.searchResults = response.data;
                this.isLoading = false;
            }
        }
    }

</script>
