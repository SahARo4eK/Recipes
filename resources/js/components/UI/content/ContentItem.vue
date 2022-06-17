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
                 <div class="item__tag"
                    v-for="tag in allTags">
                    <ContentItemTag :tagName="tag"
                                 :isClosing="false"
                                 @chooseTag="onChooseTag"
                                 v-if="true === match(tag)"/>
                </div>
            </div>
        </div>
        
        
        <div v-else class="item__active-tags">
            <div class="sort__active-tag"
                 v-for="tag in activeTags">
                <ContentItemTag :tagName="tag"
                                :isClosing="true"
                                @closeTag="onClosingTag"/>
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
            recipe: Object,
            activeTags: Array
        },
        data() {
            return {
                allTags: ['tag_122', 'tag_2', 'быстро', 'риsс', 'hottting', 'namesSanay','hotting','hoting','hting'],
                inputText: ''
            }
        },
        methods: {
            onTexting (text) {
                this.inputText = text;
            },
            onChooseTag (tag) {
                this.$emit('chooseTag', tag);
            },
            onClosingTag (tag) {
                this.$emit('closeTag', tag);
            },
            match (tag) {
                const inputText = this.inputText;
                const allTags = this.allTags;
                if(inputText === '') return true;
                if(tag.slice(0, inputText.length).includes(inputText)) return true;
                return false;
                this.$emit('tagSorting', this.displayTags);
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
    .sort__active-tag {
        margin-left: 0px; 
    }
    .item__active-tags {
        display: flex;
        flex-direction: row;
        margin-right: auto;
        width: 97%;
        overflow-x: scroll;
    }
    .item__search {
        width: 97%;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .item__tags {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        margin: auto;
        margin-left: 0px;
        width: 60%;
        overflow: hidden;
        overflow-x: scroll;
        border-radius: 20px;
    }
    .item__tag {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        margin-left: 0px;
    }
    .search__input {
        position: relative;
/*        display: flex; */
        /*justify-content: flex-start;*/
        /*flex-direction: row;*/
        /*align-items: center;*/
        /*text-align: center;*/
        /*margin-left: 0;*/
        margin: auto;
        margin-left: 20px;
    }
    
</style>