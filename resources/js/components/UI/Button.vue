<template>
    <div class="second-button">
        {{text}}
    </div>
</template>

<script>
    export default {
        props: {
            text: String
        },
        data() {
            return {
                
            }
        },
        methods: {
        }
    }
</script>

<style scoped>
    .controls__button {
        width: 147px;
        height: 46px;
        margin-left: auto;
        margin-bottom: 30px;
        margin-top: 25px;
        margin-right: 25px;
        background: #527E36;
        border: 2px solid #25BA61;
        box-sizing: border-box;
        text-align: center;
    }
    .controls__button:hover {
        cursor: pointer;
        border: 10px;
    }
    .text {
         width: 100%;
        position: relative;
        top: 25%;
        left: 0%;
    }
</style>