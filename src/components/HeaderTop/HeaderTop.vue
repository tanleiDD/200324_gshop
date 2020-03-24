<template>
  <header class="header">
    <slot name="left"></slot>
    <span class="header-text">{{title}}</span>
    <slot name="right"></slot>
  </header>
</template>

<script type="text/ecmascript-6">
    export default {
      props: {
        title: String
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #009474;
    height: 36px;
    color: white;
    line-height: 36px;
    .icon-hy_search
      padding-left: 10px;
    .header-text
      margin: 0 auto;
      width: 120px;
      text-align: center;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    .header-login
      font-size: 13px;
      padding-right: 10px;
      text-decoration: none;
      color: white;
  a
    text-decoration: none;



</style>
