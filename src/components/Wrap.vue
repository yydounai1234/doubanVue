<template>
  <div class="tabber-wrap">
      <slot></slot>
  </div>
</template>
<script>

  export default {
    name: 'Wrap',
    props:["select"]
  }
</script>

<style>

  .tabber-wrap{width:100%;height:0.56rem;border-top:0.01rem solid grey;background:#eee;position:fixed;bottom:0;text-align: center;padding-top:0.04rem;z-index:1000}
</style>
