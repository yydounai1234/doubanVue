<template>
  <div>
    <Myheader col="green">
      <div slot="input">
          <input type="text" placeholder="影视 图书 唱片 小组等">
          <img src="../../assets/images/ic_search_gray.png" id="InputS">
          <img src="../../assets/images/ic_scan_gray.png" id="InputD">
      </div>
      <img src="../../assets/images/ic_chat_green.png" slot="home">
    </Myheader>
    <keep-alive>
    <Myswiper koko="koko" autoplay=1000 dian="dian1">
          <div class="swiper-slide" slot="swiped" ><img src="../../assets/images/banner/01.jpg" ></div>
          <div class="swiper-slide" slot="swiped" ><img src="../../assets/images/banner/02.jpg"></div>
          <div class="swiper-slide" slot="swiped" ><img src="../../assets/images/banner/03.jpg"></div>
      <div class="swiper-pagination" slot="pg"></div>
        </Myswiper>
    </keep-alive>
    <div class="hot">热点</div>
    <MyMain v-for="item in arr" :title="item.title" :txt="item.target.desc" :name="item.target.author.name">
        <img v-lazy="item.target.cover_url" slot="img"/>
    </MyMain>

    <MyMain title="我在论文&quot;造假&quot;工厂打工:代写、包发，年产值10亿" txt="只需要三四个小时,就能攒出一篇完全可以骗过查重系统的课程论文" name="作者：土豆公社">
            <img src="../../assets/images/tutu_06.jpg" slot="img"/>
            <span slot="from" class="name">来自栏目：预告片精选</span>
        </MyMain>
        <div style="clear:both;height:0.6rem"></div>
  </div>
</template>
<script>
  import Myheader from "../../components/HeaderWrap";
  import Myswiper from "../../components/swiper";
  import MyMain from "../../components/Main";

  export default {
    name: 'Home',
    components:{Myheader,Myswiper,MyMain},
    beforeRouteEnter (to, from, next) {
      next(function (a) {
        a.$root.ok=false;
      })
    },
    data(){
            return {
                arr:[],
                wait:false
            }
        },
        mounted(){
        var that=this;
        require.ensure("../../data/homeData.js",function (require) {
          var data=require("../../data/homeData.js");
          console.log(data);
          that.arr=data.default.recommend_feeds;
        },"data");
        }
  }
</script>
<style>
    .hot{border-left:0.08rem solid #f38a49;margin-top:0.1rem;padding-left:0.2rem;font-weight:bolder;font-size:0.16rem;color:#dc8e60}
</style>
