<template>
  <div>
    <h3>3、flex-shrink</h3>
    <p>flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。</p>
    <p>如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。<br>负值对该属性无效。</p>
    <p>
      .item {
      flex-shrink: &lt;number&gt;; /* default 1 */
      }
    </p>
    <div class="box box-24">
      <div class="box-item shrink">1 <div>flex-shrink: 0</div>
      </div>
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
.box-24 .box-item {
  width: 400px;
}
.box-24 .shrink {
  flex-shrink: 0;
}
</style>
