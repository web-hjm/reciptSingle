<template>
  <div class="withdrawDeposit">
    <div class='content'>
        <van-row type="flex"  >
            <van-col span="8">
                账户余额：
            </van-col>
            <van-col span="14">
                {{accountBalance}}
            </van-col>
        </van-row>
        <van-row type="flex"  >
            <van-col span="8">
                可提现金额：
            </van-col>
            <van-col span="14">
               {{withdrawDepositSum}}
            </van-col>
        </van-row>
        <van-row type="flex"  >
            <van-col span="8">
                提现银行卡：
            </van-col>
            <van-col span="14">
                <van-field placeholder="请输入银行卡号" />
            </van-col>
        </van-row>
        <van-row type="flex"  >
            <van-col span="8">
                提现金额：
            </van-col>
            <van-col span="14">
                <van-field placeholder="请输入提现金额" />
            </van-col>
        </van-row>
        <van-row type="flex"  >
            <van-col span="8">
                支付密码：
            </van-col>
            <van-col span="14">
                <van-field placeholder="请输入支付密码" type='password'/>
            </van-col>
        </van-row>
        <van-row type="flex"  >
            <van-col span="8">
                手续费：
            </van-col>
            <van-col span="14">
                2
            </van-col>
        </van-row>
        <van-row type="flex" justify="space-around" >
            <van-col span="6" >
                <button class='withdrawDeposit-footer-btn'>提现</button>
            </van-col>
        </van-row>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class withdrawDeposit extends Vue {
    private accountBalance:number = 0
    private withdrawDepositSum:number = 0
}
</script>
<style lang="scss">
    .withdrawDeposit {
        color:white;
        .content {
            margin-top:10%;
             .van-row:nth-of-type(odd){ background:rgba($color: #813c4d, $alpha: 0.4)}
        .van-row:nth-of-type(even){ background:rgba($color: #072859, $alpha: 0.4)}
        .van-row:last-child {background: none}
            .van-row {
                height:6vh;
                margin-top:3vh;
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
                        color: white;
                        height: 6vh;
                        line-height: 6vh;
                        font-size: 1rem;
                        // font-family: none;
                        }
                    }
                }
            }
        }
        .withdrawDeposit-footer-btn {
            background:url('../assets/commonPic/7/个人消息/保存按钮.png') no-repeat;
            background-size: 100% 110%;
            width:100%;
            height:100%;
            border-radius: 1vw;
            text-align:center;
            color:white;
            border:none;
            // margin-top: 1vh;
        }
    }
</style>