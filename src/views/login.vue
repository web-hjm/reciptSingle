<template>
  <div class="login">
    <div class="join-us-content" v-if='!user_status' @click="user_status = true">
      <van-row type="flex" justify="space-around" >
        <van-col span="4">
        </van-col>
        <van-col span="20">
          <span>加入我们</span>
        </van-col>
      </van-row>
    </div>
    <!-- 加入我们 -->
      <img src='../assets/login&register/用户.png' class='user_logo'/>
      <!-- 登录模块 -->
      <div class='login-content' v-if='user_status'>
        <van-row type="flex" justify="space-around" >
          <van-col span="4">
          </van-col>
          <van-col span="20">
            <van-field placeholder="请输入手机号" />
          </van-col>
        </van-row>
        <van-row type="flex" justify="space-around" >
          <van-col span="4">
            </van-col>
          <van-col span="20">
            <van-field placeholder="请输入你的登陆密码" />
          </van-col>
        </van-row>
        <van-row type="flex" justify="space-around" >
          <van-col span="4">
          </van-col>
          <van-col span="20">
            <van-field placeholder="请输入验证码" />
          </van-col>
        </van-row>
      </div>
      <!-- 登录模块 -->
      <!-- 注册模块 -->
      <div class='register-content' v-if='!user_status'>
        <van-row type="flex" justify="space-around" >
          <van-col span="8">
            邀请码：
          </van-col>
          <van-col span="16">
            <van-field placeholder="请输入代理商提供的邀请码" />
          </van-col>
        </van-row>
        <van-row type="flex" justify="space-around" >
          <van-col span="8">
            你的昵称：
          </van-col>
          <van-col span="16">
            <van-field placeholder="请输入你的昵称" />
          </van-col>
        </van-row>
        <van-row type="flex" justify="space-around" >
          <van-col span="8">
            你的手机号：
          </van-col>
          <van-col span="16">
            <van-field placeholder="请输入手机号" />
          </van-col>
        </van-row>
        <van-row type="flex" justify="space-around" >
          <van-col span="8">
            登录密码：
          </van-col>
          <van-col span="16">
            <van-field placeholder="请输入你的登录密码" />
          </van-col>
        </van-row>
        <van-row type="flex" justify="space-around" >
          <van-col span="8">
            确认密码：
          </van-col>
          <van-col span="16">
            <van-field placeholder="请输入你的登录密码" />
          </van-col>
        </van-row>
      </div>
      <!-- 注册模块 -->
      <button :class='user_status ? "login-btn login-btn-logo" : "login-btn login-register-logo"'></button>
      <span class='register-account' v-show='user_status' @click='user_status = false'>注册账号</span>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class Login extends Vue {
  public user_status: boolean = true; // 表示用户已注册或未注册状态
}
</script>
<style lang="scss">
.login {
  // height: 100vh;
  // background: url("../assets/login&register/背景.png") no-repeat;
  // background-size: cover;
  .user_logo {
    width: 6rem;
    height: 7rem;
    position: absolute;
    top: 13%;
    left: calc(50% - 3rem);
  }
  .join-us-content {
    height: 3rem;
    background: url("../assets/login&register/顶部灰底图.png") no-repeat;
    background-size: 100% 100%;
    .van-row {
      height: 100%;
      .van-col:first-child {
        background: url("../assets/commonPic/左上角返回箭头.png") 50% center
          no-repeat;
        background-size: 20% 40%;
      }
      .van-col:last-child {
        span {
          display: inline-block;
          height: 100%;
          width: 5rem;
          line-height: 3rem;
          position: absolute;
          left: calc(50% - 2.5rem);
          // font-family: none;
          font-size: 1.1rem;
        }
      }
    }
  }
  .register-content {
    position: absolute;
    color: #ffffff;
    width: 20rem;
    left: calc(50% - 10rem);
    top: 35%;
    border: 1px solid #8e8e91;
    .van-col {
      height: 7vh;
      .van-field {
        background: transparent;
        input {
          color: white;
          display: inline-block;
          height: 7vh;
          margin-top: -1.5vh;
          font-size: 1rem;
          // font-family: none;
        }
      }
    }
    .van-row {
      .van-col:first-child {
        text-align: right;
        line-height: 7vh;
        // font-family: none;
        font-size: 1rem;
      }
    }
    .van-row {
      border-bottom: 1px solid #8e8e91;
    }
    .van-row:last-child {
      border-bottom: none;
    }
  }
  .login-content{
    position: absolute;
    color: #ffffff;
    width: 20rem;
    left: calc(50% - 10rem);
    top: 35%;
    border: 1px solid #8e8e91;
    .van-row:first-child {
      .van-col:first-child {
        background: url("../assets/commonPic/手机图标.png") 80% center no-repeat;
        background-size: 40% 55%;
      }
    }
    .van-row:nth-child(2) {
      .van-col:first-child {
        background: url("../assets/commonPic/密码图标.png") 80% center no-repeat;
        background-size: 50% 50%;
      }
    }
    .van-col {
      height: 7vh;
      .van-field {
        background: transparent;
        input {
          color: white;
          display: inline-block;
          height: 7vh;
          margin-top: -1.5vh;
          font-size: 1rem;
          // font-family: none;
        }
      }
      .van-cell{
        padding: 10px 8px;
      }
    }
    .van-row {
      border-bottom: 1px solid #8e8e91;
    }
    .van-row:last-child {
      border-bottom: none;
      .van-col:first-child {
        background: url("../assets/commonPic/验证码图标.png") 80% center
          no-repeat;
        background-size: 50% 45%; /* 通过百分比设置 */
      }
    }
  }
  .login-btn-logo {
    background: url("../assets/commonPic/登录.png") no-repeat;
  }
  .login-register-logo {
    background: url("../assets/commonPic/注册按钮.png") no-repeat;
    top: 78% !important;
  }
  .login-btn {
    width: 14rem;
    height: 5.5rem;
    background-size: 100% 100%;
    border: none;
    position: absolute;
    top: 65%;
    left: calc(50% - 7rem);
  }

  .register-account {
    color: #f6ed5a;
    font-size: 1rem;
    position: absolute;
    top: 78%;
    left: calc(50% - 2rem);
    display: inline-block;
    width: 4rem;
    // font-family: none;
  }
}
</style>