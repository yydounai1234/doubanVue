<template>
  <div class="tuwen">
      <div><slot></slot></div>
      <h4 v-text="txt"></h4>
  </div>
</template>

<script>

    export default {
      name: 'tuwen',
      props:{txt:{default:"请输入文字"}}

    }
</script>

<style>
    .tuwen{background:white;margin-top:0.2rem}
    .tuwen div{padding-bottom:0.1rem}
    .tuwen img{width:100%}
    .tuwen h4{padding:0.1rem;color:#3f3f3f;font-size:0.14rem;margin-bottom:0.2rem}
</style>
