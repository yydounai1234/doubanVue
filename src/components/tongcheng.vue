<template>
  <div class="tongcheng">
      <img src="../assets/images/tongcheng_02.jpg">
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
    .tongcheng img{width:100%}
</style>
