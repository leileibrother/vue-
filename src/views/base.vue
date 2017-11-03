<template>
  <div>
    <headers></headers>
    <div class="container clearfix">
      <menus></menus>
      <!-- 页面渲染的地方 -->
      <router-view></router-view>
    </div>
    <footers></footers>
  </div>
</template>
<script>
  import headers from 'components/common/Header.vue'
  import footers from 'components/common/Footer.vue'
  import menus from 'components/common/Menu.vue'
  export default {
    components: {
      headers, footers,menus
    }
  }
</script>
<style>
.container{width:1200px;margin:0 auto;padding-top:75px;}
.home{text-align: center;width: 980px;margin-left: 20px;}
</style>