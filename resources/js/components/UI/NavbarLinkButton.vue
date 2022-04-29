<template>
    <div class="controls__button"
         @click="goTo(link)">
        <div class="text">
            <p>{{name}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            name: String,
            link: String
        },
        data() {
            return{
                name: '',
                link: 'link'
            }
        },
        methods: {
            goTo(link){
                window.location.href = "/" + link;
            }
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
    .text {
         width: 100%;
        position: relative;
        top: 25%;
        left: 0%;
    }
</style>