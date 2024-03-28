<template>
    <div>
        <secondBar></secondBar>
        <div class="container">
            <div v-if="isLoading">Loading Search Results...</div>
            <div v-else-if="searchResults && searchResults.length > 0">
                <br><br class="d-none d-md-block">
                <div class="container row">
                    <div>
                        <span class="res">Showing Results for </span><br class="d-block d-md-none"><span class="term">“{{ this.searchTerm }}”</span>
                        <div class="nrm d-none d-md-block">Found {{ this.searchResults.length }} results relating to “{{ this.searchTerm }}”</div>
                    </div>
                    <br><br><br><br class="d-none d-md-block"><br class="d-none d-md-block"><br class="d-none d-md-block"><br class="d-none d-md-block">
                    <div  v-for="result in searchResults" :key="result.id" class="col-6 col-md-3">
                        <router-link :to="`/add/${result.id}`" class="rou" style="text-decoration: none; color: #000;">
                            <div class="image-container" style="height: auto !important;">
                                <img :src="result.image" class="img-fluid mn im-pro" alt="broken">
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
        </div>
    </div>
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
        watch: {
            '$route': 'performSearch'
        },
        created() {
            this.performSearch();
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

<style>
    span.res{
        font-size: 28px;
        font-family: inter;
        color: #202020;
        opacity: 0.6;
    }
    span.term{
        color: #258576;
        font-size: 28px;
        font-family: millik;
    }
    div.nrm{
        font-size: 16px;
        font-family: inter;
    }
    img.mn.im-pro{
        height: 295px !important;
        width: 295px !important;
    }
    @media only screen and (max-width: 576px) {
        span.res{
            font-size: 11px;
            font-family: inter;
            color: #202020;
            opacity: 0.6;
        }
        span.term{
            color: #258576;
            font-size: 18px;
            font-family: millik;
        }
        img.mn.im-pro{
            height: 156px !important;
            width: 156px !important;
        }
        p.av{
            font-size: 8px !important;
        }
    }
</style>
