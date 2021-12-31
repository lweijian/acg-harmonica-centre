<template>
    <div class="canNotFind">
        <el-button class="toIndex" @click="$router.push('/')">返回主页</el-button>
        <img src="../assets/img/404.jpg"/></div>
</template>

<script>
    export default {
        name: "404"
    }
</script>

<style scoped>
    .canNotFind {
        position: relative;
        height: 100%;
        width: 100%;
    }

    img {

        margin: 24.5vh 24.5vw;
        height: 50vh;
        width: 50vw;
        box-shadow: -1px -1px 30px rgba(255, 255, 255, .6);
        border-radius: 10px;
    }

    .toIndex {
        position: absolute;
        left: 45vw;
        top: 15vh;
    }
</style>
