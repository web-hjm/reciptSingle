<template>
  <div class="userInfo">
    <div class='content'>
        <van-row type="flex"  >
            <van-col span="8">
                身份证号码：
            </van-col>
            <van-col span="14">
                <van-field placeholder="请输入您的身份证号码" />
            </van-col>
        </van-row>
        <van-row type="flex"  >
            <van-col span="8">
                所在地区：
            </van-col>
            <van-col span="14">
                <van-field placeholder="请输入所在地区" />
            </van-col>
        </van-row>
        <van-row type="flex"  >
            <van-col span="8">
                详细地址：
            </van-col>
            <van-col span="14">
                <van-field placeholder="请输入详细地址" />
            </van-col>
        </van-row>
        <van-row type="flex"  >
            <van-col span="8">
                支付密码：
            </van-col>
            <van-col span="14">
                <van-field placeholder="请输入6位数支付密码" type='password'/>
            </van-col>
        </van-row>
        <van-row type="flex"  >
            <van-col span="8">
                支付密码：
            </van-col>
            <van-col span="14">
                <van-field placeholder="请输入6位数支付密码" type='password'/>
            </van-col>
        </van-row>
        <van-row type="flex" justify="space-around" >
            <van-col span="6" >
                <button class='userinfo-footer-btn'>保存</button>
            </van-col>
        </van-row>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class UserInfo extends Vue {
    
}
</script>
<style lang="scss">
    .userInfo {
        color:white;
        .content {
            margin-top:10%;
            .van-row:nth-of-type(odd){ background:rgba($color: #813c4d, $alpha: 0.4)}
        .van-row:nth-of-type(even){ background:rgba($color: #072859, $alpha: 0.4)}
        .van-row:last-child {background: none}
            .van-row {
                height:6vh;
                margin-top:2vh;
                line-height:6vh;
                .van-col:first-child {
                    text-align:right;
                    font-size:3vh;
                }
                .van-col {
                    height: 6vh;
                    .van-cell {
                        padding:0px 10px;
                    }
                    .van-field {
                        background: transparent;
                        input {
                        display: inline-block;
                        height: 6vh;
                        line-height: 6vh;
                        color: white;
                        font-size: 1rem;
                        // font-family: none;
                        }
                    }
                }
            }
        }
        .userinfo-footer-btn {
            background:url('../assets/commonPic/7/个人消息/保存按钮.png') no-repeat;
            background-size: 100% 110%;
            width:100%;
            height:100%;
            border-radius: 1vw;
            text-align:center;
            color:white;
            border:none;
            margin-top: 3vh;
        }
    }
</style>