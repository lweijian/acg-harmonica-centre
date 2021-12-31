<template>

    <header class="header">
        <div class="logo">
            <router-link to="/index"><img :src="logoImg"/></router-link>
        </div>
        <nav>
            <ul class="nav-ul">

                <router-link class="nav-li" tag="li" v-for="post in posts" :key="post.id" :name="post.name"
                             :to="post.href">
                    {{post.name}}
                </router-link>

            </ul>
        </nav>
        <el-input placeholder="请输入内容"
                  v-model="input"
        ></el-input>
        <el-button class="search" icon="el-icon-search" @click="search">搜索</el-button>
        <el-popover
                placement="bottom"
                width="170px"
                trigger="click">
            <span slot="reference" class="Q-info">b站UID :130961710</span>
            <img class="bilibiliUid" width="170px" height="250px" :src="bilibiliUid" alt="">
        </el-popover>
        <div class="features">

            <div class="setting">
                <el-dropdown>
                    <i class="el-dropdown-link el-icon-setting"></i>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item v-show="isAdmin()" @click.native="toAdmin">管理界面</el-dropdown-item>
                        <el-dropdown-item>换肤</el-dropdown-item>
                        <el-dropdown-item>test</el-dropdown-item>
                        <el-dropdown-item>test</el-dropdown-item>
                        <el-dropdown-item>test</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>

            </div>
            <div class="user">
                <el-popover
                        placement="bottom"
                        width="200"
                        trigger="click">
                    <i slot="reference" class="el-icon-user"></i>

                    <div class="user-info">
                        <div class="user-img">
                            <img :src="notLoggedImg" v-show="!isLogin" alt="加载不成功">
                            <img :src="headerImg" v-show="isLogin" alt="加载不成功">
                        </div>
                        <span class="el-icon-user login-info" v-show="isLogin"> {{userName}}</span>
                        <span class="el-icon-user login-info" v-show="!isLogin">未登录</span>
                        <span class="el-icon-edit signature" v-show="isLogin">
                 个性签名：{{signature}}
             </span>

                        <el-button type="primary" v-show="!isLogin" icon="el-icon-user" @click="toLogin">登录</el-button>
                        <el-button type="info" v-show="!isLogin" icon="el-icon-user">注册</el-button>
                        <el-button type="warning" v-show="isLogin" @click="toLogout">注销</el-button>
                    </div>

                </el-popover>

            </div>

        </div>

    </header>

</template>

<script>

    export default {
        name: "Header",
        components: {},
        props: {
            search: {
                type: Function,
                default: function () {

                }
            }
        }
        ,
        data() {
            return {
                notLoggedImg: require("@/assets/img/未登录.png"),
                headerImg: require("@/assets/img/未登录.png"),
                logoImg: require("@/assets/img/logo.png"),
                bilibiliUid: require("@/assets/img/b站二维码.jpg"),
                posts: [
                    {id: 1, href: "/index", name: "主页"},
                    {id: 2, href: "/music_video", name: "视频"},
                    {id: 4, href: "/music", name: "曲谱"},
                    {id: 5, href: "/forum", name: "论坛"},
                    {id: 6, href: "/about", name: "关于"},
                ],
                input: '',
                isLogin: this.$store.state.isLogin,
                userName: this.$store.state.userName,
                signature: this.$store.state.signature,
            }
        },
        methods: {
            toLogin: function () {
                this.$router.push("/login")
            },
            toLogout: function () {
                this.$confirm('是否要登出用户', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$router.push("/login")
                    this.$store.commit("setRefreshToken", null);
                    this.$store.commit("setAccessToken", null);
                }).catch(() => {

                })
            },
            toAdmin: function () {
                this.$router.push("/admin/user_management")
            },
            isAdmin() {
                if (this.$store.state.roleName === "admin") {
                    return true
                }
                return false
            }
        },
        watch: {
            input(val) {
                this.$store.commit("setInputSearch", val)
            }
        }

    }

</script>

<style scoped lang="less">

    header {

        margin-bottom: 3px;
        background: rgba(46, 53, 71, 0.74);
        width: 100%;
        overflow: hidden;
        font-size: 20px;
        opacity: 0.7;
        box-shadow: 1px 1px 10px black;
        position: relative;

        .logo {
            margin-left: 5%;
            float: left;
            margin-right: 20px;

            img {
                height: 75px;
                width: 90px;

            }
        }


        .Q-info {
            line-height: 75px;
            cursor: pointer;
            margin-left: 40px;
            color: white;

            &:hover {
                opacity: 0.7;
                color: cornflowerblue;
            }
        }

        .nav-li {
            float: left;
            text-align: center;
            width: 80px;
            margin-right: 8px;
            line-height: 75px;
            cursor: pointer;

            &.router-link-exact-active {

                color: mediumpurple;
            }

            &:hover {
                background: #252830;
                opacity: 0.5;
            }
        }


    }

    .el-input {
        width: 180px;
        height: 40px;
        line-height: 75px;
        margin-left: 60px;
    }

    .search {
        margin-left: 20px;
    }


    .features {
        position: absolute;
        right: 20px;
        top: 15px;
        overflow: hidden;
        float: right;


    }


    .setting {
        float: right;
        margin: 10px;

        .el-icon-setting {
            font-size: 20px;
            color: white;
            position: relative;
            right: 5px;
        }
    }

    .user {
        float: right;
        margin: 10px;
        cursor: pointer;

    }

    .user-info {
        background: #f0f2f3;
        display: flex;
        flex-direction: column;
        height: 240px;
        font-size: 12px;

        .user-img {
            position: relative;
            left: 50px;
            height: 100px;
            width: 100px;
            border-radius: 50px;
            overflow: hidden;

            img {
                height: 100px;
                width: 100px;

            }
        }

        .login-info {
            margin: 5px 0;
            text-align: center;
        }

        .signature {
            height: 25px;
            margin: 10px 10px 15px 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
        }

        .el-button {
            margin: 5px 0 0 0;

        }

    }
</style>
