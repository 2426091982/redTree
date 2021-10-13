<template>
  <div class="cooperation">
    <!-- 轮播图模块 -->
    <Swiper />

    <div class="taber">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="合作院校" name="first">
          <div class="universities">
            <TitleBar title="合作院校" />

            <div class="universitiesMain">
              <el-row :gutter="40">
                <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                  <div class="company">
                    <div class="companyDetail">广东省高新技术高级技工学校</div>
                    <div class="lineBox"></div>
                    <p>
                      广东省高新技术职业培训学院成立于2008年，是一所培养中、高级技能人才的省属全日制省重点技工学校。
                      　　学校坐落在广州北站枢纽，广州新机场经济圈内，毗邻花都空港经济区、广州万达文化旅游城、花都汽车城、花都珠宝城、狮岭国际皮具城等大型工、商业园区，交通便利，环境优越，企业云集，可为学子提供良好的实习就业平台。
                    </p>
                    <button @click="toPath('/cooperationDetail')">
                      了解更多 >
                    </button>
                  </div>
                </el-col>
                <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                  <div class="companyImg">
                    <img src="@/assets/cooperation/universities-1.png" alt="" />
                  </div>
                </el-col>
              </el-row>
              <el-row :gutter="40">
                <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                  <div class="companyImg">
                    <img src="@/assets/cooperation/universities-2.png" alt="" />
                  </div>
                </el-col>
                <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                  <div class="company">
                    <div class="companyDetail">广东省交通运输技师学院</div>
                    <div class="lineBox"></div>
                    <p>
                      广东省交通运输技师学院（以下简称学院）创办于1960 年，2001
                      年与广州公路工程技工学校、广东省船舶工业技工学校、广东省船员技工学校合并。2003
                      年获评国家重点技工学校，2005 年晋升为高级技工学校，2010
                      年获评全国交通中等职业教育示范院校，2011
                      年晋升为技师学院，2014
                      年通过国家中等职业教育改革发展示范学校验收。学院隶属于广东省人力资源和社会保障厅管理，现为国家级高技能人才培训基地建设单位、广东省高技能人才培养基地、广东省高技能人才培训示范基地、中华人民共和国海事局内河船舶船员培训机构
                    </p>
                    <button @click="toPath('/cooperationDetail')">
                      了解更多 >
                    </button>
                  </div>
                </el-col>
              </el-row>
              <el-row :gutter="40">
                <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                  <div class="company">
                    <div class="companyDetail">
                      广州市高新医药与食品技工学校
                    </div>
                    <div class="lineBox"></div>
                    <p>
                      广州市高新医药与食品技工学校（简称高新医药），是高新教育集团投入巨资千万进行升级改造，专注医药和食品两大方面，隶属广州市人力资源和社会保障局的全日制技工学校。
                      　　学校位于广州市番禺区市广路288号，与长隆欢乐世界、祈福新村、广东工业大学南校区相邻，公交车、地铁接驳巴士直达校门口，地理环境优越，交通十分便利。
                    </p>
                    <button @click="toPath('/cooperationDetail')">
                      了解更多 >
                    </button>
                  </div>
                </el-col>
                <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                  <div class="companyImg">
                    <img src="@/assets/cooperation/universities-3.png" alt="" />
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="校企合作" name="second">
          <div class="enterprise">
            <TitleBar title="校企合作" style="marginTop:60px;" />
            <div class="content">
              <el-row :gutter="40">
                <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                  <h3>（一）酒店服务类</h3>
                  <p>
                    广州合兴大酒店有限公司、广东湖景金阁饮食有限公司、广州花都竹缘美食、广州金骏酒店有限公司、广州金联福餐饮有限公司、广州民航大酒店、广州福荟来餐饮服务有限公司广州豪苑酒店有限公司、广州华钜君悦酒店有限公司、中南民航经济发展公司芙蓉会议中心
                  </p>
                  <h3>（一）化妆品轻工业类</h3>
                  <p>
                    广州合兴大酒店有限公司、广东湖景金阁饮食有限公司、广州花都竹缘美食、广州金骏酒店有限公司、广州金联福餐饮有限公司、广州民航大酒店、广州福荟来餐饮服务有限公司广州豪苑酒店有限公司、广州华钜君悦酒店有限公司、中南民航经济发展公司芙蓉会议中心
                  </p>
                  <h3>（三）电子制造业类</h3>
                  <p>
                    广州科林电器有限公司、佛山鋐利电子有限公司、步步高教育电子有限公司、东莞清溪富崴电子厂、光宝电子（广州）有限公司、广东新宝电器股份有限公司、东莞欧珀精密电子有限公司、广州市尊浪电器有限公司、东莞库柏电子有限公司、深圳思纬市场资讯有限公司广州分公司、佛山顺德北滘塑料电器有限公司、比亚迪股份有限公司、广东泛仕达机电有限公司、广州南联航空食品有限公司、中山TCL制冷设备有限公司、海信广东空调有限公司、佛山振宣精密科技有限公司、广州市亿丰彩印包装有限公司、广州市博泰光学科技有限公司、广州帅著运动用品有限公司、上海苏博眼镜有限公司、广州奥博文具有限公司、广州市恒俊生态农业发展有限公司、广东云山仓储服务有限公司、广州碧源管业有限公司、广州市佳宏电子有限公司
                  </p>
                </el-col>
                <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                  <div class="companyImg">
                    <img src="@/assets/cooperation/enterprise-1.png" alt="" />
                  </div>
                </el-col>
              </el-row>
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
// 标题组件
import Swiper from "@/components/common/Swiper.vue";
export default {
  name: "Cooperation",
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
   toPath(path, order = "/first") {
      if (path == "/index" || path == "/newsDetail" || path == "/cooperationDetail") {
        order = "";
      }
      this.$router.push({
        path: path + `${order}`,
      });
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
  .universities {
    margin-top: 60px;
    div.universitiesMain {
      width: 80%;
      margin: 60px auto;
      .el-row {
        .el-col {
          margin-bottom: 40px;
          .companyImg {
            margin-bottom: 20px;
          }
          .company {
            margin-bottom: 20px;
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

            button {
              width: 120px;
              height: 40px;
              background: #ffffff;
              border: 1px solid #707070;
              border-radius: 6px;
              cursor: pointer;
              transition: all 0.2s;
              &:hover {
                background: #707070;
                color: #fff;
              }
            }
          }
        }
      }
    }
  }
  .enterprise {
    .content {
      width: 80%;
      margin: 60px auto;
      .el-row {
        .el-col {
          margin-bottom: 20px;
          h3 {
            font-size: 14px;
            padding: 10px 0;
          }

          p {
            font-size: 14px;
            padding: 10px 0;
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
