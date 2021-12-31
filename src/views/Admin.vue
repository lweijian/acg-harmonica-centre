<template>
    <div class="admin">
        <el-container>
            <el-header>
                <Header/>
            </el-header>
            <el-container>
                <!--                    aside-->
                <el-aside width="200px">
                    <el-row class="tac">
                        <el-col :span="12">
                            <el-menu
                                    default-active="1.1"
                                    class="el-menu"
                                    text-color="#fff"
                                    active-text-color="#ffd04b">
                                <el-submenu index="1">
                                    <template slot="title">
                                        <i class="el-icon-menu"></i>
                                        <span>数据管理</span>
                                    </template>
                                    <el-menu-item-group>

                                        <!--                                        <el-menu-item index="1-1">-->
                                        <!--                                            <i class="el-icon-help"></i>-->
                                        <!--                                            <span slot="title">角色管理</span>-->
                                        <!--                                        </el-menu-item>-->
                                        <router-link to="/admin/user_management">
                                            <el-menu-item index="1.1">
                                                <i class="el-icon-tickets"></i>
                                                <span slot="title">账号管理</span>
                                            </el-menu-item>
                                        </router-link>
                                        <router-link to="/admin/music_management">
                                            <el-menu-item index="1.2">
                                                <i class="el-icon-bell"></i>
                                                <span slot="title">曲谱管理</span>
                                            </el-menu-item>
                                        </router-link>

                                        <router-link to="/admin/video_management">
                                            <el-menu-item index="1.3">
                                                <i class="el-icon-video-camera"></i>
                                                <span slot="title">视频管理</span>
                                            </el-menu-item>
                                        </router-link>
                                    </el-menu-item-group>

                                </el-submenu>

                                <el-menu-item index="2">
                                    <i class="el-icon-edit"></i>
                                    <span slot="title">管理员信息发布</span>
                                </el-menu-item>


                            </el-menu>
                        </el-col>
                    </el-row>

                </el-aside>
                <!--                main-->
                <el-main>
                    <h2 class="main-title">欢迎来到后台管理系统</h2>
                    <router-view/>
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


    export default {
        name: "Admin",
        components: {
            Header,
            Footer,

        },
        data() {
            return {}
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
        margin-bottom: 20px;

    }

    .el-aside {
        color: #333;
        text-align: center;
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

    .el-main {
        background-color: #252830;

    }


    /deep/ footer .copyright {
        margin: 0;
    }

    .main-title {
    margin: 10px;
        font-size: 28px;
        font-family: PT Serif,Serif;
    }
</style>
