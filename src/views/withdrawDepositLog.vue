<template>
  <div class="withdraw-weposit-log">
    <div class='header'>
      <van-row type="flex" justify="space-around" >
          <van-col span="8" >
              提现时间
          </van-col>
          <van-col span="8" >
              金额（元）
          </van-col>
          <van-col span="8" >
              状态
          </van-col>
      </van-row>
    </div>
    <div class='content'>
      <p v-show='logList.length <= 0' class='unlog-show'>
        暂无提现记录！！！
      </p>
      <van-row type="flex" justify="space-around" v-for='(item, index) in logList' >
          <van-col span="8" >
            {{item.time}}
          </van-col>
          <van-col span="8" >
            {{item.money}}
          </van-col>
          <van-col span="8" >
            {{item.status}}
          </van-col>
          </van-col>
      </van-row>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class withdrawDepositLog extends Vue {
    private logList: any[] = [
      {
        time: '2019-5-20 10:12:48',
        money: '50.00',
        status: '提现中'
      },
      {
        time: '2019-5-20',
        money: '50.00',
        status: '已打款'
      }
    ]
}
</script>
<style lang="scss">
    .withdraw-weposit-log {
        color:white;
        .header {
          .van-col {
            padding:2vh 0.2vh;
            text-align:center;
          }
        }
        .content {
          .van-row {
            background: #4b4c68;
            margin-top:1vh;
            .van-col {
              padding:1vh 0.2vh;
               text-align:center;
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
          margin-top:40%;
        }
    }
</style>