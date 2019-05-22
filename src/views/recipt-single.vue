<template>
  <div class="reciptSingle">
    <p class='grab-single-title'>分润百分比：1%（注：充值余额 * 可抢单百分比 - 已抢单金额）</p>

    <!-- 公告 -->
    <div class="announcement">
      <h2>温馨提示：</h2>
      <p>1、抢到订单务必要关注是否收到钱、<strong>及时确认收款，避免被投诉导致无法收款</strong></p>
      <p>2、尊敬的会员，请密切关注您的可用余额，避免因余额不足导致抢单失败</p>
      <p>3、点击右下角【刷新】按钮更新可抢单金额</p>
    </div>
    <!-- 公告 -->
    
    <!-- 单列表 -->
    <div class="singleList">
      <div class="singleList-header">
        <van-row type="flex" justify="space-around" >
          <van-col span="24">
            可抢单统计
          </van-col>
        </van-row>
        <van-row type="flex" justify="space-around">
          <van-col span="6">类型</van-col>
          <van-col span="6">金额（元）</van-col>
          <van-col span="6">订单数量</van-col>
        </van-row>
      </div>
      <div class="singleList-body">

      </div>
      <div class="singleList-footer">
        加载更多
      </div>
    </div>
    <!-- 单列表 -->

    <!-- 底部按钮 -->
    <van-row type="flex" justify="space-around" class="recipt-single-footer-btn">
        <van-col span="11">
          <div>
            开始抢单
          </div>
        </van-col>
        <van-col span="11">
          <div>
            刷新
          </div>
        </van-col>
      </van-row>
    <!-- 底部按钮 -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({

})
export default class reciptSingle extends Vue {
    private balance:number = 9999 // 余额
    private sum:number = 9999 // 收益

}
</script>
<style lang='scss'>
  $fontColor: #f6ed5a;
  .reciptSingle {
    .grab-single-title {
      font-size: 0.6rem;
      color: $fontColor;
      text-align:center;
    }
    .announcement {
      background: url('../assets/commonPic/广告框.png') no-repeat;
      background-size: 100% 100%;
      position: absolute;
      left: calc(50% - 11rem);
      top: 11%;
      width: 22rem;
      height: 12rem;
      h2 {
        color: $fontColor;
        margin: 3% 0px 0px 10%;
      }
      p {
        width:19rem;
        font-size: 0.9rem;
        margin: 3% 0px 0px 10%;
        color:#8e8e91;
        strong {
          color: red;
        }
      }
    }
    .recipt-single-footer-btn {
      width: 22rem;
      position: absolute;
      margin-left: calc(50% - 11rem);
      top: 71%;
      .van-col {
        height: 8.5rem;
        text-align: center;
        line-height: 10rem;
        color: white;
        font-size: 1.8rem;
      }
      .van-col:nth-child(1) {
        background: url('../assets/commonPic/4/开始抢单按钮.png') no-repeat;
        background-size: 100% 110%;
      }
      .van-col:nth-child(2) {
        background: url('../assets/commonPic/4/刷新按钮.png') no-repeat;
        background-size: 100% 110%;
      }
    }
  }
  .singleList {
    background: url('../assets/commonPic/4/可抢单统计括号.png') no-repeat;
    background-size: 100% 100%;
    width: 22rem;
    height: 13.5rem;
    position: absolute;
    left: calc(50% - 11rem);
    top: 39%;
    color:white;
    .singleList-header {
      .van-row:nth-child(1) {
        margin: 2vw 0vw 0vw 5vw;
      }
      .van-row:nth-child(2) {
        text-align: center;
      }
    }
    .singleList-body {
      width: 100%;
      height: 65%;
      background: purple;
    }
    .singleList-footer {
      text-align: center;
      
    }
  }
  @media screen and (max-width: 390px) and (max-height: 740px){
    .reciptSingle {
      .announcement {
        left: calc(50% - 9.8rem);
        top: 15%;
        width: 20rem;
         p {
          width:17rem;
        }
      }
      .recipt-single-footer-btn {
        top: 100%;
        .van-col {
          height: 9rem;
        }
      }
    }
    .singleList {
        width: 18rem;
        height: 18rem;
        left: calc(50% - 9rem);
        top: 49%;
        .singleList-body {
          width: 100%;
          height: 66%;
        }
    }
  }
  @media screen and (min-width: 1024px) {
    .singleList {
        // width: 18rem;
        height: 18rem;
        // left: calc(50% - 9rem);
        top: 35%;
        .singleList-header {
          .van-row:nth-child(1) {
            margin: 1vw 0vw 0vw 2vw;
          }
          .van-row:nth-child(2) {
            text-align: center;
          }
        }
        .singleList-body {
          width: 100%;
          height: 70%;
        }
    }
  }
</style>
