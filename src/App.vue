<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
@font-face {
  font-family: 'iconfont';  /* project id 1223227 */
  src: url('//at.alicdn.com/t/font_1223227_oc99utbhgpb.eot');
  src: url('//at.alicdn.com/t/font_1223227_oc99utbhgpb.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1223227_oc99utbhgpb.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1223227_oc99utbhgpb.woff') format('woff'),
  url('//at.alicdn.com/t/font_1223227_oc99utbhgpb.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1223227_oc99utbhgpb.svg#iconfont') format('svg');
}
</style>
