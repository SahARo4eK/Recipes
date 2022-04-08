<template>
    <div class="navbar">
        <div class="navbar__logo"
             @click="goHome()">
            <h1>Recipes!</h1>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{}
        },
        methods: {
            goHome(){
                window.location.href = "/";
            }
        }
    }
</script>

<style scoped> 
    .navbar {
        flex: 1;
        border-radius: 0px;
        top: 0;
        left: 0;
        right: 0;
/*        position: fixed;*/
        background-color: lightgreen;
/*        border: 1px green;*/
        width: auto;
        max-height: 6em;
    }
    .navbar__logo {
        margin: 1.5em;
    }
</style>