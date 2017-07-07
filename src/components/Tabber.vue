<template>
  <div class="tabber">
    <Wrap :select="sel">
        <Item txt="首页" id="home" @koko="fn" mark=0>
          <img src="../assets/images/ic_tab_home_active.png" slot="activeImg">
          <img src="../assets/images/ic_tab_home_normal.png" slot="normalImg">
        </Item>
        <Item txt="书影音" id="audio" @koko="fn" mark=1>
          <img src="../assets/images/ic_tab_subject_active.png" slot="activeImg">
          <img src="../assets/images/ic_tab_subject_normal.png" slot="normalImg">
        </Item>
        <Item txt="广播" id="broadcast" @koko="fn" mark=2>
          <img src="../assets/images/ic_tab_status_active.png" slot="activeImg">
          <img src="../assets/images/ic_tab_status_normal.png" slot="normalImg">
        </Item>
        <Item txt="小组" id="group" @koko="fn" mark=3>
          <img src="../assets/images/ic_tab_group_active.png" slot="activeImg">
          <img src="../assets/images/ic_tab_group_normal.png" slot="normalImg">
        </Item>
        <Item txt="我的" id="mine" @koko="fn" mark=4>
          <img src="../assets/images/ic_tab_profile_female_active.png" slot="activeImg">
          <img src="../assets/images/ic_tab_profile_female_normal.png" slot="normalImg">
        </Item>
    </Wrap>
  </div>
</template>

<script>
    import Wrap from "./Wrap";
    import Item from "./Item";
    export default {
      name: 'Tabber',
      components:{
        Wrap,
        Item
      },
      data(){
          return {
              sel:"home",
          }
      },
      methods:{
          fn(value){
              this.sel=value
          }
      }

    }
</script>

