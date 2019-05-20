<template>
  <div>
    <publicHeader/>
    <!-- 公告 -->
     <router-view></router-view>
    <publicTabbar />
    <!-- 底部tabbar -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import publicTabbar from '@/components/PublicTabbar.vue' 
import publicHeader from '@/components/PublicHeader.vue' 
@Component({
  components: {
    publicTabbar,
    publicHeader
  }
})
export default class Home extends Vue {
    mounted() {
        console.log(this.$route)
    }
}
</script>
<style lang='scss'>

</style>
