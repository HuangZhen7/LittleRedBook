<template>
  <div class="login">
    <!-- 账号：<el-input placeholder="请输入账号" v-model="idNum" clearable></el-input> -->
    <!-- 密码：<el-input placeholder="请输入密码" v-model="password" show-password></el-input> -->
      <!-- background -->
      <div class="bgImg"></div>
      <!-- logo -->
      <div class="header">
        <div class="hd-title">小红书</div>
        <div class="hd-content">标记我的生活</div>
      </div>
      <!-- 登录  -->
      <div class="login-btn">
        <div class="btn-item wechat">
          <i class="iconfont" style="color: green;margin-right: 4px;">&#xe73c;</i>微信登录
        </div>
        <div class="btn-item phone">
          <i class="iconfont" style="color: #fff;margin-right: 4px;">&#xe61e;</i>手机登录
        </div>
        <div class="btn-item">
          <div class="sm-item">
            <i class="iconfont" style="color: #fff;margin-right: 4px;">&#xe610;</i>微博
          </div>
          <div class="sm-item">
            <i class="iconfont" style="color: #fff;margin-right: 4px;">&#xe676;</i>QQ
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  }
}
</script>

<style scoped>
@-webkit-keyframes scrollToUp {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 0 -100px;  
       /* 向上滚动则就是图片的高度的负值，否则为图片的宽度，也可以百分比 */
    }
  }
  @keyframes scrollToUp {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 0 -1100px;
    }
  }
.login{
  width: 100%;
  height: 100%;
}
.bgImg{
  background: url(../../assets/bg1.jpg);
  background-size: 100% ;
  width: 100%;
  height: 100%;
  position: absolute;
  background-attachment: fixed; /* 让背景图片和文本脱离*/
  background-position: center center;
  -webkit-animation: scrollToUp 20s linear infinite; /* 引入 scrollToUp动画 */
  animation: scrollToUp 20s linear infinite;
  -webkit-filter:brightness(0.6);
  -o-filter:brightness(0.6);
  -moz-filter:brightness(0.6);
  filter:brightness(0.6);
}
.header{
  position: absolute;
  top: 18%;
  left: 50%;
  transform: translateX(-50%);
  display: block;
}
.hd-title {
  font-size: 54px;
  color: #ffffff;
  font-weight: 1000;
}
.hd-content{
  font-size: 16px;
  letter-spacing: 12px;
  color: #ffffff;
  text-align: center;
}
.login-btn{
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
}
.btn-item{
  width: 240px;
  margin: 0 0 8px 0;
  padding: 8px 0;
  text-align: center;
  font-size: 16px;
  border-radius: 6px;
}
.wechat{
  background-color: #fff;
  color: #000000;
}
.phone{
  background-color:rgba(255, 255, 255, 0.2);
  color: #ffffff;
}
.sm-item{
  display: inline-block;
  width: 120px;
  color: #ffffff;
  /* text-align: center; */
}
</style>
