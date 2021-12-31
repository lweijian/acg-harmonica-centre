<template>
    <div class="banner" >
        <div class="bg"></div>

        <div class="block">
            <el-carousel trigger="click"  class="imgBox" height="430px">
                <el-carousel-item v-for="(item,index) in imgs" :key="index">
                    <img :src="item">
                </el-carousel-item>
            </el-carousel>
        </div>


    </div>
</template>

<script>
    export default {
        name: "Banner",
        data() {
            return {
                imgs: [require("@/assets/img/轮播图/1.jpg"),
                    require("@/assets/img/轮播图/3.jpg"),
                    require("@/assets/img/轮播图/ACG口琴小苑.jpg"),
                    require("@/assets/img/轮播图/ACG.jpg")],


            }
        },
        // methods:{
    // }
    }
</script>

<style scoped lang="less">





    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }



    // banner部分
    .banner{
        margin-top: 25px;
        position: relative;
        overflow: hidden;
        zoom: 1;
        //高斯模糊背景
        .bg{
              background: url("../assets/img/bannerBg.png");
            filter: blur(10px);
            background-size: cover;
            background-repeat:no-repeat;
            position: absolute;
            height: 430px;
            width: 100%;
            z-index: -1;
        }
        .imgBox{
            margin:0 10%;
            width:80%;
            overflow: hidden;
            img{
                height: 430px;
                width:100%;
                transition: all 1s;
                &:hover{
                    transform: scale(1.05);
                }
            }
        }
    }




</style>
