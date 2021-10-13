<template>
  <div class="swiper">
    <!-- 轮播图模块 -->
    <el-carousel :height="carouselHeight">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <div
          class="bg"
          :style="{ 'background-image': `url(${item.src})` }"
        ></div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "Swiper",
  props: {},
  data() {
    return {
      carouselHeight: "520px",
      // 轮播图数据
      bannerList: [
        {
          id: 1,
          src: require("@/assets/index/banner-3.jpg"),
        },
        {
          id: 2,
          src: require("@/assets/index/banner-2.jpg"),
        },
        {
          id: 3,
          src: require("@/assets/index/banner-1.jpg"),
        },
      ],
    };
  },
  components: {},
  methods: {},
  mounted() {
    window.onresize = () => {
      if (document.body.clientWidth < 1024) {
        this.carouselHeight = "300px";
      } else {
        this.carouselHeight = "500px";
      }
    };
    window.onresize();
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
</style>
