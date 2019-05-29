<template>
  <div class="withdrawDeposit">
    <div class='content'>
        <van-row type="flex"  >
            <van-col span="8">
                账户余额：
            </van-col>
            <van-col span="14" v-cloak>
                {{accountBalance}}
            </van-col>
        </van-row>
        <van-row type="flex"  >
            <van-col span="8">
                可提现金额：
            </van-col>
            <van-col span="14" v-cloak>
               {{withdrawDepositSum}}
            </van-col>
        </van-row>
        <van-row type="flex"  >
            <van-col span="8">
                提现银行卡：
            </van-col>
            <van-col span="14">
                <van-field placeholder="请输入银行卡号" v-model='reuqestData.bankId'/>
            </van-col>
        </van-row>
        <van-row type="flex"  >
            <van-col span="8">
                提现金额：
            </van-col>
            <van-col span="14">
                <van-field placeholder="请输入提现金额" v-model='reuqestData.money'/>
            </van-col>
        </van-row>
        <van-row type="flex"  >
            <van-col span="8">
                支付密码：
            </van-col>
            <van-col span="14">
                <van-field placeholder="请输入支付密码" type='password' v-model='reuqestData.payPasswd'/>
            </van-col>
        </van-row>
        <van-row type="flex"  >
            <van-col span="8">
                手续费：
            </van-col>
            <van-col span="14" v-cloak>
                {{serveChaege}}
            </van-col>
        </van-row>
        <van-row type="flex" justify="space-around" >
            <van-col span="6" >
                <button class='withdrawDeposit-footer-btn' @click='save'>提现</button>
            </van-col>
        </van-row>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CryptoJS from 'crypto-js';
@Component({})
export default class withdrawDeposit extends Vue {
    private accountBalance:number = 0
    private withdrawDepositSum:number = 0
    private serveChaege:number = 0
    private reuqestData:any = {
        bankId: '',
        money: '',
        payPasswd: '',
    }
    beforeCreate() {
        this.$post(`member/bank/bankList`, {
            pageNumber:1,
            pageSize:10

        }, {from:true}).then((res:any) => {
            res.data.data.rows.length <=0 && this.$toast('请先添加银行卡信息')
            res.data.data.rows.length <=0 && this.$router.push('/account/card-info')
        })
    }
    created() {
        this.$post(`member/withdraw/queryWithdrawFee`).then((res:any) => {
            res.data.code == 0 && (this.serveChaege = res.data.data.value);
        })
        this.$post(`member/account/getAccountInfo`).then((res:any) => {
        //   if (res.data.code == 0) {
              this.accountBalance = res.data.data.availableMoney;
              this.withdrawDepositSum = res.data.data.deposit;
        //   }
        })
    }
    save () {
        if (!(this.reuqestData.bankId && this.reuqestData.money && this.reuqestData.payPasswd)) {
            this.$toast('以上所有信息为必填，请按照要求填写')
            return
        } else {
            if (!(/^\d+$/.test(this.reuqestData.money))) {
                this.$toast('提现金额只可输入数字')
                return
            } else if (!(/^\d{1,19}$/.test(this.reuqestData.bankId))){
                this.$toast('银行卡号只可输入数字且不超过19位');
                return
            } else if (!(/^\d{6}$/.test(this.reuqestData.payPasswd))) {
                this.$toast('支付密码请设置6位数数字');
                return
            } else {
                this.reuqestData.payPasswd = CryptoJS.MD5(this.reuqestData.payPasswd).toString()
                this.$post(`member/withdraw/addMemberWithdraw`, this.reuqestData, {from: true}).then((res:any) => {
                    if (res.data.code == 0) {
                        this.$toast('保存成功'), 
                        this.reuqestData = {
                            bankId: '',
                            money: '',
                            payPasswd: '',
                        }
                    }
                })
            }
        }
    }
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