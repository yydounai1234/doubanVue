<template>
  <ul>
    <li class="g_item clear" v-for="(item,index) in arr">
      <img src="../assets/images/ic_user_info_gender.png" alt="" class="tou">
      <div class="text">
        <h4>{{item.name}}</h4>
        <p>{{item.txt}}</p>
        <span>{{item.total}}人</span>
        <img src="../assets/images/ic_group_check_anonymous.png" alt="" class="checkbox" v-show="item.bol" @click="fn(index)">
        <img src="../assets/images/ic_pay_success.png" alt="" class="checkbox" v-show="!item.bol" @click="fn(index)">
      </div>
    </li>
  </ul>
</template>

<script>
  export default{
      methods:{
        fn:function (i) {
          this.arr[i].bol=!this.arr[i].bol;
          if(this.arr[i].bol){
            this.arr[i].total--;
          }else{
            this.arr[i].total++;
          }
        }
      },
    data: function () {
      return {
        arr: [
          {
            "url": "", "name": "日剧fans", "txt": "请自由讨论你所热爱的与日剧相关的话题。以上。",
            "total": 306537,
            "bol":true
          },
          {
            "url": "", "name": "日剧fans", "txt": "请自由讨论你所热爱的与日剧相关的话题。以上。",
            "total": 306537,
            "bol":true
          },
          {
            "url": "", "name": "日剧fans", "txt": "请自由讨论你所热爱的与日剧相关的话题。以上。",
            "total": 306537,
            "bol":true
          },
          {
            "url": "", "name": "日剧fans", "txt": "请自由讨论你所热爱的与日剧相关的话题。以上。",
            "total": 306537,
            "bol":true
          },
          {
            "url": "", "name": "日剧fans", "txt": "请自由讨论你所热爱的与日剧相关的话题。以上。",
            "total": 306537,
            "bol":true
          },
          {
            "url": "", "name": "日剧fans", "txt": "请自由讨论你所热爱的与日剧相关的话题。以上。",
            "total": 306537,
            "bol":true
          }
        ]
      }
    }
  }
</script>

<style>
  .g_item {
    position: relative;
    margin-bottom: 0.2rem;
    font-size:0.12rem
  }

  .g_item .tou {

    margin-right: 0.1rem;
    width: 0.5rem;
    height: 0.5rem;
  }

  .g_item .text {

    width: 100%;

  }

  .g_item h4 {
    line-height: 0.3rem;
    height: 0.3rem;
    font-size: 0.14rem;
  }

  .g_item p {
    line-height: 0.22rem;
    font-size: 0.12rem;
    color: darkgray;
  }

  .g_item .checkbox {
    right: 0.05rem;
    top: 0.15rem;
    position: absolute;
    width: 0.2rem;
    height: 0.2rem;
  }

  .g_item span {
    right: 0.4rem;
    top: 0.15rem;
    position: absolute;
    line-height: 0.2rem;
    font-size: 0.12rem;
    color: #ccc;
  }
</style>
