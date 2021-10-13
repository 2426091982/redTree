<template>
  <div class="footer">
    <div class="footerMain">
      <div class="Breadcrumbs">
        {{ $props.Breadcrumbs }}
      </div>
      <div class="nav">
        <el-row>
          <el-col :md="16" :sm="16" :xs="12">
            <el-row>
              <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
                <dl>
                  <dt>关于红树林</dt>
                  <dd @click="toPath('/aboutUs', '/first')">公司简介</dd>
                  <dd @click="toPath('/aboutUs', '/second')">发展理念</dd>
                  <dd @click="toPath('/aboutUs', '/third')">联系我们</dd>
                </dl>
              </el-col>
              <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
                <dl>
                  <dt >新闻与资讯</dt>
                  <dd @click="toPath('/information', '/first')">公司新闻</dd>
                  <dd @click="toPath('/information', '/second')">行业资讯</dd>
                </dl>
              </el-col>
              <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
                <dl>
                  <dt>教育体系</dt>
                  <dd @click="toPath('/education', '/first')">职业教育</dd>
                  <dd @click="toPath('/education', '/second')">教育培训</dd>
                </dl>
              </el-col>
              <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
                <dl>
                  <dt>携手合作</dt>
                  <dd @click="toPath('/cooperation', '/first')">合作院校</dd>
                  <dd @click="toPath('/cooperation', '/second')">校企合作</dd>
                </dl>
              </el-col>
            </el-row>
          </el-col>
          <el-col :md="8" :sm="8" :xs="12">
            <div class="erweima">
              <img src="@/assets/index/erweima.png" alt="" />
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="copy">
      <p>广州红树林教育科技有限公司 All Right Reserved.</p>
      <p>备案编号:粤ICP备19148605号</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {
    Breadcrumbs: String,
  },
  data() {
    return {};
  },
  components: {},
  methods: {
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
.footer {
  background-color: #f2f2f2;
  width: 100%;
  .footerMain {
    width: 1200px;
    margin: 0 auto;

    .Breadcrumbs {
      height: 70px;
      border-bottom: 2px solid #d7d7d7;
      padding: 20px;
      font-size: 18px;
    }

    .nav {
      padding: 20px;
      .el-row {
        .el-col {
          .el-row {
            .el-col {
              dl {
                dt {
                  font-weight: 700;
                  font-size: 16px;
                  margin-bottom: 20px;
                  cursor: pointer;
                  &:hover {
                  }
                }

                dd {
                  font-size: 14px;
                  margin-bottom: 20px;
                  cursor: pointer;
                  color: #707070;
                  &:hover {
                    color: #333;
                  }
                }
              }
            }
          }
          .erweima {
            display: flex;
            justify-content: center;
            align-items: center;
            img {
              width: 160px;
              height: 160px;
            }
          }
        }
      }
    }
  }
  .copy {
    height: 60px;
    background-color: #e6e6e6;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    p {
      font-size: 14px;
    }
  }
}
</style>

<style lang="less" scope>
@media screen and (max-width: 1200px) {
  .footerMain {
    width: 1024px !important;
  }
}
@media screen and (max-width: 1024px) {
  .footerMain {
    width: 100% !important;
  }
}
@media screen and (max-width: 760px) {
  .nav {
    .el-row {
      .el-col {
        dl {
          dt {
            font-weight: 700;
            font-size: 16px;
            margin-bottom: 20px;
          }
          dd {
            display: none;
          }
        }
      }
    }
  }
}
</style>
