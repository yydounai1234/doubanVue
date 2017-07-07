<template>
  <div class="audio">
    <Myheader>
        <p slot="text">书影音</p>
        <img src="../../assets/images/ic_actionbar_search_icon.png" slot="search">
        <img src="../../assets/images/ic_chat_green.png" slot="home">
    </Myheader>
    <ul>
        <li v-for="(item,index) in arr" @click="fn(index)">
            <router-link :to=item.name >{{item.txt}}</router-link>
        </li>

    </ul>
    <transition name="jiji">
      <keep-alive>
          <router-view></router-view>
      </keep-alive>
    </transition>
    <Loading :load-options={loading:ok}></Loading>
    <div style="clear:both;height:0.05rem"></div>
  </div>
</template>

<script>
  import Myheader from "../../components/HeaderWrap";
  import Loading from '../../components/Loading';
  export default {
    name: 'Audio',
    data(){
        return {
            ok:"",
            sel:0,
            wait:false,
            arr:[{name:"/audio/dianying?id=1.1",txt:"电影"},{name:"/audio/dushu?id=1.2",txt:"读书"},{name:"/audio/dianshi?id=1.3",txt:"电视"},{name:"/audio/tongcheng?id=1.4",txt:"同城"},{name:"/audio/yinyue?id=1.5",txt:"音乐"}]
        }
    },
    components:{Myheader,Loading},
    created(){
        this.$router.push("/audio/dianying?id=1.1")
    },
    beforeRouteEnter (to, from, next) {
      next(function (a) {
        a.$root.ok=false;
      })
    },
    methods:{
        fn(num){
            this.sel=num
        },
    }
  }
</script>
<style>
    .audio ul{height:0.43rem;border-bottom:0.01rem solid #e5e5e5}
    .audio li{float:left;width:20%;text-align:center;height:0.44rem;line-height:0.4rem}
    .audio a{text-decoration:none;color:#888888;display:block;font-size:0.14rem}
    .router-link-active{border-bottom:0.03rem solid green}
    .jiji-enter-active,.jiji-leave-active {
      transition: all .1s;
    }
    .jiji-leave-active, .jiji-enter {
      opacity: 0;
    }
</style>
