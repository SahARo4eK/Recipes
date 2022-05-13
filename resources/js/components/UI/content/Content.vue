<template>
    <div class="content">
        <div class="content__sort">
            <ContentItem className="sort__item"/>
            <ContentItem className="sort__item" />
        </div>
        <div class="content__items">
            <ContentItem className="items__recipe"/>
            <ContentItem className="items__recipe"/>
            <ContentItem className="items__recipe"/>
            <ContentItem className="items__recipe"/>
            <ContentItem className="items__recipe"/>
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
        flex: 1 0 auto;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        background-color: #F5FFDF;
        height: auto;
        width: 100%;
        margin: 0 auto;
        min-width: 200px;
        
    }
    .content__sort {
        margin-top: 25px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        min-height: 150px;
    }
    .content__items {
        display: flex;
        margin-top: 25px;
        flex-direction: column;
        justify-content: flex-start;
        justify-content: center;
    }
</style>