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
    <div class='content'>
      <p v-show='logList.length <= 0' class='unlog-show'>
        暂无充值记录！！！
      </p>
      <van-row type="flex" justify="space-around" v-for='(item, index) in logList' :key='item + index'>
          <van-col span="8" >
            {{item.time}}
          </van-col>
          <van-col span="8" >
            {{item.money}}
          </van-col>
          <van-col span="8" >
            {{item.status}}
          </van-col>
      </van-row>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class ChargeLog extends Vue {
    private logList: any[] = [
      {
        time: '2019-5-20 10:12:48',
        money: '50.00',
        status: '待支付'
      },
      {
        time: '2019-5-20',
        money: '50.00',
        status: '充值成功'
      }
    ]
}
</script>
<style lang="scss">
    .charge-log {
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