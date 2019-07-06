<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="/home">
      <span class="tab-title">首页</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/store">
      <span class="tab-title">商城</span>
    </router-link>
    <div class="tab-item">
      <span class="add-title">+</span>        
    </div>
    <router-link tag="div" class="tab-item" to="/news">
      <span class="tab-title">消息</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/user">
      <span class="tab-title">我</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'tab'
}
</script>

<style scoped>
.tab{
  width: 100%;
  display: flex;
  height: 60px;
  line-height: 60px;
  font-size: 16px;
}
.tab-item{
  flex: 1;
  text-align: center;
}
.tab-title{
  padding: 4px 4px 0 4px;
  color: #999999;
}
.add{
  background-color: #ff2842;
  font-weight: 900;
  color: #ffffff;
}
.add-title{
  font-size: 40px;
  background-color: #ff2842;
  color: #ffffff;
  padding: 0 16px;
  border-radius: 11px;
}
.router-link-active .tab-title{
  font-size: 20px;
  font-weight: bold;
  color: #000000;
}

</style>
