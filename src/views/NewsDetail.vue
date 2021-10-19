<template>
  <div class="NewsDetail">
    <TitleBox title="" text="" />

    <div class="content">
      <el-row :gutter="40">
        <el-col :md="17">
          <div class="article">
            <div class="titleText">
              <div class="block"></div>
              <h3>凝心聚力，共赢未来 | 广州高新医药技校隆重签约云职场平台</h3>
            </div>
            <p class="time">2015-06-18</p>
            <p>
              9月18日上午11:30 在高新教育集团中坚楼会议室
              <br />
              广州市高新医药与食品技工学校
              <br />
              广州红树林教育科技有限公司（以下简称“我司”）
              <br />
              双方隆重出席云职场平台合作签约仪式
            </p>
            <img src="@/assets/newsDetail/detail-1.png" alt="" />
            <p>
              出席此次签约仪式的领导和嘉宾有：广州市高新医药与食品技工学校简松波执行董事、
              林日旺副校长，广州红树林教育科技有限公司莫志鸿总经理、汤丰华行政总监、刘艳红运营主管。
              莫志鸿总经理全面介绍云职场平台 “云职场平台”是新型互联网招聘模式
              全国高校人才聚集，形成了巨大的“共享人才”平台 云职场平台 | 社会价值
              做有温度的就业招聘平台 建立职场诚信体系 为企业和个人提供评判依据
              打造安全可靠的良性就业生态系统 学校层面 以终为始促进学生的教育管理
              建立属于学校自己的实习就业平台 实现
            </p>
            <img src="@/assets/newsDetail/detail-1.png" alt="" />
            <p>
              出席此次签约仪式的领导和嘉宾有：广州市高新医药与食品技工学校简松波执行董事、
              林日旺副校长，广州红树林教育科技有限公司莫志鸿总经理、汤丰华行政总监、刘艳红运营主管。
              莫志鸿总经理全面介绍云职场平台 “云职场平台”是新型互联网招聘模式
              全国高校人才聚集，形成了巨大的“共享人才”平台 云职场平台 | 社会价值
              做有温度的就业招聘平台 建立职场诚信体系 为企业和个人提供评判依据
              打造安全可靠的良性就业生态系统 学校层面 以终为始促进学生的教育管理
              建立属于学校自己的实习就业平台 实现
            </p>
            <img src="@/assets/newsDetail/detail-1.png" alt="" />
            <p>
              出席此次签约仪式的领导和嘉宾有：广州市高新医药与食品技工学校简松波执行董事、
              林日旺副校长，广州红树林教育科技有限公司莫志鸿总经理、汤丰华行政总监、刘艳红运营主管。
              莫志鸿总经理全面介绍云职场平台 “云职场平台”是新型互联网招聘模式
              全国高校人才聚集，形成了巨大的“共享人才”平台 云职场平台 | 社会价值
              做有温度的就业招聘平台 建立职场诚信体系 为企业和个人提供评判依据
              打造安全可靠的良性就业生态系统 学校层面 以终为始促进学生的教育管理
              建立属于学校自己的实习就业平台 实现
            </p>
            <img src="@/assets/newsDetail/detail-2.png" alt="" />
            <p>凝心聚力，共赢未来！</p>
          </div>
        </el-col>
        <el-col :md="7">
          <div class="recommended">
            <div class="titleText">
              <div class="block"></div>
              <h3>推荐阅读</h3>
            </div>
            <ul class="list">
              <li>
                <h4>大中院校应届毕业生求职攻略</h4>
                <div>2021-05-10</div>
              </li>
              <li>
                <h4>大中院校应届毕业生求职攻略</h4>
                <div>2021-05-10</div>
              </li>
              <li>
                <h4>大中院校应届毕业生求职攻略</h4>
                <div>2021-05-10</div>
              </li>
              <li>
                <h4>大中院校应届毕业生求职攻略</h4>
                <div>2021-05-10</div>
              </li>
              <li>
                <h4>大中院校应届毕业生求职攻略</h4>
                <div>2021-05-10</div>
              </li>
              <li>
                <h4>大中院校应届毕业生求职攻略</h4>
                <div>2021-05-10</div>
              </li>
              <li>
                <h4>大中院校应届毕业生求职攻略</h4>
                <div>2021-05-10</div>
              </li>
            </ul>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
// 标题背景组件
import TitleBox from "@/components/common/TitleBox.vue";
// 顶部导航栏
import TopNav from "@/components/common/TopNav.vue";
// 底部组件
import Footer from "@/components/common/Footer.vue";

export default {
  name: "NewsDetail",
  props: {},
  data() {
    return {};
  },
  components: {
    TitleBox,
    TopNav,
    Footer,
  },
  methods: {},
  mounted() {},
};
</script>
<style lang="less" scoped>
.NewsDetail {
  background-color: #f9f9f9;
  .content {
    width: 1200px;
    margin: 0 auto;
    padding: 50px;
    overflow: hidden;

    .el-row {
      .el-col {
        margin-bottom: 20px;
        .article {
          background-color: #fff;
          padding: 30px;

          .titleText {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            .block {
              width: 5px;
              height: 20px;
              background-color: #6095ff;
              margin-right: 10px;
            }

            h3 {
            }
          }
          .time {
            padding: 10px 0 0 !important;
          }
          p {
            padding: 20px 0;
            font-size: 14px;
            color: #707070;
            line-height: 30px;
          }

          img {
            padding: 20px 0;
          }
        }
        .recommended {
          background-color: #fff;
          padding: 30px;
          .titleText {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            .block {
              width: 5px;
              height: 20px;
              background-color: #6095ff;
              margin-right: 10px;
            }

            h3 {
            }
          }
          .list {
            margin-top: 30px;
            li {
              margin-bottom: 20px;
              h4 {
                font-size: 14px;
                padding-bottom: 5px;
              }

              div {
                font-size: 12px;
                color: #707070;
              }
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
  .content {
    width: 1024px !important;
  }
}
@media screen and (max-width: 1024px) {
  .content {
    width: 100% !important;
    padding: 0 !important;
  }
}
</style>
