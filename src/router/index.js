import Vue from "vue";
import VueRouter from "vue-router";

// 首页路由
const Index = () => import("../views/Index.vue");
// 404路由
const NotFound = () => import("../views/404NotFound.vue");
// 业务中心
const Business = () => import("../views/Business.vue");
// 合作院校
const Cooperation = () => import("../views/Cooperation.vue");
// 合作院校详情
const CooperationDetail = () => import("../views/CooperationDetail.vue");
// 教育体系
const Education = () => import("../views/Education.vue");
// 新闻资讯
const Information = () => import("../views/Information.vue");
// 新闻详情
const NewsDetail = () => import("../views/NewsDetail.vue");
// 关于我们
const AboutUs = () => import("../views/AboutUs.vue");

Vue.use(VueRouter);

//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push;
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

const routes = [
  {
    path: "/",
    component: Index,
  },
  {
    path: "/index",
    name: "Index",
    // 路由懒加载
    component: Index,
  },
  // 业务中心
  {
    path: "/business/:order",
    name: "Business",
    // 路由懒加载
    component: Business,
  },
  // 合作院校
  {
    path: "/cooperation/:order",
    name: "Cooperation",
    // 路由懒加载
    component: Cooperation,
  },
  // 详情页面
  {
    path: "/cooperationDetail",
    name: "CooperationDetail",
    // 路由懒加载
    component: CooperationDetail,
  },
  // 教育体系
  {
    path: "/education/:order",
    name: "Education",
    // 路由懒加载
    component: Education,
  },
  // 公司资讯
  {
    path: "/information/:order",
    name: "Information",
    // 路由懒加载
    component: Information,
  },
  // 新闻详情
  {
    path: "/newsDetail",
    name: "NewsDetail",
    // 路由懒加载
    component: NewsDetail,
  },
  // 关于我们
  {
    path: "/aboutUs/:order",
    name: "AboutUs",
    // 路由懒加载
    component: AboutUs,
  },
  {
    path: "*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
