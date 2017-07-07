<template>
    <div class="swiper-container" :class="koko">
      <div class="swiper-wrapper">
        <slot name="swiped"></slot>
      </div>
      <slot name="pg"></slot>
    </div>
</template>
<script>
  import "../assets/libs/js/swiper.js";
  export default  {
    name: 'Swiper',
    props:{
        koko:{
          default:""
        },
        pagination:{
          default:true
        },
        paginationShow:{
          default:"center"
        },
        effect:{
          default:"slide"
        },
        loop:{
          default:true
        },
        autoplay:{
        },
        direction:{
          default:"horizontal"
        },
        autoplayDisableOnInteraction:{
          default:false
        },
        freeMode:{
            default:false
        },
        lazyLoading:{
            default:false
        },
        slidesPerView:{
          default:1
        }

    },
    mounted(){
        var that=this;
        var bb=new Swiper("."+that.koko, {
          loop:that.loop,
          autoplay:that.autoplay,
          pagination:".swiper-pagination",
          direction:that.direction,
          effect:that.effect,
          autoplayDisableOnInteraction:that.autoplayDisableOnInteraction,
          freeMode:that.freeMode,
          lazyLoading:that.lazyLoading,
          slidesPerView :that.slidesPerView
        })
    }
  }
</script>

<style>
  @import "../assets/libs/css/swiper.css";
    .swiper-container img{width:100%}
    .swiper-pagination-bullet-active{background:white}
</style>
