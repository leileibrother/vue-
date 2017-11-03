<template>
  <div class="login">
    <div class="commondiv">       
        <span>账号：</span><input type="text" placeholder="请输入手机号" v-model="accouont">
    </div>
    <div class="commondiv">       
        <span>密码：</span><input type="password" placeholder="请输入密码" v-model="password">
    </div>
    <div class="commondiv">       
        <button @click="commit" class="commitBtn">登录</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      accouont: '',
      password: ''
    }
  },
  methods: {
    commit () {
        if(!this.accouont){
            alert('请输入手机号');
            return false;
        } 
        if(!this.password){
            alert('请输入密码');
            return false;
        }
        this.$router.push('index');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login{
    width: 450px;
    margin:0 auto;
    font-size: 16px;
    color:#333;
    padding-top:60px;
}
.commondiv{
    text-align: center;
    margin-top: 30px;
}
.commondiv input{
    width:280px;
    height: 36px;
    border:1px solid #ccc;
    padding:0 10px;
    margin-left: 20px;
    border-radius: 4px;
}
.commitBtn{
    width:78px;
    height: 38px;
    border: 1px solid #6767f7;
    background:#6767f7;
    color: #fff;
    line-height: 36px;
    border-radius: 4px;
    cursor: pointer;
}
</style>