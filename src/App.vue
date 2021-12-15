<template>
  <div id="app">
    <el-container>
      <el-header>
        <i class="el-icon-share">Logo</i>
        <el-button @click="goPlayground">PlayGround</el-button>
        <el-button @click="goToSession">会话管理</el-button>
      </el-header>
      <el-main>
        <!-- 路由匹配到的组件将渲染在这里 -->
        <router-view></router-view>
      </el-main>
    </el-container>


  </div>
</template>

<script>
  export default {
    name: "App",
    components: {},
    data() {
      return {}
    },
    methods: {
      goToSession() {
        this.$router.push({path: "/session"})
      },
      goPlayground() {
        this.$router.push({path: "/playground"})
      }
    },
    mounted() {
      console.log('router',this.$router)
      // 默认加载playground组件
      this.$router.push({path: "/playground"})
    }
  };
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 10px;
  }

  .el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: left;
    line-height: 60px;
  }


  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 660px;
  }



</style>
