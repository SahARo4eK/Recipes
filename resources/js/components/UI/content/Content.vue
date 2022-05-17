<template>
    <div class="content">
        <div class="content__sort">
            <div class="sort__container">
                <ContentItem className="sort__item"/>
                <ContentItem className="sort__item" />
            </div>
        </div>
        <div class="content__items">
            <div class="items__container">
                <ContentItem className="items__recipe"/>
                <ContentItem className="items__recipe"/>
                <ContentItem className="items__recipe"/>
                <ContentItem className="items__recipe"/>
                <ContentItem className="items__recipe"/>
            </div>
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
    * {
        display: flex;
        justify-content: center;
    }
    .content {
        flex-direction: column;
        background-color: #F5FFDF;
        height: auto;
        width: 100%;
        margin: 0 auto;
        min-width: 200px;
        
    }
    .content__sort {
        flex-direction: row;
        margin-top: 25px;
        min-height: 150px;
    }
    .content__items {
        flex-direction: row;
        margin-top: 25px;
        min-height: 150px;
    }
    .sort__container, .items__container  {
        flex-direction: column;
        width: 1024px;
    } 
</style>