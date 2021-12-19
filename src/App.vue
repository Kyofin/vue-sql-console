<template>
  <div id="app">
    <el-container>
      <el-header>
        <i style="background-color: #2e81ff;color: #ffffff;margin-left: 10px;margin-right: 10px;" class="el-icon-share">Logo</i>
        <!--        :class用于样式和变量绑定  -->
        <div class="btn" :class="{'selected':activeMenu==1}" @click="goPlayground">PlayGround</div>
        <div class="btn" :class="{'selected':activeMenu==2}" @click="goToSession">会话管理</div>
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
      return {
        activeMenu:1
      }
    },
    methods: {
      goToSession() {
        this.$router.push({path: "/session"})
        this.activeMenu=2
      },
      goPlayground() {
        this.$router.push({path: "/playground"})
        this.activeMenu=1
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
  body{
    margin:0;
    padding: 0;
    /*占满屏幕100%*/
    height: 100vh;
  }
  #app {
    height: 100vh;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    display: flex;
    /*margin-top: 10px;*/
  }

  .el-header {
    background-color: #031525;
    color: #333;
    text-align: left;
    line-height: 60px;
    height: 60px;
  }


  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    /*声明important，替代el-main原来的padding*/
    padding:0 !important;
    /*line-height: 660px;*/
  }
  .btn{
    /*行内布局*/
    display:inline-flex;
    /*里面的元素水平居中*/
    justify-content: center;
    /*里面的元素垂直居中*/
    align-items: center;
    background-color: #001529;
    color: #9da3ab;
    height: 100%;
    padding: 10px 20px;
    box-sizing: border-box
  }
  .selected{
    background-color: #2e81ff;
    color: #ffffff;
  }



</style>
