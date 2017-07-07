<template>
  <div class="dianshi">
      <img src="../assets/images/dianshi_02.jpg">
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
    .dianshi img{width:100%}
</style>
