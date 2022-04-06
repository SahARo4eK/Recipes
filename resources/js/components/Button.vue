<template>
    <div class="button">
        <router-link :to="test">
            <button class="button__form btn btn-secondary align-middle"
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
    .button__form {
        margin-top: 35%;
    }
</style>