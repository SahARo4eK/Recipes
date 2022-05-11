<template>
        <input type="text" placeholder="Search" class="controls__search">
</template>

<script>
    export default {
        data() {
            return{}
        },
    }
</script>

<style scoped>
    .controls__search {
        max-width: 300px;
        width: 360px;
        top: 1em;
        padding-left: 5px;
        margin-left: auto;
        margin-bottom: 30px;
        margin-top: 30px;
        margin-right: 25px;
        max-height: 34px;
        min-width: 60px;
        border: 1px solid #000000;
        box-sizing: border-box;
        background: #F4FEEC;
    }
    .text {
        width: 75%;
        position: relative;
        top: 20%;
        left: 5%;
    }
</style>