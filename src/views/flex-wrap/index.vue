<template>
  <div>
    <h3>2、flex-wrap属性</h3>
    <p>默认情况下，项目都排在一条线（又称"轴线"）上。flex-wrap属性定义，如果一条轴线排不下，如何换行。</p>
    <p>
      .box{
      flex-wrap: nowrap | wrap | wrap-reverse;
      }
    </p>
    <p>nowrap（默认）：不换行。</p>
    <div class="box box-2">
      <div class="box-item">1</div>
      <div class="box-item">2</div>
      <div class="box-item">3</div>
      <div class="box-item">4</div>
      <div class="box-item">5</div>
      <div class="box-item">6</div>
      <div class="box-item">7</div>
    </div>
    <p>wrap：换行，第一行在上方。</p>
    <div class="box box-3">
      <div class="box-item">1</div>
      <div class="box-item">2</div>
      <div class="box-item">3</div>
      <div class="box-item">4</div>
      <div class="box-item">5</div>
      <div class="box-item">6</div>
      <div class="box-item">7</div>
    </div>
    <p>wrap-reverse：换行，第一行在下方。</p>
    <div class="box box-4">
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
.box-2 {
	flex-direction: row;
	flex-wrap: nowrap;
}

.box-3 {
	flex-direction: row;
	flex-wrap: wrap;
}

.box-4 {
	flex-direction: row;
	flex-wrap: wrap-reverse;
}
.box {
  background-color: white;
  margin: 0 0 55px;
  display: flex;
}
 
</style>
