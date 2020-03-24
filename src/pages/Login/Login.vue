<template>
    <div>
      <header class="login_header">
        <div class="login_back" >
          <i class="iconfont icon-arrow-left" @click="$router.back()"></i>
        </div>
        <div class="login_header_title">
          硅谷外卖
        </div>
      </header>
      <div class="login_toggle_bar">
        <span class="login_by_message" @click="goTo('/login/loginbymessage')" :class="{login_bar_on: $route.path === '/login/loginbymessage'}">
          短信登录
        </span>
        <span class="login_by_password" @click="goTo('/login/loginbypassword')" :class="{login_bar_on: $route.path === '/login/loginbypassword'}">
          密码登录
        </span>
      </div>
      <router-view></router-view>

      <a href="#" class="login_about_us">关于我们</a>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods: {
      goTo(path){
        this.$router.replace(path);
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .login_header
    .login_back
      margin: 5px 0 0 5px;

    .login_header_title
      font-size: 36px;
      font-weight: bold;
      color: #009474;
      text-align: center;
      padding: 40px 0 30px 0;
  .login_toggle_bar
    font-size: 12px;
    font-weight:bold;
    text-align: center;
    margin: 5px;
    .login_by_message
      margin-right: 20px;
    .login_by_password
      margin-left: 20px;
    .login_bar_on
      color: #009474;
      border-bottom: 2px solid #009474;
      padding: 0 0 3px 3px;

  .login_about_us
    text-align: center;
    color: #333;
    font-size: 10px;
    text-decoration: none;
    display: block;





</style>
