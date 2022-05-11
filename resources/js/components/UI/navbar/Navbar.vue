<template>
    <div class="navbar">
        <div class="navbar__logo"
             @click="goHome()">
            <h1>Recipes!</h1>
        </div>
        <div class="navbar__controls">
            <NavbarSearch/>
            <NavbarLinkButton name="Избранное" link="favorite"/>
            <NavbarLinkButton name="Новый рецепт" link="new-recipe"/>
        </div>
    </div>
</template>



<script>
    import NavbarSearch from "./NavbarSearch.vue";
    import NavbarLinkButton from "./NavbarLinkButton.vue";
    export default {
        components: {
            NavbarSearch, NavbarLinkButton
        },
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
        background-color: #BCF2B3;
        width: auto;
        max-height: 100px;
    }
    .navbar__logo {
        display: inline-flex;
        margin: 1.5em;
        max-width: 10em;
        cursor: pointer;
    }
    .navbar__controls {
        display: inline-flex;
        margin-left: auto
    }
</style>