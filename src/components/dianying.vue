<template>
  <div class="dianying">
      <Filmtotal title="影院热映">
       <Myswiper koko="koko123" :pagination=false :loop=false :freeMode=true :lazyLoading=true :slidesPerView=3>
            <div class="swiper-slide" slot="swiped">
                <Filmlist txt="神奇女侠">
                    <div slot="imgs" class="img"><img data-src="http://orhmfwhtt.bkt.clouddn.com/baba_03.jpg" class="swiper-lazy"></div>
                    <div class="swiper-lazy-preloader" slot="imgs"></div>
                    <Star slot="star" value=4500></Star>
                </Filmlist>
            </div>
            <div class="swiper-slide" slot="swiped">
                <Filmlist txt="神奇女侠">
                    <div slot="imgs" class="img"><img data-src="http://orhmfwhtt.bkt.clouddn.com/baba_03.jpg" class="swiper-lazy"></div>
                    <div class="swiper-lazy-preloader" slot="imgs"></div>
                    <Star slot="star" value=2900></Star>
                </Filmlist>
            </div>
            <div class="swiper-slide" slot="swiped">
                <Filmlist txt="神奇女侠">
                    <div slot="imgs" class="img"><img data-src="http://orhmfwhtt.bkt.clouddn.com/baba_03.jpg" class="swiper-lazy"></div>
                    <div class="swiper-lazy-preloader" slot="imgs"></div>
                    <Star slot="star" value=8000></Star>
                </Filmlist>
            </div>
            <div class="swiper-slide" slot="swiped">
                <Filmlist txt="神奇女侠">
                    <div slot="imgs" class="img"><img data-src="http://orhmfwhtt.bkt.clouddn.com/baba_03.jpg" class="swiper-lazy"></div>
                    <div class="swiper-lazy-preloader" slot="imgs"></div>
                    <Star slot="star" value=8000></Star>
                </Filmlist>

            </div>
         <div class="swiper-slide" slot="swiped">
           <Filmlist txt="神奇女侠">
             <div slot="imgs" class="img"><img data-src="http://orhmfwhtt.bkt.clouddn.com/baba_03.jpg" class="swiper-lazy"></div>
             <div class="swiper-lazy-preloader" slot="imgs"></div>
             <Star slot="star" value=8000></Star>
           </Filmlist>
         </div>
         <div class="swiper-slide" slot="swiped">
           <Filmlist txt="神奇女侠">
             <div slot="imgs" class="img"><img data-src="http://orhmfwhtt.bkt.clouddn.com/baba_03.jpg" class="swiper-lazy"></div>
             <div class="swiper-lazy-preloader" slot="imgs"></div>
             <Star slot="star" value=8000></Star>
           </Filmlist>
         </div>
         <div class="swiper-slide" slot="swiped">
           <Filmlist txt="神奇女侠">
             <div slot="imgs" class="img"><img data-src="http://orhmfwhtt.bkt.clouddn.com/baba_03.jpg" class="swiper-lazy"></div>
             <div class="swiper-lazy-preloader" slot="imgs"></div>
             <Star slot="star" value=8000></Star>
           </Filmlist>
         </div>
        </Myswiper>
      </Filmtotal>
      <Tuwen txt="演技太尴尬？欧阳娜娜自嘲是&quot;靠实力失败&quot;第一人">
          <img src="../assets/images/banner/03.jpg">
      </Tuwen>
      <Tuwen txt="演技太尴尬？欧阳娜娜自嘲是&quot;靠实力失败&quot;第一人">
          <img src="../assets/images/banner/03.jpg">
      </Tuwen>
      <Tuwen txt="演技太尴尬？欧阳娜娜自嘲是&quot;靠实力失败&quot;第一人">
                <img src="../assets/images/nana_02.jpg">
      </Tuwen>
      <Tuwen txt="演技太尴尬？欧阳娜娜自嘲是&quot;靠实力失败&quot;第一人">
          <img src="../assets/images/banner/03.jpg">
      </Tuwen>
      <Tuwen txt="演技太尴尬？欧阳娜娜自嘲是&quot;靠实力失败&quot;第一人">
                <img src="../assets/images/nana_02.jpg">
      </Tuwen>
      <Tuwen txt="演技太尴尬？欧阳娜娜自嘲是&quot;靠实力失败&quot;第一人">
          <img src="../assets/images/banner/03.jpg">
      </Tuwen>
      <Tuwen txt="演技太尴尬？欧阳娜娜自嘲是&quot;靠实力失败&quot;第一人">
                <img src="../assets/images/nana_02.jpg">
      </Tuwen>
      <Tuwen txt="演技太尴尬？欧阳娜娜自嘲是&quot;靠实力失败&quot;第一人">
          <img src="../assets/images/banner/03.jpg">
      </Tuwen>
      <div style="clear:both;height:40px"></div>
  </div>

</template>
<script>
    import Tuwen from "./tuwen";
    import Filmlist from "./filmlist";
    import Filmtotal from "./filmtotal";
    import Myswiper from "./swiper";
    import Star from "./star";
    export default {
          name: 'dianying',
          components:{
            Tuwen,Filmtotal,Filmlist,Star,Myswiper
          },
      beforeRouteEnter (to, from, next) {
        next(function (a) {
          a.$root.ok=false;
        })
      }
        }
</script>
<style>
    .dianying{background:#f7f7f7;position:relative;}
</style>
