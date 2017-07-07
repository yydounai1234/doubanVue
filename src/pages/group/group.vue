<template>
  <div class="group">
    <Myheader>
      <p slot="text">小组</p>
      <img src="../../assets/images/ic_actionbar_search_icon.png" slot="search">
      <img src="../../assets/images/ic_chat_green.png" slot="home">
    </Myheader>
    <div class="g_main">
      <div class="recommend">
        <div class="bg">
          <div class="title">
            <h4>418975个小组等你来玩</h4>
            <span>立即选择加入吧！</span>
          </div>
          <p>根据你的兴趣推荐</p>
        </div>
        <div class="tag"><span>精选推荐</span></div>
      </div>
      <div class="g_main_con">
        <div class="group_con">
          <h5>影视</h5>
          <GItem></GItem>
        </div>
        <div style="clear:both;height:1rem"></div>
      </div>
    </div>
    <div id="choose2">
      <choose txt="选好了,去玩小组">
        <div>
          <div><img src="../../assets/images/ic_retweet_normal.png" slot="touxiang"></div>

          <a>换一批</a>
        </div>
      </choose>
    </div>

  </div>
</template>

<script>
  import Myheader from "../../components/HeaderWrap";
  import Choose from "../../components/choose";
  import GItem from '../../components/GItem';
  export default {
    name: 'Group',
    components:{Myheader,Choose,GItem},
    beforeRouteEnter (to, from, next) {
      next(function (a) {
        a.$root.ok=false;
      })
    },
  }
</script>
<style>
     .g_main {
       height: 5.54rem;
       width: 100%;
       margin-top:0.49rem;
       font-size:0.12rem
     }

     .g_main_con {
       padding: 0.15rem 0;
       width: 94%;
       margin: 0 auto;
     }

     .recommend {
       width: 100%;
       height: 2.47rem;
     }
     .recommend .bg{
       background: url("../../assets/images/ic_group_banner.png") no-repeat left top;
       background-size: 100%;
     }

     .recommend .title {
       padding: 0.5rem 0 0.36rem;
       text-align: center;
       font-size: 0.18rem;

     }

     .recommend h4 {
       font-size: 0.2rem;
       font-weight: normal;
       line-height: 0.22rem;
       height: 0.22rem;
     }

     .recommend .title span {
       color: #999;
       line-height: 0.2rem;
       font-size: 0.14rem;
     }

     .recommend p {
       width: 92%;
       margin: 0 0.15rem;
       color: gray;
       line-height: 0.46rem;
       font-size: 0.12rem;
       height: 0.46rem;
     }

     .recommend .tag {
       margin: 0 0.15rem;
       position: relative;
       border-radius: 0.06rem;
       width: 92%;
       height: 0.74rem;
       background: url("../../assets/images/ic_rec_group_banner_1.png") no-repeat left top;
       background-size: 100%;
     }

     .recommend .tag span {
       position: absolute;
       bottom: 0.12rem;
       left: 0.1rem;
       color: #fff;
     }

     .group_con {
       position: relative;
       border-top: 0.01rem solid #ccc;
       padding-top: 0.25rem;
     }

     .group_con h5 {
       position: absolute;
       top: -0.18rem;
       left: 42%;
       padding: 0.05rem 0.2rem;
       background-color: #fff;
       font-size: 0.16rem;
       font-weight: normal;
     }
    #choose2{position:fixed;bottom:0.53rem;width:100%}
</style>
