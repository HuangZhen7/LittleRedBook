<template>
  <div>
    <!-- 搜索 -->
    <router-link tag="div" class="search-box" to="/search">
      <i class="iconfont icon-search">&#xe658;</i>
      <span class="box">大家都在搜 “{{placeholder}}”</span>
    </router-link>
    <!-- tab -->
    <div class="home">
      <router-link tag="div" class="tab-item" to="/home/follow">
        <span class="item-title">关注</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/home/find">
        <span class="item-title">发现</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/home/nearby">
        <span class="item-title">附近</span>
      </router-link>
    </div>
    <keep-alive>
      <router-view></router-view>      
    </keep-alive>
    
    <!-- 文章内容 -->

    <!-- 底部tab -->
    <v-tab></v-tab>
  </div>
</template>

<script>
import Tab from '../tab'
export default {
  name: 'Home',
  data () {
    return {
      placeholder: '11111',
    }
  },
  components: {
    'v-tab': Tab 
  },
  methods: {
  },
}
</script>

<style scoped>
.home{
  width: 50%;
  margin-left: 25%;
  display: flex;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  background-color: #fff;
}
.tab-item{
  flex: 1;
  text-align: center;
}
.item-title{
  padding: 2px 0;
  color: #999999;
}
.router-link-active .item-title{
  font-size: 18px;
  color: #000000;
  border-bottom: 1px solid #ff2842;
}
.search-box{
  height: 30px;
  line-height: 30px;
  margin: 0 4px;
  background-color: #f5f5f5;
  border-radius: 20px;
  text-align: center;
  align-items: center;
}
.box{
  margin-left: 2px;
  color: #999999;
}
</style>
