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
    .sort__item {
        background-color: #F50000;
        display: flex;/* Раз */
        flex-direction: column;/*Два*/
        height: 100px;
        margin: 15px;
        max-height: 200px;
        border-radius: 42px;
    }
    .items__recipe {
        background-color: #F50000;
        height: auto; 
        display: flex;/* Раз */
        flex-direction: column;/*Два*/
        min-height: 400px;
        margin: 15px;
        max-height: 200px;
        border-radius: 42px;
    }
</style>