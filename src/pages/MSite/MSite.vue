<template>
    <div>
      <HeaderTop title="昌平区北七家宏福科技园(337省道北)">
        <i class="iconfont icon-hy_search" slot="left"></i>
        <router-link to="/login" slot="right">
          <span class="header-login">登录/注册</span>
        </router-link>


      </HeaderTop>
      <div class="msite-categories swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <span class="category-item">
              <img class="category-img" src="./images/美食.png"/>
              <span class="category-title">美食</span>
            </span>
              <span class="category-item">
              <img class="category-img" src="./images/商超便利.png"/>
              <span class="category-title">商超便利</span>
            </span>
              <span class="category-item">
              <img class="category-img" src="./images/跑腿代购.png"/>
              <span class="category-title">跑腿代购</span>
            </span>
              <span class="category-item">
              <img class="category-img" src="./images/甜品饮品.png"/>
              <span class="category-title">甜品饮品</span>
            </span>
              <span class="category-item">
              <img class="category-img" src="./images/晚餐.png"/>
              <span class="category-title">晚餐</span>
            </span>
              <span class="category-item">
              <img class="category-img" src="./images/汉堡披萨.png"/>
              <span class="category-title">汉堡披萨</span>
            </span>
              <span class="category-item">
              <img class="category-img" src="./images/快餐便当.png"/>
              <span class="category-title">快餐便当</span>
            </span>
              <span class="category-item">
              <img class="category-img" src="./images/买菜.png"/>
              <span class="category-title">买菜</span>
            </span>
          </div>
          <div class="swiper-slide">
            <span class="category-item">
              <img class="category-img" src="./images/福利中心.png"/>
              <span class="category-title">福利中心</span>
            </span>
              <span class="category-item">
              <img class="category-img" src="./images/星选好店.png"/>
              <span class="category-title">星选好店</span>
            </span>
              <span class="category-item">
              <img class="category-img" src="./images/大牌惠吃.png"/>
              <span class="category-title">大牌惠吃</span>
            </span>
              <span class="category-item">
              <img class="category-img" src="./images/签到赢饭钱.png"/>
              <span class="category-title">签到赢饭钱</span>
            </span>
              <span class="category-item">
              <img class="category-img" src="./images/送药上门.png"/>
              <span class="category-title">送药上门</span>
            </span>
              <span class="category-item">
              <img class="category-img" src="./images/全部分类.png"/>
              <span class="category-title">全部分类</span>
            </span>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <header class="stores-header">
        <i class="iconfont icon-category"></i>
        <span class="header-title">附近商家</span>
      </header>
      <ShopList></ShopList>

    </div>
</template>

<script type="text/ecmascript-6">
    import Swiper from 'swiper'
    import 'swiper/css/swiper.min.css'

    import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
    import ShopList from '../../components/ShopList/ShopList.vue'


    export default {
      mounted() {
        new Swiper('.swiper-container', {
          loop: true,
          pagination: {
            el: '.swiper-pagination'
          }
        })
      },
      components:{
        HeaderTop,
        ShopList
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .msite-categories
    margin: 10px 0;
    .swiper-slide
      display: grid;
      grid-template-columns: repeat(4, 25%)

      color: #333333;
      justify-items: center;
      .category-item
        display: inline-flex;
        flex-direction: column;
        text-align: center;
        width: 50px;
        .category-img
          width: 40px;
          height: 40px;
        .category-title
          font-size: 12px;
          transform: translateX(-5px);
  .stores-header
    color: #aaa;
    border-top: 1px solid #ddd;
    margin-bottom: 10px;
    .icon-category
      font-size: 14px;
    .header-title
      font-size: 13px;


</style>
