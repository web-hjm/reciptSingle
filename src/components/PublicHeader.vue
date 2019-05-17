<template>
  <div class="public-header">
        <van-row type="flex" justify="space-around" >
        <van-col span="24">
            <span>{{$route.meta.title}}</span>
        </van-col>
        </van-row>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class PublicHeader extends Vue {
  @Prop() private title: string = '';
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 .public-header {
    height: 3rem;
    background: url("../assets/login&register/顶部灰底图.png") no-repeat;
    background-size: 100% 100%;
    .van-row {
      height: 100%;
      .van-col:last-child {
        span {
          display: inline-block;
          height: 100%;
          width: 12rem;
          text-align:center;
          line-height: 3rem;
          position: absolute;
          left: calc(50% - 6rem);
          font-size: 1.1rem;
        }
      }
    }
  }
</style>
