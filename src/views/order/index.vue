<template>
  <div>
    <h3>1、order属性</h3>
    <p>order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。</p>
    <p>
      .item {
      order: &lt;integer&gt;;
      }
    </p>
    <div class="box box-22">
      <div class="box-item">1</div>
      <div class="box-item">2</div>
      <div class="box-item">3</div>
      <div class="box-item order">4 <div>(order:-1)</div>
      </div>
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
.box-22 .order {
  order: -1;
}
</style>
