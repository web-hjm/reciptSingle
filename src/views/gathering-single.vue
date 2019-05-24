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
          <van-col span="6">金额(元)</van-col>
          <van-col span="6">操作</van-col>
        </van-row>
      </div>
      <div class="singleList-body">
        <div class="singleList-body">
        <van-row type="flex" justify="space-around" v-for="(item, index) in singleList" :key='item.payAmount + index'>
            <van-col span="6" v-if='item.payType == "zfbwap"'>支付宝扫码</van-col>
            <van-col span="6" v-else-if='item.payType == "wxwap"'>微信扫码</van-col>
            <van-col span="6">{{item.payAmount}}</van-col>
            <van-col span="6">{{item.totalCount}}</van-col>
          </van-row>
        </div>
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
          <div @click='getSingleList(true)'>
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
    private singleList:any[] = [] // 数据列表
    private pageNum: number = 1;
    private balance:number = 0 // 余额
    private pageSize: number = 10; // 页数
    getSingleList (type?:boolean) {
    if (type) {
      this.pageNum = 1;
      this.singleList = [];
    }
    this.$post(`member/memberInfo/orderList`, {
      pageNumber: this.pageNum,
      pageSize: this.pageSize
    }, {from: true}).then((res:any) => {
      if (res.data.data.rows.length <= 0) {
        this.$toast('没有更多数据了');
      } else {
        this.$toast('加载成功')
        this.singleList = [this.singleList, ...res.data.data.rows];
      }
    })
  }
  moreData () {
    this.pageNum++;
    this.getSingleList();
  }
  created() {
    this.getSingleList();  
    this.$post(`member/account/getAccountInfo`, {}).then((res:any) => {
          this.balance = res.data.data.availableMoney;
    })
  }
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
      left: calc(50% - 11rem);
      top: 11%;
      width: 22rem;
      height: 9rem;
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
      width: 100%;
      position: absolute;
      top: 70%;
      .van-col {
        height: 10rem;
        text-align: center;
        line-height: 10rem;
        color: white;
        font-size: 1.8rem;
      }
      .van-col:nth-child(1) {
        position: relative;
        background: url('../assets/commonPic/4/刷新按钮.png') 50% no-repeat;
        background-size: contain;
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
    width: 22rem;
    height: 15rem;
    position: absolute;
    left: calc(50% - 11rem);
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
      height: 68%;
      overflow: hidden;
      overflow-y: auto;
      text-align: center;
    }
    .singleList-footer {
      text-align: center;
    }
    .singleList-footer {
        margin-top: 1vh;
      }
  }
  @media screen and (max-width: 390px) and (max-height: 740px){
    .GrabSingle {
      .announcement {
        left: calc(50% - 9.8rem);
        top: 14%;
        width: 20rem;
         p {
          width:17rem;
        }
      }
      .recipt-single-footer-btn {
        top: 85%;
      }
    }
    .singleList {
        width: 18rem;
        height: 18rem;
        left: calc(50% - 9rem);
        top: 38%;
        .singleList-body {
          width: 100%;
          height: 65%;
        }
    }
  }
  @media screen and (min-width: 1024px) {
        .singleList {
            height: 18rem;
            top: 32%;
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
  @media screen and (max-width: 320px) {
    .GrabSingle {
      .recipt-single-footer-btn {
        top: 92%;
      }
    }
    .singleList {
      height: 16rem;
      top: 42%
    }
  }
</style>
