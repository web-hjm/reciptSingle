<template>
  <div class="grab-single-log">
    <div class='header'>
      <van-row type="flex" justify="space-around" >
          <van-col span="5" >
              创建时间
          </van-col>
          <van-col span="4" >
              名称
          </van-col>
          <van-col span="4" >
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
    <div class='content'>
      <p v-show='logList.length <= 0' class='unlog-show'>
        暂无抢单记录！！！
      </p>
      <van-row type="flex" justify="space-around" v-for='(item, index) in logList' >
          <van-col span="5" >
            {{item.time}}
          </van-col>
          <van-col span="4" >
            {{item.name}}
          </van-col>
          <van-col span="4" >
            {{item.type}}
          </van-col>
          <van-col span="4" >
            {{item.money}}
          </van-col>
          <van-col span="4" >
          </van-col>
      </van-row>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class GrabSingleLog extends Vue {
    private logList: any[] = [
      {
        time: '2019-5-20 10:12:48',
        name: '手机',
        type: '支付宝',
        money: '50.00'
      },
      {
        time: '2019-5-20',
        name: '手机',
        type: '支付宝',
        money: '50.00'
      }
    ]
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
          margin-top:40%;
        }
    }
</style>