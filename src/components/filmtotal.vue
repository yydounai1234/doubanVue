<template>
  <div class="filmtotal">
      <div class="title">
          <span>{{title}}</span>
          <span>更多></span>
      </div>
      <slot></slot>
  </div>
</template>
<script>

  export default {
    name: 'filmtotal',
    props:["title"]
  }
</script>

<style>
  .filmtotal .title{height:0.4rem;position:relative}
  .filmtotal .title span:nth-child(1){font-weight:bolder;font-size:0.14rem;position:absolute;left:0;top:1%;}
  .filmtotal .title span:nth-child(2){position:absolute;right:5%;top:1%;font-size:0.14rem;color:#46bd55}
  .filmtotal{height:2.4rem;padding:0.15rem 0 0.14rem 0.15rem;background:white;margin-top:0.1rem}
  .filmtotal span{font-size:0.12rem}
</style>
