<template>
  <div class="choose">
      <slot></slot>
      <span v-text="txt"></span>
  </div>
</template>
<script>

  export default {
    name: 'choose',
    props:["txt"],

  }
</script>
<style>
     .choose{height:0.43rem;padding-top:0.15rem;width:100%;background:white;}
     .choose span{padding:0.05rem 0.1rem;color:white;font-size:0.14rem;float:right;margin-right:0.2rem;background:#dfdfdf;}
     .choose div{float:left;height:0.5rem;font-size:0.1rem}
     .choose div img{width:0.3rem;margin-left:0.4rem}
     .choose div a{line-height:0.34rem;margin-left:0.05rem;color:#a4a4a4;font-size:0.14rem}
</style>
