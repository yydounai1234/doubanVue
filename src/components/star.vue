<template>
  <div class="star">
      <ul>
      <li>
                <img src="../assets/images/rating_star_xsmall_on.png" v-show="value>1000">
                <img src="../assets/images/rating_star_xsmall_half.png" v-show="value>500&&value<=1000">
                <img src="../assets/images/rating_star_xsmall_off.png" v-show="value>=0&&value<=500">
            </li>
            <li>
                      <img src="../assets/images/rating_star_xsmall_on.png" v-show="value>2000">
                      <img src="../assets/images/rating_star_xsmall_half.png" v-show="value>1500&&value<=2000">
                      <img src="../assets/images/rating_star_xsmall_off.png" v-show="value>=1000&&value<=1500">
                  </li>
                   <li>
                            <img src="../assets/images/rating_star_xsmall_on.png" v-show="value>3000">
                            <img src="../assets/images/rating_star_xsmall_half.png" v-show="value>2500&&value<=3000">
                            <img src="../assets/images/rating_star_xsmall_off.png" v-show="value>2000&&value<=2500">
                        </li>
                         <li>
                                  <img src="../assets/images/rating_star_xsmall_on.png" v-show="value>4000">
                                  <img src="../assets/images/rating_star_xsmall_half.png" v-show="value>3500&&value<=4000">
                                  <img src="../assets/images/rating_star_xsmall_off.png" v-show="value>3000&&value<=3500">
                              </li>
      <li>

          <img src="../assets/images/rating_star_xsmall_on.png" v-show="value>=5000">
          <img src="../assets/images/rating_star_xsmall_half.png" v-show="value>4500&&value<5000">
          <img src="../assets/images/rating_star_xsmall_off.png" v-show="value>4000&&value<=4500">
      </li>




          <span>{{mark}}</span>
      </ul>
  </div>
</template>
<script>

  export default {
    name: 'Star',
    props:{
        value:{default:0},
    },
    computed:{
      mark(){
          var x=this.value/500;
          if(x>=10)x=10;
          x=x.toFixed(1);
         return x;
      }
    },
    data(){
        return {
            arr:[500,1000,1500,2000,2500,3000,3500,4000,4500,5000,5500,6000,6500,7000,7500]
        }
    }
  }
</script>

<style>
    .star ul{border:none;height:0.25rem}
    .star img{width:100%}
    .star li{width:13%;height:0.25rem;line-height:0.25rem;font-size:0.14rem}

    .star span{font-size:0.12rem;line-height:0.2rem;margin-left:0.05rem;color:#999;position:absolute}

</style>
