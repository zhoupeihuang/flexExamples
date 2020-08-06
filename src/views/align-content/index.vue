<template>
  <div>
    <h3>6、align-content属性</h3>
    <p>align-content属性定义了多根轴线（多行）的对齐方式。如果项目只有一根轴线，该属性不起作用。</p>
    <p>
      .box {
      align-content: flex-start | flex-end | center | space-between | space-around | stretch;
      }

    </p>
    <p>flex-start：交叉轴的起点对齐。</p>
    <div class="box box-tall box-16">
      <div class="box-item">1</div>
      <div class="box-item">2</div>
      <div class="box-item">3</div>
      <div class="box-item">4</div>
      <div class="box-item">5</div>
      <div class="box-item">6</div>
      <div class="box-item">7</div>
      <div class="box-item">8</div>
      <div class="box-item">9</div>
    </div>
    <p>flex-end：与交叉轴的终点对齐。</p>
    <div class="box box-tall box-17">
      <div class="box-item">1</div>
      <div class="box-item">2</div>
      <div class="box-item">3</div>
      <div class="box-item">4</div>
      <div class="box-item">5</div>
      <div class="box-item">6</div>
      <div class="box-item">7</div>
      <div class="box-item">8</div>
      <div class="box-item">9</div>
    </div>
    <p>center：与交叉轴的中点对齐。</p>
    <div class="box box-tall box-18">
      <div class="box-item">1</div>
      <div class="box-item">2</div>
      <div class="box-item">3</div>
      <div class="box-item">4</div>
      <div class="box-item">5</div>
      <div class="box-item">6</div>
      <div class="box-item">7</div>
      <div class="box-item">8</div>
      <div class="box-item">9</div>
    </div>
    <p>space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。</p>
    <div class="box box-tall box-19">
      <div class="box-item">1</div>
      <div class="box-item">2</div>
      <div class="box-item">3</div>
      <div class="box-item">4</div>
      <div class="box-item">5</div>
      <div class="box-item">6</div>
      <div class="box-item">7</div>
      <div class="box-item">8</div>
      <div class="box-item">9</div>
    </div>
    <p>space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。</p>
    <div class="box box-tall box-20">
      <div class="box-item">1</div>
      <div class="box-item">2</div>
      <div class="box-item">3</div>
      <div class="box-item">4</div>
      <div class="box-item">5</div>
      <div class="box-item">6</div>
      <div class="box-item">7</div>
      <div class="box-item">8</div>
      <div class="box-item">9</div>
    </div>
    <p>stretch（默认值）：轴线占满整个交叉轴。</p>
    <div class="box box-tall box-21">
      <div class="box-item">1</div>
      <div class="box-item">2</div>
      <div class="box-item">3</div>
      <div class="box-item">4</div>
      <div class="box-item">5</div>
      <div class="box-item">6</div>
      <div class="box-item">7</div>
      <div class="box-item">8</div>
      <div class="box-item">9</div>
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
.box-16 {
  flex-wrap: wrap;
  align-content: flex-start;
}
.box-17 {
  flex-wrap: wrap;
  align-content: flex-end;
}
.box-18 {
  flex-wrap: wrap;
  align-content: center;
}
.box-19 {
  flex-wrap: wrap;
  align-content: space-between;
}
.box-20 {
  flex-wrap: wrap;
  align-content: space-around;
}
.box-21 {
  flex-wrap: wrap;
  align-content: stretch;
}
.box-21 .box-item {
  height: auto;
}

.box {
  background-color: white;
  margin: 0 0 55px;
  display: flex;
}

</style>
