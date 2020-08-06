<template>
  <div>
    <h3>6、align-self属性</h3>
    <p>align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。</p>
    <p>
      .item {
      align-self: auto | flex-start | flex-end | center | baseline | stretch;
      }
    </p>
    <div class="box box-26">
      <div class="box-item">1</div>
      <div class="box-item">2</div>
      <div class="box-item end">3<div>flex-end</div>
      </div>
      <div class="box-item">4</div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props: {

  },
  data() {
    return {

    };
  },
  computed: {

  },
  created() {

  },
  mounted() {

  },
  watch: {

  },
  methods: {

  },
  components: {

  },
};
</script>

<style scoped lang="less">
.box-26 {
  height: 400px;
}
.box-26 .box-item {
  align-self: flex-start;
}
.box-26 .end {
  align-self: flex-end;
}
</style>
