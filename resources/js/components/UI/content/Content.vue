<template>
    <div class="content">
        <div class="content__sort">
            <div class="sort__container">
                <ContentItem className="sort__item"
                             :type="'tags'"
                             @chooseTag="onChooseTag"/>
                <ContentItem className="sort__item"
                             :activeTags="activeTags"/>
            </div>
        </div>
        <div class="content__items">
            <div class="items__container">
                <ContentItem v-for="recipe in recipes" 
                             :key="recipe.title"  
                             className="items__recipe" 
                             :type="'recipe'"
                             :recipe="recipe"/>
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
        data() {
          return {
              searchText: "",
              recipes: [
                  {title: "Плов", ingridients: "Рис, мясо, морковка", tags: ["tag_122", "tag_2"]},
                  {title: "Окрошка", tags:["tag_122"]},
                  {title: "Оливье", tags:["tag_2"]},
                  {title: "Просто вкусное блюдо"}
              ],
              activeTags: []
          }  
        },
        methods: {
            onChooseTag (tag) {
                const tags = this.activeTags;
                if(!tags.includes(tag))
                    this.activeTags.push(tag);
            },
        },
        computed: {
            
        }
         
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