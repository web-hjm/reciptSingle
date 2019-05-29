<template>
  <div class="charge-log">
    <div class='header'>
      <van-row type="flex" justify="space-around" >
          <van-col span="8" >
              充值时间
          </van-col>
          <van-col span="8" >
              金额（元）
          </van-col>
          <van-col span="8" >
              状态
          </van-col>
      </van-row>
    </div>
    <div class='content' style="height:68vh;overflow-y:auto">
      <p v-show='logList.length <= 0' class='unlog-show'>
        暂无充值记录！！！
      </p>
      <van-row type="flex" justify="space-around" v-for='(item, index) in logList' :key='item + index'>
          <van-col span="8" >
            {{item.createTimeStr}}
          </van-col>
          <van-col span="8" >
            {{item.payAmount}}
          </van-col>
          <van-col span="8" >
            <span v-if='item.status == 0'>支付中</span>
            <span v-if='item.status == 1'>充值成功</span>
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
export default class ChargeLog extends Vue {
  private logList: any[] = [];
  private pageNum: number = 1;
  private pageSize: number = 10; // 页数
  // private logList: any[] = []
  mounted() {
    this.getLogList();
  }
  getLogList() {
    this.$post(
      `member/recharge/queryMemberRecharge`,
      {
        pageNumber: this.pageNum,
        pageSize: this.pageSize
      },
      { from: true }
    ).then((res: any) => {
      if (res.data.data.rows.length <= 0) {
        this.$toast("没有更多数据了");
      } else {
        this.$toast("加载成功");
        this.logList = this.logList.concat(res.data.data.rows);
      }
    });
  }
}
</script>
<style lang="scss">
.charge-log {
  color: white;
  .header {
    .van-col {
      padding: 2vh 0.2vh;
      text-align: center;
    }
  }
  .content {
    .van-row {
      background: #4b4c68;
      margin-top: 1vh;
      .van-col {
        padding: 1vh 0.2vh;
        text-align: center;
        // height: 6vh;
      }
      .van-col:first-child {
        font-size: 1vh;
      }
    }
    .van-row:first-child {
      margin-top: 0vh;
    }
  }
  .unlog-show {
    text-align: center;
    margin-top: 15vh;
  }
}
</style>