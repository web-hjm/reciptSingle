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
          <van-col span="6">金额(元)</van-col>
          <van-col span="6">订单数量</van-col>
        </van-row>
      </div>
      <div class="singleList-body">
        <van-row type="flex" justify="space-around" v-for="(item, index) in singleList" :key='item.payAmount + index'>
          <van-col span="6" v-if='item.payType == "zfbwap"'>支付宝扫码</van-col>
          <van-col span="6" v-else-if='item.payType == "wxwap"'>微信扫码</van-col>
          <van-col span="6">{{item.payAmount}}</van-col>
          <van-col span="6">{{item.totalCount}}</van-col>
        </van-row>
      </div>
      <div class="singleList-footer" @click='moreData'>
        加载更多
      </div>
    </div>
    <!-- 单列表 -->

    <!-- 底部按钮 -->
    <van-row type="flex" justify="space-around" class="recipt-single-footer-btn">
        <van-col span="11">
          <div @click='actionSingle'>
            <span>当前余额：<strong>{{balance}}</strong>元</span>
            开始抢单
          </div>
        </van-col>
        <van-col span="11">
          <div @click='getSingleList(true)'>
            刷新
          </div>
        </van-col>
      </van-row>
    <!-- 底部按钮 -->

    <van-dialog
      v-model="actionSingleShow"
      title="智能匹配订单..."
      confirmButtonText='关闭抢单'
      @confirm='Single(0)'
    >
      <p>抢单匹配中请稍后，60S后若未抢到订单，请重新点击开始抢单按钮</p>
      <p style="text-align:center">{{countDown}}秒</p>
    </van-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({

})
export default class reciptSingle extends Vue {
  private singleList:any[] = [] // 数据列表
  private pageNum: number = 1;
  private balance:number = 0 // 余额
  private pageSize: number = 10; // 页数
  private actionSingleShow: boolean = false;
  private countDown: number = 60 // 倒计时
  getSingleList (type?:boolean) {
    if (type) {
      this.pageNum = 1;
      this.singleList = [];
    }
    this.$post(`member/statistic/orderStatistic`, {
      pageNumber: this.pageNum,
      pageSize: this.pageSize
    }, {from: true}).then((res:any) => {
      if (res.data.data.rows.length <= 0) {
        this.$toast('没有更多数据了');
      } else {
        this.$toast('加载成功')
        this.singleList = this.singleList.concat(res.data.data.rows);
      }
    })
  }
  moreData () {
    this.pageNum++;
    this.getSingleList();
  }
  actionSingle () {
    this.actionSingleShow = true;
    this.countDown = 60; // 重置倒计时
    let time = setInterval(() => {
      if (this.countDown <= 0) {
        clearInterval(time);
        this.actionSingleShow = false;
      } else {
        this.countDown--;
      }
      console.log(this.countDown);
    }, 1000)
    try {
        let data = this.Single(1);
        console.log(data);
    } catch (error) {
        this.countDown = 60; // 重置倒计时
        this.actionSingleShow = false;
    }
  }
  Single(status: number) {
    return this.$post(`member/memberInfo/updateMember`, {
      mode: status
    }, {from: true})
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
        position: relative;
        span {
          font-size: 1vh;
          position: absolute;
          top: 10%;
          left: 17%;
          line-height: 2rem;
          strong {
            color: #00ff1d;
          }
        }
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
      overflow: hidden;
      overflow-y: auto;
      text-align: center;
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
          height: 68%;
        }
        .singleList-footer {
          margin-top: 1vh;
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
