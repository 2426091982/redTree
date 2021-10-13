<template>
  <div class="AboutUs">
    <TitleBox title="广州红树林教育有限科技公司" text="" />
    <div class="taber">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="公司简介" name="first">
          <TitleBar title="公司简介" style="margin-top:60px" />

          <!-- 公司简介模块 -->
          <div class="CompanyProfile">
            <el-row :gutter="30">
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <div class="company">
                  <p>
                    广州红树林教育科技有限公司隶属于广州市高新教育集团，专业从事教育投资和教学管理输出，业务涵盖技能培训、
                    就业输出、专业共建、学校托管等领域。目前拥有合作职业院校20余所，在册学生达10万+。
                    公司以“打造有世界影响力的
                    技能教育品牌”为目标，整合优质资源，探索出与职业学校联合办学的管理新模式。
                    我们以对客户负责、对奋斗者负责、对社会负责的企业价值观，致力培养具有中国灵魂和国际视野的优秀学生为目标，
                    致力成为中国知名培养和输送优秀职业人的基地，嫁接各类名校，植入先进理念，大胆实践，积极创新办学模式，目前已
                    经总结和形成了具有红树林特征的办学经验，取得了辉煌的成绩。
                    “聘歌云职场”是广州红树林教育科技有限公司联合各大高校打造的“资源整合+共享服务”的新型人力资源服务创新
                    平台。整合高校人才资源、企业资源，构建一个新的人力资源聚合体。
                    根据多年办学经验和人才输出经历探索出院校和企
                    业的人才对接新模式，实现“人才共享”。借助大平台的人力资源数据库及流量优势，抢占全国人才招聘市场，将“聘歌
                    云职场”发展成为一个人力资源服务市场的新型行业独角兽。
                    企业愿景：打造最有温度的大数据就业平台。
                    企业使命：让企业没有难找的人才。
                    企业核心价值观：对客户负责、对奋斗者负责、对社会负责。
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
        </el-tab-pane>
        <el-tab-pane label="发展理念" name="second">
          <TitleBar title="发展理念" style="margin-top:60px" />
          <div class="plate">
            <el-row :gutter="20">
              <el-col :md="12">
                <el-row :gutter="20">
                  <el-col>
                    <div class="item">
                      <div class="number">使命</div>
                      <div class="text">
                        培养适合企业发展需求的合格职业人
                      </div>
                    </div>
                  </el-col>
                  <el-col>
                    <div class="item">
                      <div class="number">愿景</div>
                      <div class="text">
                        成为中国知名培养和输送优秀职业人的基地
                      </div>
                    </div>
                  </el-col>
                  <el-col>
                    <div class="item">
                      <div class="number">宗旨</div>
                      <div class="text">
                        对客户负责、对奋斗者负责、对社会负责
                      </div>
                    </div>
                  </el-col>
                  <el-col>
                    <div class="item">
                      <div class="number">理念</div>
                      <div class="text">
                        诚信、敬业、创新、共赢
                      </div>
                    </div>
                  </el-col>
                  <el-col>
                    <div class="item">
                      <div class="number">核心</div>
                      <div class="text">
                        价值观：追求价值是我们工作的起点
                      </div>
                    </div>
                  </el-col>
                  <el-col>
                    <div class="item">
                      <div class="number">核心</div>
                      <div class="text">
                        价值观：创造价值是我们人生的动力
                      </div>
                    </div>
                  </el-col>
                  <el-col>
                    <div class="item">
                      <div class="number">核心</div>
                      <div class="text">
                        价值观：实现价值是我们恒久的追求的动力
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </el-col>
              <el-col :md="12">
                <div>
                  <img src="@/assets/cooperation/enterprise-1.png" alt="" />
                </div>
              </el-col>
            </el-row>
          </div>
        </el-tab-pane>
        <el-tab-pane label="联系我们" name="third">
          <TitleBar title="联系我们" style="margin-top:60px" />
          <div class="plate">
            <el-row :gutter="20">
              <el-col :md="12">
                <div class="company">
                  <div class="companyDetail">关于红树林教育科技公司</div>
                  <div class="lineBox"></div>
                </div>
                <el-row :gutter="20">
                  <el-col>
                    <div class="item">
                      <div class="number">核心</div>
                      <div class="text">
                        价值观：追求价值是我们工作的起点
                      </div>
                    </div>
                  </el-col>
                  <el-col>
                    <div class="item">
                      <div class="number">核心</div>
                      <div class="text">
                        价值观：创造价值是我们人生的动力
                      </div>
                    </div>
                  </el-col>
                  <el-col>
                    <div class="item">
                      <div class="number">核心</div>
                      <div class="text">
                        价值观：实现价值是我们恒久的追求的动力
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </el-col>
              <el-col :md="12">
                <div>
                  <img src="@/assets/aboutUs/map.png" alt="" />
                </div>
              </el-col>
            </el-row>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
// 标题背景组件
import TitleBox from "@/components/common/TitleBox.vue";
import TitleBar from "@/components/common/TitleBar.vue";
// 顶部导航栏
import TopNav from "@/components/common/TopNav.vue";
// 底部组件
import Footer from "@/components/common/Footer.vue";
export default {
  name: "AboutUs",
  props: {},
  data() {
    return {
      activeName: "first",
    };
  },
  components: { TitleBox, TopNav, Footer, TitleBar },
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
.AboutUs {
  .taber {
    width: 1200px;
    margin: 0 auto;
    // 公司简介模块
    div.CompanyProfile {
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
    // 发展理念
    // 业务板块
    .plate {
      width: 80%;
      margin: 60px auto;
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
      }
      .el-row {
        .el-col {
          .item {
            padding: 10px;
            background-color: #6095ff;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 5px;
            margin-bottom: 20px;

            .number {
              height: 40px;
              width: 45px;
              background-color: #fff;
              text-align: center;
              line-height: 40px;
              color: #6095ff;
              border-radius: 5px;
              margin-right: 10px;
            }

            .text {
              flex: 1;
              color: #fff;
            }
          }
        }
      }
    }
  }
}
</style>

<style lang="less" scope>
@media screen and (max-width: 1200px) {
  .taber {
    width: 1024px !important;
  }
}
@media screen and (max-width: 1024px) {
  .taber {
    width: 100% !important;
  }
}
</style>
