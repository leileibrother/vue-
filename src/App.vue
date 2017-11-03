<template>
  <div id="app">
    <!-- 渲染的地方 -->
      <router-view></router-view>
  </div>
</template>

<script>
</script>

<style>
html,body, ul, ol, li, p, h1, h2, h3, h4, h5, h6, form, fieldset, table, td, img, div, tr {margin:0; padding:0;}
ul,li{list-style:none;}
html,body{width:100%;height:100%;}
.fl{float:left;}
.fr{float:right;}
.clearfix:after{
    content:'';
    display:block;
    clear: both;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
