<template>
  <div class="wapper">
    <!-- 首页顶部导航栏 -->
    <div class="topNav active">
      <div class="logo">
        <img src="@/assets/index/logo.jpg" alt="" />
      </div>
      <ul class="navBar">
        <li class="navItem" @click="toPath('/index')">
          <a href="javascript:;">
            首页
          </a>
        </li>
        <li class="navItem">
          <a href="javascript:;">
            业务中心
            <ul>
              <li @click="toPath('/business', '/first')">业务板块</li>
              <li @click="toPath('/business', '/second')">院校开发</li>
              <li @click="toPath('/business', '/third')">服务模式</li>
              <li @click="toPath('/business', '/fourth')">扩展业务</li>
            </ul>
          </a>
        </li>
        <li class="navItem">
          <a href="javascript:;">
            教育体系
            <ul>
              <li @click="toPath('/education', '/first')">教育培训</li>
              <li @click="toPath('/education', '/second')">职业教育</li>
            </ul>
          </a>
        </li>
        <li class="navItem">
          <a href="javascript:;">
            携手合作
            <ul>
              <li @click="toPath('/cooperation', '/first')">合作院校</li>
              <li @click="toPath('/cooperation', '/second')">校企合作</li>
            </ul>
          </a>
        </li>
        <li class="navItem">
          <a href="javascript:;">
            新闻资讯
            <ul>
              <li @click="toPath('/information', '/first')">公司新闻</li>
              <li @click="toPath('/information', '/second')">行业动态</li>
            </ul>
          </a>
        </li>
        <li class="navItem">
          <a href="javascript:;">
            关于我们
            <ul>
              <li @click="toPath('/aboutUs', '/first')">公司简介</li>
              <li @click="toPath('/aboutUs', '/second')">发展理念</li>
              <li @click="toPath('/aboutUs', '/third')">联系我们</li>
            </ul>
          </a>
        </li>
      </ul>
      <div class="toggle">
        <i class="iconfont icon-liebiao" @click="visible = true"></i>
      </div>
    </div>
    <!-- 幕布 -->
    <div class="curtain"></div>

    <el-drawer
      :visible.sync="visible"
      direction="rtl"
      size="50%"
      :before-close="handleClose"
    >
      <ul class="mobileNav">
        <li @click="toPath('/index')">首页</li>
        <li @click="toPath('/business')">业务中心</li>
        <li @click="toPath('/education')">教育体系</li>
        <li @click="toPath('/cooperation')">携手合作</li>
        <li @click="toPath('/information')">新闻资讯</li>
        <li @click="toPath('/aboutUs')">关于我们</li>
      </ul>
    </el-drawer>
  </div>
</template>

<script>
export default {
  name: "TopNav",
  props: {},
  data() {
    return {
      visible: false,
    };
  },
  components: {},
  methods: {
    handleClose(done) {
      done();
    },
  toPath(path, order = "/first") {
      if (path == "/index" || path == "/newsDetail" || path == "/cooperationDetail") {
        order = "";
      }
      this.$router.push({
        path: path + `${order}`,
      });
    },
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
.wapper {
  position: relative;
  height: 60px;
  display: flex;
  justify-content: center;
  .curtain {
    position: absolute;
    z-index: 998;
    width: 100%;
    transition: 0.2s all;
    height: 60px;
    background-color: #fff;
  }
  .topNav {
    position: absolute;
    z-index: 999;
    width: 1200px;
    display: flex;
    transition: 0.2s all;
    height: 60px;
    background-color: #fff;

    &:hover ~ .curtain {
      height: 310px;
      box-shadow: 0 15px 30px rgb(0 0 0 / 10%);
    }
    .logo {
      flex: 2;
      height: 60px;
      img {
        width: 160px;
      }
    }

    ul.navBar {
      flex: 5;
      display: flex;
      margin-left: 12.5rem;
      padding-top: 1.125rem;

      .navItem {
        flex: 1;
        a {
          display: inline-block;
          width: 100%;
          font-size: 1rem;
          text-align: center;
          color: #333;
          transition: 0.2s all;
          &:hover {
            font-weight: 700;
            color: #6095ff;
          }
        }
        ul {
          transition: 1s all;
          height: 0;
          overflow: hidden;
          transition: 0.2s all;
          li {
            font-size: 1rem;
            height: 1.125rem;
            display: flex;
            justify-content: center;
            align-items: center;
            padding-top: 1.875rem;
            color: #707070;
            font-weight: 400;
            transition: 0.2s all;

            &:hover {
              color: #6095ff;
            }
          }
        }
      }
      .navItem:hover ul {
        height: 250px;
      }
    }

    .toggle {
      padding-top: 1.125rem;
      padding-right: 1.25rem;
      display: none;
      i {
        font-size: 25px;
      }
    }
  }
}
.mobileNav {
  width: 100%;
  li {
    padding: 15px;
    text-align: center;
  }
}

@media screen and (max-width: 1200px) {
  .topNav {
    width: 1024px !important;
  }
}
@media screen and (max-width: 1025px) {
  .topNav {
    width: 100% !important;
  }
  .navBar {
    display: none !important;
  }
  .toggle {
    display: block !important;
  }
  .topNav:hover ~ .curtain {
    height: 60px !important;
  }
}
</style>
