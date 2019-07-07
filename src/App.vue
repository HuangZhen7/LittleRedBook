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
  src: url('//at.alicdn.com/t/font_1223227_bemxuq7aqrf.eot');
  src: url('//at.alicdn.com/t/font_1223227_bemxuq7aqrf.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1223227_bemxuq7aqrf.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1223227_bemxuq7aqrf.woff') format('woff'),
  url('//at.alicdn.com/t/font_1223227_bemxuq7aqrf.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1223227_bemxuq7aqrf.svg#iconfont') format('svg');
}
</style>
