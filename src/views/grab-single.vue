<template>
  <div class="GrabSingle">
    <!-- 公告 -->
    <div class="announcement">

    </div>
    <!-- 公告 -->

    <!-- 余额收益 -->
    <div class="single-sum">
      <van-row type="flex" justify="space-around" >
        <van-col span="20">
          当前余额：<span>{{balance}}</span>元
        </van-col>
      </van-row>
      <van-row type="flex" justify="space-around" >
        <van-col span="20">
          总收益：<span>{{sum}}</span>元
        </van-col>
      </van-row>
    </div>
    <!-- 余额收益 -->

    <!-- 抢收抢付账单 -->
    <div class="check-content">
      <van-row type="flex" justify="space-around">
        <van-col span="24" >
          说明：抢收款单是别人转账到自己的支付宝或微信
        </van-col>
      </van-row>
      <van-row type="flex" justify="space-around" >
        <van-col span="24">
        </van-col>
      </van-row>
      <van-row type="flex" justify="space-around" >
        <van-col span="24">
         说明：付款单是对你的账号充值余额
        </van-col>
      </van-row>
      <van-row type="flex" justify="space-around" >
        <van-col span="24">
        </van-col>
      </van-row>
    </div>
    <!-- 抢收抢付账单 -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  // components: {
  //   publicTabbar,
  //   publicHeader
  // }
})
export default class GrabSingle extends Vue {
    private balance:number = 9999 // 余额
    private sum:number = 9999 // 收益

}
</script>
<style lang='scss'>
  .announcement {
    background: url('../assets/commonPic/广告框.png') no-repeat;
    background-size: 100% 100%;
    position: absolute;
    left: calc(50% - 12rem);
    top: 10%;
    width: 24rem;
    height: 10rem;
  }
  .single-sum,.check-content{
    color: white;
    width: 20rem;
    position: absolute;
    left: calc(50% - 10rem);
    top: 35%;
    height: 6rem;
    // font-family: none;
    span{
      color: #00ff1d;
    }
  }
  .check-content {
    top: 47%;
    font-size:0.8rem;
    left: calc(50% - 8.3rem);
    .van-row:nth-child(2) {
      .van-col:first-child {
        background: url("../assets/commonPic/抢收款单.png") -4% 5% no-repeat;
        background-size: 90% 110%;
        margin-top: 2%;
        width: 100%;
        height: 14vh;
      }
    }
    .van-row:nth-child(3) {
      margin-top: 10%;
    }
    .van-row:nth-child(4) {
      .van-col:first-child {
        background: url("../assets/commonPic/抢付款单图标.png") -4% 4% no-repeat;
        background-size: 90% 110%;
        margin-top: 2%;
        width: 100%;
        height: 14vh;
      }
    }
  }
</style>
