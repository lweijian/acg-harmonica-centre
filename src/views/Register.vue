<template>
  <div class="register">


    <div class="registerBox">

      <h2>注册</h2>
      <form id="form">
        <div class="item">
          <input id="username" type="text" required autocomplete="off" v-model="username">
          <label>用户名</label>
        </div>
        <div class="item">
          <input id="password" :type="[isSee?'text':'password']" required v-model="password">
          <label>密码</label>
          <span class="eye iconfont" @click="toggleSee"
                :class="[isSee? 'icon-eye2' : 'icon-eye3' ]"></span>
        </div>
        <div class="item">
          <input id="checkPassword" :type="[isCheckSee?'text':'password']" required v-model="checkPassword">
          <label>确认密码</label>
          <span class="eye iconfont" @click="toggleCheckSee"
                :class="[isCheckSee? 'icon-eye2' : 'icon-eye3' ]"></span>
        </div>


        <button type="button" class="btn" @click="register">注册
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <router-link to="/login" class="login">前往登录</router-link>

      </form>
    </div>
  </div>

</template>

<script>

import ReturnCode from "../assets/js/ReturnCode";
import {httpRegister} from "../request/api";
export default {
  name: "register",
  data() {
    return {
      username: "",
      password: "",
      checkPassword: "",
      isSee: false,
      isCheckSee: false,
    }
  },
  methods: {
    toggleSee: function () {
      this.isSee = !this.isSee;
    },
    toggleCheckSee: function () {
      this.isCheckSee = !this.isCheckSee;
    },

    checkFormat: function () {
      if (this.username == null || this.username === "" || this.password == null || this.password === "") {
        this.$message({
          type: 'error',
          message: '用户名或密码不能为空!'
        });
        return false;
      }
      if (this.username.length < 3 || this.username.length > 12) {
        this.$message({
          type: 'error',
          message: '用户名字符长度不能小于3个字符且不能大于12个字符!'
        });
        return false;
      }
      if (this.password.length < 6 || this.password.length > 12) {
        this.$message({
          type: 'error',
          message: '密码字符长度不能小于6个字符且不能大于12个字符!'
        });
        return false;
      }
      if (this.password !== this.checkPassword) {
        this.$message({
          type: 'error',
          message: '确认密码和密码不一致!'
        });
        return false;
      }
      return true;

    },
    register: function () {
      if (this.checkFormat()) {
        httpRegister({
          username: this.username,
          password: this.password
        }).then(res => {
          if (res.code === ReturnCode.OK) {
            this.$message({
              type: 'success',
              message: '注册成功!'
            });
            this.$router.push("/login")
          } else {
            this.$message({
              type: 'info',
              message: '注册失败!用户名已存在'
            });
            console.log(res)
          }

        })
      }
    }


  }
}
</script>

<style scoped lang="less">
.register {
  background-image: url("../assets/img/loginBg.jpg");

  background-size: cover;
  background-repeat: no-repeat;
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


.registerBox {
  width: 450px;
  height: 450px;
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
      left: 0;
      top: 12px;
      color: #03e9f4;
      transition: all .3s;
    }

    input {
      width: 80%;
      height: 100%;
      padding-top: 20px;
      box-sizing: border-box;

      &:focus + label, &:valid + label {
        top: 0;
        font-size: 12px;
        color: #fff;
      }

    }

    .eye {
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
  margin-top: 30px;
  position: relative;
  overflow: hidden;
  transition: 0.5s;
  font-size: 20px;

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
      animation: line1 .5s linear infinite;


    }

    &:nth-child(2) {
      right: 0;
      top: -100%;
      width: 2px;
      height: 100%;
      background: -webkit-linear-gradient(top, transparent, #03e9f4);
      animation: line2 .5s 0.25s linear infinite;


    }

    &:nth-child(3) {
      left: 100%;
      bottom: 0;
      width: 100%;
      height: 2px;
      background: -webkit-linear-gradient(left, #03e9f4, transparent);
      animation: line3 .5s 0.5s linear infinite;


    }

    &:nth-child(4) {
      left: 0;
      top: 100%;
      width: 2px;
      height: 100%;
      background: -webkit-linear-gradient(top, #03e9f4, transparent);
      animation: line4 .5s 0.75s linear infinite;


    }

  }

}

.login {
  float: right;
  position: relative;
  top: 50px;
  font-size: 12px;

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
