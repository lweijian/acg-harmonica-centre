<template>
    <div class="forum">
        <el-container>
            <el-header >
                <Header/>
            </el-header>
            <el-container>
                <!--                    aside-->
                <el-aside width="200px">
                    <el-row class="tac">
                        <el-col :span="12">
                            <el-menu

                                    class="el-menu"
                                    text-color="#fff"
                                    active-text-color="#ffd04b">
                                <el-submenu index="1">
                                    <template slot="title">
                                        <i class="el-icon-menu"></i>
                                        <span>分类</span>
                                    </template>
                                    <el-menu-item-group>

                                        <el-menu-item index="1-1">
                                            <i class="el-icon-help"></i>
                                            <span slot="title">教程</span>
                                        </el-menu-item>
                                        <el-menu-item index="1-2">
                                            <i class="el-icon-tickets"></i>
                                            <span slot="title">讨论</span>
                                        </el-menu-item>
                                        <el-menu-item index="1-3">
                                            <i class="el-icon-bell"></i>
                                            <span slot="title">求助</span>
                                        </el-menu-item>
                                    </el-menu-item-group>

                                </el-submenu>

                                <el-menu-item index="2">
                                    <i class="el-icon-edit"></i>
                                    <span slot="title">发帖</span>
                                </el-menu-item>


                            </el-menu>
                        </el-col>
                    </el-row>

                </el-aside>
<!--                main-->
                <el-main>
                    <ul class="ul-list">
                        <li v-for="(item,index) in items" :key="index" class="li-item">
                            <div class="item">
                                <Item
                                        :read-number="item.readNumber"
                                        :author-name="item.authorName" :to-path="item.toPath"
                                        :item-title="item.itemTitle"
                                        :item-img-src="item.itemImgSrc" :author-path="item.authorPath"
                                        :item-info="item.itemInfo"
                                ></Item>
                            </div>
                        </li>
                    </ul>
                    <Pagination :current-function="handleCurrentChange" :page-size="items.length" :total="100"/>
                </el-main>
            </el-container>
            <el-footer>
                <Footer/>
            </el-footer>
        </el-container>
    </div>
</template>

<script>
    import Header from "../components/common/Header";
    import Footer from "../components/common/Footer";
    import Item from "../components/common/Item";
    import Pagination from "../components/common/Pagination";

    export default {
        name: "Forum",
        components: {
            Header,
            Footer,
            Item,
            Pagination,
        },
        data() {
            return {
                items: [
                    {
                        itemTitle: "如何开发一个可爱的CLI（二）",
                        itemInfo: "前言 本文将结合一个标准的git工作流，以及具体的例子，来引出何种条件，会触发 git revert 的失败。通过本文，你讲学到： 巩固 git 的使用和理解； 出现问题能够放心大胆并以正确的姿势来 revert。 准备 为了更好地描述本文，我们将从头开始进行一些准备工作。 首先，创建一个repo：",
                        authorName: "test",
                        itemImgSrc: require("@/assets/img/monico/吃惊.jpg"),
                        toPath: "/test",
                        authorPath: "/test11",
                        readNumber: "100",
                    },
                    {
                        itemTitle: "如何开发一个可爱的CLI（二）",
                        itemInfo: "前言 本文将结合一个标准的git工作流，以及具体的例子，来引出何种条件，会触发 git revert 的失败。通过本文，你讲学到： 巩固 git 的使用和理解； 出现问题能够放心大胆并以正确的姿势来 revert。 准备 为了更好地描述本文，我们将从头开始进行一些准备工作。 首先，创建一个repo：",
                        authorName: "test",
                        itemImgSrc: require("@/assets/img/monico/吃惊.jpg"),
                        toPath: "/test",
                        authorPath: "/test11",
                        readNumber: "100",
                    },

                    {
                        itemTitle: "如何开发一个可爱的CLI（二）",
                        itemInfo: "前言 本文将结合一个标准的git工作流，以及具体的例子，来引出何种条件，会触发 git revert 的失败。通过本文，你讲学到： 巩固 git 的使用和理解； 出现问题能够放心大胆并以正确的姿势来 revert。 准备 为了更好地描述本文，我们将从头开始进行一些准备工作。 首先，创建一个repo：",
                        authorName: "test",
                        itemImgSrc: require("@/assets/img/monico/吃惊.jpg"),
                        toPath: "/test",
                        authorPath: "/test11",
                        readNumber: "100",
                    },

                    {
                        itemTitle: "如何开发一个可爱的CLI（二）",
                        itemInfo: "前言 本文将结合一个标准的git工作流，以及具体的例子，来引出何种条件，会触发 git revert 的失败。通过本文，你讲学到： 巩固 git 的使用和理解； 出现问题能够放心大胆并以正确的姿势来 revert。 准备 为了更好地描述本文，我们将从头开始进行一些准备工作。 首先，创建一个repo：",
                        authorName: "test",
                        itemImgSrc: require("@/assets/img/monico/吃惊.jpg"),
                        toPath: "/test",
                        authorPath: "/test11",
                        readNumber: "100",
                    },
                    {
                        itemTitle: "如何开发一个可爱的CLI（二）",
                        itemInfo: "前言 本文将结合一个标准的git工作流，以及具体的例子，来引出何种条件，会触发 git revert 的失败。通过本文，你讲学到： 巩固 git 的使用和理解； 出现问题能够放心大胆并以正确的姿势来 revert。 准备 为了更好地描述本文，我们将从头开始进行一些准备工作。 首先，创建一个repo：",
                        authorName: "test",
                        itemImgSrc: require("@/assets/img/monico/吃惊.jpg"),
                        toPath: "/test",
                        authorPath: "/test11",
                        readNumber: "100",
                    },


                ],

            }
        },
        methods: {

            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }
        },
    }
</script>

<style scoped lang="less">

    .el-header, .el-footer {
        padding: 0;

    }

    .el-aside {
        color: #333;
        text-align: center;
        height: 800px;
        overflow: hidden;
        margin-top: 30px;

        .el-menu {
            width: 200px;
            height: 800px;
            background-color: #252830;

            box-shadow: 1px 1px 10px black;
        }
    }

    .el-menu-item:focus, .el-menu-item:hover {
        outline: 0;
        background: rgba(45, 51, 69, 0.73);
    }

    /deep/ .el-submenu__title:hover {
        outline: 0;
        background: rgba(45, 51, 69, 0.73);
    }

    /deep/ .el-menu .el-menu--inline {
        background-color: #252830;
    }

    /*.el-main {*/
    /*    background-color: #E9EEF3;*/
    /*    color: #333;*/
    /*    text-align: center;*/
    /*    line-height: 160px;*/
    /*}*/
    .ul-list {
        margin-bottom: 30px;
    }

    /deep/ .item {
        margin: 0 300px 0 80px;
        height: 160px;
        border-bottom: 1px rgba(255, 255, 255, .3) solid;

        .title {

            font-size: 28px;
            font-weight: 500;
        }

        .info {
            font-size: 14px;
            line-height: 15px;
        }
    }

    /deep/ footer .copyright {
        margin: 0;
    }

</style>
