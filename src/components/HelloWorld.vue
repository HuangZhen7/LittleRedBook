<template>
  <div class="hello">
    <div class="title">小红书</div>
    <div class="content">找到你想要的生活</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  mounted() {
    setTimeout(() => {
      // this.$router.push()
    },3000)
  },
}
</script>

<style scoped>
page{
  width: 100%;
  height: 100%;
  background-color: #fff;
}
.hello{
  display: flex;
  flex-direction: column;
  margin-top: 40%;
}
.title {
  font-size: 50px;
  color: #ff2542;
  font-weight: 1000;
}
.content{
  font-size: 14px;
  letter-spacing: 4px;
  color: #000;
}
</style>
