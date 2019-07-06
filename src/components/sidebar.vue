<template>
  <div class="sidebar">
    <div class="sidebar-con" :class="{showbar: showSidebar}">
      <div class="head">更多</div>
      <div class="menu">
        <ul>
          <li>
            <router-link tag="div" to="">
              <i class="iconfont">&#xe618;</i>
              <span>发现好友</span>
            </router-link>
          </li>
          <li>
            <router-link tag="div" to="">
              <i class="iconfont">&#xe6fc;</i>
              <span>我的草稿</span>
            </router-link>
          </li>
          <li>
            <router-link tag="div" to="">
              <i class="iconfont">&#xe7f0;</i>
              <span>购物车</span>
            </router-link>
          </li>
          <li>
            <router-link tag="div" to="">
              <i class="iconfont">&#xe603;</i>
              <span>订单</span>
            </router-link>
          </li>
          <li>
            <router-link tag="div" to="">
              <i class="iconfont">&#xe65e;</i>
              <span>卡券</span>
            </router-link>
          </li>
          <li>
            <router-link tag="div" to="">
              <i class="iconfont">&#xe626;</i>
              <span>心愿单</span>
            </router-link>
          </li>
          <li>
            <router-link tag="div" to="">
              <i class="iconfont">&#xe643;</i>
              <span>小红卡会员</span>
            </router-link>
          </li>
          <li>
            <router-link tag="div" to="">
              <i class="iconfont">&#xe648;</i>
              <span>钱包</span>
            </router-link>
          </li>
          <li>
            <router-link tag="div" to="">
              <i class="iconfont">&#xe657;</i>
              <span>免流量</span>
            </router-link>
          </li>
          <li>
            <router-link tag="div" to="">
              <i class="iconfont">&#xe62f;</i>
              <span>帮助与客服</span>
            </router-link>
          </li>
          <li>
            <router-link tag="div" to="">
              <i class="iconfont">&#xe606;</i>
              <span>扫一扫</span>
            </router-link>
          </li>
          <li>
            <router-link tag="div" to="">
              <i class="iconfont">&#xe62a;</i>
              <span>设置</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div v-show="showSidebar" class="sidevar-mask" @click="_hideSidebar"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    ...mapGetters([
      'showSidebar'
    ])
  },
  methods: {
    _hideSidebar() {
      this.$store.dispatch('setShowSidebar', false)
    }
  }
}
</script>

<style scoped>
.sidebar{
  color: #000000;
}
.sidebar-con{
  z-index: 1002;
  background-color: #fff;
  position: absolute;
  top: 0;
  left: -300px;
  transform: translateZ(0);
  opacity: 0;
  width: 250px;
  height: 100%;
  overflow: auto;
  transition: all 0.3s ease;
  letter-spacing: 2px;
}
.showbar{
  transform: translateX(300px);
  opacity: 1;
}
.head{
  margin: 20px 30px;
  font-size: 30px;
  /* font-weight: bold; */
}
.menu{
  font-size: 16px;
}
ul li{
  list-style: none;
  height: 40px;
  line-height: 40px;
}
span{
  vertical-align: middle;
  padding-left: 14px;
  color: #000000;
}
.sidevar-mask{
  position: fixed;
  width: 100%;
  margin: 0 auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  background: rgba(0, 0, 0, 0.3);
}
</style>
