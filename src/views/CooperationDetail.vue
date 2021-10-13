<template>
  <div class="CooperationDetail">
    <TitleBox title="阳江职业技术学院" text="2020-3-28" />
    <div class="introduce">
      <img
        align="right"
        src="@/assets/cooperationDetail/detail-img.png"
        alt=""
        hspace="5"
        vspace="5"
      />
      <p>
        阳江职业技术学院是经广东省人民政府批准设立，国家教育部备案，阳江市人民政府举办的综合性普通高等学校。我院以“崇德远志，精艺博才”为校训，按照“立足地方，以区域发展需要的专业为主体；培养可持续发展的高技能实操型人才；建设为区域发展做出重要贡献的高等职业院校”的办学定位，办优师范、办强工科，突出优势，凝聚特色，注重实践能力的培养和人文素质的教育。培养人民满意、社会需要、具有持续竞争力的高素质技术技能人才。
      </p>
      <p>
        学院校园占地面积50多万平方米，教学仪器设备总值超亿元，学院总资产4亿多元。现有中文系、外语系、数学系、财经系、机电系、信息工程系、食品与环境工程系、艺术与设计系、旅游管理系、体育系、思政教学部和继续教育部等10系2部，开设专业39个，全日制在校生11094人，教职员工632人，专任教师484人，高级职称116人，双师型教师243
        人。
      </p>
      <p>
        目前，学院共有2个省级重点专业，12个校级重点专业。形成了海洋工程、先进制造技术、蓝色旅游、师范教育等四大特色专业群。我院积极开展产学结合，工学结合，校企合作的人才培养模式，已建立校内实验实训场室118个，校外实习实训基地225个。学院与企业合作建成的先进制造业实训基地，是华南地区最先进的模具生产性实训基地，被评为省
      </p>

      <p>
        学院教学改革、科研创新能力不断提升。学院教学、科研创新能力不断提升，近年获得市厅级以上科研技术奖励3项，省工程技术中心、市重点实验室各立项1个，专利授权46件，省级科研立项40多项，发表核心论文及SCI收录论文20多篇，主编专著、教材50多本。学生多次在国家、省职业技术大赛中获奖。2019年毕业生初次就业率是97.15%。
      </p>
      <p>
        学院是广东省第一批非物质文化遗产研究基地、中华文化传承基地、广东省中小企业培训示范基地、广东省社会科学普及先进示范基地、广东省环境教育基地、广东省中小学知识产权教育试点学校、阳江市人才工作示范点、阳江市青年就业转移培训中心、阳江市教师校长培训中心、阳江市扶贫就业技能培训中心。我院还设立了8个国家级行业职业技能考试站和培训点。
      </p>
    </div>
  </div>
</template>

<script>
// 顶部导航栏
import TopNav from "@/components/common/TopNav.vue";
// 底部组件
import Footer from "@/components/common/Footer.vue";
// 标题背景组件
import TitleBox from "@/components/common/TitleBox.vue";
export default {
  name: "CooperationDetail",
  props: {},
  data() {
    return {};
  },
  components: {
    TopNav,
    Footer,
    TitleBox,
  },
  methods: {},
  mounted() {},
};
</script>
<style lang="less" scoped>
.CooperationDetail {
  .introduce {
    width: 1200px;
    margin: 0 auto;
    padding: 40px;
    img {
      width: 45%;
      margin-left: 30px;
    }

    p {
      padding: 10px 0;
      font-size: 14px;
      color: #707070;
    }
  }
}
</style>

<style lang="less" scope>
@media screen and (max-width: 1200px) {
  .titleBoxMain,
  .introduce {
    width: 1024px !important;
  }
}
@media screen and (max-width: 1024px) {
  .titleBoxMain,
  .introduce {
    width: 100% !important;
  }

  .introduce {
    img {
      width: 300px !important;
      margin-bottom: 20px;
    }
  }
}
</style>
