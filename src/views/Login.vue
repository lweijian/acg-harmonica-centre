<template>
    <div class="login">


        <div class="loginBox">

            <h2>ACG口琴小苑</h2>
            <form id="form">
                <div class="item">
                    <input id="username" type="text" required autocomplete="off" v-model="username">
                    <label for="username">用户名</label>
                </div>
                <div class="item">
                    <input id="password" :type="[isSee?'text':'password']" required v-model="password"
                           @keyup.enter="login">
                    <label for="password">密码</label>
                    <span class="eye iconfont" id="eye" @click="toggleSee"
                          :class="[isSee? 'icon-eye2' : 'icon-eye3' ]"></span>
                </div>


                <button type="button" class="btn" @click="login">登录
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <router-link to="/register" class="register">注册</router-link>

            </form>
        </div>
    </div>

</template>

<script>


    import {httpLogin} from "../request/api";
    new Image().src='../assets/img/loginBg.jpg';

    export default {
        name: "login",
        data() {
            return {
                username: "",
                password: "",
                isSee: false,
            }
        },
        methods: {
            toggleSee: function () {
                this.isSee = !this.isSee;
            },
            checkFormat: function () {
                if (this.username == null || this.username === "" || this.password == null || this.password === "") {
                    this.$message({
                        type: 'error',
                        message: '用户名或密码不能为空!'
                    });
                    return false;
                }
                return true;

            },
            login: function () {
                if (this.checkFormat()) {
                    httpLogin({
                        username: this.username,
                        password: this.password,
                    }).then(
                        res => {
                            this.$store.commit("setAccessToken", res.accessToken)
                            this.$store.commit("setRefreshToken", res.refreshToken)
                            if (this.$store.state.accessToken != null && this.$store.state.accessToken !== "") {
                                this.$store.commit('setIsLogin', true)
                                this.$store.commit('setSignature', res.userInfo.signature)
                                this.$store.commit('setUsername', res.userInfo.username)
                                this.$store.commit('setRoleName', res.userInfo.roleName)
                                this.$router.push("/")
                            } else {
                                this.$message({
                                    type: 'error',
                                    message: '用户名或密码错误!'
                                });
                                this.$store.commit('setIsLogin', false);
                            }
                        }
                    ).catch(err => {
                        this.$store.commit('setIsLogin', false);
                        this.$message({
                            type: 'error',
                            message: '登录失败!'+err
                        });

                    })
                }


            },


        }
    }
</script>

<style scoped lang="less">
    .login {
        /*background-image: url("");*/

      background: url("../assets/img/loginBg.jpg") no-repeat ;
      background-size: cover;
      height: 100vh;
        width: 100vw;
        font-size: 16px;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;

    }

    input, button {
        border: none;
        background: transparent;
        outline: none;
        color: #fff;
    }

    button {
        cursor: pointer;
    }

    .logoBox {
        position: relative;

        .logo {
            height: 380px;
            width: 470px;
            position: absolute;
            bottom: 80px;
            cursor: pointer;
        }
    }


    .loginBox {
        width: 450px;
        height: 370px;
        background: rgba(0, 0, 0, 0.5);
        box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.6);
        padding: 40px;
        box-sizing: border-box;
        border-radius: 10px;
        position: relative;

        h2 {
            margin-bottom: 30px;
            text-align: center;
        }

        .item {
            height: 45px;
            margin-bottom: 30px;
            border-bottom: 1px solid #fff;
            position: relative;

            label {
                position: absolute;
                left: 0px;
                top: 12px;
                color: #03e9f4;
                transition: all 0.5s;
            }

            input {
                width: 80%;
                height: 100%;
                padding-top: 20px;
                box-sizing: border-box;

                &:focus + label, &:valid + label {
                    top: 0px;
                    font-size: 12px;
                    color: #fff;
                }

            }

            #eye {
                position: relative;
                left: 10%;
                font-size: 20px;
                cursor: pointer;
            }


        }
    }


    .btn {
        display: inline-block;
        padding: 10px 20px;
        color: #03e9f4;
        margin-top: 40px;
        position: relative;
        overflow: hidden;
        transition: 0.5s;


        &:hover {
            background: #03e9f4;
            border-radius: 5px;
            color: #fff;
            box-shadow: 0 0 5px #03e9f4,
            0 0 25px #03e9f4,
            0 0 50px #03e9f4,
            0 0 100px #03e9f4;
        }

        span {
            position: absolute;

            &:nth-child(1) {
                left: -100%;
                top: 0;
                width: 100%;
                height: 2px;
                background: -webkit-linear-gradient(left, transparent, #03e9f4);
                animation: line1 1s linear infinite;


            }

            &:nth-child(2) {
                right: 0;
                top: -100%;
                width: 2px;
                height: 100%;
                background: -webkit-linear-gradient(top, transparent, #03e9f4);
                animation: line2 1s 0.25s linear infinite;


            }

            &:nth-child(3) {
                left: 100%;
                bottom: 0;
                width: 100%;
                height: 2px;
                background: -webkit-linear-gradient(left, #03e9f4, transparent);
                animation: line3 1s 0.5s linear infinite;


            }

            &:nth-child(4) {
                left: 0;
                top: 100%;
                width: 2px;
                height: 100%;
                background: -webkit-linear-gradient(top, #03e9f4, transparent);
                animation: line4 1s 0.75s linear infinite;


            }

        }

    }

    .register {
        float: right;
        position: relative;
        top: 50px;

        &:hover {
            opacity: 0.5;

        }

    }


    @keyframes line1 {

        50%,
        100% {
            left: 100%;
        }
    }

    @keyframes line2 {

        50%,
        100% {
            top: 100%;
        }
    }

    @keyframes line3 {

        50%,
        100% {
            left: -100%;
        }
    }

    @keyframes line4 {

        50%,
        100% {
            top: -100%;
        }
    }

</style>
