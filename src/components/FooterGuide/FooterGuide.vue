<template>
      <div class="guides-container">
        <span class="guide-container" :class="{on: '/msite'=== $route.path}" @click="goTo('/msite')">
          <span class="guide-wrap ">
              <i class="iconfont icon-attract "></i>
          </span>
          <span class="guide-text">外卖</span>
        </span>

        <span class="guide-container" :class="{on: '/search'=== $route.path}" @click="goTo('/search')">
          <span class="guide-wrap">
              <i class="iconfont icon-chaxun"></i>
          </span>
          <span class="guide-text">查询</span>
        </span>

        <span class="guide-container" :class="{on: '/order'=== $route.path}" @click="goTo('/order')">
          <span class="guide-wrap">
              <i class="iconfont icon-s-order"></i>
          </span>
          <span class="guide-text">订单</span>
        </span>

        <span class="guide-container" :class="{on: '/profile'=== $route.path}" @click="goTo('/profile')">
          <span class="guide-wrap">
              <i class="iconfont icon-user-solid"></i>
          </span>
          <span class="guide-text">我的</span>
        </span>
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
    .guides-container
      color: #ccc;
      display: flex;
      position: fixed;
      width: 100%;
      bottom: 0;
      flex-direction: row;
      justify-content: space-around;
      border-top: 1px solid #ccc;
      background-color: white;
      .guide-container
        display: flex;
        flex-direction: column;
        text-align: center;
        .guide-wrap
            .icon-attract, .icon-chaxun, .icon-s-order, .icon-user-solid
              font-size: 28px;
              color: inherit;
        .guide-text
          font-size: 10px;
    .on
      color: #41b883 ;

</style>
