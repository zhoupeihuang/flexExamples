<template>
  <div>
    <h3>4、flex-basis属性</h3>
    <p>flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。</p>
    <p>
      .item {
      flex-basis: &lt;length&gt;; | auto; /* default auto */
      }
    </p>
    <div class="box box-25">
      <div class="box-item">1</div>
      <div class="box-item">2</div>
      <div class="box-item">3</div>
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
.box-25 .box-item {
  flex-basis: 100px;
  width: 200px;
}
</style>
