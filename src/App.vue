<template>
    <div>


        <keep-alive>
            <router-view/>

        </keep-alive>

    </div>
</template>
<script>

    export default {
        name: "app",
        components:[

        ]
    }
</script>
<style lang="less">


    body {
        font-size: 20px;
        background: #252830;
        color: #ffffff;
    }


</style>
