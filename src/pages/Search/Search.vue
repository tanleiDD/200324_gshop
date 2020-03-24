<template>
    <div>
      <HeaderTop title="搜索"></HeaderTop>
      <div class="search-form-wrap">
        <form action="#" class="search-form">
          <input class="search-input" type="text" placeholder="请输入商家或美食名称"/>
          <input class="search-button" type="submit"/>
        </form>
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
  .search-form-wrap
    overflow: hidden;
    margin: 8px;
    .search-input
      float: left;
      border: none;
      background-color: #ddd;
      height: 28px;
      padding-left: 5px;
      width: 80%;
    .search-button
      float: right;
      background-color: #009474;
      border: none;
      height: 28px;
      width: 15%;

      color: white;
      border-radius: 2px;


</style>
