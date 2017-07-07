<template>
  <div id="app">
    <Tabber></Tabber>
      <transition :name="transitionName">
          <router-view class="child-view"></router-view>
      </transition>

    <Loading :load-options={loading:ok}></Loading>
  </div>
</template>

<script>
import Tabber from "./components/Tabber";
import Loading from './components/Loading';
export default {
  name: 'app',
  data(){
    return {
        transitionName: 'slide-left',
    }
  },
  watch: {
      '$route' (to, from) {
          if((to.query.id-from.query.id)>0){
            this.transitionName = 'slide-left';
          }else{
            this.transitionName = 'slide-right';
          }
      },
  },
  created(){
      this.$router.push("/?id=0");
  },
  components:{
    Tabber,Loading
  },
  computed: {
          key() {
              return this.$route.path.replace(/\//g, '_')
          },
          ok(){
              return this.$root.ok
          }
      }
}
</script>
<style>
  *{margin:0;padding:0}
  ul{list-style:none}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position:relative;
}
.child-view {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: all .5s;
}
.slide-left-enter, .slide-right-leave-active {
  opacity:1;
  transform: translate(100%, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity:0;
  transform: translate(-100%, 0);
}
</style>
