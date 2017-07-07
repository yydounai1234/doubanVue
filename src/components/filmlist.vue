<template>
  <div class="filmlist">
      <slot name="imgs"></slot>
      <h5 v-text="txt"></h5>
      <slot name="pinglun"></slot>
      <slot name="star" ></slot>
  </div>
</template>
<script>

  export default {
    name: 'Wrap',
    props:["txt"]
  }
</script>

<style>
    .filmlist{float:left;margin-right:0.1rem;width:1.1rem;position:relative}
    .filmlist .img{width:1rem;height:1.4rem}
    .filmlist img{width:100%}
    .filmlist h5{margin:10px 0;font-size:0.12rem}
    .filmlist .swiper-lazy-preloader{top:40%}
</style>
