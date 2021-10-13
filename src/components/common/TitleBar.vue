<template>
  <div class="titleBar">
    <h2>{{ $props.title }}</h2>
    <div class="lineBox"></div>
  </div>
</template>

<script>
export default {
  name: "TitleBar",
  props: {
    title: String,
  },
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {
    
  },
};
</script>
<style lang="less" scoped>
.titleBar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    margin-bottom: 16px;
  }
  .lineBox {
    width: 50px;
    height: 2px;
    background-color: #707070;
  }
}
</style>
