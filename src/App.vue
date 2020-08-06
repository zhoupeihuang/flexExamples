<template>
  <div id="app">
    <div id="nav">
      <span
        class="navBar"
        v-for="item in routesItem"
        :key="item.path"
      >
        <span v-if="item.child">
          <span
            v-for="item in item.child"
            :key="item.path"
          ></span>
          <router-link :to="item.path">{{item.name}}</router-link> |
        </span>
        <span else>
          <router-link :to="item.path">{{item.meta.title}}</router-link> |
        </span>
      </span>
    </div>
    <router-view />
  </div>
</template>
<script>

export default {
  data() {
    return {
      msg: "",
      routesItem: []
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.getRouter()
    })
  },
  methods: {
    getRouter() {
      this.routesItem = this.$router.options.routes
    }
  },
}
</script>
<style lang="less">
#app div {
  width: 600px;
  margin: 0 auto;
}
#app div.markdown {
  width: 900px;
  margin: 0 auto;
}
.item-tall {
  height: 400px !important;
  line-height: 400px !important;
}
.box-tall {
  height: 800px;
}
.box-item div {
  font-size: 14px;
  position: relative;
  top: -72px;
}
h1,
h2,
h3,
h4 {
  color: #f94a4a;
  // border-bottom: solid 1px #f94a4a;
  padding: 5px 0 !important;
}
p {
  font-size: 15px !important;
  background: #f94a4a;
  padding: 10px !important;
  border-radius: 5px;
  color: white;
  line-height: 2 !important;
}
.box {
  border: 1px red solid;
  background-color: white;
  margin: 0 0 55px;
  display: flex;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.box-item {
  width: 100px;
  height: 100px;
  line-height: 100px;
  vertical-align: middle;
  margin: 5px;
  background-color: #ffd200;
  font-size: 50px;
  color: white;
  text-align: center;
}
pre {
  font-size: 19px;
  padding: 0;
  margin: 0;
  background: #f0f0f0;
  line-height: 20px;
  background: url(./assets/pre-bg.gif) repeat-y left top;
  width: 800px;
  overflow: auto;
  overflow-y: hidden;
  padding-left: 15px;
  text-align: left;
}
ul li {
  font-size: 19px;
  padding: 0;
  margin: 0;
  background: #f0f0f0;
  line-height: 20px; /* 行距 */
  background: url(./assets/pre-bg.gif) repeat-y left top;
  width: 800px;
  overflow: auto; /* 超出宽度出现滑动条 */
  overflow-y: hidden; /* 作用是隐藏IE的右侧滑动条 */
  padding-left: 15px;
  text-align: left;
}
blockquote,
ul {
  margin-block-start: 0;
  margin-inline-start: 0;
  padding-inline-start: 0;
}
</style>