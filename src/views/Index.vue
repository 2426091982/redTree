<template>
  <div>
    <Swiper />
    <!-- 公司简介模块 -->
    <div class="CompanyProfile">
      <el-row :gutter="30">
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <div class="company">
            <div class="companyDetail">关于红树林教育科技公司</div>
            <div class="lineBox"></div>
            <p>
              广州红树林教育科技有限公司隶属于广州市高新教育集团，专业从事教育投资和教学管理输出，业务涵盖技能培训、
              就业输出、专业共建、学校托管等领域。目前拥有合作职业院校20余所，在册学生达10万+。
              公司以“打造有世界影响力的
              技能教育品牌”为目标，整合优质资源，探索出与职业学校联合办学的管理新模式。
              我们以对客户负责、对奋斗者负责、对社会负责的企业价值观，致力培养具有中国灵魂和国际视野的优秀学生为目标，
              致力成为中国知名培养和输送优秀职业人的基地，嫁接各类名校，植入先进理念，大胆实践，积极创新办学模式，目前已
              经总结和形成了具有红树林特征的办学经验，取得了辉煌的成绩。
            </p>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <div class="companyImg">
            <img src="@/assets/index/company.png" alt="" />
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 关于我们模块 -->
    <div class="AboutUS">
      <TitleBar title="关于我们"></TitleBar>
      <p>
        公司以“打造有世界影响力的
        技能教育品牌”为目标，整合优质资源，探索出与职业学校联合办学的管理新模式。
        我们以对客户负责、对奋斗者负责、对社会负责的企业价值观，致力培养具有中国灵魂和国际视野的优秀学生为目标，
        致力成为中国知名培养和输送优秀职业人的基地，嫁接各类名校，植入先进理念，大胆实践，积极创新办学模式，目前已
        经总结和形成了具有红树林特征的办学经验，取得了辉煌的成绩。
      </p>
      <div class="more" @click="$router.push('/aboutUs/first')">
        了解更多<span>></span>
      </div>
      <div class="aboutBox">
        <el-row>
          <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
            <div>合作院校</div>
            <h3>10余所</h3>
          </el-col>
          <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
            <div>合作企业</div>
            <h3>40多家</h3>
          </el-col>
          <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
            <div>教职员工</div>
            <h3>800+</h3>
          </el-col>
          <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
            <div>在册学生</div>
            <h3>10000+</h3>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- 教育模块 -->
    <div class="Education">
      <div class="dividerBox">
        <div class="line">
          <span></span>
        </div>
        <h3>教育为本</h3>
        <div class="line">
          <span></span>
        </div>
      </div>
      <p>整合优质资源，输送优秀职业人</p>
      <div class="typeBox">
        <el-row :gutter="100">
          <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
            <div>高新大讲堂</div>
            <div class="boxLine"></div>
            <p>每月定期职场大讲堂<br />提升校友综合实力</p>
          </el-col>
          <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
            <div>培养再就业</div>
            <div class="boxLine"></div>
            <p>高端岗位职业培训<br />进行二次就业服务</p>
          </el-col>
          <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
            <div>天使投资</div>
            <div class="boxLine"></div>
            <p>为有想法有创意校友<br />联合企业定点投资</p>
          </el-col>
          <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
            <div>增值服务</div>
            <div class="boxLine"></div>
            <p>学历提升技能提升<br />各种类型平台服务</p>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- 新闻资讯 -->
    <div class="News">
      <TitleBar title="新闻资讯" />
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
                <img src="@/assets/index/news-3.png" alt="" />
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
        <button @click="toPath('/information', '/first')">更多新闻</button>
        <button @click="toPath('/information', '/second')">更多资讯</button>
      </div>
    </div>
  </div>
</template>

<script>
// 顶部导航栏
import TopNav from "@/components/common/TopNav.vue";
// 标题组件
import TitleBar from "@/components/common/TitleBar.vue";
// 底部组件
import Footer from "@/components/common/Footer.vue";
// 底部组件
import Swiper from "@/components/common/Swiper.vue";
export default {
  name: "Index",
  data() {
    return {};
  },
  components: {
    TopNav,
    TitleBar,
    Footer,
    Swiper,
  },
  mounted() {},
  methods: {
    toPath(path, order = "/first") {
      if (
        path == "/index" ||
        path == "/newsDetail" ||
        path == "/cooperationDetail" 
      ) {
        order = "";
      }
      this.$router.push({
        path: path + `${order}`,
      });
    },
  },
};
</script>

