<template>
  <div>
    <h2>容器的属性</h2>
    <h3>1、flex-direction属性</h3>
    <p>flex-direction属性决定主轴的方向（即项目的排列方向）。</p>
    <p>
      .box {
      flex-direction: row | row-reverse | column | column-reverse;
      }
    </p>
    <div class="box box-1">
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
.box-1 {
  flex-direction: row;
}
.box {
  background-color: white;
  margin: 0 0 55px;
  display: flex;
}
 
</style>
