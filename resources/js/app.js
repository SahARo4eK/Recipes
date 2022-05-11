/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

 Vue.component('button-test', require('./components/UI/Button.vue').default);
 Vue.component('navbar-vue', require('./components/UI/navbar/Navbar.vue').default);
 Vue.component('content-vue', require('./components/UI/content/Content.vue').default);
 Vue.component('footer-vue', require('./components/UI/footer/Footer.vue').default);
 Vue.component('navbar-search', require('./components/UI/navbar/NavbarSearch.vue').default);
 Vue.component('navbar-link-button', require('./components/UI/navbar/NavbarLinkButton.vue').default);
 //Vue.component('navbar-new-recipe', require('./components/UI/NavbarNewRecipe.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});
