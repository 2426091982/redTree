<template>
  <div class="information">
    <!-- 轮播图模块 -->
    <Swiper />

    <div class="taber">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="公司新闻" name="first">
          <div class="news">
            <TitleBar title="公司新闻" style="marginTop:60px;" />
            <div class="News">
              <div class="information">
                <el-row :gutter="20">
                  <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                    <div class="item" @click="toPath('/newsDetail')">
                      <div class="top">
                        <div class="tips">资讯</div>
                        <img src="@/assets/index/news-1.png" alt="" />
                      </div>
                      <div class="botto">
                        <h3>职场人际交往</h3>
                        <p class="time">2021-9-8</p>
                        <p class="text">
                          01职场人际交往技巧一作为一名职场人，你的技能是否能够顺利完成领导交代的工作并不是最让人头疼的，能否处理好职场人...
                        </p>
                      </div>
                      <div class="linkTo">
                        <div class="tips">职场技巧</div>
                        <div class="right">
                          <a href="#">View</a>
                          <i class="iconfont icon-jiantou_xiangyou"></i>
                        </div>
                      </div>
                    </div>
                  </el-col>
                  <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                    <div class="item" @click="toPath('/newsDetail')">
                      <div class="top">
                        <div class="tips">资讯</div>
                        <img src="@/assets/index/news-1.png" alt="" />
                      </div>
                      <div class="botto">
                        <h3>职场人际交往</h3>
                        <p class="time">2021-9-8</p>
                        <p class="text">
                          01职场人际交往技巧一作为一名职场人，你的技能是否能够顺利完成领导交代的工作并不是最让人头疼的，能否处理好职场人...
                        </p>
                      </div>
                      <div class="linkTo">
                        <div class="tips">职场技巧</div>
                        <div class="right">
                          <a href="#">View</a>
                          <i class="iconfont icon-jiantou_xiangyou"></i>
                        </div>
                      </div>
                    </div>
                  </el-col>
                  <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                    <div class="item" @click="toPath('/newsDetail')">
                      <div class="top">
                        <div class="tips">资讯</div>
                        <img src="@/assets/index/news-1.png" alt="" />
                      </div>
                      <div class="botto">
                        <h3>职场人际交往</h3>
                        <p class="time">2021-9-8</p>
                        <p class="text">
                          01职场人际交往技巧一作为一名职场人，你的技能是否能够顺利完成领导交代的工作并不是最让人头疼的，能否处理好职场人...
                        </p>
                      </div>
                      <div class="linkTo">
                        <div class="tips">职场技巧</div>
                        <div class="right">
                          <a href="#">View</a>
                          <i class="iconfont icon-jiantou_xiangyou"></i>
                        </div>
                      </div>
                    </div>
                  </el-col>
                  <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                    <div class="item" @click="toPath('/newsDetail')">
                      <div class="top">
                        <div class="tips">资讯</div>
                        <img src="@/assets/index/news-2.png" alt="" />
                      </div>
                      <div class="botto">
                        <h3>职场人际交往</h3>
                        <p class="time">2021-9-8</p>
                        <p class="text">
                          01职场人际交往技巧一作为一名职场人，你的技能是否能够顺利完成领导交代的工作并不是最让人头疼的，能否处理好职场人...
                        </p>
                      </div>
                      <div class="linkTo">
                        <div class="tips">职场技巧</div>
                        <div class="right">
                          <a href="#">View</a>
                          <i class="iconfont icon-jiantou_xiangyou"></i>
                        </div>
                      </div>
                    </div>
                  </el-col>
                  <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                    <div class="item" @click="toPath('/newsDetail')">
                      <div class="top">
                        <div class="tips">资讯</div>
                        <img src="@/assets/index/news-2.png" alt="" />
                      </div>
                      <div class="botto">
                        <h3>职场人际交往</h3>
                        <p class="time">2021-9-8</p>
                        <p class="text">
                          01职场人际交往技巧一作为一名职场人，你的技能是否能够顺利完成领导交代的工作并不是最让人头疼的，能否处理好职场人...
                        </p>
                      </div>
                      <div class="linkTo">
                        <div class="tips">职场技巧</div>
                        <div class="right">
                          <a href="#">View</a>
                          <i class="iconfont icon-jiantou_xiangyou"></i>
                        </div>
                      </div>
                    </div>
                  </el-col>
                  <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                    <div class="item" @click="toPath('/newsDetail')">
                      <div class="top">
                        <div class="tips">资讯</div>
                        <img src="@/assets/index/news-2.png" alt="" />
                      </div>
                      <div class="botto">
                        <h3>职场人际交往</h3>
                        <p class="time">2021-9-8</p>
                        <p class="text">
                          01职场人际交往技巧一作为一名职场人，你的技能是否能够顺利完成领导交代的工作并不是最让人头疼的，能否处理好职场人...
                        </p>
                      </div>
                      <div class="linkTo">
                        <div class="tips">职场技巧</div>
                        <div class="right">
                          <a href="#">View</a>
                          <i class="iconfont icon-jiantou_xiangyou"></i>
                        </div>
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </div>
              <div class="more">
                <button>上一页</button>
                <button>下一页</button>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="行业动态" name="second">
          <div class="news">
            <TitleBar title="行业动态" style="marginTop:60px;" />
            <div class="News">
              <div class="information">
                <el-row :gutter="20">
                  <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                    <div class="item" @click="toPath('/newsDetail')">
                      <div class="top">
                        <div class="tips">资讯</div>
                        <img src="@/assets/index/news-1.png" alt="" />
                      </div>
                      <div class="botto">
                        <h3>职场人际交往</h3>
                        <p class="time">2021-9-8</p>
                        <p class="text">
                          01职场人际交往技巧一作为一名职场人，你的技能是否能够顺利完成领导交代的工作并不是最让人头疼的，能否处理好职场人...
                        </p>
                      </div>
                      <div class="linkTo">
                        <div class="tips">职场技巧</div>
                        <div class="right">
                          <a href="#">View</a>
                          <i class="iconfont icon-jiantou_xiangyou"></i>
                        </div>
                      </div>
                    </div>
                  </el-col>
                  <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                    <div class="item" @click="toPath('/newsDetail')">
                      <div class="top">
                        <div class="tips">资讯</div>
                        <img src="@/assets/index/news-1.png" alt="" />
                      </div>
                      <div class="botto">
                        <h3>职场人际交往</h3>
                        <p class="time">2021-9-8</p>
                        <p class="text">
                          01职场人际交往技巧一作为一名职场人，你的技能是否能够顺利完成领导交代的工作并不是最让人头疼的，能否处理好职场人...
                        </p>
                      </div>
                      <div class="linkTo">
                        <div class="tips">职场技巧</div>
                        <div class="right">
                          <a href="#">View</a>
                          <i class="iconfont icon-jiantou_xiangyou"></i>
                        </div>
                      </div>
                    </div>
                  </el-col>
                  <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                    <div class="item" @click="toPath('/newsDetail')">
                      <div class="top">
                        <div class="tips">资讯</div>
                        <img src="@/assets/index/news-1.png" alt="" />
                      </div>
                      <div class="botto">
                        <h3>职场人际交往</h3>
                        <p class="time">2021-9-8</p>
                        <p class="text">
                          01职场人际交往技巧一作为一名职场人，你的技能是否能够顺利完成领导交代的工作并不是最让人头疼的，能否处理好职场人...
                        </p>
                      </div>
                      <div class="linkTo">
                        <div class="tips">职场技巧</div>
                        <div class="right">
                          <a href="#">View</a>
                          <i class="iconfont icon-jiantou_xiangyou"></i>
                        </div>
                      </div>
                    </div>
                  </el-col>
                  <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                    <div class="item" @click="toPath('/newsDetail')">
                      <div class="top">
                        <div class="tips">资讯</div>
                        <img src="@/assets/index/news-2.png" alt="" />
                      </div>
                      <div class="botto">
                        <h3>职场人际交往</h3>
                        <p class="time">2021-9-8</p>
                        <p class="text">
                          01职场人际交往技巧一作为一名职场人，你的技能是否能够顺利完成领导交代的工作并不是最让人头疼的，能否处理好职场人...
                        </p>
                      </div>
                      <div class="linkTo">
                        <div class="tips">职场技巧</div>
                        <div class="right">
                          <a href="#">View</a>
                          <i class="iconfont icon-jiantou_xiangyou"></i>
                        </div>
                      </div>
                    </div>
                  </el-col>
                  <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                    <div class="item" @click="toPath('/newsDetail')">
                      <div class="top">
                        <div class="tips">资讯</div>
                        <img src="@/assets/index/news-2.png" alt="" />
                      </div>
                      <div class="botto">
                        <h3>职场人际交往</h3>
                        <p class="time">2021-9-8</p>
                        <p class="text">
                          01职场人际交往技巧一作为一名职场人，你的技能是否能够顺利完成领导交代的工作并不是最让人头疼的，能否处理好职场人...
                        </p>
                      </div>
                      <div class="linkTo">
                        <div class="tips">职场技巧</div>
                        <div class="right">
                          <a href="#">View</a>
                          <i class="iconfont icon-jiantou_xiangyou"></i>
                        </div>
                      </div>
                    </div>
                  </el-col>
                  <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                    <div class="item" @click="toPath('/newsDetail')">
                      <div class="top">
                        <div class="tips">资讯</div>
                        <img src="@/assets/index/news-2.png" alt="" />
                      </div>
                      <div class="botto">
                        <h3>职场人际交往</h3>
                        <p class="time">2021-9-8</p>
                        <p class="text">
                          01职场人际交往技巧一作为一名职场人，你的技能是否能够顺利完成领导交代的工作并不是最让人头疼的，能否处理好职场人...
                        </p>
                      </div>
                      <div class="linkTo">
                        <div class="tips">职场技巧</div>
                        <div class="right">
                          <a href="#">View</a>
                          <i class="iconfont icon-jiantou_xiangyou"></i>
                        </div>
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </div>
              <div class="more">
                <button>上一页</button>
                <button>下一页</button>
              </div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
