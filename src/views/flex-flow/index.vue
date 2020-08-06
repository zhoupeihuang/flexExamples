<template>
  <div>
    <h3>3、flex-flow</h3>
    <p>flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。</p>
    <p>
      .box {
      flex-flow: &lt;flex-direction&gt; || &lt;flex-wrap&gt;;
      }
    </p>
    <div class="box box-5">
      <div class="box-item">1</div>
      <div class="box-item">2</div>
      <div class="box-item">3</div>
      <div class="box-item">4</div>
      <div class="box-item">5</div>
      <div class="box-item">6</div>
      <div class="box-item">7</div>
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
.box-5 {
  flex-flow: row wrap;
}
.box {
  background-color: white;
  margin: 0 0 55px;
  display: flex;
}
</style>
