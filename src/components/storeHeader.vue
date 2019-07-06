<template>
  <div class="header">
    <div class="header-left" @click="menu">
      <slot name="left-icon"></slot>
    </div>
    <div class="header-cont">
      <slot name="content"></slot>
    </div>
    <div class="header-right">
      <slot name="right-icon"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    menu() {
      this.$store.dispatch('setShowSidebar', true)
    },
    search() {},
    sort() {},
  },
}
</script>

<style scoped>
.header{
  height: 30px;
  line-height: 30px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;
}
.header-left{
  width: 5%;
}
.header-cont{
  width: 90%;
  background-color: #f5f5f5;
  border-radius: 20px;
  color: #999999;
}
.header-right{
  width: 5%;
}
</style>
