<template>
  <div>
    <h3>4、justify-content属性</h3>
    <p>justify-content属性定义了项目在主轴上的对齐方式。</p>
    <p>
      .box {
      justify-content: flex-start | flex-end | center | space-between | space-around;
      }
    </p>
    <p>flex-start（默认值）：左对齐</p>
    <div class="box box-6">
      <div class="box-item">1</div>
      <div class="box-item">2</div>
      <div class="box-item">3</div>
      <div class="box-item">4</div>
    </div>
    <p>flex-end：右对齐</p>
    <div class="box box-7">
      <div class="box-item">1</div>
      <div class="box-item">2</div>
      <div class="box-item">3</div>
      <div class="box-item">4</div>
    </div>
    <p>center： 居中</p>
    <div class="box box-8">
      <div class="box-item">1</div>
      <div class="box-item">2</div>
      <div class="box-item">3</div>
      <div class="box-item">4</div>
    </div>
    <p>space-between：两端对齐，项目之间的间隔都相等。</p>
    <div class="box box-9">
      <div class="box-item">1</div>
      <div class="box-item">2</div>
      <div class="box-item">3</div>
      <div class="box-item">4</div>
    </div>
    <p>space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。</p>
    <div class="box box-10">
      <div class="box-item">1</div>
      <div class="box-item">2</div>
      <div class="box-item">3</div>
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
.box-6 {
  justify-content: flex-start;
}
.box-7 {
  justify-content: flex-end;
}
.box-8 {
  justify-content: center;
}
.box-9 {
  justify-content: space-between;
}
.box-10 {
  justify-content: space-around;
}
.box {
  background-color: white;
  margin: 0 0 55px;
  display: flex;
}
 
</style>
