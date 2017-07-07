<template>
  <div class="tip">
    <h3>提醒<i></i></h3>
    <p>暂无新提醒</p>
  </div>

</template>

<script>
  export default{}
</script>

<style>
  .tip {
    margin: 0.15rem 0;
    background-color: #fff;
    padding: 0 0.15rem;
    width: 92%;
    font-size:0.12rem
  }

  .tip h3 {
    font-weight: normal;
    height: 0.46rem;
    line-height: 0.46rem;
    border-bottom: 0.01rem solid #eee;
    text-indent: 2.5em;
    font-size: 0.16rem;
    background: url("../assets/images/ic_mine_notification.png") no-repeat left center;
    background-size: 0.28rem;
  }

  .tip p {
    height: 0.46rem;
    line-height: 0.46rem;
    text-align: center;
    font-size: 0.12rem;
    color: #ccc;
  }
</style>
