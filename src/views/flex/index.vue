<template>
  <div>
    <h3>5、flex属性</h3>
    <p>flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。</p>
    <p>该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。</p>
    <p>
      .item {
      flex: none | [ &lt;'flex-grow'&gt; &lt;'flex-shrink'&gt;? || &lt;'flex-basis'&gt; ]
      }
    </p>
    <div class="box box-33">
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
.box-33 .box-item {
  flex: 1 1 auto;
}
</style>
