<template>
    <div class="index-forum">
                    <h3>论坛</h3>
        <router-link to="/forum_page"><span class="to-forum">更多</span></router-link>
        <el-row type="flex" class="row-bg" justify="space-around">
            <el-col :span="7">
                <div class="grid-content">
                    <p class="title">教程</p>

                    <ul class="ul-list"  >
                        <li v-for="(item,index) in leftItems" :key="index" class="li-item">
                            <div class="item">
                                <Item
                                        :read-number="item.readNumber"
                                        :author-name="item.authorName" :to-path="item.toPath" :item-title="item.itemTitle"
                                        :item-img-src="item.itemImgSrc" :author-path="item.authorPath"
                                        :item-info="item.itemInfo"
                                ></Item>
                            </div>
                        </li>
                    </ul>

                </div>
            </el-col>

            <el-col :span="7">
                <div class="grid-content ">
                    <p class="title">讨论</p>

                    <ul class="ul-list"  >
                        <li v-for="(item,index) in centerItems" :key="index" class="li-item">
                            <div class="item">
                                <Item
                                        :read-number="item.readNumber"
                                        :author-name="item.authorName" :to-path="item.toPath" :item-title="item.itemTitle"
                                        :item-img-src="item.itemImgSrc" :author-path="item.authorPath"
                                        :item-info="item.itemInfo"
                                ></Item>
                            </div>
                        </li>
                    </ul>

                </div>
            </el-col>

            <el-col :span="7">
                <div class="grid-content ">
                    <p class="title">求助</p>
                    <ul class="ul-list"  >
                        <li v-for="(item,index) in rightItems" :key="index" class="li-item">
                            <div class="item">
                                <Item
                                        :read-number="item.readNumber"
                                        :author-name="item.authorName" :to-path="item.toPath" :item-title="item.itemTitle"
                                        :item-img-src="item.itemImgSrc" :author-path="item.authorPath"
                                        :item-info="item.itemInfo"
                                ></Item>
                            </div>
                        </li>
                    </ul>

                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import Item from "./common/Item";

    export default {
        name: "IndexForum",
        components: {
            Item
        },
        data() {
            return {
                leftItems:[{
                    itemTitle:"test ",
                    itemInfo:"test",
                    authorName:"test",
                    itemImgSrc:require("@/assets/img/monico/吃惊.jpg"),
                    toPath:"/test",
                    authorPath:"/test11",
                    readNumber:"100",
                },
                    {
                        itemTitle:"test",
                        itemInfo:"test",
                        authorName:"test",
                        itemImgSrc:require("@/assets/img/monico/吃惊.jpg"),
                        toPath:"/test",
                        authorPath:"/test11",
                        readNumber:"100",
                    },
                    {
                        itemTitle:"test",
                        itemInfo:"test",
                        authorName:"test",
                        itemImgSrc:require("@/assets/img/monico/吃惊.jpg"),
                        toPath:"/test",
                        authorPath:"/test11",
                        readNumber:"100",
                    },
                ],
                centerItems:[{
                    itemTitle:"test ",
                    itemInfo:"test",
                    authorName:"test",
                    itemImgSrc:require("@/assets/img/monico/吃惊.jpg"),
                    toPath:"/test",
                    authorPath:"/test11",
                    readNumber:"100",
                },
                    {
                        itemTitle:"test",
                        itemInfo:"test",
                        authorName:"test",
                        itemImgSrc:require("@/assets/img/monico/吃惊.jpg"),
                        toPath:"/test",
                        authorPath:"/test11",
                        readNumber:"100",
                    },
                    {
                        itemTitle:"test",
                        itemInfo:"test",
                        authorName:"test",
                        itemImgSrc:require("@/assets/img/monico/吃惊.jpg"),
                        toPath:"/test",
                        authorPath:"/test11",
                        readNumber:"100",
                    },
                ],
                rightItems:[{
                    itemTitle:"test ",
                    itemInfo:"test",
                    authorName:"test",
                    itemImgSrc:require("@/assets/img/monico/吃惊.jpg"),
                    toPath:"/test",
                    authorPath:"/test11",
                    readNumber:"100",
                },
                    {
                        itemTitle:"test",
                        itemInfo:"test",
                        authorName:"test",
                        itemImgSrc:require("@/assets/img/monico/吃惊.jpg"),
                        toPath:"/test",
                        authorPath:"/test11",
                        readNumber:"100",
                    },
                    {
                        itemTitle:"test",
                        itemInfo:"test",
                        authorName:"test",
                        itemImgSrc:require("@/assets/img/monico/吃惊.jpg"),
                        toPath:"/test",
                        authorPath:"/test11",
                        readNumber:"100",
                    },
                ],
            }
        },

    }
</script>

<style scoped lang="less">
    .index-forum {

        margin: 0 10%;
        width: 80%;
        position: relative;
        border-radius: 10px;
        overflow: hidden;
        background: rgba(45, 51, 69, 0.73);
        box-shadow: 1px 1px 10px rgba(0,0,0,.8),
            -1px -1px 3px rgba(255, 255, 255,1);


        h3 {
            margin: 25px 0 15px 0;
            text-align: center;
            font-size: 25px;
            font-family: PT Serif,Serif;
        }

        .to-forum {
            color: mediumpurple;
            position: absolute;
            right: 4%;
            top: 30px;

            &:hover {
                opacity: 0.5;
            }
        }
    }


    .grid-content {
        height: 400px;

        color: whitesmoke;
        box-shadow: 1px 1px 12px rgba(0,0,0,.5);
        border-radius: 10px;
        overflow-y: scroll;
        /*隐藏滚动条*/
        &::-webkit-scrollbar{
            width: 0 !important
        }


    }

    .row-bg {
        margin: 10px 0;
        padding: 10px 0;

    }
    .title {
        margin: 10px 0;
        text-align: center;
        font-size: 20px;
    }

    .item{
        margin:24px 10px;
        width: 300px;

    }

    .item-content{
        background: rgba(153, 169, 191, 0.87);
        transition: all .2s;
        &:hover {
            box-shadow: 1px 1px 14px rgba(0, 0, 0, .8),
                -1px -1px 3px rgba(255, 255, 255);
            transform: scale(1.01);
        }
    }

</style>

