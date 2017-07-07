<template>
  <div class="main">
      <div class="main-top">
          <slot name="img"></slot>
          <h3 v-text="title"></h3>
          <p v-text="txt"></p>
      </div>
      <div class="main-bot">
          <small></small>
          <span >作者：{{name}}</span>
          <slot name="from"></slot>
      </div>
  </div>
</template>
<script>

  export default {
    name: 'HeaderWrap',
    props:{
        title:{default:"请输入标题"},
        txt:{default:"请输入内容"},
        name:{default:"请输入作者"}
    }
  }
</script>

<style>
    .main{border-bottom:0.02rem solid #e4e4e4;padding-bottom:0.1rem;padding:5% 5%}
    .main-top h3{margin-bottom:0.1rem;font-size:0.14rem;line-height:0.28rem;margin-right:1.5rem}
    .main-top p{font-size:0.12rem;line-height:0.22rem;color:#999;margin-right:1.2rem}
    .main-top img{float:right;width:1rem;height:1rem}
    .main-bot{margin-top:0.3rem;font-size:0.10rem;color:#d2d2d2;position:relative}
    .main-bot .name{margin-left:25%}
    .main-bot small{border-top:0.01rem solid #d0d0d0;width:0.2rem;background:black;display:block;position:absolute;top:-70%}
</style>
