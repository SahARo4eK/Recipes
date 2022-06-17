<template>
    <div class="tag">
        <div class="tag__close-button"
             v-if="this.isClosing"
             @click="closeTag">
            X
        </div>
        <div class="tag__text"
             @click="chooseTag">
            {{tagName}}
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            tagName: String,
            isClosing: Boolean
        },
        data() {
            return {
            }
        },
        methods: {
            chooseTag() {
                this.$emit('chooseTag', this.tagName);
            },
            closeTag() {
                this.$emit('closeTag', this.tagName);
            }
        }
    }
</script>

<style scoped> 
    .tag {
        display: flex;
        background-color: #BCF2B3;
        height: 40px;
        margin-top: auto;
        margin-right: 0px;
        flex-direction: row;
        align-items: center;
        text-align: center;
        position: relative;
    }
    .tag:hover {
        cursor: pointer;
    }
    .tag__text {
        padding-left: 10px;
        padding-right: 10px;
    }
    .tag__close-button {
        position: absolute;
        margin: auto;
        margin-left: 85%;
        margin-top: -25px;
    }
</style>