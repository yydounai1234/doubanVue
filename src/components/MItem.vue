<template>
  <div class="m_item">
    <span><slot name="img"></slot></span>
    <p>{{txt}}</p>
  </div>
</template>

<script>
  export default{
    props: ["url", 'txt']
  }
</script>

<style>
.m_item{
  padding: 0.15rem 0;
  float: left;
  width: 25%;
  height: 0.7rem;
  font-size:0.12rem

}
.m_item img{
  width: 0.36rem;
}
.m_item p{
  font-size: 0.12rem;
  line-height: 0.26rem;
  height: 0.26rem;
}

</style>
