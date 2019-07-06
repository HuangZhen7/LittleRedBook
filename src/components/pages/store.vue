<template>
  <div class="store">
    <!-- 头部 -->
    <v-store-header>
      <i slot="left-icon" class="iconfont">&#xe600;</i>
      <router-link tag="div" slot="content" to="/search">
        <i class="iconfont">&#xe658;</i>
        <span class="box">大家都在搜 “{{placeholder}}”</span>
      </router-link>
      <router-link tag="div" to='/sort' slot="right-icon">
        <i class="iconfont">&#xe602;</i>
      </router-link>
    </v-store-header>
    <router-view></router-view>
    <!-- 侧边sidebar -->
    <v-sidebar></v-sidebar>
  </div>
</template>

<script>
import storeHeader from '../storeHeader'
import sidebar from '../sidebar'
export default {
  name: 'store',
  data () {
    return {
      placeholder: '22222'
    }
  },
  components: {
    'v-store-header': storeHeader ,
    'v-sidebar': sidebar
  },
}
</script>

<style scoped>

</style>
