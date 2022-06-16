<template>
    <div class="item__tag">
        <div class="tag__text"
             @click="chooseTag">
            {{tagName}}
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            tagName: String
        },
        data() {
            return {
            }
        },
        methods: {
            chooseTag() {
                this.$emit('chooseTag', this.tagName);
            }
        }
    }
</script>

<style scoped> 
    .item__tag {
        display: flex;
        background-color: #BCF2B3;
        height: 40px;
        margin-top: auto;
        margin-right: 0px;
        flex-direction: row;
        align-items: center;
        text-align: center;
    }
    .item__tag:hover {
        cursor: pointer;
    }
    .tag__text {
        padding-left: 10px;
        padding-right: 10px;
    }
</style>