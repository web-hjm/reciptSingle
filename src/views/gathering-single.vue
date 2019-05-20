<template>
  <div class="GrabSingle">
    <p class='grab-single-title'>抢付款单余额会相应增加</p>

    <!-- 公告 -->
    <div class="announcement">
      <h2>温馨提示：</h2>
      <p>1、抢到订单务必要<strong>及时付款</strong>，避免被投诉导致无法上分</p>
      <p>2、点击右下角【刷新】按钮更新可抢单名额</p>
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
          <van-col span="6">操作</van-col>
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
        <!-- <van-col span="11">
          <div>
            开始抢单
          </div>
        </van-col> -->
        <van-col span="14">
          <div>
            <span>当前余额：{{balance}}</span>
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
export default class Gathering extends Vue {
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
      height: 10rem;
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
    .recipt-single-footer-btn {
      width: 100%;
      position: absolute;
      top: 68%;
      .van-col {
        height: 12rem;
        text-align: center;
        line-height: 10.2rem;
        color: white;
        font-size: 1.8rem;
      }
      .van-col:nth-child(1) {
        position: relative;
        background: url('../assets/commonPic/4/刷新按钮.png') no-repeat;
        background-size: 100% 100%;
        span {
          font-size: 1rem;
          width: 100%;
          position: absolute;
          top: -25%;
          left: -1%;
        }
      }
    }
  }
  .singleList {
    background: url('../assets/commonPic/4/可抢单统计括号.png') no-repeat;
    background-size: 100% 100%;
    width: 23rem;
    height: 15rem;
    position: absolute;
    left: calc(50% - 11.5rem);
    top: 33%;
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
      height: 70%;
      background: purple;
    }
    .singleList-footer {
      text-align: center;
    }
  }
 
</style>
