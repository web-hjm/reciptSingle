<template>
  <div class="grab-single-log">
    <div class='header'>
      <van-row type="flex" justify="space-around" align="center">
          <van-col span="5" >
              创建时间
          </van-col>
          <van-col span="4" >
              名称
          </van-col>
          <van-col span="5" >
              类型
          </van-col>
          <van-col span="4" >
              金额
          </van-col>
          <van-col span="4" >
              操作
          </van-col>
      </van-row>
    </div>
    <div class='content' style="height:68vh">
      <p v-show='logList.length <= 0' class='unlog-show'>
        暂无抢单记录！！！
      </p>
      <van-row type="flex" justify="space-around" v-for='(item, index) in logList' :key='index' align="center">
          <van-col span="5" >
            {{item.createTimeStr}}
          </van-col>
          <van-col span="4" >
            {{item.goodsName}}
          </van-col>
          <van-col span="5" >
            <span v-if='item.payType == "zfbwap"'>支付宝扫码</span>
            <span v-else-if='item.payType == "wxwap"'>微信扫码</span>
          </van-col>
          <van-col span="4" >
            {{item.payAmount}}
          </van-col>
          <van-col span="4" >
            <van-button type="default" class="log-btn" v-if='item.status == 0' @click="confirm(item)">确认收款</van-button>
            <van-button type="default" class="log-btn" v-if='item.status == 1' disabled>已收款</van-button>
            <van-button type="default" class="log-btn" v-if='item.status == 2' disabled>已撤销</van-button>
          </van-col>
      </van-row>
    </div>
     <p v-show='logList.length > 0' style="textAlign:center" @click='() => {
          pageNum++,
          getLogList()
        }' >加载更多</p>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class GrabSingleLog extends Vue {
  private pageNum: number = 1;
  private pageSize: number = 10; // 页数
    private logList: any[] = []
    mounted() {
      this.getLogList();
    }
    confirm (obj:any) {
      console.log(obj)
      this.$post(`member/memberInfo/confirmOrder`, {
        payOrderId: obj.payOrderId
      }, {from: true}).then((res:any) => {
        this.$toast(res.data.msg)
        if (res.data.code == 0) {
          this.pageNum = 1;
          this.logList = [];
          this.getLogList();
        } 
      })
    }
    getLogList () {
      this.$post(`member/memberInfo/orderList`, {
        pageNumber: this.pageNum,
        pageSize: this.pageSize
      }, {from: true}).then((res: any) => {
        if (res.data.data.rows.length <= 0) {
          this.$toast('没有更多数据了');
        } else {
          this.$toast('加载成功')
          this.logList = this.logList.concat(res.data.data.rows)
        }
         
      })
    }
}
</script>
<style lang="scss">
    .grab-single-log {
        color:white;
        .header {
          .van-col {
            padding:2vh 0.2vh;
          }
        }
        .content {
          height: 80vh;
          overflow-y: auto;
          .van-row {
            background: #4b4c68;
            margin-top:2vh;
            .van-col {
              padding:1vh 0.2vh;
              // height: 6vh;
            }
            .van-col:first-child {
              font-size:1vh;
            }
          }
          .van-row:first-child {
            margin-top:0vh;
          }
          
        }
        .unlog-show {
          text-align:center;
          margin-top:15vh;
        }
        .log-btn {
            padding: 0px;
            height: 5vh;
            line-height: 5vh;
            font-size: 2vh;
            border-radius: 1vh;
          }
    }
</style>