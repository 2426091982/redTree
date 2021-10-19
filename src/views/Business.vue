<template>
  <div class="Business">
    <!-- 轮播图模块 -->
    <Swiper />
    <!-- tab切换 -->
    <div class="taber">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="业务板块" name="first">
          <div class="plate">
            <TitleBar title="业务板块" />
            <img src="@/assets/business/business-1.png" alt="" />
            <el-row :gutter="20">
              <el-col :md="12">
                <div class="item">
                  <div class="number">1</div>
                  <div class="text">
                    教育投资： 联合专业院校，进行教育合作投资
                  </div>
                </div>
              </el-col>
              <el-col :md="12">
                <div class="item">
                  <div class="number">2</div>
                  <div class="text">
                    合作办学： 联合教育机构共同合作开设学校
                  </div>
                </div>
              </el-col>
              <el-col>
                <div class="item">
                  <div class="number">3</div>
                  <div class="text">
                    专业共建：
                    联合专业院校建设专业，以教学管理或专业设备进行投资
                  </div>
                </div>
              </el-col>
              <el-col>
                <div class="item">
                  <div class="number">4</div>
                  <div class="text">
                    技能培训： 承接院校的学校技能考证，职业培训
                  </div>
                </div>
              </el-col>
              <el-col>
                <div class="item">
                  <div class="number">5</div>
                  <div class="text">
                    实习就业： 对接学生专业对口的实习就业岗位安置
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-tab-pane>
        <el-tab-pane label="院校开发" name="second">
          <div class="development">
            <div class="developmentMain">
              <TitleBar title="院校开发" />
              <img src="@/assets/business/business-2.png" alt="" />
            </div>
            <ul>
              <li>
                <i class="iconfont icon-yousanjiaoxing"></i>
                <p>
                  通过开发合作院校，利用我们优势核心竞争力电子商务专业电子商务专业、幼儿教育专业、工业机器人专业项目化教学，共同促进合作项目。
                </p>
              </li>
              <li>
                <i class="iconfont icon-yousanjiaoxing"></i>
                <p>
                  电子商务专业专注于培养具备现代管理和信息经济理念，掌握信息技术和电子服务综合技能，具有扎实的专业基础和良好的知识结构，具备一定的互联网创新创业素质，能适应现代社会商务运营、专业管理和技术服务需要的复合型、应用型、创新型专业人才。
                </p>
              </li>
              <li>
                <i class="iconfont icon-yousanjiaoxing"></i>
                <p>
                  幼儿教育专业专注于培养具有良好思想道德品质、扎实的学前教育专业知识，能在保教机构、教育行政部门以及其他相关机构从事保教、研究和管理等方面工作的复合型人才。
                </p>
              </li>
              <li>
                <i class="iconfont icon-yousanjiaoxing"></i>
                <p>
                  工业机器人专业专注于培养德、智、体、美全面发展，具有良好职业道德和人文素养，掌握机械制图、机械设计、电工与电子、电气控制、液压与气动、PLC
                  应用技术、工业机器人应用技术等基本知识，具备工业机器人系统应用能力，从事工业机器人及工作站系统的安装与调试、维护与维修、技术与生产管理、服务与营销等工作的高素质技术技能人才。
                </p>
              </li>
            </ul>
          </div>
        </el-tab-pane>
        <el-tab-pane label="服务模式" name="third">
          <div class="server">
            <TitleBar title="服务模式" />
            <img src="@/assets/business/business-3.png" alt="" />
            <el-row :gutter="20">
              <el-col>
                <div class="item">
                  <div class="number">1</div>
                  <div class="text">
                    勤工俭学：组织工作以高标准，高要求的原则，确保我司与合作企业项目的顺利运行，多方位提升学生综合素质；
                  </div>
                </div>
              </el-col>
              <el-col>
                <div class="item">
                  <div class="number">2</div>
                  <div class="text">
                    学校开发：合作办学、专业共建的深度合作；学生实习，就业安置合作；短期勤工俭学（双11，双12、寒暑假）合作；
                  </div>
                </div>
              </el-col>
              <el-col>
                <div class="item">
                  <div class="number">3</div>
                  <div class="text">
                    培训就业输出：常年开发合作伙伴及人才，确保人才输送；规范管理，服务好企业及人才；
                  </div>
                </div>
              </el-col>
              <el-col>
                <div class="item">
                  <div class="number">4</div>
                  <div class="text">
                    校友服务：为校友提供终生的免费就业推荐工作；
                  </div>
                </div>
              </el-col>
              <el-col>
                <div class="item">
                  <div class="number">5</div>
                  <div class="text">
                    职业核心能力培训体系：开展大学生职业核心能力培训；开展企业岗位能力提升培训。
                  </div>
                </div>
              </el-col>
              <el-col>
                <div class="item">
                  <div class="number">6</div>
                  <div class="text">
                    学历提升
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-tab-pane>
        <el-tab-pane label="扩展业务" name="fourth">
          <div class="extension">
            <div class="extensionMain">
              <TitleBar title="扩展业务" />
              <img src="@/assets/business/business-4.png" alt="" />
            </div>
            <ul>
              <li>
                <i class="iconfont icon-yousanjiaoxing"></i>
                <p>
                  在加强高层次人才引进方面，重点引进学科领军人物和创新团队、高层次青年人才和急需紧缺青年专门人才。对紧缺的特殊人才，开辟专门渠道，实现精准引进，科学制定引才规划，明确引才目标任务、重点领域和优先次序。
                </p>
              </li>
              <li>
                <i class="iconfont icon-yousanjiaoxing"></i>
                <p>
                  支持高层次人才承担科技计划项目及课题，深度参与科研攻关和技术创新，发挥用人主体作用，完善支持配套政策，为高层次人才在生活上提供更多便利，在工作上提供更多机会和更大舞台，创新高层次人才组织和管理模式。
                </p>
              </li>
              <li>
                <i class="iconfont icon-yousanjiaoxing"></i>
                <p>
                  在人才输出方面，不断通过综合实训、学期实训、顶岗实训，加强学生动手操作能力，以此来提高学生的技能专业水平。在引领学生走向职场时，确保人才培养标准与真实产业需求无缝对接，提升学生的就业能力和创新创业能力。
                </p>
              </li>
              <li>
                <i class="iconfont icon-yousanjiaoxing"></i>
                <p>
                  通过严格把控专业建设标准、人才培养方案、就业流程体系等服务环节，已经形成良好有序的精准生源吸引到应用人才输出的高效持续轨道，为各类型企业输出更多有用、实用的未来栋梁之才。
                </p>
              </li>
            </ul>
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
// 标题组件
import Swiper from "@/components/common/Swiper.vue";
export default {
  name: "Business",
  props: {},
  data() {
    return {
      activeName: "first",
    };
  },
  components: { TopNav, Footer, TitleBar, Swiper },
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
  .el-tabs {
    .el-tab-pane {
      // 业务板块
      .plate,
      .server {
        width: 80%;
        margin: 60px auto;
        img {
          margin: 60px 0;
        }

        .el-row {
          .el-col {
            .item {
              padding: 10px;
              background-color: #6095ff;
              display: flex;
              justify-content: center;
              align-items: center;
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
      .development,
      .extension {
        // 院校开发
        .developmentMain,
        .extensionMain {
          width: 80%;
          margin: 60px auto;
          img {
            margin: 60px 0;
          }
        }
        ul {
          background-color: #6095ff;
          padding: 50px 0;
          margin-bottom: 60px;
          li {
            width: 80%;
            margin: 0 auto;
            display: flex;
            i {
              color: #fff;
              padding-right: 10px;
            }
            p {
              color: #fff;
              margin-bottom: 20px;
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
