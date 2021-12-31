<template>
    <div class="card-banner">
        <h3>monico</h3>
        <el-carousel :interval="5000" type="card"  height="220px" indicator-position="none" arrow="never">
            <el-carousel-item v-for="(item,index) in cardImgs" :key="index">
                <img :src="item"/>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
    export default {
        name: "CardBanner",
        data() {
            return {

                cardImgs:[
                    require("../assets/img/monico/伤心(1).jpg"),
                    require("../assets/img/monico/吃惊.jpg"),
                    require("../assets/img/monico/惊讶.jpg"),
                    require("../assets/img/monico/滑稽.jpg"),
                    require("../assets/img/monico/问号(1).jpg"),
                    require("../assets/img/monico/藐视.jpg"),
                    require("../assets/img/monico/问号.jpg")
                ],


            }
        },
    }
</script>

<style scoped lang="less">
    .card-banner {
        height: 300px;
        margin: 35px 10%;
        width: 80%;
        h3{
            font-family: PT Serif,Serif;
            font-size: 30px;
            text-align: center;
            margin-bottom: 20px;
        }

        img{
            height: 220px;
            width: 220px;
            border-radius: 110px;
            box-shadow: 0 0 10px white;
        }
    }

    /deep/ .el-carousel__mask {
     background: transparent;
    }
    .el-carousel__item {
        display: flex;
        justify-content: center;
    }


</style>
