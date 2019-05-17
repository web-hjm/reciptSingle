<template>
  <div class="GrabSingle">
    <p class='grab-single-title'>分润百分比：1%（注：充值余额 * 可抢单百分比 - 已抢单金额）</p>

    <!-- 公告 -->
    <div class="announcement">
      <h2>温馨提示：</h2>
      <p>1、抢到订单务必要关注是否收到钱、<strong>及时确认收款，避免被投诉导致无法收款</strong></p>
      <p>2、尊敬的会员，请密切关注您的可用余额，避免因余额不足导致抢单失败</p>
      <p>3、点击右下角【刷新】按钮更新可抢单金额</p>
    </div>
    <!-- 公告 -->


  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({

})
export default class GrabSingle extends Vue {
    private balance:number = 9999 // 余额
    private sum:number = 9999 // 收益

}
</script>
<style lang='scss'>
  $fontColor: #f6ed5a;
  .GrabSingle {
    .grab-single-title {
      font-size: 0.6rem;
      color: $fontColor;
      text-align:center;
    }
    .announcement {
      background: url('../assets/commonPic/广告框.png') no-repeat;
      background-size: 100% 100%;
      position: absolute;
      left: calc(50% - 12rem);
      top: 11%;
      width: 24rem;
      height: 12rem;
      h2 {
        color: $fontColor;
        margin: 3% 0px 0px 10%;
      }
      p {
        width:20rem;
        font-size: 0.9rem;
        margin: 3% 0px 0px 10%;
        color:#8e8e91;
        strong {
          color: red;
        }
      }
    }
  }
  
 
</style>