// 顶部导航栏
import TopNav from "@/components/common/TopNav.vue";
// 底部组件
import Footer from "@/components/common/Footer.vue";
// 标题组件
import TitleBar from "@/components/common/TitleBar.vue";
// 轮播图
import Swiper from "@/components/common/Swiper.vue";
export default {
  name: "Information",
  props: {},
  data() {
    return {
      activeName: "first",
    };
  },
  components: {
    TopNav,
    Footer,
    TitleBar,
    Swiper,
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
  mounted() {
    if (this.$route.params.order) {
      this.activeName = this.$route.params.order;
    }
  },
  watch: {
    "$route.path": function(newVal, oldVal) {
      if (this.$route.params.order) {
        this.activeName = this.$route.params.order;
      }
    },
  },
};
</script>
<style lang="less" scoped>
.bg {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}
.taber {
  width: 1200px;
  margin: 0 auto;
  .News {
    width: 1200px;
    margin: 0 auto;
    padding: 40px;
    .information {
      .el-row {
        .el-col {
          .item {
            background-color: #f8f8f8;
            margin-top: 20px;
            .top {
              position: relative;
              overflow: hidden;
              height: 250px;
              cursor: pointer;
              .tips {
                z-index: 2;
                width: 60px;
                height: 25px;
                position: absolute;
                left: 0;
                top: 0;
                background-color: #797979;
                color: #fff;
                text-align: center;
                line-height: 25px;
                font-size: 12px;
              }

              img {
                transition: all 0.2s;
              }
              img:hover {
                transform: scale(1.2);
              }
            }

            .botto {
              padding: 15px;
              h3 {
                font-size: 16px;
              }

              .time {
                padding: 10px 0;
                font-size: 12px;
              }
              .text {
                font-size: 12px;
              }
            }

            .linkTo {
              padding: 15px;
              display: flex;
              justify-content: space-between;
              .tips {
                width: 60px;
                height: 24px;
                border: 1px solid #707070;
                opacity: 1;
                border-radius: 4px;
                font-size: 10px;
                line-height: 24px;
                text-align: center;
                font-weight: 700;
              }

              .right {
                display: flex;
                justify-content: center;
                align-items: center;
                a {
                  font-size: 10px;
                  margin-right: 20px;
                  font-weight: 700;
                }

                i.iconfont {
                  font-size: 20px;
                  cursor: pointer;
                }
              }
            }
          }
        }
      }
    }
    .more {
      margin: 60px auto;
      width: 70%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      button {
        height: 50px;
        width: 30%;
        background: #ffffff;
        border: 1px solid #707070;
        opacity: 1;
        border-radius: 0px;
        font-size: 14px;
        cursor: pointer;
        transition: all 0.2s;
        &:hover {
          background-color: #707070;
          color: #fff;
        }
      }
    }
  }
}
</style>

<style lang="less" scope>
@media screen and (max-width: 1200px) {
  .taber,
  .News {
    width: 1024px !important;
  }
}
@media screen and (max-width: 1024px) {
  .taber,
  .News {
    width: 100% !important;
  }
}
</style>
