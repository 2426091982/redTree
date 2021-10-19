<template>
  <div class="titleBox">
    <div class="titleBoxMain">
      <h2>{{ $props.title }}</h2>
      <div class="text">{{ $props.text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TitleBox",
  props: {
    title: String,
    text: String,
  },
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {},
};
</script>
<style lang="less" scoped>
.titleBox {
  height: 150px;
  background: url("~@/assets/cooperationDetail/titleBg.png") no-repeat;
  background-size: cover;
  .titleBoxMain {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    padding: 40px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    h2 {
      font-size: 28px;
      padding-bottom: 20px;
      color: #fff;
    }

    .text {
      font-size: 14px;
      color: #fff;
    }
  }
}
</style>


<style lang="less" scope>
@media screen and (max-width: 1200px) {
  .titleBoxMain {
    width: 1024px !important;
  }
}
@media screen and (max-width: 1024px) {
  .titleBoxMain {
    width: 100% !important;
  }
}
</style>
