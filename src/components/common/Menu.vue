<template>
    <div class="menu fl">
        <ul>
            <li><router-link to="/index">主页</router-link></li>
            <li><router-link to="/home/index">个人中心</router-link></li>
            <li><router-link to="/contact/index">联系我们</router-link></li>
        </ul>
    </div>
</template>

<style scoped>
.menu{width:200px;height:100%;background: #ccc;}
.menu ul{padding:10px 0;}
.menu ul li{list-style: none;padding: 10px;color:#333;}
.menu ul li a{cursor:pointer;color:#333;text-decoration: none;display: inline-block;width: 100%;height: 100%;}
.menu ul .router-link-exact-active{color:red;}
</style>