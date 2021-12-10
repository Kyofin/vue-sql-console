<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <el-button
      type="primary"
      v-on:click="btnClick"
    >这个按钮</el-button>
    <el-button
      type="primary"
      v-on:click="getNetData2"
    >request按钮</el-button>

  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    msg: String,
  },
  methods: {
    btnClick: function () {
      console.log("robin:btnClicked");
    },
    getNetData2: function () {
      var url =
        "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1";
      this.axios
        .get(url)
        .then((response) => {
          console.log("请求到的数据666:" + response);
        })
        .catch((error) => {
          console.log("robin:error" + error);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
