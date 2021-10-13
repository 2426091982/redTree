<template>
  <div class="notFound">
    <div class="content">
      <el-row>
        <el-col :md="12">
          <div class="not">
            <img src="@/assets/notFound/404.png" alt="" />
          </div>
        </el-col>
        <el-col :md="12">
          <h1>404</h1>
          <p>
            UH OH! 页面丢失
            <br />
            您所寻找的页面不存在。你可以点击下面的按钮，返回主页。
          </p>
          <button @click="$router.push('/')">返回首页</button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
// 顶部导航栏
import TopNav from "@/components/common/TopNav.vue";
// 底部组件
import Footer from "@/components/common/Footer.vue";
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {
    TopNav,
    Footer,
  },
  methods: {},
  mounted() {},
};
</script>
<style lang="less" scoped>
.notFound {
  .content {
    width: 1200px;
    padding: 50px;
    margin: 0 auto;
    .el-row {
      .el-col {
        .not {
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 300px;
          }
        }
        h1 {
          font-size: 50px;
        }
        p {
          font-size: 14px;
          padding: 20px 0;
        }
        button {
          width: 140px;
          height: 40px;
          border-radius: 70px;
          color: #169bd5;
          border: 1px solid #169bd5;
          background-color: #fff;
          transition: all 0.2s;
          cursor: pointer;
          &:hover {
            background: #169bd5;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>

<style lang="less" scope>
@media screen and (max-width: 1200px) {
  .content {
    width: 1024px !important;
  }
}
@media screen and (max-width: 1024px) {
  .content {
    width: 100% !important;
  }
}
</style>
