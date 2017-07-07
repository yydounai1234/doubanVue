<template>
    <div class="m_top">
      <div class="title">个人主页</div>
      <div class="me"><img src="../assets/images/ic_user_info_birthday.png" alt=""></div>
      <h3>畅斯基<img src="../assets/images/ic_mine_female.png"></h3>
      <p>ID:158746672</p>
      <div class="follow"><span>关注 0</span><span>被关注 0</span></div>
    </div>

</template>

<script>
  export default{

  }
</script>

<style>
  .m_top{
    padding: 0.2rem 0.15rem 0.1rem ;
    position: relative;
    width: 92%;
    height: 0.95rem;
    background-color: #f79e4c;
    color: #fff1dd;
    font-size:0.12rem
  }
  .m_top .me{
    width: 0.64rem;
    height: 0.64rem;
    position: absolute;
    top: 0.2rem;
    left: 0.2rem;
    border-radius: 0.32rem;
  }
  .m_top .me img{
    width: 100%;
    height: 100%;
  }
  .m_top h3{
    font-weight: normal;
    margin-left:0.85rem;
    line-height:0.26rem;
    font-size: 0.16rem;
    height:0.26rem;
  }
  .m_top h3 img{
    margin-left: 0.05rem;
    width: 0.12rem;
  }
  .m_top p{
    font-size: 0.12rem;
    line-height: 0.18rem;
    height: 0.18rem;
    margin-left:0.85rem;
    margin-bottom: 0.1rem;
    margin-right: 0.15rem;

  }
  .m_top .title{
    background: url("../assets/images/ic_seti_arrow_right_white.png")no-repeat right center;
    position: absolute;
    background-size: 0.18rem;
    top: 0.45rem;
    right: 0.15rem;
    font-size: 0.14rem;
    padding-right: 0.25rem;

  }
  .m_top .follow{
    border-top: 0.01rem solid #ffab5c;
    height: 0.5rem;
    margin-left: 0.85rem;
    line-height: 0.5rem;
  }
  .m_top .follow span{
    margin-right: 0.2rem;
    font-size: 0.12rem;
  }
</style>
