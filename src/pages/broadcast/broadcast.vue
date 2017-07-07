<template>
  <div class="broadcast">
    <Myheader>
      <p slot="text">广播</p>
      <img src="../../assets/images/ic_status_search_user.png" slot="search">
      <img src="../../assets/images/ic_chat_green.png" slot="home">
    </Myheader>
    <div class="back">
        <img src="../../assets/images/ic_status_anonymous_header.png" slot="home">
        <h6>发现有趣的人</h6>
        <p>关注他们,发现更大的世界</p>
    </div>
    <div id="user">
        <User txt="爱指向处于虚弱中的他人。" name="胡桑" num="4787">
          <img src="../../assets/images/touxiang_03.jpg" slot="touxiang">
          <img src="../../assets/images/kokotong_07.jpg" slot="blog" class="blog">
        </User>
        <User txt="五月" name="Amber Chen" num="2895">
          <img src="../../assets/images/jayi_10.jpg" slot="touxiang">
          <img src="../../assets/images/kokotong_07.jpg" slot="blog" class="blog">
        </User>
    </div>
    <div id="choose" >
        <Choose txt="选好了,进入广播">
            <div>
                <div ><img src="../../assets/images/ic_retweet_normal.png" slot="touxiang"></div>
                <a>换一批</a>
            </div>
        </choose>
    </div>
    <div style="clear:both;height:0.7rem"></div>
  </div>
</template>
<script>
  import Myheader from "../../components/HeaderWrap";
  import User from "../../components/user";
  import Choose from "../../components/choose";
  export default {
    name: 'Broadcast',
    components:{Myheader,User,Choose},
    beforeRouteEnter (to, from, next) {
      next(function (a) {
        a.$root.ok=false;
      })
    },
  }
</script>
<style>
    .back {padding-top:0.2rem;}
    .back img{width:1rem;float:left;margin-left:15%;margin-right:0.2rem}
    .back h6{font-size:0.16rem;padding-top:4%}
    .back p{font-size:0.14rem;color:#838383;line-height:0.3rem}
    .broadcast{background:#f7f7f7}
    #user{margin:0.5rem 0.1rem;font-size:0.16rem}
    #choose{position:fixed;bottom:0.5rem;width:100%}
</style>
