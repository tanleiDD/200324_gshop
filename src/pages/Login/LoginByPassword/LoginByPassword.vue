<template>
  <form class="login_form" action="#">
    <div class="phone_num_text_wrap login_wrap">
      <input class="phone_num_text login_input" placeholder="手机号/邮箱/用户名"/>
    </div>
    <div class="password_text_wrap login_wrap">
      <input class="password_text login_input" type="password" placeholder="密码"/>
    </div>
    <div class="captcha_text_wrap login_wrap">
      <input class="captcha_text login_input" placeholder="验证码"/>
      <img class="captcha_img" src="./images/captcha.png">
    </div>
    <input class="login_submit" type="submit" value="登录">
  </form>
</template>

<script type="text/ecmascript-6">
    export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .login_form
    font-size: 12px;
    text-align: center;
    .login_wrap
      width: 250px;
      margin: 0 auto;
      position: relative;
      .login_input
        margin: 6px 0;
        border-radius: 2px;
        border: 1px solid #ddd;
        width: 240px;
        height: 26px;
        padding: 5px;
        color: #333;
      .captcha_img
        position: absolute;
        width: 100px;
        height: 36px;
        right: 0;
        top: 7px;


    .login_submit
      border: none;
      border-radius: 5px;
      width: 254px;
      height: 36px;
      background-color: #42c56c;
      color: white;
      font-size: 16px;
      margin: 15px;


</style>
