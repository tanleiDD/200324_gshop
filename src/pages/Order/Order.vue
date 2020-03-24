<template>
    <div >
      <HeaderTop title="订单列表"></HeaderTop>
      <div class="order-wrap">
        <div class="order-img-wrap">
          <img class="order-img" src="./images/nothing.png"/>
        </div>
        <p class="order-text">登录后查看外卖订单</p>
        <div class="order-login-button-wrap">
          <span class="order-login-button">立即登陆</span>
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
  export default {
    components:{
      HeaderTop
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

  .order-wrap
    positive: relative;
    transform: translateY(50%);

    text-align: center;
    .order-img-wrap
      .order-img
        width: 200px;
        height: 150px;
    .order-text
      line-height: 50px;
      font-size: 14px;
    .order-login-button-wrap
      .order-login-button
        display: inline-block
        width: 80px;
        height: 28px;
        background-color: #009474;
        line-height: 28px;
        color: white;
        font-size: 13px;

</style>
