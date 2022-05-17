<template>
    <div :class="className">
        <p v-if="recipe">{{recipe.title}}</p>
    </div>
</template>

<script>
    export default {
        props: {
            className: String,
            recipe: Object
        },
        data() {
            return {
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
</style>