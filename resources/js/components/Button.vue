<template>
    <div class="button">
        <router-link :to="test">
            <button class="button__link btn btn-secondary align-middle"
                    @click="goToTest()">
                Go to "Test" page
            </button>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'Button-test',
        data() {
            return {
                testLink: 'test'
            };
        },
        computed: {
            goToTest() {
                window.location.href = "test";
            }
        }
    }
</script>
<style scoped>
.button__link {
    margin-top: 100px;
    margin-left: 40px;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    background-color: white;
    color: black;
    border: 2px solid #4CAF50; /* Green */
    transition-duration: 0.4s;
}

.button__link:hover {
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    background-color: #4CAF50; /* Green */
    color: white;
}
</style>