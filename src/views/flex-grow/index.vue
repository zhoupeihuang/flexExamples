<template>
  <div>
    <h3>2、flex-grow属性</h3>
    <p>flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。</p>
    <p>如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。</p>
    <p>
      .item {
      flex-grow: &lt;number&gt;; /* default 0 */
      }
    </p>
    <div class="box box-23">
      <div class="box-item grow">1 <div>flex-grow: 1</div>
      </div>
      <div class="box-item grow grow-2">2 <div>flex-grow: 2</div>
      </div>
      <div class="box-item grow">3 <div>flex-grow: 1</div>
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

.box-23 .box-item{
	flex-grow: 1;
	width: auto;
}
.box-23	.grow-2 {
	flex-grow: 2;
}

</style>
