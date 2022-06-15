<template>
    <div :class="className">
        <div v-if="type === 'recipe'" class="recipe__preview">
            <p>{{recipe.title}}</p>
            <p>{{recipe.ingridients}}</p>
        </div>
        <div v-else-if="type === 'tags'" class="item__search">
            <div class="search__input">
                <ContentItemSearch @texting='onTexting'/>
            </div>
            <div class="item__tags">
                <ContentItemTag tagName="Tag_122"/>
                <ContentItemTag tagName="Tag_2"/>
            </div>
        </div>
        <div v-else class="search__input">
            <div class="sort__active-tags"
                 v-for="tag in activeTags">
                <ContentItemTag :tagName="tag"/>
            </div>
        </div>
    </div>
</template>

<script>
    import ContentItemTag from "./ContentItemTag.vue";
    import ContentItemSearch from "./ContentItemSearch.vue";
    export default {
        components: {
            ContentItemTag, ContentItemSearch
        },
        props: {
            className: String,
            type: String,
            recipe: Object
        },
        data() {
            return {
                tags: ['tag_122', 'tag_2', 'быстро', 'рис'],
                activeTags: ['tag1', 'tag2'],
                inputText: ''
            }
        },
        methods: {
            onTexting (text) {
                this.inputText = text;
            }
        }
    }
</script>

<style scoped> 
    * {
        background-color: #7fbd4f;
        margin: 15px;
        border-radius: 42px;
        max-width: 1024px;
    }
    .sort__item {
        height: 100px;
        min-height: 100px;
    }
    .items__recipe {
        height: auto; 
        min-height: 400px;
    }
    .item__search {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .item__tags {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .search__input {
        display: flex;
        flex-direction: row;
        align-items: center;
        text-align: center;
    }
    .some_class {
        
    }
</style>