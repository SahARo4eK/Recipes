<template>
    <div :class="className">
        
    </div>
</template>

<script>
    export default {
        props: {
            className: String
        },
        data() {
            return {
            }
        }
    }
</script>

<style scoped> 
    * {
        background-color: #F50000;
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