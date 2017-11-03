<template>
  <div class="hello">
    <div>
      <h1>{{msg}}</h1>
    </div>
    <router-link to="/login">请先登录</router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