<style lang="less" scope>
// 公司简介模块
div.CompanyProfile {
  width: 1200px;
  margin: 0 auto;
  padding: 50px;
  .el-row {
    .el-col {
      .company {
        .companyDetail {
          font-size: 18px;
          font-weight: 700;
        }

        .lineBox {
          margin: 16px 0;
          height: 2px;
          width: 370px;
          background-color: #707070;
        }

        p {
          font-size: 14px;
          line-height: 30px;
          padding-bottom: 20px;
        }
      }
    }
  }
}
// 关于我们模块
.AboutUS {
  width: 1200px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    width: 80%;
    padding: 35px 0;
    font-size: 14px;
    color: #000;
    line-height: 30px;
  }

  .more {
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
      color: #6095ff;
    }
  }
  .aboutBox {
    width: 100%;
    margin-top: 70px;
    .el-col {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 20px 0;
      div {
        font-size: 16px;
      }
      h3 {
        font-size: 30px;
      }
    }
  }
}
// 教育模块
.Education {
  width: 1200px;
  margin: 0 auto;
  background-image: url("~@/assets/index/educationBg.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 50px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .dividerBox {
    display: flex;
    width: 100%;
    margin-bottom: 30px;
    .line {
      flex: 1;
      span {
        display: inline-block;
        height: 2px;
        opacity: 0.5;
        width: 100%;
        background-color: #fff;
      }
    }

    h3 {
      width: 150px;
      text-align: center;
      color: #fff;
      font-size: 24px;
    }
  }
  .el-divider {
    margin-top: 100px;
    margin-bottom: 35px;
    h2 {
      // color: #fff;
    }
  }

  p {
    color: #fff;
  }

  .typeBox {
    width: 95%;
    margin-bottom: 100px;
    .el-row {
      .el-col {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        div {
          font-size: 16px;
          color: #fff;
          font-weight: 700;
          margin-top: 100px;
        }

        .boxLine {
          margin: 20px 0;
          height: 2px;
          width: 36px;
          background-color: #fff;
        }

        p {
          font-size: 14px;
          text-align: center;
        }
      }
    }
  }
}
//新闻模块
.News {
  width: 1200px;
  margin: 40px auto;
  padding: 20px;
  .information {
    margin-top: 40px;
    .el-row {
      .el-col {
        .item {
          background-color: #f8f8f8;
          transition: all 0.2s;
          margin-top: 20px;
          cursor: pointer;
          &:hover {
            background-color: #f2f2f2;
          }
          &:hover img {
            transform: scale(1.2);
          }
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
              &:hover a,
              &:hover i {
                color: #6095ff;
              }

              a {
                font-size: 10px;
                margin-right: 20px;
                font-weight: 700;
                transition: all 0.2s;
              }

              i.iconfont {
                transition: all 0.2s;

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
    justify-content: center;
    align-items: center;
    button {
      width: 170px;
      height: 40px;
      background: #ffffff;
      border: 1px solid #707070;
      opacity: 1;
      border-radius: 0px;
      font-size: 14px;
      margin: 0 40px;
      cursor: pointer;
      transition: all 0.2s;
      &:hover {
        background-color: #707070;
        color: #fff;
      }
    }
  }
}
</style>

<style lang="less" scope>
@media screen and (max-width: 1200px) {
  .CompanyProfile,
  .AboutUS,
  .Education,
  .News {
    width: 1024px !important;
  }
  // 公司模块修改
  .company {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .lineBox {
      width: 300px !important;
    }
  }
}
@media screen and (max-width: 1024px) {
  .CompanyProfile,
  .AboutUS,
  .Education,
  .News {
    width: 100% !important;
  }
}
</style>

<style lang="less" scope>
.el-divider {
  // background-color: #fff;
}
.el-divider__text is-center {
  background-color: none;
}
</style>
