<template>
  <div class="HeaderWrap" :style={background:col}>
    <slot name="input"></slot>
    <slot name="text"></slot>
    <slot name="search"></slot>
    <slot name="home"></slot>
  </div>
</template>
<script>

  export default {
    name: 'HeaderWrap',
    props:{
        txt:{default:"txt"},
        col:{default:"#f7f7f7"},
    }
  }
</script>

<style>
  .HeaderWrap input{border-radius:0.1rem;border:none;height:0.3rem;width:85%;position:absolute;left:2%;top:0.07rem;text-indent:0.3rem}
  .HeaderWrap p{text-align:center;line-height:0.38rem}
  .HeaderWrap img{width:0.25rem;position:absolute}
  .HeaderWrap img:nth-child(2){right:20%;top:25%}
  .HeaderWrap img:last-child{right:5%;top:25%}
  .HeaderWrap{font-size:0.16rem;width:100%;height:0.4rem;border-bottom:0.01rem solid grey;position:relative;top: 0;text-align: center;padding-top:0.04rem}
  .HeaderWrap #InputS{position:absolute;left:4%;top:23%}
  .HeaderWrap #InputD{position:absolute;right:17%;top:23%}
</style>
