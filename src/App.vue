<template>
  <div id="app">
    <!-- <HelloWorld/> -->
    <!-- 底部tab -->
    <div class="tab">
      <v-tab></v-tab>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Tab from './components/tab'
export default {
  name: 'app',
  components: {
    HelloWorld,
    'v-tab': Tab 
  }
}
</script>

<style>
@font-face {
  font-family: 'iconfont';  /* project id 1223227 */
  src: url('//at.alicdn.com/t/font_1223227_ev64gqpexh.eot');
  src: url('//at.alicdn.com/t/font_1223227_ev64gqpexh.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1223227_ev64gqpexh.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1223227_ev64gqpexh.woff') format('woff'),
  url('//at.alicdn.com/t/font_1223227_ev64gqpexh.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1223227_ev64gqpexh.svg#iconfont') format('svg');
}
.iconfont{
  font-family:"iconfont" !important;
  /* font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale; */
}
.tab {
  position: fixed;
  bottom: 0;
}
</style>
