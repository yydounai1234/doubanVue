<template>
  <transition name="fade">
  <div class="user" v-if="bol">
      <div>
          <div class="userTop">
              <slot name="touxiang"></slot>
              <h6 v-text="name"></h6></br>
              <span>{{num}}人关注</span>
          </div>
          <span class="guanzhu" v-if="guanzhu" @click="guan">关注</span>
          <span class="yiguanzhu" v-else>已关注</span>
      </div>
      <p v-text="txt"></p>
      <slot name="blog"></slot>
      <div  class="zan">
          <img src="../assets/images/ic_liked.png">
          <span>12</span>
      </div>
      <div  class="shuo">
          <img src="../assets/images/ic_feedback_comment.png">
          <span>1</span>
      </div>
      <span class="X" @click="fn">X</span>
  </div>
  </transition>
</template>
<script>

  export default {
    name: 'user',
    props:["txt","name","num"],
    data(){
        return {
            bol:true,
            guanzhu:true
        }
    },
    methods:{
        fn(){
            this.bol=false
        },
        guan(){
            this.guanzhu=false
        }
    }
  }
</script>
<style>
    .user{border-radius:0.2rem;background:white;box-shadow: 0px 0px 0.04rem #888888;padding:0.3rem;position:relative;margin-bottom:0.2rem}
    .user .X{position:absolute;top:0.05rem;right:4%;font-size:0.14rem}
    .user .userTop{font-size:0.16rem}
    .user .userTop img{width:0.8rem;float:left;margin-right:0.2rem}
    .user .userTop h6{display:inline-block;line-height:0.3rem;font-size:0.15rem}
    .user .userTop span{font-size:0.14rem;line-height:0.16rem}
    .user .guanzhu{padding:0.05rem 0.2rem;background:#42c055;border-radius:0.05rem;color:white;font-size:0.12rem;position:absolute;top:0.3rem;right:5%}
    .user .yiguanzhu{padding:0.05rem 0.2rem;background:grey;border-radius:0.05rem;color:white;font-size:0.12rem;position:absolute;top:0.3rem;right:5%}
    .user p{line-height:0.4rem;margin-top:0.2rem;color:#676767;font-size:0.14rem}
    .user .blog{width:2rem;margin-left:1rem}
    .user .zan{margin-left:1rem;float:left;position:relative;}
    .user .zan span{display:inline-block;height:0.3rem;position:absolute;top:0.1rem;right:-0.18rem;font-size:0.1rem;color:#e5e5e5}
    .user .shuo span{display:inline-block;height:0.3rem;position:absolute;top:0.06rem;right:-0.18rem;font-size:0.1rem;color:#e5e5e5}
    .user .zan img{width:0.18rem;margin-top:0.02rem}
    .user .shuo{margin-left:0.4rem;margin-top:0.04rem;float:left;position:relative;}
    .user .shuo img{width:0.15rem}
    .fade-leave-active {
      animation: bounce-out 1s;
    }
    @keyframes bounce-out {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.5);
      }
      100% {
        transform: scale(0);
      }
    }
</style>
