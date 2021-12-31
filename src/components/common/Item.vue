<template>
<div class="item-content">
        <div class="left">
            <div class="img-box">
                <img :src="itemImgSrc" alt="">
            </div>
        </div>
        <div class="right">
            <router-link :to="toPath">
                <p class="title">
                    {{itemTitle}}

                </p>
            </router-link>
            <p class="info">{{itemInfo}}</p>
            <router-link :to="authorPath">
               <span class="author-name el-icon-user">
               {{authorName}}
            </span>
            </router-link>
            <span class="view">
                <i class="el-icon-view">{{readNumber}}</i>
           </span>

        </div></div>

</template>

<script>
    export default {
        name: "Item",

        props: ["itemTitle", "itemInfo", "authorName", "itemImgSrc", "toPath", "authorPath", "readNumber"]
    }
</script>

<style scoped lang="less">
    .item-content {
        display: flex;
        margin: 5px;
        width: 100%;
        height: 100%;
        border-radius: 5px;

        overflow: hidden;



        .left {
            flex: none;
            height: 150px;
            width: 150px;

        }

        .right {
            flex: auto;
            height: 150px;
            position: relative;
        }
    }

    .img-box {
        margin: 12px 0 0 10px;

        height: 120px;
        width: 120px;

        img {
            height: 120px;
            width: 120px;
            border-radius: 5px;

        }
    }

    .title {
        font-family: PT Serif,Serif;
        font-size: 22px;
        margin: 15px 15px 15px 0;
        height: 30px;
        /*超出两行显示省略号*/
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        &:hover {
            color: mediumpurple;
        }

    }

    .info {
        font-size: 13px;
        margin: 15px 15px 15px 0;
        height: 30px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
    }


    .author-name {
        position: absolute;
        bottom: 20px;
        font-size: 12px;
        display: inline-block;
        width: 80px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;


        &:hover {
            color: mediumpurple;
        }
    }

    .view {
        position: absolute;
        bottom: 20px;
        right: 30px;
        font-size: 12px;
    }
</style>
