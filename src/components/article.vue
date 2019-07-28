<template>
  <div class="box" ref="wrapper">
    <div class="article" >
    <div class="content" v-for="(item, index) in notes" :key="index">
      <img :src="item.note_image" alt="" style="width:100%">
      <div class="title">{{item.title}}</div>
      <div class="user">
        <img :src="item.writer_img" alt="" class="avatar">
        <span class="writer">{{item.writer}}</span>
        <div class="like" @click="setLike(index)">
          <i v-show="!item.selected" class="iconfont">&#xe607;</i>
          <i v-show="item.selected" class="iconfont" style="color: red">&#xe604;</i>{{item.like}}      
        </div>
      </div>
    </div>
  </div>
  </div>
  
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'articles',
  props: {
    id: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      notes: [],
    }
  },
  methods: {
    setLike(index) {
      // console.log(index)
      this.notes[index].selected = !this.notes[index].selected 
      if(this.notes[index].selected) {
        this.notes[index].like = +this.notes[index].like + 1
        console.log(this.notes[index].like)
        // console.log(this.notes)
      } else {
        this.notes[index].like = +this.notes[index].like - 1
        console.log(this.notes[index].like)
        // console.log(this.notes)
      }
    },
    // initScroll(){ //实例化       
    // let wrapper= this.$refs.wrapper   //给需要区域滚动的内容的父盒子添加ref属性
    // let scroll= new BScroll(wrapper, {click: true})   //better-scroll 默认会阻止浏览器的原生 click 事件,需要配置一下click属性
    // }
    initScroll() {
      this.$nextTick(()=>{
        if(!this.Scroll) {
          this.Scroll = new BScroll(this.$refs.wrapper,{
            click: true,      // 配置允许点击事件
            scrollY: true     // 开启纵向滚动
          })
        } else {
          this.Scroll.refresh()    // 重新计算 better-scroll，当 DOM 结构发生变化的时确保滚动效果正常
        }
      })
    }
  },
  created() {
    this.$http.get('https://www.easy-mock.com/mock/5d21992a3d823f4b363ab970/redbook/article')
      .then(res => {
        console.log(res)
        if (res.status === 200) {
           this.notes = res.data.data[this.id].notes
        }
      })
    // this.$nextTick(() => {
    //  this.scroll = new Bscroll(this.$refs.wrapper, {click: true})
    // })
    this.initScroll()
  },
}
</script>

<style scoped>
.box {
    /* height: 80vh; */
    /* height: 100%; */
    width: 100%;
    height: 80vh;
    overflow: hidden;
}
.article{
  width: 100%;
  background-color: #f4f9fa;
  overflow: hidden;
  /* position: fixed; */
}
.content{
  background-color: #fff;
  float: left;
  width: 48%;
  margin: 1%;
  border-radius: 6px;
  overflow: hidden;
}
.title{
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  max-height: 40px;
  letter-spacing: 1px;
  margin: 4px 0 6px 0;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  /* -webkit-line-clamp用来限制在一个块元素显示的文本的行数。 为了实现该效果，它需要组合其他的WebKit属性。常见结合属性： */
  /* display: -webkit-box; 必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 。 */
  /* -webkit-box-orient 必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式 。 */
}
.avatar{
  width: 20px;
  border-radius: 50%;
  margin: 0 4px 0 10px;
}
.writer{
  position: relative;
  top: -3px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.like{
  float: right;
  color: #bfbfbf;
}
.iconfont{
  margin-right: 2px;
}
</style>
