<template>

  <div>
    <Myheader>
      <p slot="text">我的</p>
      <img src="../../assets/images/ic_settings.png" slot="search">
    </Myheader>
    <div class="m_main">
      <MTop></MTop>
      <div class="main_con">
        <MTip></MTip>
        <ul class="m_app clear">
          <li>
            <MItem url="" txt="喜欢">
              <img src="../../assets/images/ic_my_likes.png" alt="" slot="img">
            </MItem>
            <MItem url="" txt="日记">
              <img src="../../assets/images/ic_my_note.png" alt="" slot="img">
            </MItem>
            <MItem url="" txt="相册">
              <img src="../../assets/images/ic_my_album.png" alt="" slot="img">
            </MItem>
            <MItem url="" txt="我的广播">
              <img src="../../assets/images/ic_my_status.png" alt="" slot="img">
            </MItem>
          </li>
          <li>
            <MItem url="" txt="电影•电视">
              <img src="../../assets/images/ic_my_movies_tvs.png" alt="" slot="img">
            </MItem>
            <MItem url="" txt="读书">
              <img src="../../assets/images/ic_my_books.png" alt="" slot="img">
            </MItem>
            <MItem url="" txt="音乐">
              <img src="../../assets/images/ic_my_music.png" alt="" slot="img">
            </MItem>
            <MItem url="" txt="同城活动">
              <img src="../../assets/images/ic_my_events.png" alt="" slot="img">
            </MItem>
          </li>
          <li>
            <MItem url="" txt="豆列">
              <img src="../../assets/images/ic_my_doulist.png" alt="" slot="img">
            </MItem>
            <MItem url="" txt="订单">
              <img src="../../assets/images/ic_my_orders.png" alt="" slot="img">
            </MItem>
            <MItem url="" txt="钱包">
              <img src="../../assets/images/ic_my_wallet.png" alt="" slot="img">
            </MItem>
          </li>
        </ul>
      </div>
    </div>
    <div style="clear:both;height:0.45rem"></div>
  </div>
</template>

<script>
  import Myheader from "../../components/HeaderWrap";
  import MTop from '../../components/MTop';
  import MTip from '../../components/MTip';
  import MItem from '../../components/MItem';
  export default {
    name: 'Mine',
    components:{Myheader,MTop,MTip,MItem,},
    beforeRouteEnter (to, from, next) {
      next(function (a) {
        a.$root.ok=false;
      })
    },

  }
</script>
<style>
  .m_main {
    height: 5.54rem;
    width: 100%;
    margin-top: 0.49rem;
    background-color: #f7f7f7;
  }

  .m_app {
    background-color: #fff;
    list-style: none;
    text-align: center;

  }
  .m_app li{
    border-bottom: 0.01rem solid #eee;
    height: 1.01rem;
    width: 100%;
  }

</style>
