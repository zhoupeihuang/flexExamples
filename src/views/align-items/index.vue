<template>
  <div>
    <h3>5、align-items属性</h3>
    <p>align-items属性定义项目在交叉轴上如何对齐。</p>
    <p>
      .box {
      align-items: flex-start | flex-end | center | baseline | stretch;
      }

    </p>
    <p>flex-start：交叉轴的起点对齐。</p>
    <div class="box box-11">
      <div class="box-item">1</div>
      <div class="box-item item-tall">2</div>
      <div class="box-item">3</div>
      <div class="box-item item-tall">4</div>
    </div>
    <p>flex-end：交叉轴的终点对齐。</p>
    <div class="box box-12">
      <div class="box-item">1</div>
      <div class="box-item item-tall">2</div>
      <div class="box-item">3</div>
      <div class="box-item item-tall">4</div>
    </div>
    <p>center：交叉轴的中点对齐。</p>
    <div class="box box-13">
      <div class="box-item">1</div>
      <div class="box-item item-tall">2</div>
      <div class="box-item">3</div>
      <div class="box-item item-tall">4</div>
    </div>
    <p>baseline: 项目的第一行文字的基线对齐。</p>
    <div class="box box-14 line">
      <div class="box-item">1</div>
      <div class="box-item item-tall">2</div>
      <div class="box-item">3</div>
      <div class="box-item item-tall">4</div>
    </div>
    <p>stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。</p>
    <div class="box box-15">
      <div class="box-item">1</div>
      <div class="box-item item-tall">2</div>
      <div class="box-item">3</div>
      <div class="box-item item-tall">4</div>
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


.box-11 {
  align-items: flex-start;
}
.box-12 {
  align-items: flex-end;
}
.box-13 {
  align-items: center;
}
.box-14 {
  align-items: baseline;
}
.box-14 .box-item {
  font-size: 88px;
  line-height: initial;
  text-decoration: underline;
}
.box-14 .item-tall {
  font-size: 122px;
  line-height: initial;
}
.box-15 {
  align-items: stretch;
}
.box-15 .box-item {
  height: auto;
}
 
</style>
