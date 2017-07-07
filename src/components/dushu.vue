<template>
  <div class="dushu">
      <Filmtotal title="新书速递">
             <Myswiper koko="koko1234" :pagination=false :loop=false :freeMode=true :lazyLoading=true :slidesPerView=3>
                  <div class="swiper-slide" slot="swiped">
                      <Filmlist txt="忠犬八公">
                          <div slot="imgs" class="img"><img data-src="http://orhmfwhtt.bkt.clouddn.com/baba_03.jpg" class="swiper-lazy"></div>
                          <div class="swiper-lazy-preloader" slot="imgs"></div>
                          <Star slot="star" value=4500></Star>
                      </Filmlist>
                  </div>
               <div class="swiper-slide" slot="swiped">
               <Filmlist txt="红十字远征">
                 <div slot="imgs" class="img"><img data-src="http://orhmfwhtt.bkt.clouddn.com/mishi_03.jpg" class="swiper-lazy"></div>
                 <div class="swiper-lazy-preloader" slot="imgs"></div>
                 <Star slot="star" value=3900></Star>
               </Filmlist>
               </div>
               <div class="swiper-slide" slot="swiped">
                 <Filmlist txt="神奇宝贝">
                   <div slot="imgs" class="img"><img data-src="http://orhmfwhtt.bkt.clouddn.com/mmexport1496370835136_05.jpg" class="swiper-lazy"></div>
                   <div class="swiper-lazy-preloader" slot="imgs"></div>
                   <Star slot="star" value=5000></Star>
                 </Filmlist>
               </div>

                  <div class="swiper-slide" slot="swiped">
                      <Filmlist txt="三国演义">
                          <div slot="imgs" class="img"><img data-src="http://orhmfwhtt.bkt.clouddn.com/baba_03.jpg" class="swiper-lazy"></div>
                          <div class="swiper-lazy-preloader" slot="imgs"></div>
                          <Star slot="star" value=3300></Star>
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
            <Filmtotal title="好书推荐">
                   <Myswiper koko="koko12345" :pagination=false :loop=false :freeMode=true :lazyLoading=true :slidesPerView=3>
                     <div class="swiper-slide" slot="swiped">
                       <Filmlist txt="忠犬八公">
                         <div slot="imgs" class="img"><img data-src="http://orhmfwhtt.bkt.clouddn.com/baba_03.jpg" class="swiper-lazy"></div>
                         <div class="swiper-lazy-preloader" slot="imgs"></div>
                         <Star slot="star" value=4500></Star>
                       </Filmlist>
                     </div>
                     <div class="swiper-slide" slot="swiped">
                       <Filmlist txt="红十字远征">
                         <div slot="imgs" class="img"><img data-src="http://orhmfwhtt.bkt.clouddn.com/mishi_03.jpg" class="swiper-lazy"></div>
                         <div class="swiper-lazy-preloader" slot="imgs"></div>
                         <Star slot="star" value=3900></Star>
                       </Filmlist>
                     </div>
                     <div class="swiper-slide" slot="swiped">
                       <Filmlist txt="神奇宝贝">
                         <div slot="imgs" class="img"><img data-src="http://orhmfwhtt.bkt.clouddn.com/mmexport1496370835136_05.jpg" class="swiper-lazy"></div>
                         <div class="swiper-lazy-preloader" slot="imgs"></div>
                         <Star slot="star" value=5000></Star>
                       </Filmlist>
                     </div>
                        <div class="swiper-slide" slot="swiped">
                            <Filmlist txt="中国的说法">
                                <div slot="imgs" class="img"><img data-src="http://orhmfwhtt.bkt.clouddn.com/baba_03.jpg" class="swiper-lazy"></div>
                                <div class="swiper-lazy-preloader" slot="imgs"></div>
                                <Star slot="star" value=4000></Star>
                            </Filmlist>
                        </div>
                        <div class="swiper-slide" slot="swiped">
                            <Filmlist txt="中华小当家">
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
                  <div style="clear:both;height:45px"></div>
  </div>
</template>
<script>
    import Filmlist from "./filmlist";
    import Filmtotal from "./filmtotal";
    import Myswiper from "./swiper";
    import Star from "./star";
    export default {
          name: 'Dushu',
          components:{
            Filmtotal,Filmlist,Star,Myswiper
          },
      beforeRouteEnter (to, from, next) {
        next(function (a) {
          console.log(123);
          a.$root.ok=false;
        })
      }
        }
</script>
<style>
    .dushu img{width:100%}

</style>
