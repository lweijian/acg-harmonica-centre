<template>
    <div class="loading"></div>
</template>

<script>
    export default {
        name: "Loading",

        methods: {
            //loading动画加载
            openFullScreen() {
                const loading = this.$loading({
                    lock: true,
                    text: 'Loading',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                return loading;
            }
        }
    }
</script>

<style scoped>

</style>
