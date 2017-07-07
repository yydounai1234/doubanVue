<template>
  <div class="yinyue">
      <img src="../assets/images/yinyue_02.jpg">
  </div>
</template>
<script>
  export default {
    beforeRouteEnter (to, from, next) {
      next(function (a) {
        a.$root.ok=false;
      })
    }
  }
</script>
<style>
    .yinyue img{width:100%}
</style>
