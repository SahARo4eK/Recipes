<template>
    <div class="content">
        <div class="content__sort">
            <ContentItem/>
            <ContentItem/>
        </div>
        <div class="content__items">
            <ContentItem/>
            <ContentItem/>
            <ContentItem/>
        </div>
    </div>
</template>

<script>
    import ContentItem from "./ContentItem.vue";
            
    export default {
        components: {
            ContentItem 
        },
    }
</script>

<style scoped> 
    .content {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        background-color: #F5FFDF;
        height: 100%;
        min-height: 150px;
        min-width: 200px;
    }
    .content__sort {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        min-height: 200px;
        min-width: 1024px;
        max-width: 1024px;
    }
    .content__items {
            
    }
</style>