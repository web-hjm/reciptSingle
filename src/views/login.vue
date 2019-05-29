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
            <van-field placeholder="请输入手机号" v-model="loginData.phone"/>
          </van-col>
        </van-row>
        <van-row type="flex" justify="space-around" >
          <van-col span="4">
            </van-col>
          <van-col span="20">
            <van-field placeholder="请输入你的登陆密码"  type='password' v-model="loginData.password"/>
          </van-col>
        </van-row>
        <van-row type="flex" justify="space-around" >
          <van-col span="4">
          </van-col>
          <van-col span="12">
            <van-field placeholder="请输入验证码" v-model="loginData.verify"/>
          </van-col>
          <van-col span="8">
            <img :src="verifyPic" alt="" class="login-verify-pic" @click='getPic()'>
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
            <van-field placeholder="请输入代理商提供的邀请码" v-model="registerData.invatationCode"/>
          </van-col>
        </van-row>
        <van-row type="flex" justify="space-around" >
          <van-col span="8">
            你的昵称：
          </van-col>
          <van-col span="16">
            <van-field placeholder="请输入你的昵称" v-model="registerData.name" clearable/>
          </van-col>
        </van-row>
        <van-row type="flex" justify="space-around" >
          <van-col span="8">
            你的手机号：
          </van-col>
          <van-col span="16">
            <van-field placeholder="请输入手机号" v-model="registerData.phone"/>
          </van-col>
        </van-row>
        <van-row type="flex" justify="space-around" >
          <van-col span="8">
            登录密码：
          </van-col>
          <van-col span="16">
            <van-field placeholder="请输入你的登录密码" v-model="registerData.password" type='password'/>
          </van-col>
        </van-row>
        <van-row type="flex" justify="space-around" >
          <van-col span="8">
            确认密码：
          </van-col>
          <van-col span="16">
            <van-field placeholder="请输入你的登录密码" v-model="registerData.confirmPassword"
            type='password'/>
          </van-col>
        </van-row>
      </div>
      <!-- 注册模块 -->
      <button :class='user_status ? "login-btn login-btn-logo" : "login-btn login-register-logo"' @click="login"></button>
      <span class='register-account' v-show='user_status' @click='user_status = false'>注册账号</span>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CryptoJS from 'crypto-js';
@Component({})
export default class Login extends Vue {
  public user_status: boolean = true; // 表示用户已注册或未注册状态
  private verifyStatus: boolean = false; // 验证码状态
  private verifyPic:string = ''; // 验证码地址
  private loginData:any = {
    phone: '',
    password: '',
    verify: ''
  } // 登陆参数
  private registerData: any = {
    invatationCode: '',
    name: '',
    phone: '',
    password: '',
    confirmPassword: ''
  }
  getPic () {
    if (!this.verifyStatus) {
      this.verifyStatus = true;
      this.verifyPic = `${this.util.requestApi}member/login/getVerify?${Math.random()}`
      this.verifyStatus = false;
    } else {
        this.$toast('请勿多次刷新验证码图片');
    }
  }
  login () {
    if (this.user_status) {
      if (!this.loginData.phone) {
        this.$toast('账号不可为空，请输入账号');
        return
      } else if (!this.loginData.password) {
        this.$toast('登录密码不可为空，请输入密码');
        return
      } else if (!this.loginData.verify) {
        this.$toast('图形验证码不可为空，请输入验证码');
        return
      } else if (!(/^[1][3,4,5,7,8][0-9]{9}$/.test(this.loginData.phone))) {
        this.$toast('该手机号码格式有误，请重新输入');
        return
      } else if (!(/^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]{6,16}$/.test(this.loginData.password))) {
        this.$toast('密码格式有误，请输入6~16位数字和字母');
        return
      } else {
        this.$post('member/login/checkVerify', {
          mobile: this.loginData.phone,
          pwd: CryptoJS.MD5(this.loginData.password).toString(),
          code: this.loginData.verify
        }, {from: true}).then((res:any) => {
          if(res.data.code == 0) {
            this.$cookies.set('userId', CryptoJS.MD5(this.loginData.moblie).toString(), 60 * 60 * 24 * 3) // 存储手机号3天 3天内有效
            this.$toast(res.data.msg);
            this.$router.push('/')
          } else {
            this.$toast(res.data.msg);
            this.getPic();
            this.loginData.password = '';
            this.loginData.verify = '';
          }
        })
      }
    } else {
      if (!this.registerData.invatationCode) {
        this.$toast('请输入代理商提供的邀请码');
        return
      } else if (!this.registerData.name) {
        this.$toast('昵称不可为空，请输入昵称');
        return
      } else if (!this.registerData.phone) {
        this.$toast('手机号码不可为空，请输入手机号码');
        return
      } else if ((!this.registerData.password) || (!this.registerData.confirmPassword)) {
        this.$toast('密码不可为空，请输入密码');
        return
      } else if (this.registerData.name.length > 10) {
        this.$toast('昵称不可超过10个字');
      } else if (this.registerData.password !== this.registerData.confirmPassword) {
        this.$toast('二次确认密码和设置密码不一致，请重新输入');
        return
      } else if (!(/^[1][3,4,5,7,8][0-9]{9}$/.test(this.registerData.phone))) {
        this.$toast('该手机号码格式有误，请重新输入');
        return
      } else if (!(/^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]{6,16}$/.test(this.registerData.password))) {
        this.$toast('密码格式有误，请输入6~16位数字和字母');
        return
      } else {
        this.$post('member/login/register', {
          phoneNumber: this.registerData.phone,
          password: CryptoJS.MD5(this.registerData.password).toString(),
          registerCode: this.registerData.invatationCode,
          memName: this.registerData.name
        }, {from: true}).then((res:any) => {
          if (res.data.code == 0) {
            this.$toast('注册成功，请使用账号密码登陆');
            setTimeout(() => {
              this.user_status = true;
            }, 600)
          } else {
            this.$toast(res.data.msg);
            this.registerData.password = '';
            this.registerData.confirmPassword = '';
          }
        })
      }
    }
  }
  mounted() {
    this.getPic();  
  }
}
</script>
<style lang="scss">
.login {
  // height: 100vh;
  // background: url("../assets/login&register/背景.png") no-repeat;
  // background-size: cover;
  .login-verify-pic {
    width: 100%;
    height: 100%;
  }
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
    width: 18rem;
    left: calc(50% - 9rem);
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
    width: 18rem;
    left: calc(50% - 9rem);
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
    top: 80%;
    left: calc(50% - 2rem);
    display: inline-block;
    width: 4rem;
    // font-family: none;
  }
}
</style>