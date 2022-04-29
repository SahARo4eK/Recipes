<template>
    <div class="navbar">
        <div class="navbar__logo"
             @click="goHome()">
            <h1>Recipes!</h1>
        </div>
        <div class="navbar__controls">
            <navbar-search/>
            <navbar-link-button name="Избранное" link="favorite"/>
            <navbar-link-button name="Новый рецепт" link="new-recipe"/>
        </div>
    </div>
</template>

import NavbarSearch from "./components/UI/NavbarSearch.vue";

<script>
    export default {
//        components: {
//            NavbarSearch
//        },
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

<style> 
    .navbar {
        flex: 1;
        display: inline-flex;
        border-radius: 0px;
        top: 0;
        left: 0;
        right: 0;
/*        position: fixed;*/
        background-color: #BCF2B3;
/*        border: 1px green;*/
        width: auto;
        max-height: 100px;
    }
    .navbar__logo {
        display: inline-flex;
        margin: 1.5em;
        max-width: 10em;
    }
    .navbar__controls {
        display: inline-flex;
        margin-left: auto
    }
</style>