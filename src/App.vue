<template>
  <div id="app">
    <TopNav />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <Footer />
  </div>
</template>

<script>
// 顶部导航栏
import TopNav from "@/components/common/TopNav.vue";
// 标题组件
import TitleBar from "@/components/common/TitleBar.vue";
// 底部组件
import Footer from "@/components/common/Footer.vue";
export default {
  components: { TopNav, Footer },
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  font-family: "微软雅黑";
}
div {
  box-sizing: border-box;
}
img {
  width: 100%;
  height: 100%;
}
a {
  color: #333;
  text-decoration: none;
}
li {
  list-style: none;
}
.flexCenter {
  display: flex;
  justify-content: center;
  align-items: center;
}
.fade-enter {
  opacity: 0;
}
.fade-leave {
  opacity: 1;
}
.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-leave-active {
  opacity: 0;
  transition: opacity 0.5s;
}


</style>

<style lang="less" >
.el-tabs__item {
  height: 60px !important;
  line-height: 60px !important;
  font-size: 18px !important;
}
@media screen and (max-width: 1024px) {
  .el-tabs__item {
    height: 40px !important;
  line-height: 40px !important;
  font-size: 14px !important;
  }
  .el-tabs__nav-scroll {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
  
</style>
