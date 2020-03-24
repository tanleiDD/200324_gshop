<template>
  <form class="login_form" action="#">
    <div class="phone_num_text_wrap login_wrap">
      <input class="phone_num_text login_input" placeholder="手机号"/>
      <span class="get_captcha">获取验证码</span>
    </div>
    <div class="captcha_text_wrap login_wrap">
      <input class="captcha_text login_input" placeholder="验证码"/>
    </div>

    <div class="login_notify">
      温馨提示：未注册硅谷外卖账号的手机号，登录时将自动注册，
      且代表已同意<span class="login_protocol">《用户服务协议》</span>
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
      position: relative
      .login_input
        margin: 6px 0;
        border-radius: 2px;
        border: 1px solid #ddd;
        width: 240px;
        height: 26px;
        padding: 5px;
        color: #333;

      .get_captcha
        position: absolute;
        right: 8px;
        top: 22px;
        font-size: 12px;
        color: #aaa;


    .login_notify
      font-size: 12px;
      line-height: 14px;
      transform: translateX(4px)
      color: #aaa;
      width: 260px;
      text-align: left;
      margin: 0 auto;
      .login_protocol
        color: #009474;
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
