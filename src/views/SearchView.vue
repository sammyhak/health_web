<template>
    <div>
        <searchResults></searchResults>
    </div>
</template>

<script>
    import searchResults from '@/components/searchResults.vue'
    export default {
    name:'searchView',
        components:{
            searchResults,
        }
    }
</script>