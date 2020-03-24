<template>
    <div>
      <HeaderTop title="我的"></HeaderTop>
      <router-link to="/login" class="profile-login">
        <span class="avatar-wrap">
          <img class="avatar" src="./images/avatar.png"/>
        </span>
          <span class="login-wrap">
          <span class="login">登录/注册</span>
          <span class="bind-phone">暂无绑定手机号</span>
        </span>
          <span class="go-right">
          <i class="iconfont icon-arrow-right"></i>
        </span>
      </router-link>

      <div class="profile-detail">
        <span class="detail-wrap">
          <span class="balance-wrap">
            <span class="balance-num">0.00</span>
            <span class="balance-unit">元</span>
          </span>
          <span class="balance-text">我的余额</span>
        </span>
        <span class="detail-vertical-line"></span>
        <span class="detail-wrap">
          <span class="favor-wrap">
            <span class="favor-num">0</span>
            <span class="favor-unit">个</span>
          </span>
          <span class="favor-text">我的优惠</span>
        </span>
        <span class="detail-vertical-line"></span>
        <span class="detail-wrap">
          <span>
            <span class="scores-num">0</span>
            <span class="scores-unit">分</span>
          </span>
          <span class="scores-text">我的积分</span>
        </span>

      </div>
      <div class="profile-items">
        <div class="profile-item">
          <span class="profile-item-icon">
            <i class="iconfont icon-jibenxinxi"></i>
          </span>
          <span class="profile-item-text">我的订单</span>
          <span class="go-right">
            <i class="iconfont icon-arrow-right"></i>
          </span>
        </div>
        <div class="profile-item">
          <span class="profile-item-icon">
            <i class="iconfont icon-s-shop"></i>
          </span>
          <span class="profile-item-text">积分商场</span>
          <span class="go-right">
            <i class="iconfont icon-arrow-right"></i>
          </span>
        </div>
        <div class="profile-item">
          <span class="profile-item-icon">
            <i class="iconfont icon-eleme"></i>
          </span>
          <span class="profile-item-text">硅谷外卖会员卡</span>
          <span class="go-right">
            <i class="iconfont icon-arrow-right"></i>
          </span>
        </div>
        <div class="profile-item">
          <span class="profile-item-icon">
            <i class="iconfont icon-mendianyingshou"></i>
          </span>
          <span class="profile-item-text">服务中心</span>
          <span class="go-right">
            <i class="iconfont icon-arrow-right"></i>
          </span>
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
  a
    text-decoration: none;
  .profile-login
    position: relative
    display: flex;
    border-top: 3px solid #5bc8b3;
    background-color: #009474;
    height: 80px;
    .avatar-wrap
      display: inline-block;
      margin: 15px 5px 15px 10px;
      .avatar
        display: inline-block;
        width: 50px;
        height: 50px;
        border-radius: 25px;
    .login-wrap
      display: flex;
      flex-direction: column;
      margin: 22px 5px 22px 5px;
      color: white;
      .login
        font-size: 16px;
        line-height:24px;
      .bind-phone
        font-size: 12px;
    .go-right
      line-height: 80px;
      color: white;
      position: absolute;
      right: 15px;
  .profile-detail
    border-bottom: 1px solid #ddd;
    display: flex;
    flex-direction: row;
    justify-content space-around;
    padding: 10px;
    .detail-vertical-line
      display: inline-block;
      width: 1px;
      height: 60px;
      background-color: #ddd;

    .detail-wrap
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      font-size: 14px;
      line-height: 20px;

      color: #666;
      .balance-num
        font-size: 24px;
        font-weight:bold;

        color: #f90;
      .favor-num
        font-size: 24px;
        font-weight:bold;
        color:#fa7a55
      .scores-num
        font-size: 24px;
        font-weight:bold;
        color: #62aa09



  .profile-items
    background: white;
    .profile-item
      padding: 12px;
      border-bottom: 1px solid #ddd;
      font-size: 14px;
      position: relative
      .go-right
        position: absolute
        right: 5px;

</style>
